# Console


Click on Below Links to read about various sections of the Esper Dashboard
<br />

##  Manage Home

<div class="avg-reading-time" style="margin-top: 0rem;">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>

This page explains the functionality of the Esper Home Dashboard.

There are four tile sections on the Home Dashboard page:

### 1\.  Deployment Status

This tile shows the current deployment status of the devices for the current customer environment and includes a clickable link to number of Active, Inactive, Under Provisioning and Recently Added devices. Clicking on each takes the user to the [Device Dashboard](./console/device-management/index.md) showing the corresponding category of devices.

### 2\. Security Summary

The Security Summary tile shows a summary of security status of the deployed devices. It shows how many of them are at High Risk, Medium Risk, Low Risk and No Risk. Clicking on each takes the user to the [Device Dashboard](./console/device-management/index.md) showing the corresponding category of devices.

### 3\. Where are your Devices?

This section gives an overview of the location where all the devices are deployed. You can see a world map showing locations of all the devices in Map and Satellite View. It can be made full screen and user has options to zoom in and zoom out. There is also a summary of cities worldwide containing the highest number of devices.

### 4\. Alerts Status

The Alerts Status tile gives a summary of Alerts you've created and Alerts that have been fired for each of the created Alerts. The Alert name can be selected from the dropdown and the number of Alerts fired will then be shown.
##  Dev Home

Read about the Developer Tools and Documentation here - 

Esper API Keys - Get API Key and Enterprise ID to be able to access Esper APIs to integrate in your app development code. See here - https://{{ esper_tenant_name }}.esper.cloud/developer-console/ <br />
<br />
Esper API Reference - Checkout all APIs that you can use to manage your dedicated devices at https://api.esper.io using HTTP/REST framework. <br />
<br />
Esper SDK For Python - Install SDK for python using instructions here - https://docs.esper.io/home/pythonsdk.html <br />
<br />
Esper CLI - Quickly execute CLI commands to install/uninstall/manage deployment on your provisioned devices <br />
<br />
Esper Plugin For Android Studio - Use Esper Plugin to easily deploy new versions of your app onto Esper dashboard and to your dedicated devices. This plugin enables you to remotely view/control your devices on Android studio as well. <br />
<br />
Esper Docs With Quick Starts - This is one stop for all documentation regarding API, CLI, SDK, Plugin and Console. <br />


##  Provision Device


Provisioning is the initial step to configuring and managing your Android device using the Esper Management Console and associated developer tools.

Esper provides multiple methods of provisioning a device, which involves downloading the Esper Agent onto the device and configuring it according to the provisioning settings used for a Device Template. The supported provisioning methods are:

1.  [Provisioner Tool](./adb-provisioning/index.md) - Provisioner Tool is a user friendly provisioning tool by Esper. This can be used conveniently to provision -
    - All Android Devices - GMS or Non-GMS
    - Devices with or without camera
    - Devices running old as well as new Android versions (inclusive of Android 4.4, 5.1 and so on)
    
2.  [AFW provisioning](./afw-provisioning/index.md) - AFW (Android for Work) method is best used for:
    - Devices that have GMS (Google Mobile Services) enabled 
    - Devices with a camera for QR code scanning

3.  [QR Code Provisioning ](./qr-code-provisioning/index.md)
    - QR Method like AFW is used for devices that have both GMS (Google Mobile Services) and Camera enabled 
    
4.  [IMEI (or Serial Number) based provisioning](./imei-or-serial-number-based-provisioning/index.md) 
    - Used for Esper Enhanced Android Devices
    - IMEI/Serial Number method is use for Bulk provisioning of devices 
    - Enables zero touch provisioning


##  Device Template

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

Dropdown menus-
1. Device Password Rules - If you choose alphabetic or alphanumeric, a minimum password length can be entered. The default minimum password length is 4. <br> 
The Password rule is a policy that specifies the rules for the device unlock password that users can set.

    Alphabetic: Restricts acceptable password to contain only alphabetic characters (A to Z) in both upper and lower case.

    Alphanumeric: Expands from Alphabetic to also include numbers and special characters.

    None: There is no password required to lock the device.

    The password for a device is setup during the initial setup of the device by the user.
<br/>
2. Default App Permission<br> Default app permissions  determines enforcement of the runtime-permission rule across all the apps on a device (e.g. Gallery, Camera).


    Allow automatically: This rule will grant all the permissions any app requests without showing a prompt to the user.

    Ask user: This keeps the default behavior intact with regards to permission management. All apps on the device will show a prompt to the user to request permission. For example, by choosing this option then every app will ask the user each time before accessing a device module with a message such as “Allow app X to access Gallery? Allow/Deny”

    Deny automatically: This rule will deny any permission request from any app on the device.<br/>
3. System Updates<br> 
The System updates option allows you to enforce a system update policy on the device when a system update/OTA update is available.

    Update automatically: Enforcing this rule will install any OTA update automatically and reboot the device without requesting the user.

    Postpone installation: This option postpones installation of an OTA update for 30 days. 

    Windowed installation: This option allows you to define a time window during a full day period inside which the OTA update will be installed.
 <br/>
4. Android Settings App<br> Android settings app determines how users can access the Android device settings.

    Default setting app: Selecting this will show the icon for the default Android settings app. Clicking this icon will take the user to the default Android settings.

    No settings app: No icon for any settings app will be available for the user to choose from the device’s dashboard.

    Esper settings app: Esper offers a custom Settings’ app that limits the user to only a subset of the available Android settings. Settings provided via this app are limited to:
    1. Changing the Wi-Fi AP

    2. Enabling the “flashlight” if there’s a camera flash LED on the device

    3. Control the display orientation of the device.

    Contact Esper to setup a password for the Esper Settings app.
