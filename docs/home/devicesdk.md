# Esper Device SDK

The Esper Device SDK uses an API to conduct operations on Esper-managed devices. Use the Device SDK to develop apps that perform operations or retrieve data from your device fleet. We now use AndroidX libraries (androidx.core-core-ktx version 1.5.0 stable) as dependencies which reduces compile time. 

Current version: **v2.1.7787.21**

Release name: **SUNFYRE_V8**

Table of Contents:

* **SDK Setup**
  * [Downloading the SDK](#downloading-the-sdk)
  * [Initializing the SDK](#initializing-the-sdk)
  * [Activating the SDK](#activating-the-sdk)
  * [Checking Activation Status](#checking-activation-status)

* **SDK Methods**
  * [Add New APN](#add-new-apn)
  * [Change App State](#change-app-state)
  * [Clear App Data](#clearing-app-data)
  * [Configure APNs via the Esper Device SDK](#configure-apns-via-the-esper-device-sdk)
  * [Configure No Network Fallback](#configure-no-network-fallback)
  * [Disable Users From Powering Off Devices](#disable-users-from-powering-off-devices)
  * [Get Device Info](#getting-device-info)
  * [Get Device Settings](#getting-device-settings)
  * [Get Device Temperatures](#getting-device-temperatures)
  * [Get Removal Storage Path](#getting-removable-storage-path)
  * [Manage Dock](#manage-dock)
  * [Manage App Configurations](#managed-app-configurations)
  * [Push Telemetry Data](#push-telemetry-data)
  * [Reboot Device via Esper Device SDK](#reboot-device-via-esper-device-sdk)
  * [Remove APN Config](#remove-apn-config)
  * [Set APN as Default](#set-apn-as-default)
  * [Set Brightness](#set-brightness)
  * [Set Device Orientation](#set-device-orientation)
  * [Set Global Settings](#set-global-settings)
  * [Set System Settings](#set-system-settings)
  * [Start or Stop Mobile Data](#start-or-stop-mobile-data)
  * [Start or Stop Wifi-Hotspot](#start-or-stop-wifi-hotspot)
  * [Update Existing APN Config](#update-existing-apn-config)
  * [Install an APK from a Public Folder](#install-an-apk-from-a-public-folder)
  * [Power Off the Device](#power-off-the-device)

## SDK Setup

First, download the SDK in your application.

### Downloading the SDK

* In your settings.gradle, add the following repository URL:

```gradle
maven {
    url "https://artifact.esper.io/artifactory/esper-device-sdk/"
}
```

* In your module, in the app-level Gradle file (usually in app/build.gradle), add the following dependency:

`implementation 'io.esper.devicesdk:app:2.1.7787.21'`

 or

`implementation 'io.esper.devicesdk:app:+'`

:::tip Note
Replace 2.1.7787.21 with the current version of the Esper SDK. Use + after the version number to get the latest version. Example: 2.1.7787.21+. 
:::

For Android 11, add the following code to AndroidManifest.xml :

```xml
<queries>
        <package android:name="io.shoonya.shoonyadpc"/>
</queries>
 ```

If you are using Esper Device SDK version SUNFYRE_V7 or above, target app needs to use override ```<uses-sdk>``` for imported libraries

```
 <uses-sdk tools:overrideLibrary="esper.library" />
```

If you are using Esper Device SDK version SUNFYRE_V7 or above, the target app will need to override `<uses-sdk>` for imported libraries:

```
 <uses-sdk tools:overrideLibrary="esper.library" />
```

### Initializing the SDK

Initialize the SDK.

```java
EsperDeviceSDK sdk = EsperDeviceSDK.getInstance(getApplicationContext());
```

Then, perform the available SDK methods.

### Activating the SDK

Activate the SDK. 

When an SDK is installed on a managed device for the first time, you’ll need to activate it in order to use the SDK methods. To activate the SDK, provide the OAuth Access Token from the API Key. See [How to Generate an API Key](https://console-docs.esper.io/API/generate.html) for more information. 

After successfully activating the SDK, the status will persist until the application is uninstalled.

:::tip Note
If the Esper Agent Device SDK API is version 4.0 or lower, the SDK will always be "active" by default.
:::

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

The ``​onResponse​`` callback will return *​null*​ in two cases:

* The SDK was successfully activated with the provided token string.
* If the Esper Agent Device SDK API level is 4.0 or lower, the SDK will be active by default.

You'll be able to use the SDK methods once it's activated. 

The ​```onFailure``` callback​ will be called when the operation fails, meaning the SDK failed to activate. 

* If the throwable is an ​ActivationFailedException​, the provided token may be invalid, or failure occurred when trying to connect to the tenant. 

### Checking Activation Status

Use this method to check if the SDK was activated successfully for the current application. We recommend verifying the SDK every time you restart the application. 


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

The API will return a boolean in ​```onResponse```​ indicating whether or not the SDK is activated.

* Please note, this value will always default to ```TRUE``` if the Esper Agent Device SDK API level is lower than 4.0 or lower. Otherwise, if there were any issues when checking the activation status, ​```onFailure```​ will be called.

## SDK Methods

### Add New APN

Add a new Access Point Name. 

<mark>We recommend that you take note of the APN ID as there aren't other methods to call for this ID.</mark>

**Response**
_____

| Response | Data Type | Description   | 
|----------|-----------|--------|
| APN ID  | Integer   | Success |       
| -1  | Integer   | Failure     |

**Usage**
_____
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

The ```addNewApnConfig``` method returns a newly added APN ID as an integer.

A ``` -1``` Indicates a failure. 

Passing incorrect parameters in the config may result in the APN not appearing in the list of APNs in Settings. The following JSON code snippet indicates a failure: 
 
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

Change the App state. The following states are supported: 

* **DISABLE**: Requires Android version 5.0 and above. The Device Policy Controller (DPC) disables the app on the managed device. 
* **SHOW**: The app can be used by the managed device. Also displays an app shortcut on the Home screen. 
* **HIDE**: Hides the app, making it unusable in the DPC. No shortcut is provided on the Home screen, but it is still possible for the app to run in the background.

**Note: State changes are not available in Kiosk-mode.**

**Parameters**
____

| Parameter      | Data Type          | Description                                                                                                     |
|----------------|--------------------|-----------------------------------------------------------------------------------------------------------------|
| packageName    | String             | Name of the app.                                                                                                |
| state          | String             | One of the following: <ul><li>"SHOW"</li><li>"DISABLE"</li><li>"ENABLE"</li></ul>                                                                                  |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Responses**
_____
|Response  |Data Type   | Description |
|----------|------------|-------------|
|true      | Boolean    | Success     |
|false      | Boolean    | Failure     |

**Usage**
____

```java

// packageName: {String}. The name of the app.
// state: {String}.  Either "SHOW", "DISABLE", or "ENABLE". 
// EsperDeviceSDK. {Callback of the results}. The response is a boolean with
// true = changed the app state. 
// false = an error occurred.
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

Clear data from installed apps. 

:::warning Requirements
Requires Android 7.0 or above. 
:::

**Parameters**
____

| Parameters      | Data Type | Description                              |
|----------------|-----------|------------------------------------------|
| packageNames   | ArrayList | List of apps where the data was cleared. |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Responses**
_____

| Response | Data Type | Description                                  |
|----------|-----------|----------------------------------------------|
| null  | null      | Success     |
| List of packages where data was not cleared.  | ArrayList | Failure |


**Usage**
```java
/**
  * @param packageNames - List of apps where data will be cleared.
  * @param callback - Invokes after the operation completes. 
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

Clear data from apps by passing the list of the package names. The API will return null in ```onResponse``` if it’s successful. If unsuccessful, it returns a list of packages where data was not cleared.

### Configure APNs via the Esper Device SDK

Update to add/update/remove/setDefault APN configuration(s). 

:::warning Requirements
Only available on Samsung KNOX-enabled devices, or via a Supervisor plugin and the Esper Device SDK version TESSARION_MR8. MVNO_TYPE & MVNO_MATCH_DATA on Samsung devices are only available on Android API Level 29 & above.
:::

To create a new APN or update an existing one, pass a JSON string in the SDK functions with the APN config parameters mentioned.

Pass an APN ID to update, remove, or delete a config.


### Configure No Network Fallback

If an Android device encounters a "no network" situation, use the following JSON configuration to regain the lost network.

**Parameters**
___
| Parameters       | Data Type               | Description                                                                                                                                            |
|------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| configJsonString | String                  | A JSON-style configuration. See the schema section below.                                                                                                                            |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Responses**
____
|Response  |Data Type   | Description |
|----------|------------|-------------|
|true      | Boolean    | Success     |
|false      | Boolean    | Failure     |


**Usage**
____

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


**Schema**
____

*   JSON schema configuration for no network fallback. 
    
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

| Key                          | Data Type | Description                                                                                                                       |
|------------------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
| networkFallbackEnabled       | Boolean   | <ul><li>`true`: Enable</li><li>`false`: Disable</li></ul>                                                                                                      |
| fallbackDurationFlightModeOn | Long      | Duration in milliseconds to turn on Airplane mode. Not applicable for Reboot-only mode.                                           |
| fallbackDurationOff          | Long      | Duration in milliseconds to turn off Airplane Mode. Not applicable for Reboot-only mode.                                          |
| fallbackDurationReboot       | Long      | Duration in milliseconds to reboot a device after it loses a network connection. Not applicable for Airplane-mode only.           |
| maxResetsInDay               | Integer   | Number of times the device can be reset in a day (for that date only).                                                            |
| networkFallbackAction        | Integer   | Insert the following integer:  <ul><li>`0`: Airplane mode only</li><li>`1`: Reboot mode only.</li><li>`2`: Airplane and Reboot.</li></ul> |

### Disable Users From Powering Off Devices

Enables or disables the ability for an end user to turn off the device if they press the power button.

Once disbaled: 
* Can only be enabled if a call is made to re-enable it. 
* A notification “Security policy prevents power off” will appear when the end user tries to power down the device.

:::warning Requirements 
Only available on Samsung KNOX-enabled devices, or via a Supervisor plugin and the Esper Device SDK version TESSARION_MR8. 
:::

Responses
___
| Response               | Data Type | Description                                                                              |
|------------------------|-----------|------------------------------------------------------------------------------------------|
| true                | Boolean   | Success                                                                                     |
| false                | Boolean   | Failure                                                                                    |

The  ```allowPowerOff``` function returns a boolean if allowing or disallowing power off was successful.

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

Get an object containing information about an Esper-managed device.

**Responses**
____
| Response               | Data Type   | Description                                                                                                                          |
|------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Success                | JSON object | returns information about the device in a   `EsperDeviceInfo`  object.                                                               |
| Failure                | Throwable   | Triggers a throwable with one of the following exceptions:  <ul><li>`EsperSDKNotFoundException`</li><li>`InterruptedException`</li></ul> |

**Usage**
____
```java
sdk.getEsperDeviceInfo(new EsperDeviceSDK.Callback<EsperDeviceInfo>() {
    @Override
    public void onResponse(@Nullable EsperDeviceInfo esperDeviceInfo) {
        String deviceId = esperDeviceInfo.getDeviceId();
        if (sdk.getAPILevel() >= EsperSDKVersions.TESSARION_MR2) {
            String serialNo = esperDeviceInfo.getSerialNo();
            String imei1 = esperDeviceInfo.getImei1();
            String imei2 = esperDeviceInfo.getImei2();
            String wifiMacAddress = esperDeviceInfo.getWifiMacAddress();
            String uuid = esperDeviceInfo.getUUID();
        }
     }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
    }
});
```

When successful,   ```onResponse```  returns information about the device in a  `EsperDeviceInfo` object. Query the object with the following functions:  `getDeviceId()`, `getSerialNo()`, `getImei1()`,`getImei2()`, `getWifiMacAddress()`, and `getUUID()`.

When unsuccessful,  ```onFailure``` triggers a `Throwable` with one of the following exceptions: `EsperSDKNotFoundException` or `InterruptedException`.

### Getting Device Settings

The response contains information about device settings as well as the DPC parameters. Device Settings include device details.

**Responses**

Returns an ```InactiveADKException``` if authentication fails. 

If successful, returns a JSON object with the following key-value pairs: 

| key              | value            |
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

::: tip 
A model class may be created using this configuration. 
::: 

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

If successful, **onResponse** returns the settings in a JSON Object.

If unsuccessful, **onFailure** is called.

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

Get the device hardware component's temperatures such as CPU, GPU, Battery, or Skin in Celsius.

:::warning Requirements
Requires Android API version 24.
::: 

**Parameters**
________
| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type      | The type of requested device temperature. One of the following: <ul><li>@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_CPU}</li>  <li>{@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_GPU}</li> <li>{@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_BATTERY}</li>  <li>{@link android.os.HardwarePropertiesManager#DEVICE_TEMPERATURE_SKIN}</li></ul>         |
| source    | The source of requested device temperature. One of the following:   <ul><li>{@link android.os.HardwarePropertiesManager#TEMPERATURE_CURRENT}</li>  <li>{@link android.os.HardwarePropertiesManager#TEMPERATURE_THROTTLING}</li>  <li>{@link android.os.HardwarePropertiesManager#TEMPERATURE_THROTTLING_BELOW_VR_MIN}</li> <li>{@link android.os.HardwarePropertiesManager#TEMPERATURE_SHUTDOWN}</li></ul> |
| callback  | The callback invokes upon completion of the operation.                                                                                                                |

**Responses**
_____
| Response | Data Type                    | Description                                                                               |
|----------|------------------------------|-------------------------------------------------------------------------------------------|
| Success  | Float Array                  | List of the temperatures of give types and sources.                                       |
| Failure  | `InvalidAndroidSdkException` | Returns if the device is running Android 7 or below.                                      |
| Failure  | `InternalError`              | Returns if the device is not able to access {@link android.os.HardwarePropertiesManager}. |

**Usage**
_____

```java
/**
 * @param type     - type of requested device temperature, one of the following:
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

### Getting Removable Storage Path

Returns a cache path to removable storage (such as an SD card). Files inside this path are accessible by other applications. 

In Esper SDK version TESSARION_MR12, the Get storage path API was introduced.

:::tip
Apps using this path to access files must have ```READ_EXTERNAL_STORAGE``` granted.
:::
  
:::warning Requirements
Requires Android API level 21-29. 
:::

**Responses**
____

| Response | Data Type                        | Description                                                                                  |
|----------|----------------------------------|----------------------------------------------------------------------------------------------|
| Success  | String                           | The storage path. Example: ```storage/140C-113C/Android/data/io.shoonya.shoonyadpc/cache/``` |
| Failure  | ```InactiveSDKException```       | Returns when not authenticated.                                                              |
| Failure  | ```InvalidAndroidSdkException``` | Returns if the Android API level is **NOT** 21-29.                                           |
| Failure  | ```PathNotFoundException```      | Returns if there is no removable storage present (for example, if a USB is not connected).   |

**Usage**
______
  
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

Automatically grants permissions to your app without the need to ask an end user’s permission. 

Android 6.0 introduced “Special app access” meaning permissions such as “Display over other apps” and “usage access” need manual input from users. The Esper Device SDK allows you to automatically grant these permissions. 
The AppOp permission constants are available in the `io.esper.devicesdk.constants.AppOpsPermissions` class.

**Parameters**
___
| Parameter | Data Type                       | Description                                                                                  |
|-----------|---------------------------------|----------------------------------------------------------------------------------------------|
| appOpMode | Integer                         | integer value of the AppOp permission                                                        |
| granted   | Boolean                         | One of the following:  <ul><li>```true``` </li><li> ```false```</li></ul>                    |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Usage**
________

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

<!-- **AppOpsPermissions Constants**
________

```java 
public class AppOpsPermissions {
    // Write System settings 
    public static final int OP_WRITE_SETTINGS = 23; 

    // Screen projection 
    public static final int OP_PROJECT_MEDIA = 46; 

    //Draw over other apps 
    public static final int OP_SYSTEM_ALERT_WINDOW = 24; 

    //Get process usage stats 
    public static int OP_GET_USAGE_STATS = 43;
}

``` -->

### Manage Dock

Show or hide the Esper menu. 

In Kiosk-mode, the end user may access hidden Esper settings by tapping three times on the top-right corner or by hitting the power button three times. This method allows you to show or hide from within your app. 

**Usage**
___________

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

Configure the app. 

Managed Configurations (also known as app restrictions) allow the organization's IT admin to configure apps remotely. This capability is beneficial for organizations to apply rules on the apps deployed to a work profile.

For example, an organization might require that approved apps allow the IT admin to:

*   Allow or block URLs for a web browser.
*   Configure whether an app is allowed to sync content via cellular or Wi-Fi.
*   Configure the app’s email settings.
    

:::warning Requirements
This method is available for Android Version 21 and above. 
:::

**Parameters**
______
| Parameter              | Data Type                       | Description                                                                                  |
|------------------------|---------------------------------|----------------------------------------------------------------------------------------------|
| appConfigurationString | String                          | A JSON-style configuration string. See the Schema section below.                                                           |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Usage**
_________

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

Schema:

*   The managed app configuration JSON schema:
    
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

Method to push data that needs to be stored and synced with Quantum but does not need to be fetched or handled by the Quantum Telemetry System.

**Parameters**
_______
| Parameter | Data Type | Description                                                          |
|-----------|-----------|----------------------------------------------------------------------|
| name      | String    | Name of the Custom Telemetry Data Type.                               |
| id        | integer   | ID of the Custom Telemetry Data Type. Must be between 2000 and 3000. |
| data      | ?         | The data pertaining to the Custom Telemetry type.                    |

**Usage**
____

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

Reboot the device. 

:::tip Requirements
Requires Android 7.0 and above. 
::: 

Once the reboot method is called, the device will be rebooted. 

The Reboot API was introduced in Esper SDK version ``` TESSARION_MR5```.

A callback in arguments is required to enable the ```Reboot``` function. 

**Usage**
______

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

Remove an APN configuration. 

**Parameter**
___
| Parameter | Data Type | Description                                                          |
|-----------|-----------|----------------------------------------------------------------------|
| APNID     | Integer   | The APN ID. (Returned by ```addNewApnConfig```).                      |

**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| 1  | Integer   | Success                                              |
| -1  | Integer   | Failure                                            |

**Usage**
____
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

### Set APN as Default

Set the default APN. 

**Parameter**
___
| Parameter | Data Type | Description                                                          |
|-----------|-----------|----------------------------------------------------------------------|
| APNID     | Integer   | The APN ID. (Returned by ```addNewApnConfig```).                      |

**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| 1  | Integer   | Success                                               |
| -1  | Integer   | Failure                                           |


**Usage**
_____

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

### Set Brightness

Set the device’s brightness. 

**Paremeters**
___

| Parameter | Data Type                     | Description                                                                 |
|-----------|-------------------------------|-----------------------------------------------------------------------------|
| scale     | Integer                       | The percentage of brightness for the device.                                |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| true  | Boolean   | Success                                               |
| false  | Boolean   | Failure                                           |

**Usage**
___

```java

// scale: Integer. The percentage of brightness for the device.
// EsperDeviceSDK.Callback for the results. Response is boolean with
// true = success.
// false = an error occurred.

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

Set the device’s orientation. 

We support five orientations:

1. AUTO
2. PORTRAIT
3. INVERTED PORTRAIT
4. LANDSCAPE
5. INVERTED LANDSCAPE

**Parameters**
____
| Parameter   | Data Type                     | Description                                                                                                                                                                                                                              |
|-------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| orientation | String                        | One of the following:  <ul><li>ROTATION_STATE_AUTO</li> <li>ROTATION_STATE_PORTRAIT_ONLY</li> <li>ROTATION_STATE_LANDSCAPE_ONLY</li> <li>ROTATION_STATE_INVERTED_PORTRAIT_ONLY</li> <li>ROTATION_STATE_INVERTED_LANDSCAPE_ONLY</li></ul> |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |                                                                                                                                                           |

**Usage**
___

```java

Orientation option: String. Constants for multiple options are defined in the EsperDeviceSDK class.
ROTATION_STATE_AUTO
ROTATION_STATE_PORTRAIT_ONLY
ROTATION_STATE_LANDSCAPE_ONLY
ROTATION_STATE_INVERTED_PORTRAIT_ONLY
ROTATION_STATE_INVERTED_LANDSCAPE_ONLY

Use EsperDeviceSDK.Callback for the results.

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

Set global settings. 

Global system settings contain preferences that apply to all users. Applications may read but cannot write to these settings. Users must explicitly set these preferences from the UI. 

The following is a list global settings which **doesn't need supervisor:**

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

**Parameters**
___
| Parameter | Data Type               | Description                                          |
|-----------|-------------------------|------------------------------------------------------|
| key       | String                  | The name of the global setting.                      |
| value     | String                  | The value of the global setting.                     |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

Key-value Reference:

*   To know about possible key-value pairs, refer to official Android documentation on Global Settings [https://developer.android.com/reference/android/provider/Settings.Global](https://developer.android.com/reference/android/provider/Settings.Global)

**Usage**
___

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

### Set System Settings

Set system settings.

System settings contain miscellaneous system preferences. This table holds simple key/value pairs. `setSystemSettings` are convenient functions for accessing individual setting entries.

**Parameters**
___
| Parameter | Data Type               | Description                                          |
|-----------|-------------------------|------------------------------------------------------|
| key       | String                  | The name of the system setting.                      |
| value     | String                  | The value of the system setting.                     |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

Key-Value Reference:

*   To learn about possible key-value pairs, refer to official Android documentation on System Settings.
    
[https://developer.android.com/reference/android/provider/Settings.System](https://developer.android.com/reference/android/provider/Settings.System)

**Usage**
____

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

### Start or Stop Mobile Data

Mobile data can be started or stopped. 

:::warning Requirements
Requires supervisor plugin on Android 5.0+.
:::

**Parameters**
____
| Parameter  | Data Type               | Description                                                                                        |
|------------|-------------------------|----------------------------------------------------------------------------------------------------|
| true/false | Boolean                 | One of the following:  <ul><li>true: start mobile data</li> <li>false: stop mobile data </li></ul> |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| true  | Boolean   | Success                                               |
| false  | Boolean   | Failure                                           |

**Usage**
____

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

### Start or Stop Wifi-Hotspot

A Wi-Fi hotspot can be enabled or disabled with a provision to set SSID and password. 

For a password-protected hotspot, a minimum of an eight character password needs to be provided. The call will be failed for characters less than eight and greater than zero.
If the hotspot is created successfully, the method returns `success`. 

An empty password will create an open Wi-Fi hotspot. 

**Parameters**
______

| Parameter  | Data Type | Description                                                                                               |
|------------|-----------|-----------------------------------------------------------------------------------------------------------|
| SSID       | String    | Name of the hotspot.                                                                                      |
| Password   | String    | Passwords are required to be eight characters or longer. An empty password creates an open Wi-Fi hotspot. |
| true/false | Boolean   | One of the following:   <ul><li>true: start hotspot</li> <li>false: stop hotspot </li></ul>               |

**Usage**
____
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

Update an existing APN configuration. 

**Usage**
____

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

### Whitelist USB for an App

Whitelist a USB device for a particular application, granting permission for that application to use the USB device.

You can obtain the USB device's Product and Vendor IDs using the [Android UsbDevice API](https://developer.android.com/reference/android/hardware/usb/UsbDevice).

:::warning Requirements 
This API is only available on Samsung KNOX enabled devices & is available from the Esper Device SDK version SUNFYRE_V8.
:::

**Parameters**
___
| Parameter   | Data Type               | Description                                                                    |
|-------------|-------------------------|--------------------------------------------------------------------------------|
| packageName | String                  | The package name of the application that USB device should be whitelisted for. |
| vendorId    | Integer                 | The Vendor ID of the USB device.                                               |
| productId   | Integer                 | The Product ID of the USB device.                                              |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Usage**
___

```java
sdk.whitelistUsbDeviceForPackage(
       "com.example.app",
       20,  // USB Vendor ID
       20,  // USB Product ID
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
});
```

### Clear USB Whitelist for an app

Clear all USB devices that were whitelisted for an application using the **whitelistUsbDeviceForPackage** SDK method.

::: warning Requirements 
Only available on Samsung KNOX enabled devices & is available from the Esper Device SDK version SUNFYRE_V8.
::: 

**Parameters**
___

| Parameter   | Data Type               | Description                                                                    |
|-------------|-------------------------|--------------------------------------------------------------------------------|
| packageName | String                  | The package name of the application that USB device should be whitelisted for. |
| ```EsperDeviceSDK.Callback```  | callback | The callback implemented once the callback succeeds. |

**Usage**
____

```java
sdk.clearUsbDeviceWhitelistForPackage(
       "com.example.app",
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
});
```

### Get USB Permission Manager

Returns an instance of `UsbPermissionManager` which can be used for granting or denying USB device/accessory access permissions to packages.

:::warning Requirements
Only available for x86, x86_64 and arm64 GSI devices running Esper Foundation for Android.
:::

**Usage**
____

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

### About the UsbPermissionManager

Compared to the default permission manager of Android, this one can persist permissions across package re-installations, as this one uses the package name instead of UID.

Here it is possible to grant or deny access for all USB devices and accessories to a package in one go, instead of the default one that operates on individual device identifiers.

:::tip
Unless explicitly granted, permissions are considered denied by default.
:::

### Check USB Access Permissions for an App

Check the USB's access permissions for an app. 

**Parameters**
___
| Parameter   | Data Type               | Description                                                                    |
|-------------|-------------------------|--------------------------------------------------------------------------------|
| packageName | String                  | The package name of the application. |


**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| true  | Boolean   | Success                                               |
| false  | Boolean   | Failure                                           |

**Usage**
____

```java
try {
    boolean granted = usbPermissionManager.isAccessGranted("com.example.app");
} catch (EsperSdkException t) {
    Log.e(TAG, "onFailure: ", t);
    showFailureResult(t);
}
```

### Grant or Deny USB Access Permissions for an App

Grant or deny USB access permissions for an app. 

**Parameter**
___
| Parameter   | Data Type               | Description                                                                    |
|-------------|-------------------------|--------------------------------------------------------------------------------|
| packageName | String                  | The package name of the application. |


**Responses**
_____
| Response | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| true  | Boolean   | Success                                               |
| false  | Boolean   | Failure           |

The example shown below will grant permissions to the app identified with package name <code>com.example.app</code>. Grant status <code>false</code> will deny the permission.

Once granted via here, the apps no more need to request for permission via <code> ACTION_USB_PERMISSION </code> intent.

**Usage**
___

```java
try {
    usbPermissionManager.setAccessGranted("com.example.app", true);
} catch (EsperSdkException t) {
    Log.e(TAG, "onFailure: ", t);
    showFailureResult(t);
}
```

### Turn Wifi/Bluetooth for the Device to On/Off

Turn Bluetooth or Wi-Fi off or on for a device. 

**Parameter**
_____
| Parameter | Data Type | Description                                      |
|----------|-----------|--------------------------------------------------|
| true/false  | Boolean   | Choose one of the following: <ul><li>true: ON </li><li>false: OFF</li></ul>                                               |

**Usage**
___

This method starts processing the Bluetooth/Wi-Fi to true(ON) or false(OFF), but does not necessarily guarantee a state change. 

* For the best results, add a listener if the state change is successful. For Bluetooth, you will need to use `BluetoothAdapter.ACTION_STATE_CHANGED`. 


```java
sdk.changeSettingsState(EsperDeviceSDK.BLUETOOTH,true, new EsperDeviceSDK.Callback<Boolean>() {
    @Override
    public void onResponse(@Nullable Boolean response) {
        if (response) {
            Log.e(TAG, "response: " +response);
        }
    }
})
```

### Install an APK from a Public Folder 

Use this method to install an APK from a public folder. 

**Parameters**
___
| Parameter   | Data Type               | Description                                                                    |
|-------------|-------------------------|--------------------------------------------------------------------------------|
| packageName | String                  | The package name of the application. |
| apkPath     | String                  | The complete path to the APK.        |

**Usage**
___

```java 
sdk.installApp(packageName, apkPath, new EsperDeviceSDK.Callback<Boolean>() {
    @Override    public void onResponse(Boolean esperApkInstall) {
        showMethodResult(esperApkInstall.toString());    }
    @Override    public void onFailure(Throwable t) {
        showFailureResult(t);    }
});
```

### Power Off the Device

Use this method to power off the device. 

:::warning Requirements
This method is only available for Knox-supported devices & CSDK-supported devices.
:::

**Usage**
___

```java
sdk.powerOff(new EsperDeviceSDK.Callback<Boolean>() {
                @Override
                public void onResponse(@Nullable Boolean response) {
                    Log.d(TAG, "performPowerOff: onResponse: " + response);
                    showMethodResult(getString(R.string.result, "" + response));
                }
    
                @Override
                public void onFailure(Throwable t) {
                    Log.e(TAG, "performPowerOff: onFailure: ", t);
                    showFailureResult(t);
                }
            });
```


