# Esper Device SDK



The Esper Device SDK exposes an API to conduct privileged operations on Esper Managed devices. The SDK can be used to develop apps which need to perform seamless operations on or retrieve vital information out of a device.

In it's current development state, the SDK provides limited features but the list shall grow exponentially with time.



Current version: 1.1

Release name: Tessarion_MR1

Table of Contents: 

- Downloading the SDK
- Initializing the SDK
- Getting Device Info
- Clearing App Data
- Manage AppOp Permissions
- Manage Dock




## Downloading the SDK

Download the .aar file of the SDK from [here](https://downloads.esper.io/device-sdk/esperdevicesdk-release-feb-14-2020.aar) and copy the aar inside the libs folder of your project and add the following line to your app’s gradle file inside the dependencies section.

```
implementation files('libs/esper-device-sdk.aar')
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
    public void onResponse(@Nullable EsperDeviceInfo response)
        String deviceId = response.getDeviceId();
    }

    @Override
    public void onFailure(Throwable t) {
        t.printStackTrace();
    }
}));

```

onResponse callback will be called if the device info is successfully retrieved from the device. The device information is stored in an `EsperDeviceInfo` object. The object can be further queried to retrieve several bits of information such as `getDeviceId()`.

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
