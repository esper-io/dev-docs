# Provisioning Your Device

Provisioning is the initial step to configuring and managing your Android device using the Esper Management Console and associated developer tools.

Esper provides multiple methods of provisioning a device, which involves downloading the Esper Agent onto the device and configuring it according to the provisioning settings used for a Device Template. The supported provisioning methods are:

1.  [Provisioner Tool](./adb-provisioning/index.md) - Provisioner Tool is a user friendly provisioning tool by Esper. This can be used conveniently to provision -
    * All Android Devices - GMS or Non-GMS
    * Devices with or without camera
    * Devices running old as well as new Android versions (inclusive of Android 4.4, 5.1 and so on)
    
2.  [AfW provisioning](./afw-provisioning/index.md) - AfW (Android for Work) method is best used for:
    * Devices that have GMS (Google Mobile Services) enabled 
    * Devices with a camera for QR code scanning

3.  [QR Code Provisioning](./qr-code-provisioning/index.md)
    * QR Method like AfW is used for devices that have both GMS (Google Mobile Services) and Camera enabled 
    
4.  [IMEI (or Serial Number) based provisioning](./imei-or-serial-number-based-provisioning/index.md) 
    * Used for Esper Enhanced Android Devices
    * IMEI/Serial Number method is use for Bulk provisioning of devices 
    * Enables zero touch provisioning


[Return to Introduction](../../console.md)
