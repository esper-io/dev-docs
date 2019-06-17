#### Provision Device

June 6, 2019

Provisioning is the initial step for configuration, deployment, and management of Dedicated Devices.

Esper provides multiple methods of provisioning a device, which involves downloading the Esper Agent onto the device and configuring it according to the provisioning settings done using a Device Template. The supported provisioning methods are:

1.  [AfW provisioning](afw-provisioning/index.md) AfW (Android for Work) method is best used for:
-Only for GMS (Google Mobile Services) enabled  devices\
-Device needs camera to scan QR code\
\-No need for physical USB attachment\
-Best to use in good network condition\
-Environment must be EMM enrolled 


2.  [ADB provisioning](adb-provisioning/index.md) - ADB (Android Debug Bridge) method is best used for:
-Both Non-GMS and GMS devices\
-Devices with no camera\
-Devices with Android version below 6.0, such as 5.1 or 4.4\
-Physical USB connection is required to the device\
-Preferable in bad network conditions

3.  [IMEI (or Serial Number) based provisioning](imei-or-serial-number-based-provisioning/index.md) - IMEI/Serial Number method is similar to ADB provisioning but it is best used for:\
-Devices with Esper enhanced Android OS (Specially in case of mass deployment)\
-Enables zero touch provisioning

4.  [6-tap method](6-tap-provisioning/index.md) - IMEI/Serial Number method is similar to ADB provisioning but it is best used for:\
-Devices with Esper enhanced Android OS (Specially in case of mass deployment)\
-Enables zero touch provisioning



[Return to Introduction](../index.md)
