# Device SDK Release Notes

 Version: SUNFYRE_V7

Date: 6/6/2022

This release of Device SDK contains the following changes:

-   We have added the new method in our Device SDK to fetch the device UUID. This is needed for executing our cloud APIs directly from the device.
    
```java
String uuid = esperDeviceInfo.getUUID()
```

