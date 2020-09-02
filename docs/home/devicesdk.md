# Esper Device SDK



The Esper Device SDK exposes an API to conduct privileged operations on Esper Managed devices. The SDK can be used to develop apps which need to perform seamless operations on or retrieve vital information out of a device.

In its current development state, the SDK provides limited features but the list will grow with time driven by customer need.


Current version: 1.2

Release name: Tessarion_MR2

Table of Contents: 

- Downloading the SDK
- Initializing the SDK
- Getting Device Info
- Clearing App Data
- Manage AppOp Permissions
- Manage Dock




## Downloading the SDK

Download the .aar file of the SDK from [here](https://downloads.esper.io/device-sdk/esperdevicesdk-release-v1_2-3.aar) and copy the aar inside the libs folder of your project and add the following line to your app’s gradle file inside the dependencies section.

```
implementation files('libs/esperdevicesdk-release-v1_2-3.aar')
```

## Initializing the SDK

Before any operation can be done with the SDK, it needs to be initialized first.

```
EsperDeviceSDK sdk = EsperDeviceSDK.getInstance(getApplicationContext());
```


The EsperDeviceSDK object can then be used to perform different operations.

## Getting Device Info

The EsperDeviceInfo object contains information regarding your Esper managed device.

```
sdk.getEsperDeviceInfo(new EsperDeviceSDK.Callback<EsperDeviceInfo>() {
    @Override
    public void onResponse(@Nullable EsperDeviceInfo esperDeviceInfo)
        String deviceId = esperDeviceInfo.getDeviceId();
        if (sdk.getAPILevel() >= EsperSDKVersions.ESSARION_MR2) {
            String serialNo = esperDeviceInfo.getSerialNo();
            String imei1 = esperDeviceInfo.getImei1();
            String imei2 = esperDeviceInfo.getImei2();
        }
     }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
    }
}));

```

onResponse callback will be called if the device info is successfully retrieved from the device. The device information is stored in an `EsperDeviceInfo` object. The object can be further queried to retrieve several bits of information such as `getDeviceId()`, `getSerialNo()`, `getImei1()` and `getImei2()`.

`onFailure` will be called when there is failure in the operation. The `Throwable` will one of the following exceptions: `EsperSDKNotFoundException`, `InterruptedException`.

## Clearing App Data

The SDK exposes APIs to clear data of an installed app. The API requires the device to run Android 7.0 and above.

```
/**
  * @param packageNames - list of package names whose data is to be cleared
  * @param callback     - callback implementation to be invoked upon completion
  *                       of the operation.
  */
sdk.clearAppData(appsToBeCleared, new EsperDeviceSDK.Callback<ArrayList<String>>() {
    @Override
    public void onResponse(@Nullable ArrayList<String> response) {
                
    }

    @Override
    public void onFailure(Throwable t) {

    }
});
```
The API allows you to pass a list of packages whose data is to be cleared. The API will return a null in onResponse if it was successfully able to clear the data of all apps or it shall return the list of packages whose data it was unable to clear.

## Manage AppOpp Permissions
Android 6.0 introduced new category of permissions named "Special app access" which needs manual process to grant those permissions. Permissions such as "Display over other other apps"and "Usage access"—among many others—are part of this category. Esper Device SDK allows to automatically grant these permissions to your app without the need to ask the user to grant them.
```
/**
 * @param appOpMode - integer value of the AppOp permission for which grant status is to be set
 * @param granted   - true or false
 * @param callback  - callback implementation to be invoked upon completion
 *                    of the operation.
 */
sdk.setAppOpMode(AppOpsPermissions.OP_WRITE_SETTINGS, true, new EsperDeviceSDK.Callback<Void>() {
    @Override
    public void onResponse(@Nullable Void response) {
        showToast("Successfully set the permissions");
    }

    @Override
    public void onFailure(Throwable t) {
         showToast("Failed to set the permissions");
         t.printStackTrace();
     }
 });
```

The constants of most-used AppOp permission codes is available in the class `io.esper.devicesdk.constants.AppOpsPermissions`.

## Manage Dock
In Kiosk mode, Device user can access a hidden dock consisting of menu items such as Esper settings app by tapping 3 times on top right corner or by clicking the power button three times. Alternatively, this API can be used to show / hide the dock whenever you need from within your app.

<b>Show Dock:</b>

```
sdk.showDock(new EsperDeviceSDK.Callback<Void>() {
    @Override
    public void onResponse(Void response) {
        showToast(R.string.success);
    }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
        showToast(R.string.failure);
    }
});
```

<b>Hide Dock: </b>

```
sdk.stopDock(new EsperDeviceSDK.Callback<Void>() {
    @Override
    public void onResponse(Void response) {
        showToast(R.string.success);
    }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
        showToast(R.string.failure);
    }
});
```

## Activating the SDK
When an application using the SDK is first installed on a managed device, it must be activated before it can access privileged operations. 

To activate the SDK, you must provide an OAuth Access Token generated from an API Key that belongs to your endpoint. 

After successfully activating the SDK for an application, this status will persist until the application is uninstalled.(note: If the Esper Agent Device SDK API level is lower than version 4, the SDK is always “active” by default)

```
sdk.activateSDK(token, new EsperDeviceSDK.Callback<Void>() {
    @Override public void onResponse(Void response) {
        //Activation was successful    
    }
    @Override public void onFailure(Throwable t) {
        t.printStackTrace();
    }
});
```
The ``​onResponse​`` callback will be called with ​null​ in two cases:

* The SDK was successfully activated with the provided token string
* Esper Agent Device SDK API level is lower than version 4, in which case the SDK was active by default 

In this case, all privileged operations(​getEsperDeviceInfo()​, ​clearAppData()​, etc.)can now be used.

The ​onFailure​ will be called when there is a failure in the operation. 

In this case, the SDK was unable to be activated.
* If the throwable received is an ​ActivationFailedException​, the provided token was invalid, or there was an error when connecting to the device’s endpoint when validating the token

## Checking Activation Status
You can check whether the SDK has been activated for the current application before attempting other operations. This way, you do not need to activate the SDK every time you restart an application, as you can verify the app has been previously activated using this method:

```
sdk.isActivated(new EsperDeviceSDK.Callback<Boolean>() {
    @Override public void onResponse(Boolean active) {
        if (active) {
            //SDK is activated
        } else {
            //SDK is not activated
        }
    }
    @Override public void onFailure(Throwable t) {
        //There was an issue retrieving activation status        
        t.printStackTrace();    
    }
});
```
If the check is successful, the API will return a boolean in ​onResponse​ indicating whether or not the SDK is activated.
* This value will always be true by default if the Esper Agent Device SDK API level is lower than version 4 Otherwise, if there are any issues when checking activation status, ​onFailure​ will becalled.

## Start/Stop Wifi-Hotspot:
Wifi Hotspot can be enabled/disabled with a provision to set SSID and password. 

For password-protected hotspot, a minimum of 8 characters of password needs to be provided, call will be failed for characters less than 8 and greater than 0.
If the hotspot is created successfully, response with value “success” will be returned.

In case the password is passed as empty, open Wifi hotspot will be created. 

**param 1 >** SSID (name of the hotspot)

**param 2 >** password

**param 3 >** true / false (true = start hotspot, false = stop hotspot)

```
sdk.enableWifiTethering(​"EsperSDKHotspot"​, ​"123123123"​, true, ​new​ ​EsperDeviceSDK​.​Callback​<​String​>() {  
    @Override ​public​ ​void​ onResponse(@Nullable ​String​ response) {
        ​Log​.d(TAG, ​"onResponse: "​ + response);            
    }
    @Override ​public​ ​void​ onFailure(​Throwable​ t) {
        ​Log​.e(TAG, ​"onFailure: "​, t);
    }
});
```