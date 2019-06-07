# Esper Emulator

Virtual devices are powerful when you want to test features and rapidly deploy new things without worrying about breaking your hardware device. For a little bargain on the performance front you get a very capable and streamlined medium that can hugely boost your workflow. 

Esper developer platform provides you a customized Emulator images based on x86 platform that allows you to get on board on the esper platform with zero touch. You can register your emulator serial number or IMEI number on to the tempate of your choice to which you want to onboard your device and re-start the simulator. On boot emulator device will get enrolled to your platform automatically and you can start accessing and take actions using the esper cloud dashboard.

How to get started with it?

Ensure you have android studio installed and the android SDK in place and also downloaded the esper plugin for android studio.
Open Android Studio and open Android Virtual Device Manager (tools > AVD manager). On the AVD manager click the create new virtual device. In the window that opens up choose pixel 3 (or any other phone) without play store. In the select a system image dialog box, choose the x86 images tab and select the esper system image.  Click next and then finish. Test if the emulated device is working fine from the AVD manager. Close after ensuring everything is working as expected.

Creating the AVD from the command line

We will create our avd from command line so that the sdk tools generate the proper directories and configurations for us. To do this browse to the sdk tools folder (Usually in ~/Library/Android/sdk/tools).Go to the bin directory. You should see the avdmanager command line executable here. Use the following command to create the esper avd.

./avdmanager create avd -n esper -k "system-images;android-28;default;x86_64"

This will create an avd named esper. You can go back one directory and use the emulator command to test this avd.

./emulator @esper

Remember to put the @  before the avd name. Currently the avd uses the system images we had asked avdmanager to download.
