# Esper Emulator

 Virtual devices are powerful when you want to test features and rapidly deploy new things without worrying about breaking your hardware device. For a little bargain on the performance front you get a very capable and streamlined medium that can hugely boost your workflow.

Esper developer platform provides you a customized Emulator images based on x86 platform that allows you to get on board on the esper platform with zero touch. You can register your emulator serial number or IMEI number on to the tempate of your choice to which you want to onboard your device and re-start the simulator. On boot emulator device will get enrolled to your platform automatically and you can start accessing and take actions using the esper cloud dashboard.

## Pre-requisites

Before you start with this guide, make sure you have Android Studio installed.

## Getting started with the Esper emulator

Open Android Studio and open Android Virtual Device Manager (tools > AVD manager). On the AVD manager click the create new virtual device. In the window that opens up choose pixel 3 (or any other phone) without play store.

## Creating the AVD from the command line

We will create our avd from command line so that the sdk tools generate the proper directories and configurations for us. To do this browse to the sdk tools folder (Usually in ~/Library/Android/sdk/tools or C:\Users\\<username\>\AppData\Local\Android\Sdk on Windows).Go to the bin directory. You should see the avdmanager command line executable here. Use the following command to create the esper avd.

```./avdmanager create avd -n esper -k "system-images;android-28;default;x86_64"```

This will create an avd named esper. You can go back one directory and use the emulator command to test this avd.

```./emulator @esper```

Remember to put the @  before the avd name. Currently the avd uses the system images we had asked avdmanager to download.

## Using the esper emulator images instead of factory images

We will now proceed to placing the Esper provided images instead of the images downloaded by Android Studio's AVD manager. This would allow you to test your apps quickly with Esper provided services in a convenient manner.

## Downloading the system images

You can download the [system images from here](https://shoonya-os-builds.s3-us-west-2.amazonaws.com/builds/EsperAVD/42/EsperAVD-42.tar.gz). Once you have downloaded the image unzip it. You need to replace the files over the previous AVD files that were created for you by avdmanager.

## Integrating your system images

Integrating the system images requires a few extra configuration files. We need to keep track of two folders that android studio uses to organise the sdk and configurations.

- sdk folder - This folder stores the android sdk and sdk tools. The sdk tools are command line tools that we would extensively use as it provides better feedback, options and debugging capabilities. The GUI is lacking at many places in this regard. You can find the sdk folder in mac in /Users/\<user-name\>/Library/Android/sdk and in C:\Users\\<user-name\>\AppData\Local\Android\sdk in Windows. You can check android studio preferences > Appearance and Behaviour > System Settings > Android SDK and you can find the sdk location mentioned there.
- .android folder -  This is where the configuration files as well as your .avd folders are stored. To change the AVD behaviour you have to tinker with the files here. You can find this folder in your home directory in windows, linux and mac.
You can either replace the images in the sdk folder > system-images > android-28 > default > x86_64 or create your own folder under the android-28 folder. We will create android-28 > esper > x86_64 and place our system images here. Place the system-qemu.img, vendor-qemu.img, ramdisk.img, userdata.img, encryptionkey.img, kernel-ranchu files here. Rename your system-qemu.img to system.img and vendor-qemu.img to vendor.img. Place your andvancedFeatures.ini, build.prop, Notice.txt and package.xml config files in the folder as well.

You can either replace the images in the sdk folder > system-images > android-28 > default > x86_64 or create your own folder under the android-28 folder. We will create android-28 > esper > x86_64 and place our system images here. Place the system.img, vendor.img, ramdisk.img, userdata.img, encryptionkey.img, kernel-ranchu files here. Place your andvancedFeatures.ini, Notice.txt and build.prop config files in the folder as well.

In your .android folder go to avd > esper.avd. Place the AVD.conf file here.

## Editing the Config.ini

The Config.ini file is responsible for how the emulator behaves. Here is a sample config to get you started.

```text
AvdId=Esper
PlayStore.enabled=false
abi.type=x86_64
avd.ini.encoding=UTF-8
disk.dataPartition.size=800M
fastboot.chosenSnapshotFile=
fastboot.forceChosenSnapshotBoot=no
fastboot.forceColdBoot=no
fastboot.forceFastBoot=yes
hw.accelerometer=yes
hw.arc=false
hw.audioInput=yes
hw.audioOutput=yes
hw.battery=yes
hw.camera.back=virtualscene
hw.camera.front=emulated
hw.cpu.arch=x86_64
hw.cpu.ncore=4
hw.dPad=no
hw.device.hash2=MD5:ae200ad6786ec467cb9067f7b46b0fd1
hw.device.manufacturer=Google
hw.device.name=Nexus 5X
hw.gps=yes
hw.gpu.enabled=yes
hw.gpu.mode=auto
hw.initialOrientation=Portrait
hw.keyboard=yes
hw.lcd.density=420
hw.lcd.height=1920
hw.lcd.width=1080
hw.mainKeys=no
hw.ramSize=1536
hw.sdCard=yes
hw.sensors.orientation=yes
hw.sensors.proximity=yes
hw.trackBall=no
image.sysdir.1=s<please-specify-system-images-directory>
runtime.network.latency=none
runtime.network.speed=full
sdcard.size=512M
showDeviceFrame=yes
skin.dynamic=yes
tag.display=Google APIs
tag.id=google_apis
vm.heapSize=228
```

Make sure in your config.ini image.sysdir.1 is set to point to the correct system image dirtectory in the sdk folder. For my mac at present it is set to image.sysdir.1=system-images/android-28/esper/x86_64/. Make sure you have it correctly set too.

## Testing the AVD

You are mostly done. Now from the command line in your tools directory start the emulator using the command.

```./emulator @esper```
