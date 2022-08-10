# Device SDK Release Notes

Version: SUNFYRE_V8

Date: 8/12/2022

This release of Device SDK contains the following changes:

-   We have added a method to whitelist a USB device for a particular application that grants permission to use the USB device.
    
    ```json
    sdk.whitelistUsbDeviceForPackage()
    ```
    
**Note:** This API is available only on Samsung KNOX enabled devices from the SDK version SUNFYRE_V8 and above.

  

-   We have added a method to clear all USB devices that were whitelisted for an application.
    
```json
sdk.clearUsbDeviceWhitelistForPackage()
```

**Note:** This API is available only on Samsung KNOX enabled devices from the SDK version SUNFYRE_V8 and above.
