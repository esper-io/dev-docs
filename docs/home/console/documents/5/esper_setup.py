#!/usr/bin/env python3

import os
import sys
import platform
import urllib.request
import zipfile
import subprocess
import argparse

ROOT_DIR = "esper"
ADB_DIR = ROOT_DIR + "/platform-tools"
ADB_ARCHIVE = ADB_DIR + ".zip"
DPC_FILE = ROOT_DIR + "/dpc.apk"
DPC_HELPER_FILE = ROOT_DIR + "/dpc-helper.apk"
CUSTOMER_APP_DOWNLOAD_LOCATION = ROOT_DIR + "/customer-app.apk"

CONFIG_FILE = ROOT_DIR + "/config.json"
LOG_FILE = ROOT_DIR + "/process.log"
LOG_FILE_HANDLE = None


def log(content: str):
    print(content)
    LOG_FILE_HANDLE.write(content + "\n")


def execute_command(cmd: str) -> str:
    cmd_array = cmd.split(" ")
    result = subprocess.run(cmd_array, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return result.stdout.decode("utf-8")


def download_and_deploy_app(name: str, url: str):
    try:
        log("downloading app: " + name)
        urllib.request.urlretrieve(url, CUSTOMER_APP_DOWNLOAD_LOCATION)
        log("installing app: " + name)
        result = execute_command(adb_bin + " install -r -t " + CUSTOMER_APP_DOWNLOAD_LOCATION)
        if not "Success" in result:
            log("Failed to install app: " + name)
            sys.exit(1)
    except Exception as e:
        error_str = str(e)
        if "HTTP Error 404" in error_str:
            log("App not found")
        else:
            log(error_str)
        sys.exit(1)



def deploy_dpc(release_channel: str):
    if not release_channel:
        release_channel = "master"
    log("Downloading " + release_channel + " DPC")
    try:
        urllib.request.urlretrieve(
            "https://s3.ap-south-1.amazonaws.com/shoonya-dpc/downloads/shoonyadpc-latest-" + release_channel + ".apk",
            DPC_FILE)
        urllib.request.urlretrieve(
            "https://s3.ap-south-1.amazonaws.com/shoonya-dpc/downloads/shoonyadpc-helper-latest-" + release_channel + ".apk",
            DPC_HELPER_FILE)
    except Exception as e:
        error_str = str(e)
        if "HTTP Error 404" in error_str:
            log("Specified release-channel does not exist, please re-check")
        else:
            log(error_str)
        sys.exit(1)

    log("Deploying DPC to connected device")
    result = execute_command(
        adb_bin + " install -r -t " + DPC_HELPER_FILE)
    if not "Success" in result:
        log("Failed to install DPC, please check if one and ONLY one device is connected")
        sys.exit(1)
    result = execute_command(
        adb_bin + " install -r -t " + DPC_FILE)
    if not "Success" in result:
        log("Failed to install DPC, please check if one and ONLY one device is connected")
        sys.exit(1)
    result = execute_command(
        adb_bin + " shell settings put secure install_non_market_apps 1")
    android_version = int(
        execute_command(adb_bin + " shell" + " getprop" + " ro.build.version.sdk"))
    if android_version >= 21:
        log("Setting as device owner")
        result = execute_command(
            adb_bin + " shell dpm set-device-owner io.shoonya.shoonyadpc/com.shoonyaos.shoonyadpc.receivers.AdminReceiver")
        if "Device owner set" in result or "device owner is already set" in result:
            log("Device owner activated")
        else:
            log(
                "Failed to set device owner. Device may already have some accounts, either delete them or factory reset the device and re-run this script")
            sys.exit(1)
    if os.path.exists(CONFIG_FILE):
        log("Pushing provisioning config file")
        execute_command(
            adb_bin + " push " + CONFIG_FILE + " /storage/emulated/0/Android/data/io.shoonya.shoonyadpc/files/config.json")
        execute_command(
            adb_bin + " push " + CONFIG_FILE + " /sdcard/Android/data/io.shoonya.shoonyadpc/files/config.json")
    else:
        log(
            "Warning! Provisioning config file is absent, if needed place it as \'" + CONFIG_FILE + "' and re-run this script")
    log("Launching..")
    execute_command(
        adb_bin + " shell monkey -p io.shoonya.shoonyadpc -c android.intent.category.LAUNCHER 1")
    log("Deployed successfully")
    return


def download_adb():
    log("Downloading ADB")
    try:
        urllib.request.urlretrieve(
            "https://dl.google.com/android/repository/platform-tools-latest-" + platform.system().lower() + ".zip",
            ADB_ARCHIVE)
    except Exception as e:
        log("Failed to download ADB: " + str(e))
        sys.exit(1)
    zip_file = zipfile.ZipFile(ADB_ARCHIVE, "r")
    zip_file.extractall(ROOT_DIR)
    zip_file.close()


supported_platforms = ["Windows", "Linux", "Darwin"]
pf_name = platform.system()
if not os.path.exists(ROOT_DIR):
    os.mkdir(ROOT_DIR)
LOG_FILE_HANDLE = open(LOG_FILE, "w")
if not pf_name in supported_platforms:
    log("Unsupported Platform: " + pf_name)
    log("Please run on any of these platforms: " + str(supported_platforms))
    sys.exit(1)

parser = argparse.ArgumentParser()
parser.add_argument("--customer",
                    help="name of the customer, needed for installing customer specific apps")
parser.add_argument("--release-channel",
                    help="dpc release channel, values can be develop/staging/master")
args = parser.parse_args()

if not os.path.exists(ADB_DIR):
    download_adb()

if platform.system() != "Windows":
    adb_bin = ADB_DIR + "/adb"
    execute_command("chmod +x " + adb_bin)
else:
    adb_bin = ADB_DIR + "/adb.exe"
log("Waiting for device")
execute_command(adb_bin + " wait-for-device")

deploy_dpc(args.release_channel)
