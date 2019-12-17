# Console

Click on Below Links to read about various sections of the Esper Dashboard <br />

## Manage Home

This page explains the functionality of the Esper Home Dashboard.

There are four tile sections on the Home Dashboard page:

### 1\. Deployment Status

This tile shows the current deployment status of the devices for the current customer environment and includes a clickable link to number of Active, Inactive, Under Provisioning and Recently Added devices. Clicking on each takes the user to the [Device Dashboard](./console.md#devices) showing the corresponding category of devices.

### 2\. Security Summary

The Security Summary tile shows a summary of security status of the deployed devices. It shows how many of them are at High Risk, Medium Risk, Low Risk and No Risk. Clicking on each takes the user to the [Device Dashboard](./console.md#devices) showing the corresponding category of devices.

### 3\. Where are your Devices?

This section gives an overview of the location where all the devices are deployed. You can see a world map showing locations of all the devices in Map and Satellite View. It can be made full screen and user has options to zoom in and zoom out. There is also a summary of cities worldwide containing the highest number of devices.

### 4\. Alerts Status

The Alerts Status tile gives a summary of Alerts you've created and Alerts that have been fired for each of the created Alerts. The Alert name can be selected from the dropdown and the number of Alerts fired will then be shown.

## Dev Home

Read about the Developer Tools and Documentation here -

- **Esper API Keys** - Get API Key and Enterprise ID to be able to access Esper APIs to integrate in your app development code. See here - `https://{{ esper_tenant_name }}.esper.cloud/developer-console/`
- **Esper API Reference** - Checkout all APIs that you can use to manage your dedicated devices at [Esper APIs](https://api.esper.io) using HTTP/REST framework.
- **Esper SDK For Python** - Install SDK for python using instructions [here](./pythonsdk.md)
- **Esper CLI** - Quickly execute CLI commands to install/uninstall/manage deployment on your provisioned devices
- **Esper Plugin For Android Studio** - Use Esper Plugin to easily deploy new versions of your app onto Esper dashboard and to your dedicated devices. This plugin enables you to remotely view/control your devices on Android studio as well.
- **Esper Docs With Quick Starts** - This is one stop for all documentation regarding API, CLI, SDK, Plugin and Console.

## Provision Device

Provisioning is the initial step to configuring and managing your Android device using the Esper Management Console and associated developer tools.

Esper provides multiple methods of provisioning a device, which involves downloading the Esper Agent onto the device and configuring it according to the provisioning settings used for a Device Template. The supported provisioning methods are as shown in the following image - 

![Provisioning](./assets/provisioning/provisioning1.png)

You may provision your device using any of the four methods given the pre requisites mentioned are met. To see the detailed steps, hover your mouse over any of the provisioning methods and `Provision` button appears. On clicking the same, detailed steps for the selected method will start showing.

![Provisioning](./assets/provisioning/provisioning4.png)

If you find choosing between these methods confusing, for your convenience, we have provided an easy way to choose a provisioning method by filling the form on the right side. User needs to fill the following sections - 
- Android version - Check the android version on your device by going to Settings -> About ->  Android Version

   ![Provisioning](./assets/provisioning/provisioning2.png)
   
   Choose the android version of your device from the drop down menu. 
   
:::tip
Kitkat, Lollipop, Marshmallow etc are Google names for android versions 4.4, 5.0, 6.0 and so on.
:::

   ![Provisioning](./assets/provisioning/provisioning3.png)

- Esper Enhanced - Esper Enhanced Android is purpose-built optimized Android OS with enhanced performance, security and features such as zero touch provisioning, remote adb debugging and OTA android updates. Esper provides Esper Enhanced devices on request from customers. Choose `YES`, if your devices are Esper Enhanced.

- GMS support - Choose `YES`, if your android device supports Google Mobile Services. If Play Store app exists in your device, your device is a GMS device.

![Provisioning](./assets/provisioning/playstoreicon.png)

- Camera -  Choose `YES`, if your device has a working camera.

Finally, click on `Suggest Provisioning Method`. 

Based on your selection, you will be suggested with one out of the four provisioning methods which will get highlighted. Click on the same to see the steps to provision your device.

The four methods of provisioning have the below pre requisites. Click on each topic to know more.

1.  [AfW provisioning](./console/device-provisioning/afw-provisioning/index.md) - AfW (Android for Work) method is best used for:

    - Devices that have GMS (Google Mobile Services) support enabled
    - Devices with a camera for QR code scanning
    - Android 6.0 and above
    - Factory reset required

2.  [QR Code Provisioning](./console/device-provisioning/qr-code-provisioning/index.md)

    - Devices that have GMS (Google Mobile Services) support enabled
    - Devices with a camera for QR code scanning
    - Android 7.0 and above
    - Factory reset required

3.  [Provisioner Tool](./console/device-provisioning/adb-provisioning/index.md) - Provisioner Tool is a user friendly provisioning tool by Esper. This can be used conveniently to provision -

    - All Android Devices - GMS or Non-GMS
    - Devices with or without camera
    - Devices running old as well as new Android versions (inclusive of Android 4.4, 5.1 and so on)
    - USB cable required to connect device for adb access from developer options
    - Factory reset required

4.  [Seamless provisioning](./console/device-provisioning/imei-or-serial-number-based-provisioning/index.md)
    - Used for Esper Enhanced Android Devices
    - IMEI/Serial Number method is use for bulk provisioning of devices
    - Enables zero touch provisioning

    :::tip
    In case a device gets stuck during provisioning, we have introduced a cheat way to skip out of it. Tap 7 times on Esper logo on provision screen to show reset button if this action needs to be performed during the provisioning process.
    :::

If you still have trouble figuring the provisioning process, Esper support will be happy to assist you. Please contact us on andi@esper.io or support@esper.io.

## Device Template

### How to use Esper's Device Template.

Device Template is a one stop means for you to quickly provision your device. It lets you create a profile for the device where you may choose the policy, apps, device settings, Device Group, and the wallpapers that you want to be provisioned on the device. Device Templates can be created, saved, and used to provision at a later point.

### Steps to create a Device Template.

1.  Click on 'Device Template'.
2.  Click on 'Create Template'.
3.  Enter a name for the Device Template. Click `Next`.

![Device Template](./assets/OLD_DASHBOARD/1_DT.png)

### In the Policy section

Policy is a standard set of rules or permissions that are related to security of the devices and apps that admin can apply on the devices to be provisioned via template. Admin may set default app permissions, Android setting app, system updates, password rules, and turn on the toggle buttons for the settings he/she wishes to enable on the devices.

Below is a list of features you can turn on or off in the policy section. These are part of our standard Compliance policy that can be configured and reapplied as per requirements of the customer after provisioning.

### Dropdown menus

1.  **Device Password Rules** \
    If you choose alphabetic or alphanumeric, a minimum password length can be entered. The default minimum password length is 4. The Password rule is a policy that specifies the rules for the device unlock password that users can set.

    - **Alphabetic**: Restricts acceptable password to contain only alphabetic characters (A to Z) in both upper and lower case.

    - **Alphanumeric**: Expands from Alphabetic to also include numbers and special characters.

    - **None**: There is no password required to lock the device.

    The password for a device is setup during the initial setup of the device by the user.

2.  **Default App Permission** \
    Default app permissions determines enforcement of the runtime-permission rule across all the apps on a device (e.g. Gallery, Camera).

    - **Allow automatically**: This rule will grant all the permissions any app requests without showing a prompt to the user.

    - **Ask user**: This keeps the default behavior intact with regards to permission management. All apps on the device will show a prompt to the user to request permission. For example, by choosing this option then every app will ask the user each time before accessing a device module with a message such as “Allow app X to access Gallery? Allow/Deny”

    - **Deny automatically**: This rule will deny any permission request from any app on the device.<br/>

3.  **System Updates** \
    The System updates option allows you to enforce a system update policy on the device when a system update/OTA update is available.

    - **Update automatically**: Enforcing this rule will install any OTA update automatically and reboot the device without requesting the user.

    - **Postpone installation**: This option postpones installation of an OTA update for 30 days.

    - **Windowed installation**: This option allows you to define a time window during a full day period inside which the OTA update will be installed.

     <br/>

4.  **Android Settings App** \
    Android settings app determines how users can access the Android device settings.

    - **Default setting app**: Selecting this will show the icon for the default Android settings app. Clicking this icon will take the user to the default Android settings.

    - **No settings app**: No icon for any settings app will be available for the user to choose from the device’s dashboard.

    - **Esper settings app**: 

       Esper offers a custom Settings’ app that limits the user to only a subset of the available Android settings. This app is made secure via the Esper settings app password protection. Settings provided via this app are limited to:
        1. Changing the Wi-Fi Access Point

        2. Enabling the “flashlight” if there’s a camera flash LED on the device

        3. Control the display orientation of the device.

        4. A robust means for users to be able to factory reset their device irrespective of the policy. 
        
        5. About - We have added information regarding provisioning endpoint in the about section for the user to be able to view the endpoint name the device is registered in, in case they have access to multiple endpoints.
        
        6. Kiosk app - An option to switch the kiosk app from this menu. User can choose any installed app on device to act as the kiosk app.
        
        7. Esper Branding - User can turn off the Esper logo in case they wish to use their own logo as a reseller of Esper platform.
    

    ![](./assets/esperSettingsApp/espersettingapp1.png)

5. **Dock & Empty Settings App Password** <br> 
    In Kiosk mode, Device user can access a hidden dock consisting of menu items such as Esper settings app by tapping 3 times on top right corner or by clicking the power button 3 times. This text field is to protect accessibility for this feature via password.  The dock menu consists of multi-app mode - kiosk mode switch, Esper settings app and Power button. 

    ![](./assets/esperSettingsApp/espersettingapp2.png)

    The textbox here accepts the common password for Dock and the Esper Settings App. It is now acceptable to not have any password for these features for the ease of device users. Esper, however, recommends that passwords are setup for stronger security.
    <br/>

### Google Account Restrictions

 This feature gives users an option to restrict the number of Google accounts that can be added on the device and be used with Google apps such as Gmail, Google Play Store, Youtube etc. By default, the addition of any number of accounts is allowed, however, if the admin applies a Compliance policy by checking the box shown below, the number of allowed accounts will be restricted to the admin entered value. For example, if the admin has set it to 2, after adding two accounts on the device, further addition (or deletion) of accounts will not be possible unless a different Compliance policy is reapplied.
Note: If user has not checked this box in the applied policy, it is recommended that they disable Google Play Store to prevent installation of unapproved apps.

![Google Account Restrictions](./assets/GoogleAccountid/googleaccountpermission1.png)

:::tip
The Google Account Restriction feature is applicable only to GMS android devices ie the android devices that support Google Mobile Services.
:::

### Factory Reset Protection 

FRP or Factory Reset Protection enables you to lock your device if a user tries to factory reset it via soft/hard keys. In case of a factory reset, the device will get locked and will only be reusable by a pre-authorized google account ID. See Policy section in docs to know how to get your google account id. Note that this feature is only available on android versions 5 and above. <br>

![Factory Reset Protection](./assets/GoogleAccountid/factory_reset_protection.png)

On turning on the FRP button, user needs to enter the Google ID of the account they wish to authorize to enable usage of the device post factory reset. <br/>

See [here](./console/policy-management/getgoogleaccount.md) to know how to get the Google account ID of your account and how FRP protects your device.

Other Template Compliance Policy Toggle Buttons-<br>

1.  **Lock Screen**<br> If Locked screen is switched ON, it enables the default “lock screen” to be displayed upon a screen timeout as specified in the Settings section. If it is enabled, the user has an option to set the password rule in the dropdown above. <br/>
2.  **Safe-Mode Login**<br> Turn Safe mode login On to allow users to boot to safe mode on their device. Leave Off to prevent Safe mode login.<br/>
3.  **Factory Reset**<br> Factory reset dictates whether or not the user can perform a factory reset on the device. Turning it Off prevents a factory reset by the user. This is not inclusive of the hard key factory reset. <br/>
4.  **Notification bar**<br> Notification bar dictates whether or not a user can swipe down to display the notification bar. Turn On to enable access to the Notification bar. <br/>
5.  **Screenshot**<br> Screenshot allows or prevents a user from taking screenshots on the device using available screenshot actions. Turn On to allow screenshots. <br/>
6.  **USB connectivity**<br> USB connectivity allows or prevents the user to be able to communicate via USB on-the-go. Turn On to allow. <br/>
7.  **SMS**<br> SMS controls the ability of the device to send or receive SMS. If it is turned Off it prevents the device from using SMS regardless of which SMS app is used. Turn On if you wish to enable the device to send and receive SMS. <br/>
8.  **Outgoing calls** <br> Outgoing calls determines whether a user can make outgoing calls from the device. Turn On to allow outgoing calls, turn Off to prevent. <br/>
9.  **Camera Access**<br> Camera access allows or prevents a user to access the device’s camera. Turn On to allow.<br/>
10. **NFC** <br> NFC controls the device’s ability to use NFC if it is supported by the device. Turning Off prevents the device or any app from using NFC. Turn On if any of your apps require NFC. <br/>
11. **Google PlayStore**<br> Google PlayStore determines if the Google PlayStore app is available to the user on the device. Turn On to allow the user access to the Google PlayStore of admin approved Google Play Apps.<br/>
12. **USB tethering**<br> USB tethering specifies if the user is able to use their device to share a mobile connection to another device such as a laptop<br/>
13. **Edit date and time**<br> Edit date and time determines if the user can change the date and time on device. Turn On to allow changes by the user. <br/>
14. **Application uninstall**<br> For devices running Android 4.4 or 5.1, turning this setting On will block app uninstallation, especially important for private apps. This setting is not needed if you are running Android 6.0 or above. <br/>
15. **USB File transfer** <br> Turning off USB file transfer will prevent the user from transferring files from the device to a computer and vice versa using a USB cable<br/>
16. **Google Assistant** <br> Enables/disables voice command via Google Assistant. Available only for Android devices supporting Google Assistant. For example - If you wish to have Google Play Store show up on the device, you may turn on the toggle button. <br> 
17. **Local App Install**<br>This feature allows installation of apps from unknown sources on the device. To enable this on the device, the user needs to follow these instructions. Settings->Apps and notifications-> Special app permissions ->Install Unknown Apps and choose the route they wish to install the apps from. For example, if device user chooses Chrome, they will be able to download and install apps from the Chrome browser on the device. If turned Off, the device user will not be allowed to install apps from any unknown sources.<br>

![LocalAppInstall](./assets/policy/localappinstall.png)
 <br/>

### Restrict outgoing/incoming calls using customised dialer.

![Restrictcall](./assets/policy/restrictcall.png)

If clicked, this opens up two more checkboxes-<br>

1.  `Restrict incoming calls to uploaded contacts only <upload a CSV file of allowed contacts>`<br>
2.  `Restrict outgoing calls to uploaded contacts only <upload a CSV file of allowed contacts>`<br> In order to restrict phone numbers that can make or receive calls to the device, upload a .csv file with the allowed phone numbers.<br>

:::tip
All numbers must be preceded by +country code (for example +1 for US). All numbers must be separated by comma.
:::

<br> <br/>
Compliance Policy Section of the Device Template - 
![Device Template](./assets/OLD_DASHBOARD/newpolicytemplate.png) <br> <br/> You may reset these values to default at any time by clicking `Reset to Default` button at the bottom. <br> <br/> Click `Next`. <br> <br/>

### In the Apps section

In this section, you can select 'Kiosk mode' to pin an app during startup or 'Multi application mode' to give device-users access to the Home screen. You can choose the apps that you would like to have installed on your device during provisioning. You may choose from install apps you uploaded via [App Management](./console.md#apps) or install apps from Google Play Store that you approved via [Play For Work](./console/play-work/index.md).

As seen in image below, the first step is for user to choose whether they want to provision their device in kiosk or multi app mode by clicking on the radio button.

![Device Template](./assets/OLD_DASHBOARD/devicemode.png)

1.  **Kiosk mode** - This mode pins the selected private app as the default app that stays pinned on the device screen permanently unless user exits the kiosk mode. This mode is useful for cases where device is single purpose and only app needs to run on it and admin does not wish device users to be able to interact with the device in any other manner. For example airport kiosks.

2.  **Multi-app mode** - In multi app mode, user is free to use any private app, google play app or preloaded (in-ROM) app which are approved and installed by the admin. It is closely similar to BYOD but admin retains the control of the apps that are usable by the device user. For example a grocery delivery company wants their delivery person using the device to be able to use company app as well as the google maps.

### Default Android Launcher 

The next section is a simple checkbox labeled "Default Android Launcher" - 
This feature gives user an option to choose Esper Agent to run in the background as an app instead of being permanently pinned on the screen. 

![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc.png)

When this box is **checked**, the default android launcher will be active and user can exit Esper Agent (DPC) like any other android app. Esper Agent (DPC) will continue to run in the background and execute device management functionality. Many of Esper features will not be applicable if this version of Esper Agent (DPC) is installed.

If the Default Android launcher is **unchecked**, Esper Device agent will take admin control of the device and only approved apps can be installed or used. All features of Esper Device agents will be functional in this case. This use case gives more control to the Dashboard admin on the apps that a device user may use and actions that can be taken on the device. 
<br>

Here is a list of Esper features that will be **unavailable in the default android launcher (also known as launcherless mode)**  as it applies the launcherless version of the Esper Device agent -

• Capture Screenshot <br> • Remote View and Remote Control<br>  • Over the Air OS updates for Esper Enhanced Android OS<br> • Latest Device Agent updates for Devices with Android version less than 6.0



The device screen will look similar to a regular android device with `Esper Device Agent` showing up as an app that can be opened and closed.

![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc1.png)

Even when user has exited the `Esper Device Agent` they will be able to see it running in the background in the notification bar as follows -

![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc2.png)


- **Preloaded Apps** - The next section is of Preloaded (IN-ROM) apps where user may enter package names of apps that are already existing in the device to approve them to show up on the device after provisioning. The package names must be entered separated by commas.

  ![Device Template](./assets/template-app/preloadedapps.png)

- **Private (uploaded) Apps** - The next section is for Private(uploaded) apps. User needs to upload APK files on App Management previously. Once uploaded, in template, user may click on the app from the dropdown, select the version and click on `Add` to add the private app to the template.

   ![Device Template](./assets/template-app/privateapps.png)

- **To add app from Play Store list** - click on the apps to add from the list of available apps. This section is a little tricky because user needs to approve the Google apps from Play Store or Play for Work section before they are able to choose them in this section.


   ![Device Template](./assets/template-app/playstoreapps.png)

For convenience, a PlayStore tab has been provided on this page where users can approve Google apps that need to be added to template.

   ![Device Template](./assets/template-app/playstoreicon.png)


:::tip
Only once you [Approve a Google Play Store App](./console/device-template/how-approve-google-play-store-app/index.md), you may add it from the list shown in the Device Template.
:::

Click `Next`.

### In the Branding section

Upload landscape and/or portrait wallpaper.

![Device Template](./assets/OLD_DASHBOARD/11_DT.png)

There is an option to Preview the uploaded wallpapers:

![Device Template](./assets/OLD_DASHBOARD/11.1_DT.png)

Click `Next`.

### In the Settings section

Change Device settings from Esper Dashboard. Following are features available <br> 

- Turn on/off bluetooth <br>
- Select screen timeout duration <br>
- Select screen orientation <br>
- Select GPS accuracy <br>
- Increase/decrease Brightness, Volume (alarm, notification, ring and music) <br>
- Timezone  - With our supervisor plugin, we have enabled you to change timezone of device remotely via dashboard.

![Esper Timezone](./assets/settings/timezone.png)

Here is a complete screenshot of Template Settings page <br> ![Device Template](./assets/OLD_DASHBOARD/12_DT.png)

Click `Next`

### In the Group section

Select an existing Group or create a Group. The devices provisioned using this device profile will be a part of the selected Group. Click `Next`:

![Device Template](./assets/OLD_DASHBOARD/13_DT.png)

Click `Next`

### On the Preview screen

You will see a preview of the entire device template. If you wish to edit your settings, use the 'Back' button to go back to the appropriate screen:

![Device Template](./assets/OLD_DASHBOARD/14_DT.png)

Click 'Save'. You will see a pop-up to confirm your settings. Click `Okay`:

![Device Template](./assets/OLD_DASHBOARD/15_DT.png)

The Device Template you just created will now be visible on the Device Template page. You can search for it in the search bar. Click on it to view the Device Template. Click on 'View QR code' to provision a device using this template directly from your Device Template.

On clicking the View QR code, there is also an option to download the config.json `Download Config` file that can be used during ADB and IMEI provisioning:

![Device Template](./assets/OLD_DASHBOARD/19_DT.png)

You can also Preview, Edit, Duplicate & Delete the template:

![Device Template](./console/images/temp_2.png)

Click on the ellipsis (...) on the template tile to preview, edit, duplicate or delete a template.

### Preview Template

![Device Template](./assets/OLD_DASHBOARD/17_DT.png)

Click on the `Preview` option to preview the device template. Click on the `+` sign to expand and then check selected individual components.

### Edit Template

To edit any template, click on the `Edit Template` option. Policy, Apps, Branding, Settings, Group and Add devices options can be updated as required. To save the changes, click on the `Update` button on the Preview page.

### Add Devices (IMEI Provisioning)

![Device Template](./assets/OLD_DASHBOARD/13.1_DT.png)

While editing a template, you also have the option to add IMEI/Serial numbers of devices you want to provision with this template. There is a section `Add devices` that appears if you click on `Edit Template`. Using this section, user can upload IMEI and Serial numbers. See details on IMEI Provisioning via Template [here](./console/device-template/imei-provisioning-template/index.md).

### Delete Template

![Device Template](./assets/OLD_DASHBOARD/18_DT.png)

Click on the `Delete Template` option on top right to delete a selected template.

## Devices

This section talks about understanding how to manage your Esper provisioned device after the provisioning steps are complete.

It consists of the following sections -

1.  [Getting Started](./console.md#getting-started)
2.  [Categories](./console.md#categories)
3.  [Search](./console.md#search)
4.  [Device Tile (also, Grid View)](./console.md#device-tile)
5.  [Map View of Devices](./console.md#map-view)
6.  Further Device Management functionalities found on clicking the `Details` button for an **individual device** are listed as follows -

    a. [Device information](./console/device-management/-/index.md#information) - Hardware, software, memory, location, storage and other detail of the device.

    b. [Actions](./console/device-management/-/index.md#device-actions) - Admin can take actions such as reboot, lock, lockdown, ping or exit kiosk mode.

    c. [Event Feed](./console/device-management/-/index.md#event-feed) - Admin can view event feed log of the device.

    d. [Device Graphs](./console/device-management/-/index.md#device-graphs) - Admin can view in graphical format 15 unique device metrics represented for individual devices.

    e. [Apps](./console/device-management/-/index.md#apps) - Admin can un-hide preloaded apps, install/uninstall private apps and hide installed google apps from here. Admin also has the capability to clear app data for supported apps from this section.

    f. [Compliance Policy](./console#compliance-policy) - Admin can apply pre-created compliance policy on the selected device from this section.

    g. [Security](https://docs.esper.io/home/console/device-management/-/#security) - This section gives details regarding the security status of the device.

    h. [Remote View](./console/device-management/-/index.md#remote-viewer) - Admin can remote view the device if device user accepts the request.

    i. [Capture log](./console/device-management/-/index.md#capture-logs) - Admin can capture device's android bug report front his section in case any issue arises.

### Getting Started

If you are logging in to your endpoint for the very first time you will see the following screen which gives you a choice to either provision a device or Simulate a device.

![Simulare](./console/images/simulare-1.png)

You can choose to provision a real Android device the details to which are provided in the [Provision Device](./console/device-provisioning/index.md) section of this documentation. Or you may choose to Simulate a Device. You will see a momentary "You are all set!" message after which a mock device will be available for you to experiment and play around with till you provision an actual device.

![Simulare](./console/images/simulare-2.png)

Simulare helps you explore the Esper platform without using a real device. We provide this simulated device to act as an actual device to help you experience the capabilities of our platform.

Capabilities such as Apps, Remote View and Capture log might not be available on a Simulated device.

This device is only available for new signups currently. Please note that trial accounts created on or after September 27, 2019 will have this feature enabled. Accounts created before that will not. Please reach out to us at support@esper.io if you signed up before September 27, and would like to try out Simulated devices.

### Categories

There are checkboxes on the top of the page with categories such as  that can be checked to view devices in each particular state-
 - Active - currently online  
 - Inactive - currently offline
 - Under provisioning - devices undergoing provisioning 
 - Devices with low battery - devices with battery under 30% charging
 - Recently added devices - devices provisioned within the last 3 days
 - Low risk devices - device with security status low
 - Medium risk devices - devices with security status medium
 - High risk devices - devices with security status high
 - No risk devices - device with security status 'secure'


 See the [Security](https://docs.esper.io/home/console/device-management/-/#security) section to know how the security status of a device is determined

 


### Search

Search is provided on the top right where you can search for devices in Devices using the Esper assigned device code which is displayed on the device homepage.

### Device Tile

The default view is Grid, but the user can click on Maps to access the map view. Under the Grid view each device will be represented as tiles in the ‘Device management’ tab with a summary of all device information such as location, network, health, and risk status of the device. Click on [View More](./console/device-management/-/index.md) on the tile for any individual device to see further actions and changes that can be made for this device:

![Device Management](./assets/OLD_DASHBOARD/1_DM.png)

Devices listed 'Under Provisioning' refer to devices where Google Play apps are getting updated:

![Device Management](./assets/OLD_DASHBOARD/Under_Provisioning.png)


Devices which have been enrolled on to your Esper Cloud are provisioned devices:

Example 1- 
This is a device at high security risk highlighted in red. Its currently offline and supports Google Mobile services.
It is connected to wifi Esper-SSID. It was last seen on 12/10/2019 at Bellevue, Washington.

![Device Management](./assets/OLD_DASHBOARD/devicetile1.png)

Example 2- 
This is a device is secure hence highlighted in green. Its currently offline and supports Google Mobile services.
It is connected to wifi JZSB. It was last seen on 12/06/2019 at Kuala Lumpur.

![Device Management](./assets/OLD_DASHBOARD/devicetile2.png)

Example 3- 
This is a device at low risk hence highlighted in dark grey. Its currently offline and supports Google Mobile services.
It is connected to wifi Droidcon. It was last seen on 09/20/2019 at an undetermined location. It has been tagged with DroidConNYC indicating it was used to demo in Droid conference held in NYC. This is an example of how customers can use tags to identify and search their devices.

![Device Management](./assets/OLD_DASHBOARD/devicetile3.png)

### Map View

Under the Map view, the types of devices can be chosen from the dropdown. Once selected, the device locations are show:.

![Device Management](./assets/OLD_DASHBOARD/1.1_DM.png)

Once you click on the cluster icon, devices in the cluster will appear. Upon clicking on the individual devices, device information will be displayed:

![Device Template](./assets/OLD_DASHBOARD/1.2_DM.png)

Another satellite version of maps that can be viewed by clicking `Satellite` is shown below - 

![Device Template](./assets/OLD_DASHBOARD/devicemap2.png)

Device tiles can be viewed in satellite view as well by zooming and clicking on the device pins -

![Device Template](./assets/OLD_DASHBOARD/devicemap3.png)


:::tip
Device name and group names are actionable links in the device tiles that show up on maps on clicking device pins. Clicking them will take user to the respective device and group details pages.
:::

## Groups

Using Groups devices can be sectioned into groups and mass actions can be performed on a group of devices. Users can perform mass reboot, lock, check heartbeat, apply a compliance policy, install/uninstall apps and OS updates on thousands of devices in one click using Group features. 

There is a pre-existing group called "All Devices", which is the default group where devices fall unless otherwise specified during provisioning via template.

### Creating a Group
You can create a Group by clicking the button `Create Group` on the top right. 

![Group Management](./assets/groups/creategroup2.png)

Enter a unique name and click Create. 

![Group Management](./assets/groups/creategroup1.png)

Once you create a Group, you have the option to add devices from the  default **All devices** group. To move devices, users can -
- click on the checkboxes on the left of the device that needs to be moved.  
- select all devices by clicking on the top checkbox. 
- search for a particular device by enter device code via Search box. 
- sort the device list by 'last updated'. 

![Group Management](./assets/groups/creategroup3.png)

Once the required devices are selected, user can click on `Add devices` to add the selected devices to the Group. Individual devices can be added by clicking on the plus sign on right end.

![Group Management](./assets/groups/creategroup4.png)

Devices can be moved back to All Devices by selecting checkbox and clicking on `Remove selected`. Individual devices can be removed by clicking on the trash button on right end.

![Group Management](./assets/groups/creategroup5.png)

Once the correct set of devices have been moved to the Group. Click `Save`. You should receive a message "Successfully updated the group" on the left corner of the dashboard. 

![Group Management](./assets/groups/creategroup6.png)

You should now view list of all groups created in tile view. We will know more about 'group tile' further below into this document.

![Group Management](./assets/OLD_DASHBOARD/1_GM.png)

Another way to create a groups is during [template creation](./console/device-template/index.md). In the group section on template, user can pre create a group such that any device provisioned using the said template will fall in the (created and) selected group.

![Group Management](./assets/groups/creategroup7.png)

Refer to Device Template->Group section for more information on this. 

### Deleting a Group

You can delete a Group by selecting one or many Groups using the top right button **`Delete group`**. 

- Click on `Delete Group` (shown in image below)
- Select by clicking on the groups you wish to delete
- Click on bottom right `Delete Selected Groups`  

![Group Management](./assets/groups/deletegroup1.png)

### Refresh Groups list
There is an option to refresh groups screen by clicking on a button `Refresh` on the top right corner to view recent changes.

![Group Management](./assets/groups/refreshgroup1.png)

### Search Group

User can search for a group by typing the group name in the search box on top right. 

![Group Management](./assets/groups/searchgroup1.png)
 
### Group Tile 
 
 The Groups are listed in tile view that contain show the group icon, name and number of devices in the Group.

![Group Management](./assets/groups/grouptile1.png)

On clicking **`Details`**, you can take actions such as reboot, lock, ping, and wipe for the devices in the Group

![Group Management](./assets/groups/groupdetail1.png)

There are 5 tabs under the Group Details - 

- Manage 
- Actions
- Compliance Policy
- Apps
- OS updates


1. **Manage** 
This section is to view the `Device tile` of all devices present in the group. 

![Group Management](./assets/groups/groupdetail1.png)

The device tiles will show the following information for each device in the group - 

- Device name
- Device manufacturer
- Last seen date, time and location
 - Active/Inactive status
- Gms/Non-Gms
- Risk Status
- Ethernet, Wi-Fi and Cellular connection name and status
- Link to device details

See more about information about individual devices in the [Devices](http://localhost:8080/home/console.html#devices) section on this document.

There are six filters provided to sort through the list of device tiles based on the following categories - 

![Group Management](./assets/groups/groupsmanage1.png)

- Under provisioning - Devices in the group that are currently undergoing provisioning
- Active devices - Devices in the group that are currently active ie online
- Inactive devices - Devices in the group that are currently inactive ie offline
- Devices at risk - Devices in the group that are at high, medium or low security risk (See [Security](https://docs.esper.io/home/console/device-management/-/#security_) in [Devices](http://localhost:8080/home/console.html#devices) for more information on how the security risk level of a device is calculated)
- Devices with low battery - Devices in the group with battery percentage less than 15%
- Recently added devices - Devices in this group which are provisioned in the time period of last 3 days

2. **Actions**
 The groups actions such as Reboot, Screen lock and Heartbeat can be applied on all the devices in a group as a mass action. 
 
 ![Group Management](./assets/groups/groupsactions1.png)

 Reboot - When the Reboot action is applied on a group, all active devices will receive the command to reboot. The live report generated will show the progress bar of reboot action on group and count of successful and unsuccessful attempts on active devices as well as the number of inactive devices as seen below- 

  ![Group Management](./assets/groups/groupsactions2.png)

  Screen lock - When the Screen lock action is applied on a group, all active devices will receive the command to lock screen. The live report generated will show the progress bar of locking action on group and count of successful and unsuccessful attempts on active devices as well as the number of inactive devices as seen below- 

  ![Group Management](./assets/groups/groupsactions3.png)
 

Heart beat - When the Heart beat action is applied on a group, all active devices will receive the command to report whether they are online (or alive). The live report generated will show the progress bar of 'ping' action on group and count of successful and unsuccessful attempts on active devices as well as the number of inactive devices as seen below- 

  ![Group Management](./assets/groups/groupactions4.png)

:::tip
The groups actions will get applied on active (online) devices. The inactive devices currently do not get the command if they are not online at the time the action was applied.
:::

3. **Compliance Policy** 
 A pre created compliance policy can be chosen from the drop down and applied to all devices in the group in one click. A preview of the chosen policy can be viewed under the drop down as seen below. 

![Group Management](./assets/groups/groupspolicy.png)

When a Compliance Policy is applied on a group, all active devices will receive the command to comply by the given policy. The live report generated will show the progress bar of application of policy on group and count of successful and unsuccessful attempts on active devices as well as the number of inactive devices as seen below- 

![Group Management](./assets/groups/groupspolicy1.png)

On clicking `Show more` user can see the details such as name of active devices, model, current policy and last updated for Active as well as Inactive devices.

Active device detail status for policy application-
![Group Management](./assets/groups/groupspolicy2.png)

Inactive device detail status for policy application-
![Group Management](./assets/groups/groupspolicy3.png)

Once the policy application process is completed, another line is added detailing the policy application failure on devices. This lists Device names, model and reason for failure as shown below-
![Group Management](./assets/groups/groupspolicy4.png)


:::tip
The compliance policy will get applied on active (online) devices. The inactive devices currently do not get the policy if they are not online at the time the action was applied.
:::

4. **Apps** 

The app section in group has 3 sub sections- 
1. Install/Uninstall
2. Scheduled Install
3. Approvals

1. Install/Uninstall - This section is used to install of uninstall private (or uploaded) apps to the groups by selecting them from dropdown and clicking install or uninstall.

![Group Management](./assets/groups/groupsapps1.png)

As seen in case of action and policy, here also the installation or uninstallation command is send only to active devices and the progress report of this process can be viewed as shown below-

Group Install- Installation of private apps in groups.
![Group Management](./assets/groups/groupsapps2.png)

On clicking `Show more`-
![Group Management](./assets/groups/groupsapps3.png)

![Group Management](./assets/groups/groupsapps4.png)

Once the process completes, another line showing details on Failed installation also appears at the end along with detailed reasoning -

![Group Management](./assets/groups/groupsapps5.png)

On clicking `Close` the installation view is hidden however the process continues in the background.

Groups Uninstall - Uninstallation of private apps in groups.
![Group Management](./assets/groups/groupsapps6.png)

On clicking `Show more`-
![Group Management](./assets/groups/groupsapps7.png)

![Group Management](./assets/groups/groupsapps8.png)

Once the process completes, another line showing details on Failed installation also appears at the end along with detailed reasoning -

![Group Management](./assets/groups/groupsapps9.png)

On clicking `Close` the uninstallation view is hidden however the process continues in the background.

2. Scheduled install

You may create a scheduled app install by clicking the `Create Scheduled install` button. Enter the App name, version, schedule the start and end date/time for the app install. Lastly, give this schedule a unique name and click "Create Schedule" to get started.

![Group Management](./assets/OLD_DASHBOARD/5.1_GM.png)

You can also view scheduled app installation for Group along with start and end time.

![Group Management](./assets/OLD_DASHBOARD/5_GM.png)


You can click on **`View Results`** to see the number of successful and unsuccessful device installations:

![Group Management](./assets/OLD_DASHBOARD/6_GM.png)

3. Approvals
The approvals section is to hide or un-hide In-ROM apps (also referred to as Preloaded apps) on devices.

The catch is that admin needs to enter the exact package name of the In-ROM app that they wish to approve or unapprove. The best way to get the exact package name of an In-ROM app is via an adb command as shown below - 

`adb shell pm list packages`

User should turn on adb for the device (physically connected via USB) from Device->Actions(Settings), authorize adb usage from the device and run the above command to get the exact package name as shown -  

![Group Management](./assets/groups/groupsapps11.png)


Approve App -

Enter the package name as obtained from adb command and click Approve-
![Group Management](./assets/groups/groupsapps10.png)

![Group Management](./assets/groups/groupsapps12.png)

On clicking a prompt is shows as below - 

![Group Management](./assets/groups/groupsapps13.png)
Clicking `No` will cancel the action.
Clicking `Yes` will bring up live report of the app approval action on the group that looks like this - 

![Group Management](./assets/groups/groupsapps14.png)

Once the process completes, the total number of Successful, Unsuccessful and Inactive devices can be seen. Also, a 'View failed devices' report appears at the left bottom of the screen.

![Group Management](./assets/groups/groupsapps15.png)

On clicking the same, reasoning for failure of approval command can be viewed.

![Group Management](./assets/groups/groupsapps16.png)

Unapprove App- 

Enter the package name as obtained from adb command and click Unapprove-
![Group Management](./assets/groups/groupsapps17.png)



On clicking a prompt is shows as below - 

![Group Management](./assets/groups/groupsapps18.png)

Clicking `No` will cancel the action.
Clicking `Yes` will bring up live report of the app unapproval action on the group that looks like this - 

![Group Management](./assets/groups/groupsapps19.png)

Once the process completes, the total number of Successful, Unsuccessful and Inactive devices can be seen. Also, a 'View failed devices' report appears at the left bottom of the screen.

![Group Management](./assets/groups/groupsapps20.png)

On clicking the same, reasoning for failure of approval command can be viewed.

![Group Management](./assets/groups/groupsapps21.png)




:::tip
Please note that approve and unapprove mean show and hide. The unapproved apps do not mean uninstallation of these apps.
:::

5. **OS Updates**

This section is only relevant for fleet of Esper Enhanced Android devices.  

Here you can see a list of the Esper Enhanced Android updates that have been deployed on the current group with details such as build number, device type, number of devices, and date deployed along with an option to view results.

![Group Management](./assets/groups/groupsos1.png)

By clicking on the **`Deploy OS Updates`** button you may choose any available Build number by then clicking on **`Select Build`**.

![Group Management](./assets/groups/groupsos2.png)

:::tip
Please note that currently only the latest 30 builds of the Esper Enhanced Android updates will be visible to the user for deployment
:::

![Group Management](./assets/groups/groupsos3.png)

The **`Number of devices`** will populate with the devices in the group on which this update is applicable; this pertains to those that have an OS build version lower than the selected version for the deployment:

![Group Management](./assets/groups/groupsos4.png)

You may add the installation name, any pertinent notes, and after that click **`Save`**:


Coming Soon! 
In a future update users will have the option to choose the time window for their OS update installation.

## Apps

This section enables you to manage your applications. You may add the following type of apps to your device:

1.  Upload Private Apps (APK files) to the Esper Cloud.
2.  Install Google Play Apps after [approving](./console/device-template/how-approve-google-play-store-app/index.md) them.

:::tip
To approve In-ROM apps or Preloaded apps in a device, you may do so from template during provisioning or post provisioning from Groups->Apps->Approvals section.
:::


### Upload Private Apps (APK files) to Esper Cloud:

- You can upload your own mobile app through an APK file using the upload button on the top right hand corner.
- There are some rules that the uploaded app must adhere to in-order to succeed upload and provisioning -

  1.  The APK has to have a unique version name and number.
  2.  Max size - 500 MB
  3.  Extension - .apk [only]
  4.  APK Signature verification
  5.  The app should not set itself as the default launcher. This will cause conflict with the Esper Agent(DPC).
  6.  Latest Android APK standards (currently we allow APKs without icons)

- You can upload your own android app APK file using the upload button on the top right hand corner
- The uploaded apps will be shown under the 'Uploaded apps' section:

![App Management](./assets/OLD_DASHBOARD/1_AM.png)

When you click on any private app, it will open the details of the same. For example in the below screen, you may see details of the Zomato (uploaded) app. It shows the following details -

1.  Name of the app
2.  Package name
3.  App icon (if parsable)
4.  Version number (for each version). Note that the same app can have various versions.
5.  Number of devices the app is installed on
6.  The date the app was uploaded on
7.  Size of the app
8.  Compatibility with SDK version
9.  App description  - We now have a new field for you to add your app version specific description or release notes.

![App Management](./assets/apps/apps3.png)

In the above image, you can see ellipsis (3 dots) under Actions.

Here is another example of an app with description -

![App Management](./assets/apps/apps1.png)

On clicking the ellipsis under Action, user has options to:

1.  Delete the app version
2.  Edit description  - You can now add and edit description or release notes per version of the app. ![App Management](./assets/apps/apps2.png)

    A description can also be added during app upload.
    ![App Management](./assets/apps/apps4.png)

3.  Download the app version

### Install Google Play Apps after [approving](./console/device-template/how-approve-google-play-store-app/index.md) them:

- You can also allow a user to download apps from Google Play Store.
- This requires approving a specific app from the Play Store to allow a user to download the app on their device:

![App Management](./assets/OLD_DASHBOARD/5_DT.png)

- You also have the option to handle new 'App Permission Requests' for the approved apps. You can:

1.  Approve the requests for new app permissions so that users can update the installed app.
2.  Revoke the requests for new app permissions so that users cannot update the installed apps.

![App Management](./assets/OLD_DASHBOARD/4_PW.png)

3\. You can set the option to receive email notification whenever an app requests new permissions by adding the appropriate email address or addresses in the notification settings:

![App Management](./assets/OLD_DASHBOARD/8_PW.png)

- You can then select the device you want the app to be installed on by clicking on the 'Select option' and then 'Select the Device':

![App Management](./assets/OLD_DASHBOARD/5_AM.png)

- Once the app is installed on the device, a notification shows up indicating the app was successfully installed:

![App Management](./assets/OLD_DASHBOARD/6_AM.png)

- You also have the option to update or uninstall the app from a specific device:

![App Management](./assets/OLD_DASHBOARD/7_AM.png)

- You can unapprove the app from all the installed devices by clicking the 'UNAPPROVE' button. <br> <br/> <i> Note: Unapproving an app does NOT mean uninstalling it. If the app was approved earlier, it will continue to stay installed in your device until it is explicitly uninstalled. Post uninstallation, if it has been unapproved, user/admin will not be able to uninstall it on the device.</i>

![App Management](./assets/OLD_DASHBOARD/5_PW.png)

- You can also see all the approved Google Play Store apps under Play Store section:

![App Management](./assets/OLD_DASHBOARD/1_AM.png)

## Play for Work

Learn about setting up Play for Work apps using Esper.

- Play for Work gives you access to the Enterprise version of Google Play.
- Here you can either APPROVE or UNAPPROVE applications that can be downloaded onto your dedicated devices. After an app is approved it be visible on Google Play for device installation:

![Play For Work](./assets/OLD_DASHBOARD/1_PW.png)

### Approve an app

- Approve an app by clicking **APPROVE** button.

![Play For Work](./assets/OLD_DASHBOARD/2_PW.png)

- Upon clicking APPROVE a pop-up will appear:

![Play For Work](./assets/OLD_DASHBOARD/3_PW.png)

- Via the pop-up you can set app permission requests:

![Play For Work](./assets/OLD_DASHBOARD/4_PW.png)

- Upon clicking SAVE, your settings will be applied to the app. The dedicated device user can then access it from the Play Store within the given app permission requests:

![Play For Work](./assets/OLD_DASHBOARD/5_PW.png)

### Unapprove an app

- Once you click UNAPPROVE, the access to the application is removed from user’s Google Play account:

![Play For Work](./assets/OLD_DASHBOARD/5_PW.png)

- Click the OK button to remove the application from user’s Google Play account:

![Play For Work](./assets/OLD_DASHBOARD/6_PW.png)

- After clicking OK you will get a message indicating that it was successfully UNAPPROVED:

![Play For Work](./assets/OLD_DASHBOARD/7_PW.png)

### Approval settings

Upon clicking OK you will see a pop-up showing the APPROVAL SETTINGS tab and NOTIFICATIONS tab. Choose the desired APPROVAL SETTINGS:

![Play For Work](./assets/OLD_DASHBOARD/4_PW.png)

### Notifications

sets up email notifications for anyone requesting new permissions to the specified email address or addresses:

![Play For Work](./assets/OLD_DASHBOARD/8_PW.png)

You have the option to decide which of the apps are to appear on the device Google Play Store. Go to the Play For Work section and choose the option Organize App-

![](./assets/faq/orgapp1.png)

Any app added in the collections on this page will show up on the Google Play Store app on the device - 

![](./assets/faq/orgapp2.png)


## Alerts

Learn about available Alerts.

User Alerts to monitor the performance of your devices. You can create a device alert that watches a single metric:

![Alerts](./assets/OLD_DASHBOARD/1_A.png)

- The alert performs one or more actions based on the value of the metric relative to a threshold over a selected time period.
- Choose an alert, the **set condition**, the **name** for the alert and then click on **'Create alert'**:

![Alerts](./assets/OLD_DASHBOARD/2_A.png)

_Delete icon_ - this to delete an alert:

![Alerts](./assets/OLD_DASHBOARD/3_A.png)

## Compliance Policy

Policy is a standard set of rules or permissions that are related to security of the devices and apps that admin can apply on the devices to be provisioned via template. Admin may set default app permissions, Android setting app, system updates, password rules, and turn on the toggle buttons for the settings he/she wishes to enable on the devices.

- A new policy is created and can be deployed on any device.
- The new policy gets listed on the **'Compliance Policy'** page which can be edited or deleted as required:

![Policy Management](./assets/OLD_DASHBOARD/3_PM.png)

Below is a list of features you can turn on or off in the policy section. These are part of our standard Compliance policy that can be configured and reapplied as per requirements of the customer after provisioning.

### Available policy options

1.  Device Password Rules - If you choose alphabetic or alphanumeric, a minimum password length can be entered. The default minimum password length is 4. <br> The Password rule is a policy that specifies the rules for the device unlock password that users can set.

    Alphabetic: Restricts acceptable password to contain only alphabetic characters (A to Z) in both upper and lower case.

    Alphanumeric: Expands from Alphabetic to also include numbers and special characters.

    None: There is no password required to lock the device.

    The password for a device is setup during the initial setup of the device by the user.

    <br/>

2.  Default App Permission<br> 

    Default app permissions determines enforcement of the runtime-permission rule across all the apps on a device (e.g. Gallery, Camera).


    Allow automatically: This rule will grant all the permissions any app requests without showing a prompt to the user.

    Ask user: This keeps the default behavior intact with regards to permission management. All apps on the device will show a prompt to the user to request permission. For example, by choosing this option then every app will ask the user each time before accessing a device module with a message such as “Allow app X to access Gallery? Allow/Deny”

    Deny automatically: This rule will deny any permission request from any app on the device.<br/>

3.  System Updates<br> The System updates option allows you to enforce a system update policy on the device when a system update/OTA update is available.

    Update automatically: Enforcing this rule will install any OTA update automatically and reboot the device without requesting the user.

    Postpone installation: This option postpones installation of an OTA update for 30 days.

    Windowed installation: This option allows you to define a time window during a full day period inside which the OTA update will be installed.

     <br/>

4.  Android Settings App<br> Android settings app determines how users can access the Android device settings. There are three options to choose for the type of settings app to be made available on the device as follows - 

    _Default setting app_: Selecting this will show the icon for the default Android settings app. Clicking this icon will take the user to the default Android settings.

    _No settings app_: No icon for any settings app will be available for the user to choose from the device’s dashboard.

    _Esper settings app_: Esper offers a custom Settings’ app that limits the user to only a subset of the available Android settings. This app is made secure via the Esper settings app password protection. Settings provided via this app are limited to:
    1. Changing the Wi-Fi Access Point

    2. Enabling the “flashlight” if there’s a camera flash LED on the device

    3. Control the display orientation of the device.

    4. A robust means for users to be able to factory reset their device irrespective of the policy. 
        
    5. About - We have added information regarding provisioning endpoint in the about section for the user to be able to view the endpoint name the device is registered in, in case they have access to multiple endpoints.
        
    6. Kiosk app - An option to switch the kiosk app from this menu. User can choose any installed app on device to act as the kiosk app.
        
    7. Esper Branding - User can turn off the Esper logo in case they wish to use their own logo as a reseller of Esper platform.
        
    
    ![](./assets/esperSettingsApp/espersettingapp1.png)

    <br/>


### Google Account Restrictions

 This feature gives users an option to restrict the number of Google accounts that can be added on the device and be used with Google apps such as Gmail, Google Play Store, Youtube etc. By default, the addition of any number of accounts is allowed, however, if the admin applies a Compliance policy by checking the box shown below, the number of allowed accounts will be restricted to the admin entered value. For example, if the admin has set it to 2, after adding two accounts on the device, further addition (or deletion) of accounts will not be possible unless a different Compliance policy is reapplied.
Note: If user has not checked this box in the applied policy, it is recommended that they disable Google Play Store to prevent installation of unapproved apps.

![Google Account Restrictions](./assets/GoogleAccountid/googleaccountpermission1.png)

:::tip
The Google Account Restriction feature is applicable only to GMS android devices ie the android devices that support Google Mobile Services.
:::

### Factory Reset Protection <br> 
_FRP Toggle Button_ - FRP or Factory Reset Protection enables you to lock your device if a user tries to factory reset it via soft/hard keys. In case of a factory reset, the device will get locked and will only be reusable by a pre-authorized google account ID. See Policy section in docs to know how to get your google account id. Note that this feature is only available on android versions 5 and above. <br>

![Factory Reset Protection](./assets/GoogleAccountid/factory_reset_protection.png)

On turning on the FRP button, user needs to enter the Google ID of the account they wish to authorize to enable usage of the device post factory reset. <br/> See [here](./console/policy-management/getgoogleaccount.md) to know how to get the Google account ID of your account and how FRP protects your device.

Other Compliance Policy Toggle Buttons-<br>

1.  Lock Screen<br> If Locked screen is switched ON, it enables the default “lock screen” to be displayed upon a screen timeout as specified in the Settings section. If it is enabled, the user has an option to set the password rule in the dropdown above. <br/>
2.  Safe-Mode Login<br> Turn Safe mode login On to allow users to boot to safe mode on their device. Leave Off to prevent Safe mode login.<br/>
3.  Factory Reset<br> Factory reset dictates whether or not the user can perform a factory reset on the device. Turning it Off prevents a factory reset by the user. This is not inclusive of the hard key factory reset. <br/>
4.  Notification bar<br> Notification bar dictates whether or not a user can swipe down to display the notification bar. Turn On to enable access to the Notification bar. <br/>
5.  Screenshot<br> Screenshot allows or prevents a user from taking screenshots on the device using available screenshot actions. Turn On to allow screenshots. <br/>
6.  USB connectivity<br> USB connectivity allows or prevents the user to be able to communicate via USB on-the-go. Turn On to allow. <br/>
7.  SMS<br> SMS controls the ability of the device to send or receive SMS. If it is turned Off it prevents the device from using SMS regardless of which SMS app is used. Turn On if you wish to enable the device to send and receive SMS. <br/>
8.  Outgoing calls <br> Outgoing calls determines whether a user can make outgoing calls from the device. Turn On to allow outgoing calls, turn Off to prevent. <br/>
9.  Camera Access<br> Camera access allows or prevents a user to access the device’s camera. Turn On to allow.<br/>
10. NFC <br> NFC controls the device’s ability to use NFC if it is supported by the device. Turning Off prevents the device or any app from using NFC. Turn On if any of your apps require NFC. <br/>
11. Google PlayStore<br> Google PlayStore determines if the Google PlayStore app is available to the user on the device. Turn On to allow the user access to the Google PlayStore of admin approved Google Play Apps.<br/>
12. Wifi <br> Wifi can be turned off on the device if there are other type of networks such as cellular present on the device. In case on no network availability, the Wifi policy will auto switch to on in-order to ensure the connectivity of the device with the cloud. <br/>
13. USB tethering<br> USB tethering specifies if the user is able to use their device to share a mobile connection to another device such as a laptop<br/>
14. Edit date and time<br> Edit date and time determines if the user can change the date and time on device. Turn On to allow changes by the user. <br/>
15. Application uninstall<br> For devices running Android 4.4 or 5.1, turning this setting On will block app uninstallation, especially important for private apps. This setting is not needed if you are running Android 6.0 or above. <br/>
16. USB File transfer <br> Turning off USB file transfer will prevent the user from transferring files from the device to a computer and vice versa using a USB cable<br/>
17. Google Assistant  <br> Enables/disables voice command via Google Assistant. Available only for Android devices supporting Google Assistant. For example - If you wish to have Google Play Store show up on the device, you may turn on the toggle button. <br>
18. Local App Install<br>This feature allows installation of apps from unknown sources on the device. To enable this on the device, the user needs to follow these instructions. Settings->Apps and notifications-> Special app permissions ->Install Unknown Apps and choose the route they wish to install the apps from. For example, if device user chooses Chrome, they will be able to download and install apps from the Chrome browser on the device. If turned Off, the device user will not be allowed to install apps from any unknown sources.<br>

![LocalAppInstall](./assets/policy/localappinstall.png)
 <br/>

Checkbox-<br> `Restrict outgoing/incoming calls using customised dialer.` <br>

![Restrictcall](./assets/policy/restrictcall.png)

If clicked, this opens up two more checkboxes-<br>

1.  `Restrict incoming calls to uploaded contacts only <upload a CSV file of allowed contacts>`<br>
2.  `Restrict outgoing calls to uploaded contacts only <upload a CSV file of allowed contacts>`<br>

In order to restrict phone numbers that can make or receive calls to the device, upload a .csv file with the allowed phone numbers.<br>

:::tip
All numbers must be preceded by +country code (for example +1 for US). All numbers must be separated by comma.
:::
 <br>

![Create New Policy](./assets/OLD_DASHBOARD/newpolicy.png)

You may reset these values to default at any time by clicking `Reset to Default` button at the bottom.

## Reports

This sections lets a user get daily and customized reports of activity of devices and groups of devices.
There are two sections to reports - 

1. Daily Reports
2. Custom Reports

**Daily Reports** 

These get generated on a daily basis as shown below - 

![](./assets/reports/report1.png)

It generates the following information - 
- Date of the report
- Report type
- Option to View
- Option to download in pdf, excel or csv formats

![](./assets/reports/reports4.png)

Clicking on View or Report type will take user to a detailed view of the daily report - 

![](./assets/reports/reports2.png)

Here, the following information is shown - 
- Number of Registered Devices
- Peak number of active devices
- Newly provisioning devices

Additionally, you may see for each group - 
- Number of Registered devices
- Number of Active devices
- Number of Inactive devices
- Newly provisioned devices

on clicking the '>' sign, user can view devices wise details as shown below - 

![](./assets/reports/reports3.png)

Listing the following details per device - 

- Device name
- Serial number
- Status
- Inactive from last 3 days (yes/no)
- Last known location

Here is a preview of a downloaded pdf version of daily report - 

![](./assets/reports/reports5.png)

This report lists all the information shown above for the chosen date in an easily downloadable format.

**Custom Report**

Dashboard admin user also has the option to generate a group wise custom report that is spread over a chosen period of time. Admin can choose start and end date to generate the report as shown below -

![](./assets/reports/reports6.png)

Following information is required- 

- Group name to be chosen from dropdown
- Start date
- End date

Finally, clicking on Generate report will bring up the custom report to the user as follows-

![](./assets/reports/reports7.png)

This report has the same information as daily report but for the specified dates and group.



## Users

Learn about Esper's User Management.

Under the Users tab you are able to view all registered users in your enterprise. Here you can add, delete, and edit users:

![Esper User Management](./assets/OLD_DASHBOARD/1_UM.png)

**New User**

- To add a new user, click on `New User` and fill in details of the user in the form:

![Esper User Management add new user](./assets/OLD_DASHBOARD/2_UM.png)

- Upon creating a new user, you will get a confirmation pop-up:

![Esper User Management](./assets/OLD_DASHBOARD/3_UM.png)

**Edit User**

- Here you can edit the details of a user.
- You will be able to change the username, email, full name, password, and role assigned to the user:

![Esper User Management](./assets/OLD_DASHBOARD/4_UM.png)

Delete icon

- Click on the `Delete` icon to delete a user from the enterprise. That user will no longer be able to access their account:

![Esper User Management](./assets/OLD_DASHBOARD/5_UM.png)

## Geofence

Now in Esper - Geofences! Geofencing is a useful feature for some dedicated device deployment scenarios. With geofencing you use the device’s location typically generated by GPS to trigger an alert when the device enters or leaves a defined area. Common scenarios include making sure a fleet of delivery devices stay in their delivery zone, warehousing devices don’t stray far from the warehouse, and restaurant ordering devices don’t leave the restaurant.

In order for geofencing to work, the mobile device needs internet connectivity and location services enabled. Thus this is typically for cellular connected devices with high accuracy location services enabled - whether smartphones or tablets.

Setting up a geofence for a device is easy - it starts by selecting Geofence in Esper Console left navigation pane - this brings you up to a wizard for quickly defining the geofence. Click on `New Geofence`:

![Esper Geofence Creation](./assets/OLD_DASHBOARD/geo4.png)

In the first screen you define the size of your geofence (meaning where you expect any devices to be for this geofence) - it is a circle that can be as small as 100m radius up to 10km. Note that GPS can drift and jump, thus a geofence smaller than 100m can cause false positives. To set it up at a location simply type the address for the center of the circle, or drag it in the map view to set it up. Give it a name and description, and then click `Next`:

![Esper Name Geofence](./assets/OLD_DASHBOARD/geo3.png)

Now you assign devices to this geofence - you can do as many as you need that fit the criteria for the geofence. In this case we are just doing one:

![Esper Assign devices](./assets/OLD_DASHBOARD/geo1.png)

Now you define the action to be taken when any of the assigned devices leave the geofence - you can either lock them, have them beep, or both. In this case I went with beep!

![Esper Select Actions Geofence](./assets/OLD_DASHBOARD/geo2.png)

If you chose to Lockdown the device, you will see the following screen if the device is taken outside the geofence boundary -

![Esper Lockdown](./assets/OLD_DASHBOARD/geo5.jpg)

You can see for Geofence applied Devices if they have left or entered the Geofence in the Event Feed section: ![Geofence in Event Feed](./assets/OLD_DASHBOARD/geo6.png)

That’s it! It looks even easier in our [video](https://youtu.be/UkTwhFRTwgQ) Give it a try and let us know what you think, andi@esper.io.

:::tip
Note: The performance of Geofencing feature is dependent on accuracy of in-built GPS of devices. Additionally, ability to track location of the device is also dependent on WiFi, Bluetooth, cellular connectivity and internet of the device. This feature is not supported for Android version 4.x.
:::

## Company Settings

Learn about Esper's Company Settings.

- Company Settings enables you to set your company details by clicking on the **Edit profile** button on the top right hand corner:

![Company Settings](./assets/OLD_DASHBOARD/1_EC.png)

- You are required to fill in your **company information** including:

1.  Registered name
2.  Location
3.  Name
4.  Zip code
5.  Email
6.  Address
7.  Phone number

![Company Settings](./assets/OLD_DASHBOARD/2_EC.png)

An important feature that allows you to have some control over your device name prefixes is present in this tab. The last section Company short code allows you enter 3 letter short codes for your company name and location/area for the devices. For example if I set my company short code as ESP-BNG, all my devices will have the prefix and will have names such as ESP-BNG-2345 etc. The ESP here signifies my company name and the BNG is the location.

**Important**: If you will be using apps from Google you will also need to enroll your company's Google Play account:

![Company Settings](./assets/OLD_DASHBOARD/3_EC.png)

Know how to enroll into Google Play Services [here](./console/company-setting/index.md).

## OS Updates

### Over-the-air updates for Esper Enhanced Android.

You can update the Esper Enhanced Android version using our OTA functionality. Currently, we are only showing the number of devices the build version has been applied to; this also includes the publish date and size. To deploy a new available build on a group, the user can go to [Group->OS Update](./console/group-management/index.md). See the Group section for more details.

![OS Updates](./assets/OLD_DASHBOARD/OS.png)

:::tip
Please note that currently only the latest 30 builds of Esper Enhanced Android updates will be visible to the user for deployment.
:::

## Developer Options

### Turn App and Device Management into Code

Esper is focused on helping Android app developers build, deliver, and maintain Dedicated Device applications - whether a restaurant kiosk, retail POS, or logistics hub. We have made our APIs available to Android developers worldwide so they can move rote app and device management actions into reusable code. Anyone can use our APIs to build, orchestrate, and integrate elegant solutions based on their business requirements. We do the heavy lifting by taking care of the infrastructure, so app developers can focus on building great solutions rather than being bogged down in app and device management. We help you procure efficient hardware along with the optional secure, optimized Esper Enhanced Android and our open source APIs and SDKs. We also offer the Esper Plugin for the Android Studio with tools improving the challenging task of app diagnostics - including working with deployed apps running on dedicated devices in the field. Check out [esper.io](http://esper.io) for more information about our rich feature set.

To kick things off, you need to generate an **API key** that you can tie to a specific application - it is your choice on how you want to manage your API keys. Do this by clicking the **"Register App"** button. You can also easily copy the Enterprise ID, necessary for API calls, by clicking on the copy icon next to Enterprise ID on top right of this section.

![Developer Options](./assets/OLD_DASHBOARD/1_DO.png)

Next, you need to enter a unique app name and description(optional) and click **register application**.

![Developer Options](./assets/OLD_DASHBOARD/2_DO.png)

Click Generate Token. This will generate a unique **OAuth-based API key**.

![Developer Options](./assets/OLD_DASHBOARD/3_DO.png)

You can then copy (or renew if needed) your API key.

![Developer Options](./assets/OLD_DASHBOARD/4_DO.png)

The **API key** and **Enterprise ID** can be copied from the dashboard as shown above and can be used to access our [CLI platform](https://github.com/esper-io/esper-cli) as well as to use the [SDK/API](http://api.esper.io) (api.esper.io) in your development and management systems.

Checkout the relevant documentation on the top right of this page by clicking on [Developer Hub](https://docs.esper.io/) and [API Documentation](https://api.esper.io/).

## Secure Remote ADB

Developer should be able to debug their devices remotely without even physical association with the device. ADB is android tool that help you to get take actions on the device, get the device or application logs and help you in resolving customer or in-field issues right by sitting remotely in your office.

This document tells you how you can remotely connect to device via secure adb channel. We will be using esper-cli command line tool which internally uses [esperSDK](./pythonsdk.md) [APIs](https://api.esper.io/) to provide the secure access between your host machine and device.

Remote access to the device can be done from anywhere in the world using espercli and doesn't have to be in the same network.

### Steps to connect to secure remote adb:

1.  On to Esper Dashboard `https://{{ esper_tenant_name }}.esper.cloud`, Go to `Devices` tab, then to your device and to `Actions`.

2.  At the bottom of the page, Click `enable adb`.

3.  On to your android device, connect via usb cable and enable adb over tcpip by following command:

        adb tcpip 5555

4.  Disconnect usb cable from the device. You should be able to connect adb via port 5555 over tcp

5.  Setup [esper-cli](./espercli.md) and configure for your environment on to the host machine.

    - Check your espercli version: espercli -v

            #espercli -v
            Esper CLI is Command line tool for the Esper APIs:  0.0.5
            Cement Framework 3.0.2
            Python 3.7.3
            Platform Darwin-18.0.0-x86_64-i386-64bit

    - Make sure it is >= 0.0.5 to use secure-adb feature.
    - Upgrade to the latest version of espercli using the following command:

            pip install -U espercli

6.  Copy your device id from esper dashboard information tab or from your device bottom left most. It looks like SNA-SNL-1234.

7.  Use espercli to connect to Device:

        #espercli secureadb connect -d SNA-SNL-1234
        Initiating Remote ADB Session. This may take a few seconds...
        Secure ADB Client
        Please connect ADB client to the following endpoint: 127.0.0.1 : 62945
        If adb-tools is installed, please run the command below:
        adb connect 127.0.0.1:62945

8.  Now connect your device via port number obtained above on localhost.

        adb connect 127.0.0.1:62945

9.  You are connected to adb.

:::warning
Now onwards until device is rebooted, You would be able to connect to the device remotely using espercli. Post reboot you have to do Step 1-8 again
:::