<br/>

Factory Reset Protection - <Badge text="New" type="tip"/> <br>
*FRP Toggle Button* - FRP or Factory Reset Protection enables you to lock your device if a user tries to factory reset it via soft/hard keys. In case of a factory reset, the device will get locked and will only be reusable by a pre-authorized google account ID. See Policy section in docs to know how to get your google account id. Note that this feature is only available on android versions 5 and above.
<br>

![](./assets/GoogleAccountid/factory_reset_protection.png)

On turning on the FRP button, user needs to enter the Google ID of the account they wish to authorize to enable usage of the device post factory reset. <br/>

See [here](./console/policy-management/getgoogleaccount.md) to know how to get the Google account ID of your account and how FRP protects your device. 

Other Template Compliance Policy Toggle Buttons-<br> 
1. Lock Screen<br> If Locked screen is switched ON, it enables the default “lock screen” to be displayed upon a screen timeout as specified in the Settings section. If it is enabled, the user has an option to set the password rule in the dropdown above.
<br/>
2. Safe-Mode Login<br> Turn Safe mode login On to allow users to boot to safe mode on their device. Leave Off to prevent Safe mode login.<br/>
3. Factory Reset<br> 
Factory reset dictates whether or not the user can perform a factory reset on the device. Turning it Off prevents a factory reset by the user.
This is not inclusive of the hard key factory reset.
<br/>
4. Notification bar<br> Notification bar dictates whether or not a user can swipe down to display the notification bar. Turn On to enable access to the Notification bar. <br/>
5. Screenshot<br> 
Screenshot allows or prevents a user from taking screenshots on the device using available screenshot actions. Turn On to allow screenshots.
<br/>
6. USB connectivity<br> 
USB connectivity allows or prevents the user to be able to communicate via USB on-the-go. Turn On to allow.
<br/>
7. SMS<br> SMS controls the ability of the device to send or receive SMS. If it is turned Off it prevents the device from using SMS  regardless of which SMS app is used. Turn On if you wish to enable the device to send and receive SMS. <br/>
8. Outgoing calls <br> 
Outgoing calls determines whether a user can make outgoing calls from the device. Turn On to allow outgoing calls, turn Off to prevent.
<br/>
9. Camera Access<br> Camera access allows or prevents a user to access the device’s camera. Turn On to allow.<br/>
10. NFC <br> NFC controls the device’s ability to use NFC if it is supported by the device. Turning Off prevents the device or any app from using NFC.  Turn On if any of your apps require NFC. <br/>
11. Google PlayStore<br> Google PlayStore determines if the Google PlayStore app is available to the user on the device. Turn On to allow the user access to the Google Playstore of admin approved Google Play Apps.<br/>
12. USB tethering<br> USB tethering specifies if the user is able to use their device to share a mobile connection to another device such as a laptop<br/>
13. Edit date and time<br> Edit date and time determines if the user can change the date and time on device. Turn On to allow changes by the user. <br/>
14. Application uninstall<br> For devices running Android 4.4 or 5.1, turning this setting On will block app uninstallation, especially important for private apps. This setting is not needed if you are running Android 6.0 or above. <br/>
15. USB File transfer <br> Turning off USB file transfer will prevent the user from transferring files from the device to a computer and vice versa using a USB cable<br/>
16. Google Assistant <Badge text="New" type="tip"/> <br> Enables/disables voice command via Google Assistant. Available only for Android devices supporting Google Assistant. 
For example - If you wish to have Google Play Store show up on the device, you may turn on the toggle button. <br> <br/>

Checkbox-<br> 
`Restrict outgoing/incoming calls using customised dialer.`<br> 

If clicked, this opens up two more checkboxes-<br> 

1. `Restrict incoming calls to uploaded contacts only <upload a csv file of allowed contacts>`<br> 
2. `Restrict outgoing calls to uploaded contacts only <upload a csv file of allowed contacts>`<br> 
In order to restrict phone numbers that can make or receive calls to the device, upload a .csv file with the allowed phone numbers.<br> 

:::tip All numbers must be preceded by +country code (for example +1 for US).
All numbers must be separated by comma. 
:::
<br> <br/>
![Device Template](./assets/OLD_DASHBOARD/newpolicytemplate.png)
<br> <br/>
You may reset these values to default at any time by clicking `Reset to Default` button at the bottom.
<br> <br/>
Click `Next`.
<br> <br/>
### In the Apps section

Select 'Kiosk mode' to pin an app during startup or 'Multi application mode' to give users access to the Home screen. Choose the apps that you would like to have installed on your device during provisioning. You may choose from install apps you uploaded via [App Management](./console/app-management/index.md) or install apps from Google Play Store that you approved via [Play For Work](./console/play-work/index.md).

*   As seen in image below, the first step is for user to choose whether they want to provision their device in kiosk or multi app mode by clicking on the radio button.
1. Kiosk mode - This mode pins the selected private app as the default app that stays pinned on the device screen permanently unless user exits the kiosk mode. This mode is useful for cases where device is single purpose and only app needs to run on it and admin does not wish device users to be able to interact with the device in any other manner. For example airport kiosks. 

