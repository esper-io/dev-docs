# Esper Virtual Device


Virtual devices are a conventient means to target a device without having the available hardware, or when you do not want to risk breaking the actual hardware device. By trading off the lower performance of a virtual device, you gain a very capable and streamlined virtual device that can hugely boost your productivity during development and early testing.

The Esper Android Tools provide a customized Esper Virtual Device (EVD) image based on the x86 platform allowing you to try out Esper Enhanced Android providing features such as Zero-touch enrollment. You can register your EVD serial number or IMEI number using an Esper Device Tempate of your choice and then re-start the EVD. On boot the EVD will then get enrolled to your Endpoint automatically and you can start accessing the EVD and take actions using the Esper Console or through our APIs, SDK, and CLI.

You can create additional EVDs to simulate multiple devices, pairing them with unique apps or app versions, or alternatively adjusting the configuration of each EVD to simluate specific device configurations you are tagetting.

## Requirements

Before you start with this guide, make sure you have Android Studio installed.

## Creating an AVD using Android Studio

The first step is to create an AVD to generate the proper directories and configurations which will be replaced with the EVD files later in the process.

Open Android Studio and open Android Virtual Device Manager (tools > AVD manager). On the Android Virtual Device Manager screen click 'Create Virtual Device'. 

In the window that opens up you first choose a device definition in Select Hardware, any one of them are acceptable (we like to choose Pixel 3). Note we are using this tool to create the needed file structure for the EVD.

Next you need to select a System Image, again you can choose any as the EVD will be installed over your choice later in the process (choose Oreo as an example).

On the Verify Configuration screen, give the AVD an appropriate name - especially important if you are going to create multiple EVDs. Leave the rest of the settings, including Advanced Settings, on the defaults.

## Creating the AVD from the command line

Alternatively you can create the required AVD from the command line.

To do this browse to the sdk tools folder (Usually in ~/Library/Android/sdk/tools or C:\Users\\<username\>\AppData\Local\Android\Sdk on Windows). Go to the bin directory. You should see the avdmanager command line executable here. Use the following command to create the required AVD:

```./avdmanager create avd -n esper -k "system-images;android-28;default;x86_64"```

This will create an avd named esper, replace with your own name as appropriate. Go back one directory and use the emulator command to test this AVD:

```./emulator @esper```

Remember to put the @  before the AVD name. Remember this AVD will use the system images as specified to avdmanager to download. It is not yet an EVD.

## Using the Esper imnage instead of Android factory images

The next step is replacing the the images downloaded by Android Studio's AVD Manager with the Esper provided images. This would allow you to test your apps quickly with Esper provided services in a convenient manner.

## Downloading the Esper system images

You can download the [system images from here](https://shoonya-os-builds.s3-us-west-2.amazonaws.com/builds/EsperAVD/42/EsperAVD-42.tar.gz). Once you have downloaded the image unzip it to your selected folder. In the next step we will replace the AVD files created by avdmanager with the EVD files.

## Integrating your system images


Integrating the EVD system images requires a few extra configuration files. You will work with two folders that Android Studio uses to organise the SDK and configurations.

- sdk folder - This folder stores the Android SDK and SDK tools. The SDK tools are command line tools provide better feedback, options and debugging capabilities. The Android Studio GUI is lacking at many places in this regard. You can find the sdk folder in mac in /Users/\<user-name\>/Library/Android/sdk and in C:\Users\\<user-name\>\AppData\Local\Android\sdk in Windows. Alternatively you can check Android Studio Preferences > Appearance and Behaviour > System Settings > Android SDK where you can find the SDK folder location.
- .android folder -  This is where the configuration files as well as your .avd folders are stored. To change the AVD behaviour you have to modify the files here. You can find this folder in your home directory in Windows, Linux and Mac.

You can either replace the images in the sdk folder > system-images > android-28 > default > x86_64 or create your own folder under the android-28 folder. We will create android-28 > esper > x86_64 and place our system images here. Place the system-qemu.img, vendor-qemu.img, ramdisk.img, userdata.img, encryptionkey.img, kernel-ranchu files here. Rename your system-qemu.img to system.img and vendor-qemu.img to vendor.img. Place your andvancedFeatures.ini, build.prop, Notice.txt and package.xml config files in the folder as well.

You can either replace the images in the sdk folder > system-images > android-28 > default > x86_64 or create your own folder under the android-28 folder. We will create android-28 > esper > x86_64 and place our system images here. Place the system.img, vendor.img, ramdisk.img, userdata.img, encryptionkey.img, kernel-ranchu files here. Place your andvancedFeatures.ini, Notice.txt and build.prop config files in the folder as well.

In your .android folder go to avd > esper.avd. Place the AVD.conf file here.

## Editing the Config.ini

The Config.ini file is responsible for EVD's behavior. Here is a sample config to get you started:

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

Make sure in your config.ini image.sysdir.1 is set to point to the correct system image dirtectory in the sdk folder. For example on a Mac you can set it to image.sysdir.1=system-images/android-28/esper/x86_64/. Make sure you have it correctly set for your system.

## Testing the EVD

You will now have an EVD to target. From the command line in your tools directory start the EVD using the command:


```./emulator @esper```

