# Esper Virtual Device 
## (Preview Release Version)
<br />
<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>


Virtual devices are a convenient means to target a device without having the available hardware, or when you do not want to risk breaking the actual hardware device. By trading off the lower performance of a virtual device, you gain a very capable and streamlined virtual device that can hugely boost your productivity during development and early testing.

The Esper Android Tools provide a customized Esper Virtual Device (EVD) image based on the x86 platform allowing you to try out Esper Enhanced Android providing features such as Zero-touch enrollment. You can register your EVD serial number or IMEI number using an Esper Device Template of your choice and then re-start the EVD. On boot the EVD will then get enrolled to your Endpoint automatically and you can start accessing the EVD and take actions using the Esper Console or through our APIs, SDK, and CLI.

Inorder to get the Esper Virtual Device, simply follow the instructions -

1. Install & setup [Esper Android Studio Plugin](https://docs.esper.io/home/esperplugin.html#requirements)
2. Please download the AVD from the [AS Tools' menu](https://docs.esper.io/home/esperplugin.html#esper-android-virtual-device)
Once done, you can simply launch the Esper AVD as you'd any other AVD.

When the AVD is launched, it will show up an emulated camera screen, as if to it's ready to scan a QR code. 


Inorder to provision the AVD to your endpoint, you can grab the Serial number from the AVD screen and add it to your template(used for provisioning).

![](./assets/OLD_DASHBOARD/emulator_image1.png)

If you'd rather use ADB to get the serial number, you can also use adb shell getprop ro.serialno  

Please reboot the AVD after that (or hit the "bac button" once). Now your AVD will provision and start talking to the endpoint automatically.


To find out how to add Serial Number or IMEI number to a template for provisioning, refer to this page - 

[Adding IMEI/Serial Number to a Template](https://docs.esper.io/home/devconsole/device-template/imei-provisioning-template/)