2. Multi-app mode - In multi app mode, user is free to use any private app, google play app or preloaded (in-ROM) app which are approved and installed by the admin. It is closely similar to BYOD but admin retains the control of the apps that are usable by the device user. For example a grocery delivery company wants their delivery person using the device to be able to use company app as well as the google maps. 

* Default Android Launcher <Badge text="New" type="tip"/> - The next section is a simple checkbox labeled "Default Android Launcher" - This feature, if checked will provision devices with default android screen with no restrictions on the apps that can be installed and used. It will also disable various Esper Agent features and is best used when device usage is desired in loosely controlled environment. <br>

    Here is a list of Esper features that will be **unavailable** in this mode as it applies the launcherless version of the Esper Device agent - 

    • Capture Screenshot <br>
    • Remote View and Remote Control<br>
    • Install an app via dashboard<br>
    • Uninstall an app via dashboard<br>
    • Over the Air OS updates for Esper Enhanced Android OS<br>
    • Latest Device Agent updates for Devices with Android version less than 6.0

    ![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc.png)

    The device screen will look similar to a regular android device with `Esper Device Agent` showing up as an app that can be opened and closed.

    ![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc1.png)

    Even when user has exited the `Esper Device Agent` they will be able to see it running in the background in the notification bar as follows - 

    ![Device Template](./assets/OLD_DASHBOARD/launcherlessdpc2.png)



    If the `Default Android launcher` is **unchecked**, Esper Device agent will take admin control of the device and only approved apps can be installed or used. All features of Esper Device agents will be functional in this case.

   
* Preloaded Apps - The next section is of Preloaded (IN-ROM) apps where user may enter package names of apps that are already existing in the device to approve them to show up on the device after provisioning. The package names must be entered seperated by commas. 

* Private (uploaded) Apps - The next section is for Private(uploaded) apps. User needs to upload APK files on App Management previously. Once uploaded, in template, user may click on the app from the dropdown, select the version and click on `Add` to add the private app to the template.

    ![Device Template](./assets/OLD_DASHBOARD/Temp_App_Management_new1.png)

*   To add app from Play Store list - click on the apps to add from the list of available apps. This section is a little tricky because user needs to approve the Google apps from Play Store or Play for Work section before they are able to choose them in this section.

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

Change Device settings from Esper Dashboard. Following are features available -
 ![](./assets/settings/settings.png)

 * Turn on/off bluetooth  <br>
 * Select screen timeout duration  <br>
 * Select screen orientation  <br>
 * Select GPS accuracy  <br>
 * Increase/decrease Brightness, Volume (alarm, notification, ring and music)  <br>
 * Timezone <Badge text="New" type="tip"/> - With our supervisor plugin, we have enabled you to change timezone of device remotely via dashboard.  

 ![](./assets/settings/timezone.png)

Here is a complete screenshot of Template Settings page - 
![Device Template](./assets/OLD_DASHBOARD/12_DT.png)

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

*   **Preview Template**

![Device Template](./assets/OLD_DASHBOARD/17_DT.png)

Click on the `Preview` option to preview the device template. Click on the `+` sign to expand and then check selected individual components.

*   **Edit Template**

To edit any template, click on the `Edit Template` option. Policy, Apps, Branding, Settings, Group and Add devices options can be updated as required. To save the changes, click on the `Update` button on the Preview page.

*   **Add Devices (IMEI Provisioning)**

![Device Template](./assets/OLD_DASHBOARD/13.1_DT.png)

While editing a template, you also have the option to add IMEI/Serial numbers of devices you want to provision with this template. There is a section `Add devices` that appears if you click on `Edit Template`. Using this section, user can upload IMEI and Serial numbers. See details on IMEI Provisioning via Template [here](imei-provisioning-template/index.html).

*   **Delete Template**

![Device Template](./assets/OLD_DASHBOARD/18_DT.png)

Click on the `Delete Template` option on top right to delete a selected template.


  
##  Devices

This section talks about understanding how to manage your Esper provisioned device after the provisioning steps are complete. 

