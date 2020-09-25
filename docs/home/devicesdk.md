# Esper Device SDK

The Esper Device SDK exposes an API to conduct privileged operations on Esper Managed devices. The SDK can be used to develop apps which need to perform seamless operations on or retrieve vital information out of a device.

In its current development state, the SDK provides limited features but the list will grow with time driven by customer need.


Current version: 1.2

Release name: Tessarion_MR3

Table of Contents: 

- Downloading the SDK
- Initializing the SDK
- Getting Device Info
- Clearing App Data
- Manage AppOp Permissions
- Manage Dock
- Activate SDK
- Start/Stop Wi-Fi Hotspot


### Downloading the SDK

Download the .aar file of the SDK from [here](https://downloads.esper.io/device-sdk/esperdevicesdk-release-v1.2.4.aar) and copy the aar inside the libs folder of your project and add the following line to your app’s gradle file inside the dependencies section.

```
implementation files('libs/esperdevicesdk-release-v1.2.4.aar')
```

### Initializing the SDK

Before any operation can be done with the SDK, it needs to be initialized first.

```
EsperDeviceSDK sdk = EsperDeviceSDK.getInstance(getApplicationContext());
```


The EsperDeviceSDK object can then be used to perform different operations.

### Getting Device Info

The EsperDeviceInfo object contains information regarding your Esper managed device.

```
sdk.getEsperDeviceInfo(new EsperDeviceSDK.Callback<EsperDeviceInfo>() {
    @Override
    public void onResponse(@Nullable EsperDeviceInfo esperDeviceInfo) {
        String deviceId = esperDeviceInfo.getDeviceId();
        if (sdk.getAPILevel() >= EsperSDKVersions.TESSARION_MR2) {
            String serialNo = esperDeviceInfo.getSerialNo();
            String imei1 = esperDeviceInfo.getImei1();
            String imei2 = esperDeviceInfo.getImei2();
        }
     }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
    }
});

```

onResponse callback will be called if the device info is successfully retrieved from the device. The device information is stored in an `EsperDeviceInfo` object. The object can be further queried to retrieve several bits of information such as `getDeviceId()`, `getSerialNo()`, `getImei1()` and `getImei2()`.

`onFailure` will be called when there is failure in the operation. The `Throwable` will one of the following exceptions: `EsperSDKNotFoundException`, `InterruptedException`.

### Getting Device Settings

The response contains information about device settings as well as the DPC Params. Device Settings includes Device Status values from Brightness to Adb port, along with this the API also will include DPC params values. 

This API requires authentication, else will return InactiveSDKException. The response is JSONObject. Model class can be created using this configuration:

| adbTimeout   | Long value  |
| brightnessScale  | Integer value  |
| gpsState  | String value  |
| adbEnabled  | boolean value  |
| remoteAdbPort  | Integer value  |
| remoteAdbEnabled  | Boolean value  |
| bluetoothState  | Boolean value  |
| DPC_PARAMS  | JSONObject value  |
| audioSettings  | ArrayList  |
| remoteAdbIp  | String value  |
| screenOffTimeout  | Long value  |
| wifiState  | Boolean value  |

**Code Snippet to use Device Settings API:**

sdk.getDeviceSettings(new EsperDeviceSDK.Callback<JSONObject>() {
   @Override
   public void onResponse(@Nullable JSONObject response) {   
   }

   @Override
   public void onFailure(Throwable t) {       
   }
});

**onResponse** is called if the device settings are successfully retrieved from the device.The device settings are stored in a JSONObject.

**onFailure** will be called when there is a failure in the operation.


**Sample JSON response:**

{
   "adbTimeout":3600000,
   "brightnessScale":9,
   "gpsState":"LOCATION_MODE_SENSORS_ONLY",
   "adbEnabled":false,
   "remoteAdbPort":0,
   "remoteAdbEnabled":false,
   "bluetoothState":false,
   "DPC_PARAMS":{
      
   },
   "audioSettings":[
      {
         "volumeLevel":28,
         "audioStream":"STREAM_RING"
      },
      {
         "volumeLevel":85,
         "audioStream":"STREAM_ALARM"
      },
      {
         "volumeLevel":20,
         "audioStream":"STREAM_MUSIC"
      },
      {
         "volumeLevel":28,
         "audioStream":"STREAM_NOTIFICATION"
      }
   ],
   "remoteAdbIp":"",
   "screenOffTimeout":-1,
   "wifiState":false
}

### Clearing App Data

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

### Manage AppOpp Permissions

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

### Manage Dock

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

### Activating the SDK

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

### Checking Activation Status

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
* This value will always be true by default if the Esper Agent Device SDK API level is lower than version 4. Otherwise, if there are any issues when checking activation status, ​onFailure​ will becalled.

### Start/Stop Mobile Data

Mobile data can be started/stopped only with DPC on android 4.4 & requires supervisor plugin on android 5.0+. 
enableMobileData function of SDK expects two arguments.
boolean value to start/stop mobile data.
true = start mobile data & false = stop mobile data 
EsperDeviceSDK.Callback for the results.
response also is boolean with true = changing mobile data state success.

sdk.enableMobileData(false, new EsperDeviceSDK.Callback<Boolean>() {
   @Override
   public void onResponse(@Nullable Boolean response) {
       Log.d(TAG, "onResponse: " + response);
   }

   @Override
   public void onFailure(Throwable t) {
       Log.e(TAG, "onFailure: ", t);
   }
});

### Start/Stop Wifi-Hotspot:

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