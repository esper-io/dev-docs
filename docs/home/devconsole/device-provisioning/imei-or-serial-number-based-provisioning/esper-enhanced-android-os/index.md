[Introduction](../../../index.md) / [Provision Device](../../index.md) / [IMEI Provisioning](../index.md) / Esper Enhanced Android

# IMEI Provisioning - Esper Enhanced Android

## On the Cloud Portal

IMEI provisioning steps if your device is running Esper Enhanced Android-

1. In the Esper Console create a **Device template** then edit the same template.

2. Go to **‘Add devices’** to upload the required **IMEI csv** file or by individual IMEI or Serial Numbers. 
Update the template.

[Creating a Template with IMEI](../../../device-template/imei-provisioning-template/index.md)

## On the Device

Zero Touch Provisioning:

Ideally you should see true zero touch provisioning on your devices for which the imei or serial numbers was uploaded on the template. You should be able to boot the device and watch it get provisioned automatically by Esper according to your **Device template**. 

If the customer has known Wi-Fi in the deployment field, it can be baked in the Esper Enhanced Android™ OS. 

If the Wi-Fi SSID set in the Device template is unavailable:

If the Wi-Fi SSID cannot be found an option to manually connect to Wi-Fi will appear. Connecting to a network/wifi will then continue the provisioning process requiring no further input from user end.



[Return to IMEI (or Serial number) based Provisioning](../index.md)
