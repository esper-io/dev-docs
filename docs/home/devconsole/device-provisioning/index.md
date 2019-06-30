#### Provisioning Your Device

June 6, 2019

Provisioning is the initial step to configuring and managing your Android device using the Esper Management Console and associated developer tools.

Esper provides multiple methods of provisioning a device, which involves downloading the Esper Agent onto the device and configuring it according to the provisioning settings used for a Device Template. The supported provisioning methods are:

1.  [AFW provisioning](./afw-provisioning/index.md) - AFW (Android for Work) method is best used for:
    * Devices that have GMS (Google Mobile Services) enabled 
    * Devices with a camera for QR code scanning

2.  [ADB provisioning](./adb-provisioning/index.md) - ADB (Android Debug Bridge) method is best used for:
    * Devices with No Google Services 
    * Devices with No camera
    * Devices running  Android 6.0, 5.1 or 4.4

3.  [IMEI (or Serial Number) based provisioning](./imei-or-serial-number-based-provisioning/index.md) 
    * IMEI/Serial Number method is use for Bulk provisioning of devices
    * Enables zero touch provisioning

4.  [QR Code Provisioning ](./qr-code-provisioning/index.md)
    * QR Method like AFW is used for devices that have both GMS (Google Mobile Services) and Camera enabled 

[Return to Introduction](../index.md)
