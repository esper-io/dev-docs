# Seamless Provisioning OR IMEI Provisioning for Esper Enhanced Android

This method of provisioning can only be used if customer has chosen to get devices from Esper. Esper provides the option to recommend hardware devices which are baked in with Esper optimized Android OS known as Esper Enhanced Android. These devices are the easiest to provision as all information for provisioning is already baked into the OS of the device. All you need to do is boot the device.

## On the Cloud Portal

IMEI provisioning steps if your device is running Esper Enhanced Android-

1.  In the Esper Console create a **Device template** then edit the same template.

2.  Go to **‘Add devices’** to upload the required **IMEI CSV** file or by individual IMEI or Serial Numbers. Update the template.


[Creating a Template with IMEI](../../../device-template/imei-provisioning-template/index.md)

## On the Device

Zero Touch Provisioning:

Ideally you should see true zero touch provisioning on your devices for which the IMEI or serial numbers was uploaded on the template. You should be able to boot the device and watch it get provisioned automatically by Esper according to your **Device template**.

If the customer has known Wi-Fi in the deployment field, it can be baked in the Esper Enhanced Android OS.

If the Wi-Fi SSID cannot be found an option to manually connect to Wi-Fi will appear. Connecting to a network/WiFi will then continue the provisioning process requiring no further input from user end.

[Return to IMEI (or Serial number) based Provisioning](../index.md)
