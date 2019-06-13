#### IMEI Provisioning - Esper Enhanced Android

May 13, 2019

IMEI provisioning if your device is running Esper Enhanced Android.

In the Esper Console create a Device template then edit the same template and go to ‘Add devices’ to upload the required IMEI csv file. Update the template. See additional details below:

[Creating a Template with IMEI](../../../device-template/imei-provisioning-template/index.md)

On the device with Zero Touch Provisioning:

Ideally you should see true zero touch provisioning on your device which means you should be able to boot the device and it will then be provisioned by Esper according to your Device template. The template should provide the known Wi-Fi SSID for Esper Enhanced Android, and the rest of provisioning is taken care of.

If the Wi-Fi SSID set in the Device template is unavailable:

If the Wi-Fi SSID cannot be found you must select the option to manually connect to Wi-Fi and complete the process to connect to the access point. The rest of the Zero Touch Provisioning process then commences .

[Return to IMEI (or Serial number) based Provisioning](../index.md)