It consists of the following sections - 
1. [Getting Started](./console.html#getting-started)
2. [Categories](./console.html#categories)
3. [Search](./console.html#search)
4. [Device Tile (also, Grid View)](./console.html#device-tile)
5. [Map View of Devices](./console.html#map-view)
6. Further Device Mangement functionalities found on clicking the `Details` button for an **individual device** are listed as follows -
    
    a. [Device information](./console/device-management/-/#information) - Hardware, software, memory, location, storage and other detail of the device.

    b. [Actions](./console/device-management/-/#device-actions) - Admin can take actions such as reboot, lock, lockdwon, ping or exit kiosk mode.

    c. [Event Feed](./console/device-management/-/#event-feed) - Admin can view event feed log of the device.

    d. [Device Graphs](./console/device-management/-/#device-graphs) - Admin can view in graphical format 15 unique device metrics represented for individual devices.
    
    e. [Apps](./console/device-management/-/#apps) - Admin can unhide preloaded apps, install/uninstall private apps and hide installed google apps from here. Admin also has the capability to clear app data for supported apps from this section.

    f. [Compliance Policy](./console/device-management/-/#compliance-policy) - Admin can apply pre-created compliance policy on the selected device from this section.

    g. [Security]() - This section gives details regarding the security status of the device.
    
    h. [Remote View](./console/device-management/-/#remote-viewer) - Admin can remote view the device if device user accepts the request.

    i. [Capture log](./console/device-management/-/#capture-logs) - Admin can capture device's android bug report fromt his section in case any issue arises.


### Getting Started

If you are logging in to your endpoint for the very first time you will see the following screen which gives you a choice to either provision a device or Simulate a device.

![Simulare](./console/images/simulare-1.png)

You can choose to provision a real Android device the details to which are provided in the [Provision Device](https://docs.esper.io/home/devconsole/device-provisioning/) section of this documentation. Or you may choose to Simulate a Device. You will see a momentary "You are all set!" message after which a mock device will be available for you to experiment and play around with till you provision an actual device.

![Simulare](./console/images/simulare-2.png)

Simulare helps you explore the Esper platform without using a real device. We provide this simulated device to act as an actual device to help you experience the capabilities of our platform. 

Capabilities such as Apps, Remote View and Capture log might not be available on a Simulated device. 

This device is only available for new signups currently. Please note that trial accounts created on or after September 27, 2019 will have this feature enabled. Accounts created before that will not. Please reach out to us at support@esper.io if you signed up before September 27, and would like to try out Simulated devices. 

### Categories

There are checkboxes on the top of the page with categories such as Active, Inactive, Under provisioning, Devices with low battery, etc. that can be checked to view devices in each particular state.

### Search

Search is provided on the top right where you can search for devices in Devices using the Esper assigned device code which is displayed on the device's home page wallpaper.

### Device Tile

The default view is Grid, but the user can click on Maps to access the map view. Under the Grid view each device will be represented as tiles in the ‘Device management’ tab with a summary of all device information such as location, network, health, and risk status of the device. Click on [View More](./console/device-management/-/index.md) on the tile for any individual device to see further actions and changes that can be made for this device:

![Device Management](./assets/OLD_DASHBOARD/1_DM.png)

Devices listed 'Under Provisioning' refer to devices where Google Play apps are getting updated:

![Device Management](./assets/OLD_DASHBOARD/Under_Provisioning.png)

Devices under 'Applying Policy' refer to devices on which device templates are being implemented:

![Device Management](./assets/OLD_DASHBOARD/Applying_Policy.png)

Devices which have been enrolled on to your Esper Cloud are provisioned devices:

![Device Management](./assets/OLD_DASHBOARD/Provisioned.png)

### Map View

Under the Map view, the types of devices can be chosen from the dropdown. Once selected, the device locations are show:.

![Device Management](./assets/OLD_DASHBOARD/1.1_DM.png)

Once you click on the cluster icon, devices in the cluster will appear. Upon clicking on the individual devices, device information will be displayed:

![Device Template](./assets/OLD_DASHBOARD/1.2_DM.png)

##  Groups

Learn about Esper's Group Management.

Using Groups devices can be sectioned into groups and mass actions can be performed on a group of devices. You can create a Group by entering a unique name. Once you create a Group, you have the option to add from all existing provisioned devices which exist in the **"All devices"** group. Users can also create a Group during [template creation](./console/device-template/index.md).

You can delete a Group by selecting one or many Groups using the top right button **`Delete group`**. There is also an option to refresh. Additionally, a search capability for search via group name has been provided. The Group tile will show the name and number of devices in the Group:

![Group Management](./assets/OLD_DASHBOARD/1_GM.png)

On clicking **`View more`**, you can take actions such as reboot, lock, ping, and wipe for the devices in the Group:

![Group Management](./assets/OLD_DASHBOARD/2_GM.png)

You can change a policy for all the devices in a Group:

![Group Management](./assets/OLD_DASHBOARD/3_GM.png)

You can install apps to all the devices in a Group:

![Group Management](./assets/OLD_DASHBOARD/4_GM.png)

You can also schedule app installation for the Group:

![Group Management](./assets/OLD_DASHBOARD/5_GM.png)

You can click on **`View Results`** to see the number of successful and unsuccessful device installations:

![Group Management](./assets/OLD_DASHBOARD/6_GM.png)

If your devices are using Esper Enhanced Android, you will also see a tab for **`OS updates`**.

Here you can see a list of the Esper Enhanced Android updates that have been made on the current group with details such as build number, device type, number of devices, and date deployed along with an option to view the details:

![Group Management](./assets/OLD_DASHBOARD/7_GM.png)

By clicking on the **`Deploy OS Updates`** button you may choose any available Build number by then clicking on **`Select Build`**. 
:::tip
Please note that currently only the latest 30 builds of the Esper Enhanced Android updates will be visible to the user for deployment
:::

![Group Management](./assets/OLD_DASHBOARD/8_GM.png)

The **`Number of devices`** will populate with the devices in the group on which this update is applicable; this pertains to those that have an OS build version lower than the selected version for the deployment:

![Group Management](./assets/OLD_DASHBOARD/9_GM.png)

You may add the installation name, any pertinent notes, and after that click **`Save`**:

![Group Management](./assets/OLD_DASHBOARD/10_GM.png)

In a future update we will give users the option to choose the time window for their OS update installation.

##  Apps

Learn about Esper's App Management.

This section enables you to manage your applications. You may add the following type of apps to your device:

1.  Upload Private Apps (APK files) to the Esper Cloud.
2.  Install Google Play Apps after [approving](./console/device-template/how-approve-google-play-store-app/index.md) them.

:::tip To approve In-ROM apps or Preloaded apps in a device, you may do so from template during provisioning or post provisioning from Groups->Apps->Approvals section. 
:::
See [FAQ](https://docs.esper.io/home/faq.html)

### Upload Private Apps (APK files) to Esper Cloud:

*   You can upload your own mobile app through an APK file using the upload button on the top right hand corner.
*   There are some rules that the uploaded app must adhere to inorder to succeed upload and provisioning - 
    1. The APK has to have a version name and number.
    2. Max size - 500 MB
    3. Extension - .apk [only]
    4. APK Signature verification 
    5. Latest Android APK standards (currently we allow apks without icons)

*   You can upload your own android app APK file using the upload button on the top right hand corner
*   The uploaded apps will be shown under the 'Uploaded apps' section:

![App Management](./assets/OLD_DASHBOARD/1_AM.png)

When you click on any private app, it will open the details of the same. For example in the below screen, you may see details of the Zomato (uploaded) app. It shows the following details - 
1. Name of the app
2. Package name
3. App icon (if parsable)
4. Version number (for each version). Note that the same app can have various versions.
5. Number of devices the app is installed on
6. The date the app was uploaded on
7. Size of the app
8. Compatibility with SDK version
9. App description  <Badge text="New" type="tip"/> - We now have a new field for you to add your app version specific  description or release notes.


![App Management](./assets/apps/apps3.png)

In the above image, you can see ellipsis (3 dots) under Actions. 

Here is another example of an app with description -

![App Management](./assets/apps/apps1.png) 

 On clicking the ellipsis under Ation, user has options to:
1. Delete the app version
2. Edit description <Badge text="New" type="tip"/> - You can now add and edit description or release notes per version of the app. 
![App Management](./assets/apps/apps2.png)

    A description can also be added during app upload.
    ![App Management](./assets/apps/apps4.png)

3. Download the app version

### Install Google Play Apps after [approving](./console/device-template/how-approve-google-play-store-app/index.md) them:

*   You can also allow a user to download apps from Google Play Store.
*   This requires approving a specific app from the Play Store to allow a user to download the app on their device:

![App Management](./assets/OLD_DASHBOARD/5_DT.png)

*   You also have the option to handle new 'App Permission Requests' for the approved apps. You can:

1.  Approve the requests for new app permissions so that users can update the installed app.
2.  Revoke the requests for new app permissions so that users cannot update the installed apps.

![App Management](./assets/OLD_DASHBOARD/4_PW.png)

3\. You can set the option to receive email notification whenever an app requests new permissions by adding the appropriate email address or addresses in the notification settings:

![App Management](./assets/OLD_DASHBOARD/8_PW.png)

*   You can then select the device you want the app to be installed on by clicking on the 'Select option' and then 'Select the Device':

![App Management](./assets/OLD_DASHBOARD/5_AM.png)

*   Once the app is installed on the device, a notification shows up indicating the app was successfully installed:

![App Management](./assets/OLD_DASHBOARD/6_AM.png)

*   You also have the option to update or uninstall the app from a specific device:

![App Management](./assets/OLD_DASHBOARD/7_AM.png)

*   You can unapprove the app from all the installed devices by clicking the 'UNAPPROVE' button. <br> <br/>
<i> Note: Unapproving an app does NOT mean uninstalling it. If the app was approved earlier, it will continue to stay installed in your device until it is explicitly uninstalled. Post uninstallation, if it has been unapproved, user/admin will not be able to uninstall it on the device.</i>

![App Management](./assets/OLD_DASHBOARD/5_PW.png)

*   You can also see all the approved Google Play Store apps under Play Store section:

![App Management](./assets/OLD_DASHBOARD/1_AM.png)


##  Play for Work

Learn about setting up Play for Work apps using Esper.

*   Play for Work gives you access to the Enterprise version of Google Play.
*   Here you can either APPROVE or UNAPPROVE applications that can be downloaded onto your dedicated devices. After an app is approved it be visible on Google Play for device installation:

![Play For Work](./assets/OLD_DASHBOARD/1_PW.png)

### Approve an app

* Approve an app by clicking **APPROVE** button.

![Play For Work](./assets/OLD_DASHBOARD/2_PW.png)

*   Upon clicking APPROVE a pop-up will appear:

![Play For Work](./assets/OLD_DASHBOARD/3_PW.png)

*   Via the pop-up you can set app permission requests:

![Play For Work](./assets/OLD_DASHBOARD/4_PW.png)

*   Upon clicking SAVE, your settings will be applied to the app. The dedicated device user can then access it from the Play Store within the given app permission requests:

![Play For Work](./assets/OLD_DASHBOARD/5_PW.png)

### Unapprove an app
*   Once you click UNAPPROVE, the access to the application is removed from user’s Google Play account:

![Play For Work](./assets/OLD_DASHBOARD/5_PW.png)

*   Click the OK button to remove the application from user’s Google Play account:

![Play For Work](./assets/OLD_DASHBOARD/6_PW.png)

*   After clicking OK you will get a message indicating that it was successfully UNAPPROVED:

![Play For Work](./assets/OLD_DASHBOARD/7_PW.png)

### Approval settings
   Upon clicking OK you will see a pop-up showing the APPROVAL SETTINGS tab and NOTIFICATIONS tab. Choose the desired APPROVAL SETTINGS:

![Play For Work](./assets/OLD_DASHBOARD/4_PW.png)

###   Notifications 
sets up email notifications for anyone requesting new permissions to the specified email address or addresses:

![Play For Work](./assets/OLD_DASHBOARD/8_PW.png)

##  Alerts

Learn about available Alerts.

User Alerts to monitor the performance of your devices. You can create a device alert that watches a single metric:

![Alerts](./assets/OLD_DASHBOARD/1_A.png)

*   The alert performs one or more actions based on the value of the metric relative to a threshold over a selected time period.
*   Choose an alert, the **set condition**, the **name** for the alert and then click on **'Create alert'**:

![Alerts](./assets/OLD_DASHBOARD/2_A.png)

**Delete icon**

*   Use this to delete an alert:

![Alerts](./assets/OLD_DASHBOARD/3_A.png)

###  Compliance Policy

Policy is a standard set of rules or permissions that are related to security of the devices and apps that admin can apply on the devices to be provisioned via template. Admin may set default app permissions, Android setting app, system updates, password rules, and turn on the toggle buttons for the settings he/she wishes to enable on the devices. 


*   A new policy is created and can be deployed on any device.
*   The new policy gets listed on the **'Compliance Policy'** page which can be edited or deleted as required:

![Policy Management](./assets/OLD_DASHBOARD/3_PM.png)


Below is a list of features you can turn on or off in the policy section. These are part of our standard Compliance policy that can be configured and reapplied as per requirements of the customer after provisioning.

Dropdown menus-
1. Device Password Rules - If you choose alphabetic or alphanumeric, a minimum passowrd length can be entered. The default minimum password length is 4. <br> 
The Password rule is a policy that specifies the rules for the device unlock password that users can set.

    Alphabetic: Restricts acceptable password to contain only alphabetic characters (A to Z) in both upper and lower case.

    Alphanumeric: Expands from Alphabetic to also include numbers and special characters.

    None: There is no password required to lock the device.

    The password for a device is setup during the initial setup of the device by the user.
<br/>
2. Default App Permission<br> Default app permissions  determines enforcement of the runtime-permission rule across all the apps on a device (e.g. Gallery, Camera).


    Allow automatically: This rule will grant all the permissions any app requests without showing a prompt to the user.

    Ask user: This keeps the default behavior intact with regards to permission management. All apps on the device will show a prompt to the user to request permission. For example, by choosing this option then every app will ask the user each time before accessing a device module with a message such as “Allow app X to access Gallery? Allow/Deny”

    Deny automatically: This rule will deny any permission request from any app on the device.<br/>
3. System Updates<br> 
The System updates option allows you to enforce a system update policy on the device when a system update/OTA update is available.

    Update automatically: Enforcing this rule will install any OTA update automatically and reboot the device without requesting the user.

    Postpone installation: This option postpones installation of an OTA update for 30 days. 

    Windowed installation: This option allows you to define a time window during a full day period inside which the OTA update will be installed.
 <br/>
4. Android Settings App<br> Android settings app determines how users can access the Android device settings.

    Default setting app: Selecting this will show the icon for the default Android settings app. Clicking this icon will take the user to the default Android settings.

    No settings app: No icon for any settings app will be available for the user to choose from the device’s dashboard.

    Esper settings app: Esper offers a custom Settings’ app that limits the user to only a subset of the available Android settings. Settings provided via this app are limited to:
    1. Changing the Wi-Fi AP

    2. Enabling the “flashlight” if there’s a camera flash LED on the device

    3. Control the display orientation of the device.

    Contact Esper to setup a password for the Esper Settings app.
<br/>

Factory Reset Protection - <Badge text="New" type="tip"/> <br>
*FRP Toggle Button* - FRP or Factory Reset Protection enables you to lock your device if a user tries to factory reset it via soft/hard keys. In case of a factory reset, the device will get locked and will only be reusable by a pre-authorized google account ID. See Policy section in docs to know how to get your google account id. Note that this feature is only available on android versions 5 and above.
<br>

![](./assets/GoogleAccountid/factory_reset_protection.png)

On turning on the FRP button, user needs to enter the Google ID of the account they wish to authorize to enable usage of the device post factory reset. <br/>
See [here](./console/policy-management/getgoogleaccount.md) to know how to get the Google account ID of your account and how FRP protects your device. 

Other Compliance Policy Toggle Buttons-<br> 
1. Lock Screen<br> If Locked screen is switched ON, it enables the default “lock screen” to be displayed upon a screen timeout as specified in the Settings section. If it is enabled, the user has an option to set the password rule in the dropdown above.
<br/>
2. Safe-Mode Login<br> Turn Safe mode login On to allow users to boot to safe mode on their device. Leave Off to prevent Safe mode login.<br/>
3. Factory Reset<br> 
Factory reset dictates whether or not the user can perform a factory reset on the device. Turning it Off prevents a factory reset by the user.
This is not inclusive of the hard key factory reset.
<br/>
4. Notification bar<br> Notification bar dictates whether or not a user can swipe down to display the notification bar. Turn On to enable access to the Notification bar. <br/>
5. Screenshot<br> 
Screenshot allows or prevents a user from taking screenshots on the device using available screenshot actions. Turn On to allow screenshots.
<br/>
6. USB connectivity<br> 
USB connectivity allows or prevents the user to be able to communicate via USB on-the-go. Turn On to allow.
<br/>
7. SMS<br> SMS controls the ability of the device to send or receive SMS. If it is turned Off it prevents the device from using SMS  regardless of which SMS app is used. Turn On if you wish to enable the device to send and receive SMS. <br/>
8. Outgoing calls <br> 
Outgoing calls determines whether a user can make outgoing calls from the device. Turn On to allow outgoing calls, turn Off to prevent.
<br/>
9. Camera Access<br> Camera access allows or prevents a user to access the device’s camera. Turn On to allow.<br/>
10. NFC <br> NFC controls the device’s ability to use NFC if it is supported by the device. Turning Off prevents the device or any app from using NFC.  Turn On if any of your apps require NFC. <br/>
11. Google PlayStore<br> Google PlayStore determines if the Google PlayStore app is available to the user on the device. Turn On to allow the user access to the Google Playstore of admin approved Google Play Apps.<br/>
12. USB tethering<br> USB tethering specifies if the user is able to use their device to share a mobile connection to another device such as a laptop<br/>
13. Edit date and time<br> Edit date and time determines if the user can change the date and time on device. Turn On to allow changes by the user. <br/>
14. Application uninstall<br> For devices running Android 4.4 or 5.1, turning this setting On will block app uninstallation, especially important for private apps. This setting is not needed if you are running Android 6.0 or above. <br/>
15. USB File transfer <br> Turning off USB file transfer will prevent the user from transferring files from the device to a computer and vice versa using a USB cable<br/>
16. Google Assistant <Badge text="New" type="tip"/> <br> Enables/disables voice command via Google Assistant. Available only for Android devices supporting Google Assistant.   

For example - If you wish to have Google Play Store show up on the device, you may turn on the toggle button. <br> 

Checkbox-<br> 
`Restrict outgoing/incoming calls using customised dialer.` <br> 

If clicked, this opens up two more checkboxes-<br> 

1. `Restrict incoming calls to uploaded contacts only <upload a csv file of allowed contacts>`<br> 
2. `Restrict outgoing calls to uploaded contacts only <upload a csv file of allowed contacts>`<br> 

In order to restrict phone numbers that can make or receive calls to the device, upload a .csv file with the allowed phone numbers.<br> 

:::tip All numbers must be preceded by +country code (for example +1 for US).
All numbers must be separated by comma. 
:::
<br> 

![](./assets/OLD_DASHBOARD/newpolicy.png)


You may reset these values to default at any time by clicking `Reset to Default` button at the bottom.



##  Users

Learn about Esper's User Management.

Under the Users tab you are able to view all registered users in your enterprise. Here you can add, delete, and edit users:

![User Management](./assets/OLD_DASHBOARD/1_UM.png)

New User

*   To add a new user, click on `New User` and fill in details of the user in the form:

![User Management](./assets/OLD_DASHBOARD/2_UM.png)

*   Upon creating a new user, you will get a confirmation pop-up:

![User Management](./assets/OLD_DASHBOARD/3_UM.png)

Edit icon

*   Here you can edit the details of a user.
*   You will be able to change the username, email, full name, password, and role assigned to the user:

![User Management](./assets/OLD_DASHBOARD/4_UM.png)

Delete icon

*   Click on the `Delete` icon to delete a user from the enterprise. That user will no longer be able to access their account:

![User Management](./assets/OLD_DASHBOARD/5_UM.png)


##  Geofence <Badge text="New" type="tip"/>


Now in Esper - Geofences!
Geofencing is a useful feature for some dedicated device deployment scenarios. With geofencing you use the device’s location typically generated by GPS to trigger an alert when the device enters or leaves a defined area. Common scenarios include making sure a fleet of delivery devices stay in their delivery zone, warehousing devices don’t stray far from the warehouse, and restaurant ordering devices don’t leave the restaurant.

In order for geofencing to work, the mobile device needs Internet connectivity and location services enabled. Thus this is typically for cellular connected devices with high accuracy location services enabled - whether smartphones or tablets. 

Setting up a geofence for a device is easy - it starts by selecting Geofence in Esper Console left navigation pane - this brings you up to a wizard for quickly defining the geofence. Click on `New Geofence`:

![](./assets/OLD_DASHBOARD/geo4.png)


In the first screen you define the size of your geofence (meaning where you expect any devices to be for this geofence) - it is a circle that can be as small as 100m radius up to 10km. Note that GPS can drift and jump, thus a geofence smaller than 100m can cause false positives. To set it up at a location simply type the address for the center of the circle, or drag it in the map view to set it up. Give it a name and description, and then click `Next`:

![](./assets/OLD_DASHBOARD/geo3.png)


Now you assign devices to this geofence - you can do as many as you need that fit the criteria for the geofence. In this case we are just doing one:

![](./assets/OLD_DASHBOARD/geo1.png)

Now you define the action to be taken when any of the assigned devices leave the geofence - you can either lock them, have them beep, or both. In this case I went with beep!

![](./assets/OLD_DASHBOARD/geo2.png)

If you chose to Lockdown the device, you will see the following screen if the device is taken outside the geofence boundary - 

![](./assets/OLD_DASHBOARD/geo5.jpg)


You can see for Geofence applied Devices if they have left or entered the Geofence in the Event Feed section:
![](./assets/OLD_DASHBOARD/geo6.png)


That’s it! It looks even easier in our video:
https://youtu.be/UkTwhFRTwgQ                       
	
Give it a try and let us know what you think, andi@esper.io.


:::tip Note: The performance of Geofencing feature is dependent on accuracy of in-built GPS of devices. Additionally, ability to track location of the device is also dependent on WiFi, Bluetooth, cellular connectivity and internet of the device.  
:::

##  Company Settings

Learn about Esper's Company Settings.

*   Company Settings enables you to set your company details by clicking on the **'Edit profile'** button on the top right hand corner:

![Company Settings](./assets/OLD_DASHBOARD/1_EC.png)

*   You are required to fill in your **company information** including:

1.  Registered name
2.  Location
3.  Name
4.  Zip code
5.  Email
6.  Address
7.  Phone number

![Company Settings](./assets/OLD_DASHBOARD/2_EC.png)

*   If you will be using apps from Google you will also need to enroll your company's Google Play account:

![Company Settings](./assets/OLD_DASHBOARD/3_EC.png)

##  OS Updates

### Over-the-air updates for Esper Enhanced Android.

You can update the Esper Enhanced Android version using our OTA functionality. Currently, we are only showing the number of devices the build version has been applied to; this also includes the publish date and size. To deploy a new available build on a group, the user can go to [Group->OS Update](./console/group-management/index.md). See the Group section for more details.

![OS Updates](./assets/OLD_DASHBOARD/OS.png)

:::tip
Please note that currently only the latest 30 builds of Esper Enhanced Android updates will be visible to the user for deployment.
:::

##  Developer Options


**Turn App and Device Management into Code**

Esper is focused on helping Android app developers build, deliver, and maintain Dedicated Device applications - whether a restaurant kiosk, retail POS, or logistics hub. We have made our APIs available to Android developers worldwide so they can move rote app and device management actions into reusable code. Anyone can use our APIs to build, orchestrate, and integrate elegant solutions based on their business requirements. We do the heavy lifting by taking care of the infrastructure, so app developers can focus on building great solutions rather than being bogged down in app and device management. We help you procure efficient hardware along with the optional secure, optimized Esper Enhanced Android and our open source APIs and SDKs. We also offer the Esper Plugin for the Android Studio with tools improving the challenging task of app diagnostics - including working with deployed apps running on dedicated devices in the field. Check out [esper.io](http://esper.io) for more information about our rich feature set.

To kick things off, you need to generate an **API key** that you can tie to a specific application - it is your choice on how you want to manage your API keys. Do this by clicking the **"Register App"** button. You can also easily copy the Enterprise ID, necessary for API calls, by clicking on the copy icon next to Enterprise ID on top right of this section.

![Developer Options](./assets/OLD_DASHBOARD/1_DO.png)

Next, you need to enter a unique app name and description(optional) and click **register application**.

![Developer Options](./assets/OLD_DASHBOARD/2_DO.png)

Click Generate Token. This will generate a unique **OAuth-based API key**.

![Developer Options](./assets/OLD_DASHBOARD/3_DO.png)

You can then copy (or renew if needed) your API key.

![Developer Options](./assets/OLD_DASHBOARD/4_DO.png)

The **API key** and **Enterprise ID** can be copied from the dashboard as shown above and can be used to access our [CLI platform](https://github.com/esper-io/esper-cli) (https://github.com/esper-io/esper-cli) as well as to use the [SDK/API](http://api.esper.io) (api.esper.io) in your development and management systems.

Checkout the relevant documentation on the top right of this page by clicking on [Developer Hub](https://docs.esper.io/) and [API Documentation](https://api.esper.io/).

##  Secure Remote ADB

Developer should be able to debug their devices remotely without even physical association with the device. ADB is android tool that help you to get take actions on the device, get the device or application logs and help you in resolving customer or in-field issues right by sitting remotely in your office.

This document tells you how you can remotely connect to device via secure adb channel. We will be using esper-cli command line tool which internally uses [esperSDK](https://docs.esper.io/home/pythonsdk.html)  [APIs](https://api.esper.io/) to provide the secure access between your host machine and device.

Remote access to the device can be done from anywhere in the world using espercli and doesn't have to be in the same network.

### Steps to connect to secure remote adb:

1. On to Esper Dashboard https://{{ esper_tenant_name }}.esper.cloud, Go to  `Devices` tab, then to your device  and to `Actions`.

2. At the bottom of the page, Click `enable adb`.

3. On to your android device, connect via usb cable and enable adb over tcpip by following command:
   ```sh
   adb tcpip 5555
    ```
4. Disconnect usb cable from the device. You should be able to connect adb via port 5555 over tcp

5. Setup [esper-cli](https://docs.esper.io/home/espercli.html) and configure for your environment on to the host machine.
   - Check your espercli version: espercli -v
   ```sh
   #espercli -v
   Esper CLI is Command line tool for the Esper APIs:  0.0.5
   Cement Framework 3.0.2
   Python 3.7.3
   Platform Darwin-18.0.0-x86_64-i386-64bit
   ```
   - Make sure it is >= 0.0.5 to use secure-adb feature.
   - Upgrade to the latest version of espercli using the following command:
   ```sh
   pip install -U espercli 
   ```
6. Copy your device id from esper dashboard information tab or from your device bottom left most. It looks like SNA-SNL-1234.
   
7. Use espercli to connect to Device:
   ```sh
   #espercli secureadb connect -d SNA-SNL-1234
    Initiating Remote ADB Session. This may take a few seconds...
    Secure ADB Client
    Please connect ADB client to the following endpoint: 127.0.0.1 : 62945
    If adb-tools is installed, please run the command below:
    adb connect 127.0.0.1:62945
    ```
8. Now connect your device via port number obtained above on localhost.
   ```sh
   adb connect 127.0.0.1:62945
   ```
9. You are connected to adb.

::: warning
 Now onwards until device is rebooted, You would be able to connect to the device remotely using espercli.  Post reboot you have to do Step 1-8 again
:::
