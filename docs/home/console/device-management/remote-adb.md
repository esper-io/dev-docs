---
title: Secure Remote Adb
lang: en-US
---

# Secure Remote ADB

Developer should be able to debug their devices remotely without even physical association with the device. ADB is android tool that help you to get take actions on the device, get the device or application logs and help you in resolving customer or in-field issues right by sitting remotely in your office.

This document tells you how you can remotely connect to device via secure adb channel. We will be using esper-cli command line tool which internally uses [esperSDK](https://docs.esper.io/home/pythonsdk.html) [APIs](https://api.esper.io/) to provide the secure access between your host machine and device.

Remote access to the device can be done from anywhere in the world using espercli and doesn't have to be in the same network.

## Steps to connect to secure remote adb:

1.  On to Esper Dashboard https://{{ esper_tenant_name }}.esper.cloud, Go to `Devices` tab, then to your device and to `Actions`.

2.  At the bottom of the page, Click `enable adb`.

3.  On to your android device, connect via usb cable and enable adb over tcpip by following command:
    ```sh
    adb tcpip 5555
    ```
4.  Disconnect usb cable from the device. You should be able to connect adb via port 5555 over tcp

5.  Setup [esper-cli](https://docs.esper.io/home/espercli.html) and configure for your environment on to the host machine.
    * Check your espercli version: espercli -v
    ```sh
    #espercli -v
    Esper CLI is Command line tool for the Esper APIs:  0.0.5
    Cement Framework 3.0.2
    Python 3.7.3
    Platform Darwin-18.0.0-x86_64-i386-64bit
    ```
    * Make sure it is >= 0.0.5 to use secure-adb feature.
    * Upgrade to the latest version of espercli using the following command:
    ```sh
    pip install -U espercli
    ```
6.  Copy your device id from esper dashboard information tab or from your device bottom left most. It looks like SNA-SNL-1234.

7.  Use espercli to connect to Device:
    ```sh
    #espercli secureadb connect -d SNA-SNL-1234
     Initiating Remote ADB Session. This may take a few seconds...
     Secure ADB Client
     Please connect ADB client to the following endpoint: 127.0.0.1 : 62945
     If adb-tools is installed, please run the command below:
     adb connect 127.0.0.1:62945
    ```
8.  Now connect your device via port number obtained above on localhost.
    ```sh
    adb connect 127.0.0.1:62945
    ```
9.  You are connected to adb.

::: warning 
Now onwards until device is rebooted, You would be able to connect to the device remotely using espercli. Post reboot you have to do Step 1-8 again
:::
