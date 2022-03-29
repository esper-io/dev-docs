# Device SDK Release Notes 

Date: 4/12/2022

Version: SUNFYRE_V6  


This release of Device SDK contains the following changes:

-   Exposing Wifi Mac Address via Device SDK- We have added the following parameter to the get device info API. This method will fetch the Wifi Mac address for the devices.
    
    ```java
    String wifiMacAddress = esperDeviceInfo.getWifiMacAddress();
    ```java
       