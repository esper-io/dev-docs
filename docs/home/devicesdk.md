# Esper Device SDK

The Esper Device SDK exposes an API to conduct privileged operations on Esper Managed devices. The SDK can be used to develop apps which need to perform seamless operations on or retrieve vital information out of a device. Esper device SDK now uses the latest versions of AndroidX libraries (androidx.core-core-ktx version: 1.5.0 stable) as dependencies. This will reduce the compile time for applications using the Esper SDK.
In its current development state, the SDK provides limited features but the list will grow with time driven by customer need.

Current version: 2.1.2851.18

Release name: SUNFYRE_V5

Table of Contents:

* SDK Setup
  * Downloading the SDK
  * Initializing the SDK
  * Activating the SDK
  * Checking Activation Status

* SDK Methods
  * Add New APN
  * Change App State
  * Clearing App Data
  * Configure APNs via the Esper Device SDK
  * Configure No Network Fallback
  * Disable Users From Powering Off Devices
  * Getting Device Info
  * Getting Device Settings
  * Getting Device Temperatures
  * Getting Removal Storage Path
  * Manage AppOpp Permissions
  * Manage Dock
  * Managed App Configurations
  * Push Telemetry Data
  * Reboot Device via Esper Device SDK
  * Remove APN Config
  * Set APN as Default
  * Set Brightness
  * Set Device Orientation
  * Set Global Settings
  * Set System Settings
  * Start/Stop Mobile Data
  * Start/Stop Wifi-Hotspot
  * Update Existing APN Config

## Enabling the Esper SDK in your Application

* In your settings.gradle, add the following repository URL:

```gradle
maven {
    url "https://artifact.esper.io/artifactory/esper-device-sdk/"
}
```

* In your module (app-level) Gradle file (usually app/build.gradle), add the dependency for the Esper SDK:

`implementation 'io.esper.devicesdk:app:2.1.1181.15'`

 or

`implementation 'io.esper.devicesdk:app:+'`

Note that Version 2.1.1181.15 is the current latest version of the Esper SDK, and it can change in every release. Developers can use + instead of version if they need to get the latest version automatically.

For Android 11, add the following code in the AndroidManifest.xml :

```xml
<queries>
        <package android:name="io.shoonya.shoonyadpc"/>
</queries>
 ```


### Initializing the SDK

Before any operation can be done with the SDK, it needs to be initialized first.

```java
EsperDeviceSDK sdk = EsperDeviceSDK.getInstance(getApplicationContext());
```

The EsperDeviceSDK object can then be used to perform different operations.

### Activating the SDK

When an application using the SDK is first installed on a managed device, it must be activated before it can access privileged operations. 

To activate the SDK, you must provide an OAuth Access Token generated from an API Key that belongs to your endpoint. 

After successfully activating the SDK for an application, this status will persist until the application is uninstalled.(note: If the Esper Agent Device SDK API level is lower than version 4, the SDK is always "active" by default)

```java
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

```java
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

* This value will always be true by default if the Esper Agent Device SDK API level is lower than version 4. Otherwise, if there are any issues when checking activation status, ​onFailure​ will be called.

### Add New APN

```java
sdk.addNewApnConfig(
       new EsperDeviceSDK.Callback<Integer>() {
           @Override
           public void onResponse(@Nullable Integer response) {
               showMethodResult("onResponse: APN ID: " + response);
           }

           @Override
           public void onFailure(Throwable t) {
               Log.e(TAG, "onFailure: ", t);
               showFailureResult(t);
           }
}, apnConfigJSONString);
```

addNewApnConfig function returns a newly added APN ID as an integer in response. 

 -1 Indicates a Failure. Users should keep a note of the APN ID returned, as there are no APIs to query. Please note that in case of incorrect parameters passed in the config, an APN may not show up in the list of APNs in settings.
 
 ```JSON
{
  "name": "Esper Device SDK",
  "apn": "Airtel",
  "proxy": "",
  "port": "80",
  "mmsproxy": "",
  "mmsport": "",
  "user": "",
  "server": "",
  "password": "",
  "mmsc": "",
  "authtype": "-1",
  "protocol": "IPV4V6",
  "roaming_protocol": "IPV4V6",
  "type": "",
  "mcc": "404",
  "mnc": "45",
  "numeric": "40445",
  "current": "1",
  "bearer": "0",
  "mvno_type": "",
  "mvno_match_data": "",
  "carrier_enabled": "1"
}
```

### Change App State

App state can now be changed from the SDK. Every app supports three states:

* DISABLE: Requires Android 5.0 and above. DPC Disables the app on the managed device. 
* SHOW: The app can be used by the managed device, and the shortcut is provided on the Home screen.
* HIDE: Hides the app, making it unusable in the DPC. No shortcut is provided on the Home screen, but it is still possible for the app to run in the background.

**Note: One cannot make state changes on an application if it is in kiosk mode.**

The changeAppState function expects three arguments:

```java

packageName: (String) the app whose state we want to change.
state: (String) either of "SHOW", "DISABLE", "ENABLE"
EsperDeviceSDK.Callback for the results. Response is boolean with
true = changing app state success.
false = some error occurred.
sdk.changeAppState("com.android.chrome", "DISABLE", new EsperDeviceSDK.Callback<Boolean>() {
                @Override
                public void onResponse(@Nullable Boolean response) {
         String message = response ? "success" : "failed";
                    Log.d(TAG, message);
                }

                @Override
                public void onFailure(Throwable t) {
                    Log.d(TAG, "Error", t);
                }
});
```

### Clearing App Data

The SDK exposes APIs to clear data of an installed app. The API requires the device to run Android 7.0 and above.

```java
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

### Configure APNs via the Esper Device SDK

APIs to add/update/remove/setDefault APN confuguraton(s).

These APIs are only available on Samsung KNOX enabled devices, or via Supervisor plugin, and the Esper Device SDK version TESSARION_MR8.

To create new / update an existing APN, a JSON string needs to be passed in SDK functions with APN config parameters mentioned.

To Update/Remove/Delete config, an APN ID needs to be passed.

**MVNO_TYPE & MVNO_MATCH_DATA on Samsung devices is only available on Android API Level 29 & above.**

### Configure No Network Fallback

If an Android device encounters a "no network" situation, then the following JSON configuration is referred to as a follow-up strategy to regain the lost network.

Usage:

```java
sdk.configNoNetworkFallback(configJsonString, new  EsperDeviceSDK.Callback<Boolean>() {
    @Override
    public void  onResponse(@Nullable  Boolean response) {
        Log.d(TAG, "configNoNetworkFallback: is config applied: "  + response);
    }

    @Override
    public void  onFailure(Throwable throwable) {
        Log.e(TAG, "configNoNetworkFallback: Error: "  + throwable.getMessage());
    }
}
```

Params:

*   configJsonString {String} : a JSON style configuration string
*   callback {EsperDeviceSDK.Callback} : callback implementation to be invoked upon completion of the operation

Schema:

*   Configuring JSON string schema:
    
```java
{
    "networkFallbackEnabled": Boolean,
    "fallbackDurationFlightModeOn": Long,
    "fallbackDurationOff": Long,
    "fallbackDurationReboot": Long,
    "maxResetsInDay": Integer,
    "networkFallbackAction": Integer
}
```

`networkFallbackEnabled`
true : Enable
false : Disable

`fallbackDurationFlightModeOn`
Duration in milliseconds to turn on Airplane mode. Not applicable for Reboot only mode

`fallbackDurationOff`
Duration in milliseconds to turn off Airplane Mode. Not applicable for Reboot only mode.

`fallbackDurationReboot`
Duration in milliseconds to Reboot device after the Internet is lost. Not applicable in the case of Airplane mode only.

`maxResetsInDay`
Number of times device can reset in a day(that date only)

`networkFallbackAction`
`0`: Airplane Mode Only
`1`: Reboot Mode Only
`2`: Airplane and Reboot

### Disable Users From Powering Off Devices

This API will enable or disable the user to power off the device by pressing the power button. 

* Once power off is disabled, powering off is enabled only if another call is made to re-enable it. 
* If powering off is disabled, a toast notification with the message "Security policy prevents power off" appears when the user tries to power off the device.

**This API is only available on Samsung KNOX enabled devices & is available from the Esper Device SDK version TESSARION_MR8.**

The function call to allowPowerOff returns boolean if allowing or disallowing power off was successful.

```java
sdk.allowPowerOff(true/false, new EsperDeviceSDK.Callback<Boolean>() {
   @Override
   public void onResponse(@Nullable Boolean response) {
       Log.d(TAG, "onResponse: " + response);
       showMethodResult(getString(R.string.result, "" + response));
   }
   @Override
   public void onFailure(Throwable t) {
       Log.e(TAG, "onFailure: ", t);
       showFailureResult(t);
   }
});
```

### Getting Device Info

The EsperDeviceInfo object contains information regarding your Esper managed device.

```java
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

|                  |                  |
| ---------------- | ---------------- |
| adbTimeout       | Long value       |
| brightnessScale  | Integer value    |
| gpsState         | String value     |
| adbEnabled       | boolean value    |
| remoteAdbPort    | Integer value    |
| remoteAdbEnabled | Boolean value    |
| bluetoothState   | Boolean value    |
| DPC_PARAMS       | JSONObject value |
| audioSettings    | ArrayList        |
| remoteAdbIp      | String value     |
| screenOffTimeout | Long value       |
| wifiState        | Boolean value    |

**Code Snippet to use Device Settings API:**

```java
sdk.getDeviceSettings(new EsperDeviceSDK.Callback<JSONObject>() {
   @Override
   public void onResponse(@Nullable JSONObject response) {   
   }

   @Override
   public void onFailure(Throwable t) {       
   }
});
```

**onResponse** is called if the device settings are successfully retrieved from the device. The device settings are stored in a JSONObject.

**onFailure** will be called when there is a failure in the operation.


**Sample JSON response:**

```java
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
```

### Getting Device Temperatures

Method to get Device hardware component's temperatures such as CPU, GPU, Battery or Skin in Celsius.

:::Note
This SDK method requires Android API level 24.
:::

```java
/**
 * @param type     - type of requested device temperature, one of
 *                 {@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_CPU},
 *                 {@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_GPU},
 *                 {@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_BATTERY} or
 *                 {@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_SKIN}.
 * @param source   - source of requested device temperature, one of
 *                 {@link android.os.HardwarePropertiesManager#TEMPERATURE_CURRENT},
 *                 {@link android.os.HardwarePropertiesManager#TEMPERATURE_THROTTLING},
 *                 {@link android.os.HardwarePropertiesManager#TEMPERATURE_THROTTLING_BELOW_VR_MIN} or
 *                 {@link android.os.HardwarePropertiesManager#TEMPERATURE_SHUTDOWN}.
 * @param callback - callback implementation to be invoked upon completion of the operation.
 *                 In devices running android 7 or above, the callback will return float array
 *                 of temperatures of given type and source.
 *                 Callback's onFailure method returns InvalidAndroidSdkException in case Device is
 *                 running below Android 7
 *                 Callback's onFailure method returns InternalError in case device
 *                 is not able to access {@link android.os.HardwarePropertiesManager}
 *
 */
sdk.getDeviceTemperatures(HardwarePropertiesManager.DEVICE_TEMPERATURE_CPU, HardwarePropertiesManager.TEMPERATURE_CURRENT, 
                            new EsperDeviceSDK.Callback<float[]>() {
    @Override
    public void onResponse(@Nullable float[] response) {
        Log.d(TAG, "getDeviceTemperatures successful. temperatures : " + Arrays.toString(response));
        showMethodResult(Arrays.toString(response));
    }

    @Override
    public void onFailure(Throwable t) {
        Log.d(TAG, "getDeviceTemperatures failure. error : " + t.getMessage());
        showFailureResult(t);
    }
});
```

### Getting Removable storage Path

The response contains a cache path to removable storage such as an SD card. Any files inside this path are accessible by the other applications.

In Esper SDK version TESSARION_MR12, the Get storage path API was introduced.
  

Response Example: storage/140C-113C/Android/data/io.shoonya.shoonyadpc/cache/
  

:::tip
Apps using this path to access files must have READ_EXTERNAL_STORAGE granted.
:::

  
This API requires authentication. Else, it will return InactiveSDKException. The response is a String.

  

This API requires Android API level 21 and won’t work beyond API level 29. InvalidAndroidSdkException will be returned for other Android versions.

  

In case there is no removable storage present, or if removable storage is not mounted, then PathNotFoundException will be returned.  
  
```java 
/**  
* @param callback - callback implementation to be invoked upon completion of the operation.  
*/  
  
sdk.getEsperRemovableStorageCachePath(new EsperDeviceSDK.Callback<String>() {  
    @Override  
    public  void  onResponse(@Nullable String response) {  
        Log.d(TAG, "getEsperRemovableStoragePath successful. Path : " + response);  
    }  

    @Override  
    public  void  onFailure(Throwable t) {  
        Log.e(TAG, "getEsperRemovableStoragePath failure. Error : " + t.getMessage());  
    }  
});  
```

### Manage AppOpp Permissions

Android 6.0 introduced new category of permissions named "Special app access" which needs manual process to grant those permissions. Permissions such as "Display over other other apps"and "Usage access"—among many others—are part of this category. Esper Device SDK allows to automatically grant these permissions to your app without the need to ask the user to grant them.

```java
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

**Show Dock:**

```java
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

**Start Dock:**

```java
sdk.startDock(new EsperDeviceSDK.Callback<Void>() {
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

**Hide Dock:**

```java
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

### Managed App Configurations

Managed Configurations (also known as app restrictions) allow the organization's IT admin to configure apps remotely. This capability is beneficial for organizations to apply rules on the apps deployed to a work profile.


For example, an organization might require that approved apps allow the IT admin to:

*   Allow or block URLs for a web browser.
*   Configure whether an app is allowed to sync content via cellular or Wi-Fi
*   Configure the app’s email settings.
    

:::tip
The API won’t work below Android API Level 21 (Lollipop)
:::
    

Usage:

```java
sdk.updateAppConfigurations(appConfigurationString, new  EsperDeviceSDK.Callback<Boolean>() {

    @Override
    public void  onResponse(@Nullable  Boolean response) {
        Log.d(TAG, "updateAppConfigurations: was settings applied: "  + response);
    }

    
    @Override
    public void  onFailure(Throwable throwable) {   
        Log.e(TAG, "updateAppConfigurations: Error: "  + throwable.getMessage());
    }

});
```

Params:

*   appConfigurationString {String} : a JSON style configuration string
*   callback {EsperDeviceSDK.Callback} : callback implementation to be invoked upon completion of the operation

Schema:

*   Managed App configuration JSON string schema:
    
```json
{
    "managedAppConfigurations": {
        "app_package_name": {
            "key1": "value1",
            "key2": "value2",
            "keyN": "valueN"
        }
    }
}
```

### Push Telemetry Data

Method to push data that needs to be stored and synced with Quantum and does not need to be fetched or handled by the Quantum Telemetry System.

```java
HashMap<String, Object> data = new HashMap<>();
data.put("test", "testValue");
data.put("test 2", 123);

/**
 * @param name Name of the Custom Telemetry Data Type
 * @param id   Id of the Custom Telemetry Data Type must be between 2000 and 3000
 * @param data the data pertaining to the custom Telemetry type
 */
sdk.pushTelemetryData("Sdk Test Telemetry", 1001, true, data, new EsperDeviceSDK.Callback<Void>() {
    @Override
    public void onResponse(@Nullable Void response) {
        Log.d(TAG, "pushTelemetryData: onResponse - hence success");
    }

    @Override
    public void onFailure(Throwable t) {
        runOnUiThread(() -> Toast.makeText(MainActivity.this, "pushTelemetryData: onFailure - " + t.getMessage(), Toast.LENGTH_SHORT).show());
        Log.e(TAG, "pushTelemetryData: onFailure - " + t.getMessage(), t);
    }
});
```

### Reboot Device via Esper Device SDK

Reboot API required supervisor support until Android 6.0 (Marshmallow), from Android 7.0 & above, the ability to Reboot a device via the Esper Device SDK is supported without a supervisor.

Reboot API was introduced in Esper SDK version <code> TESSARION_MR5. </code>

Enabling the <code> Reboot </code> function of the SDK requires a callback in arguments. 

As soon as the <code> Reboot </code> API is called, the device will be rebooted.

```java
sdk.reboot(new EsperDeviceSDK.Callback<Void>() {
   @Override
   public void onResponse(Void response) {
   }

   @Override
   public void onFailure(Throwable t) {
       Log.e(TAG, "onFailure: ", t);
   }
});
```

### Remove APN Config

```java
sdk.removeApnConfig(
       new EsperDeviceSDK.Callback<Integer>() {
           @Override
           public void onResponse(@Nullable Integer response) {
               showMethodResult("onResponse: removeAPN Result: " + response);
           }

           @Override
           public void onFailure(Throwable t) {
               Log.e(TAG, "onFailure: ", t);
               showFailureResult(t);
           }
}, apnID);
```

removeApnConfig expects APN ID in argument returned by addNewApnConfig function. 
returns Integer as a response.

1 indicates success & -1 a failure.

### Set APN as Default

```java
sdk.setDefaultApn(
       new EsperDeviceSDK.Callback<Integer>() {
           @Override
           public void onResponse(@Nullable Integer response) {
               Log.d(TAG, "onResponse: " + response);
               showMethodResult("onResponse: setDefaultAPN Result: " + response);
           }

           @Override
           public void onFailure(Throwable t) {
               Log.e(TAG, "onFailure: ", t);
               showFailureResult(t);
           }
}, apnID);
```

setDefaultApn expects APN ID in argument returned by addNewApnConfig function. 
returns Integer as a response.

1 indicates success & -1 a failure.

### Set Brightness

We can now change and set brightness through SDK.

The setBrightness function expects two arguments:

```java

scale: (int) the percentage of brightness for device
EsperDeviceSDK.Callback for the results. Response is boolean with
true = changing app state success.
false = some error occurred.
sdk.setBrightness(10, new EsperDeviceSDK.Callback<Boolean>() {
                @Override
                public void onResponse(@Nullable Boolean response) {
                    if(response != null) {
                        showMethodResult(response.toString());
                    }
                }

                @Override
                public void onFailure(Throwable t) {
                    Log.d(TAG, "Error", t);
                }
});
```

### Set Device Orientation

Esper SDK supports 5 orientations

1. AUTO
2. PORTRAIT
3. INVERTED PORTRAIT
4. LANDSCAPE
5. INVERTED LANDSCAPE

The setDeviceOrientation expects two arguments:

```java

Orientation option: (String) : Constants for multiple options are defined in EsperDeviceSDK class.
ROTATION_STATE_AUTO
ROTATION_STATE_PORTRAIT_ONLY
ROTATION_STATE_LANDSCAPE_ONLY
ROTATION_STATE_INVERTED_PORTRAIT_ONLY
ROTATION_STATE_INVERTED_LANDSCAPE_ONLY
EsperDeviceSDK.Callback for the results.
sdk.setDeviceOrientation(orientation, new EsperDeviceSDK.Callback<Boolean>() {
   @Override
   public void onResponse(Boolean response) {
   }

   @Override
   public void onFailure(Throwable t) {
       Log.d(TAG, "orientation change failed", t);
       showFailureResult(t);
   }
});
```

### Set Global Settings  

Global system settings containing preferences always apply identically to all defined users. Applications can read these but are not allowed to write, like the secure settings. These are for preferences that the user must explicitly modify through the system UI or specialized APIs for those values.
Following is a list global settings which **doesn't need supervisor:**

* "adb_enabled"
* "auto_time"
* "auto_time_zone"
* "data_roaming"
* "usb_mass_storage_enabled"
* "wifi_sleep_policy"
* "stay_on_while_plugged_in"
* "wifi_device_owner_configs_lockdown"
* "bluetooth_on"
* "development_settings_enabled"
* "mode_ringer"
* "network_preference"
* "wifi_on"
  

Usage:

```java
sdk.setGlobalSetting(key, value, new  EsperDeviceSDK.Callback<Boolean>() {
    @Override
    public void  onResponse(@Nullable  Boolean response) {
        Log.d(TAG, "setGlobalSetting: is setting applied: "  + response);
    }

    

    @Override
    public void  onFailure(Throwable throwable) {
        Log.e(TAG, "setGlobalSetting: Error: "  + throwable.getMessage());
    }
}
  
```

Params:

*   Key {String} : the name of the global setting
*   value {String} : the value of the global setting
*   callback {EsperDeviceSDK.Callback} : callback implementation to be invoked upon completion of the operation

key-value Reference:

*   To know about possible key-value pairs, refer to official Android documentation on Global Settings [https://developer.android.com/reference/android/provider/Settings.Global](https://developer.android.com/reference/android/provider/Settings.Global)

### Set System Settings

System settings contain miscellaneous system preferences. This table holds simple key/value pairs. setSystemSettings are convenient functions for accessing individual setting entries.

Usage:

```java
sdk.setSystemSetting(key, value, new  EsperDeviceSDK.Callback<Boolean>() {
    @Override
    public void  onResponse(@Nullable  Boolean response) {
        Log.d(TAG, "setSystemSetting: is setting applied: "  + response);
    }

    @Override
    public void  onFailure(Throwable throwable) {
        Log.e(TAG, "setSystemSetting: Error: "  + throwable.getMessage());
    }
}

```  

Params:

*   key {String} : the name of the system setting
*   value {String} : the value of the system setting
*   callback {EsperDeviceSDK.Callback} : callback implementation to be invoked upon completion of the operation

Key-Value Reference:

*   To know about possible key-value pairs, refer to official Android documentation on System Settings.
    
[https://developer.android.com/reference/android/provider/Settings.System](https://developer.android.com/reference/android/provider/Settings.System)

### Start/Stop Mobile Data

Mobile data can be started/stopped only with DPC on android 4.4 & requires supervisor plugin on Android 5.0+.

enableMobileData function of SDK expects two arguments:

boolean value to start/stop mobile data.
true = start mobile data & false = stop mobile data 
EsperDeviceSDK.Callback for the results.
response also is boolean with true = changing mobile data state success.

```java
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
```

### Start/Stop Wifi-Hotspot

Wifi Hotspot can be enabled/disabled with a provision to set SSID and password. 

For password-protected hotspot, a minimum of 8 characters of password needs to be provided, call will be failed for characters less than 8 and greater than 0.
If the hotspot is created successfully, response with value "success" will be returned.

In case the password is passed as empty, open Wifi hotspot will be created. 

**param 1 >** SSID (name of the hotspot)

**param 2 >** password

**param 3 >** true / false (true = start hotspot, false = stop hotspot)

```java
sdk.enableWifiTethering(​"EsperSDKHotspot"​, ​"123123123"​, true, ​new​ ​EsperDeviceSDK​.​Callback​<​String​>() {  
    @Override ​public​ ​void​ onResponse(@Nullable ​String​ response) {
        ​Log​.d(TAG, ​"onResponse: "​ + response);            
    }
    @Override ​public​ ​void​ onFailure(​Throwable​ t) {
        ​Log​.e(TAG, ​"onFailure: "​, t);
    }
});
```

### Update Existing APN Config

```java
sdk.updateUpdateApnConfig(
       new EsperDeviceSDK.Callback<Integer>() {
           @Override
           public void onResponse(@Nullable Integer response) {
               showMethodResult("onResponse: Update Result: " + response);
           }

           @Override
           public void onFailure(Throwable t) {
               Log.e(TAG, "onFailure: ", t);
               showFailureResult(t);
           }
}, apnID, apnConfigJSONString);
```

updateUpdateApnConfig expects first argument as APN ID returned by addNewApnConfig function & second as APN config JSON string. It returns Integer as a response. 

1 indicates success & -1 a failure.


### Get USB Permission Manager

Returns an instance of UsbPermissionManager which can be used for granting or denying USB device/accessory access permissions to packages.

```java
sdk.getUsbPermissionManager(new EsperDeviceSDK.Callback<UsbPermissionManager>() {

@Override

public void onResponse(@Nullable UsbPermissionManager usbPermissionManager) {

// use UsbPermissionManager to perform needed actions

}


  

@Override

public void onFailure(Throwable t) {

Log.e(TAG, "onFailure: ", t);

showFailureResult(t);

}

});
```

### UsbPermissionManager

Compared to the default permission manager of android, this one can persist permissions across package re-installations, as this one uses package name instead of UID.

Here it is possible to grant or deny access for all USB devices and accessories to a package in one go, instead of the default one that operates on individual device identifiers.

:::tip
Unless explicitly granted, permissions are considered denied by default.
:::

### Check USB access permissions for an app

Accepts package name for an app as parameter and returns true if permission is granted for the app and false otherwise.

```java
try {

boolean granted = usbPermissionManager.isAccessGranted("com.example.app");

} catch (EsperSdkException t) {

Log.e(TAG, "onFailure: ", t);

showFailureResult(t);

}
```

### Grant or deny USB access permissions for an app

It accepts package name of the app and grant status as boolean. The example shown below will grant permissions to the app identified with package name com.example.app. Grant status false will deny the permission.

Once grated via here, the apps no more need to request for permission via ACTION_USB_PERMISSION intent.

```java
try {

usbPermissionManager.setAccessGranted("com.example.app", true);

} catch (EsperSdkException t) {

Log.e(TAG, "onFailure: ", t);

showFailureResult(t);

}
```
