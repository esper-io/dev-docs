# Device Features (for individual devices)

## Information

This is the first tab that comes in view when clicking on `Details` on the Device Tile. This section consists of extensive amount of information regarding the device such as - 

* Battery information (Status of charge, current temperature)

* Storage (Total available, used, internal and OS occupied storage) 

* Memory (Total, in-use, average used, free)

* Location on map - It might take time sometimes to show up as its an external Google EMM api call for GMS devices. If the device does not show its location, it can helpful to reboot the device. In most cases, for GMS as well as non-GMS devices, location should start showing after staying connected to a network for 30 minutes or so.

* Device code, Registered on, Template name, GMS/Non-GMS

* Software information (installed esper client version, security patch level, device kernel version, bootloader version, android build number, supported ABI, Android API level, Android build date and Android version)

* Hardware information (Manufacturer, Hardware chip set, Brand, Serial number, Model, Baseband version)

* Network information (IMEI/MEID, Mac Address, DNS, Wifi Mac ID, Cellular network status, Wifi Access point, Connectivity duration, IP address, Ethernet status)
    
* Display Information - Resolution, Refresh rate

Additionally, on the top under breadcrumbs, Device name, Group name (that it belongs to), Applied Policy and Applied template are shown.

### Device Information View 

![Device Information View](../../../assets/devicetab/deviceinfo1.png)
![Device Information View](../../../assets/devicetab/deviceinfo2.png)
![Device Information View](../../../assets/devicetab/deviceinfo3.png)

[Introduction](../../../../console.md) / [Devices](../../index.md) / [View More](../index.md) / Actions
# Device Settings
<div class="avg-reading-time" style="margin-top: 0rem;">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}</div>
 
Device actions or setting changes to be performed on a device from dashboard can be done from this section. There are capabilities such as Reboot, Screen lock, Heart beat, Device Lockdown, Wipe, Device mode, increase or decrease brightness, volume, change screen orientation, screen timeout settings, wifi settings, GPS, Bluetooth and ADB settings that can be changed from this section.
Below is screenshot of the complete Device Settings page with tabs closed-
 
![Device Management](../../../assets/OLD_DASHBOARD/device-actions.png)
 
Another view with all tabs open -
 
![Device Management](../../../assets/OLD_DASHBOARD/devicesettingstabopen1.png)
 
![Device Management](../../../assets/OLD_DASHBOARD/devicesettingstabopen2.png)
 
Let's get into details of each action and setting below -
 
**1\. Reboot**
 
Click on the ‘Reboot’ option and then confirm to reboot the device remotely. This can help in case there is trouble communicating with the device.
 
**2\. Screen Lock**
 
To lock the device screen , click on ‘Lock device’ and confirm the same. In this case, Device user will need to enter device password (if it has been set) in-order to use device again. This can be used to avoid unwanted usage if device falls in wrong hands.
 
**3\. Heart beat**
 
Esper Managed devices are continuously talking to our Cloud and updating their statuses every minute. If they are dozing off due to inactivity or bad network connection, our Cloud will internally wake them and ask for a status update.
 
The Hear beat or Ping command is used to do the same task manually. It request device to send the freshest status update to the cloud dashboard. It can also be used to check whether the device is online.
 
 
**4. Device Lockdown** <Badge text="New" type="tip"/> <br>
This feature is introduced to completely lockdown the device in case of unauthorized usage or relocation etc. For example if a user takes device outside of the authorized area, or a company decides to prohibit user from using the device, they can do a complete lockdown. In this case, a custom message can be entered which will show on screen, for example a contact number to call or email.
 
![](../../../assets/devicelockdown/lockdown1.png)
 
When you click `Lockdown`, a custom message text box appears where user can enter the text they want the device user to see.
 
![](../../../assets/devicelockdown/lockdown3.png)
 
As a result, when the device is locked down, the user sees the following screen -
 
![](../../../assets/devicelockdown/lockdown4.png)
 
After locking down a device, the button will change to `Unlock` to give admin access to unlock the said device.
 
![](../../../assets/devicelockdown/lockdown2.png)
 
 
 
 
**5. Wipe device**
 
In order to wipe or factory reset the device, click on ‘Wipe device’ tile. Toggle the external storage to ON if you want to wipe the external storage also.
Confirm by clicking ‘Wipe’ and the device will be automatically Wiped.
 
This command can be used if the device needs to be reprovisioned with a different template. It can also be used if device system has crashed and is unusable currently. Factory reset will bring it back to original factory settings which can be freshly configured for company purpose.
 
**6. Device Mode**
 
If your device was provisioned in kiosk mode, you may use this button to exit out of the kiosk mode or enter back in. When you exit the kiosk mode, the kiosk mode app (selected during provisioning) will get unpinned and device user will be able to use the device in multi-application mode. When you click this button again, it will re-enter kiosk mode and the same app will again get pinned to the device screen.
 
![](../../../assets/devicesettings/changekioskapp.png)
 
If you wish to change the mode or the kiosk app, click on "Switch to Multi Applications"/ "Switch to Kiosk Mode" or the "Change" button on top right. A side bar will appear on right as follows -
 
![](../../../assets/devicesettings/kioskmodefullview.png)
 
Taking a closer look at the Device Mode side bar -
![](../../../../assets/devicesettings/changekioskapp1.png)
 
Here, you may choose between Kiosk mode and Multi application mode.
 
Kiosk mode will pin the selected app on screen from which a device user can not get out. They will only be able to use the selected kiosk app on the device. In multi-application mode, the device user can view the device home screen and select and use any of the apps on the device home screen.
 
When choosing kiosk mode, user has the option to choose the app that is to be pinned in the kiosk mode from the drop down menu. In multi application mode this drop down is disabled as all apps will be visible to user.
 
After making the selection, click Save.
 
![](../../../assets/devicesettings/changekioskapp2.png)
 
If multi application mode was chosen, the button will change to "Switch to Kiosk Mode"-
 
![](../../../assets/devicesettings/changekioskapp3.png)
 
If Kiosk mode with a different kiosk mode app was chosen, the name of the app will change next to the text "Pinned app"-
 
![](../../../assets/devicesettings/changekioskapp4.png)
 
In this case, it changed from "bbdaily" to "cure.fit".
 
**7. Display**
 
This section is related to the display settings of the device.
Following settings for the device can be controlled from this section -
 
1. Increase or decrease the brightness of the screen.
2. Change the screen orientation to - <br>
   -auto rotate - Screen will change orientation as per the orientation of the device.  <br>
   -landscape - Screen will always stay in landscape mode. <br>
   -portrait - Screen will always stay in portrait mode. <br>
3. Select screen timeout duration - User can choose a configurable timing after which the device will lock the screen.<br>
 
 
![](../../../assets/devicesettings/display.png)  
 
![](../../../assets/devicesettings/display1.png)
 
**8. Sound**
This section is related to the sound settings of the device.
Following settings for the device can be controlled from this section -
 
1. Alarm volume
2. Notification volume
3. Music volume
4. Ring volume
 
 
**9. WiFi & Internet**
 
This section is related to the Wifi and Internet settings of the device.
 
![](../../../assets/devicesettings/devicewifi.png)
 
WiFi - User can toggle on/off the Wifi for the device. This can be done if the device has an alternative connection available such as cellular network via sim card.
 
:::tip
In case the dashboard user tries to switch off WiFi when no other connection is available, in-order to maintain communication with the cloud backend, the device will turn WiFi on automatically after attempting to find alternative internet connection for 10s.
:::
 
WiFi access points - User can predefine preferred WiFi networks by entering WiFi access point details such as WiFi SSID, WiFi Security Type, WiFi Password and whether its a "Hidden" network.
 
![](../../../assets/devicesettings/devicewifiap.png)
 
The device will automatically connect to the given WiFi access points as per the availability and network strength.
 
:::tip
The WiFi on/off and WiFi access points feature are not available for android 10.0 and above
:::
 
**10. Location**
This section relates to the settings pertaining to the GPS accuracy of the device.
 
![](../../../assets/devicesettings/devicelocation.png)
 
There are 4 GPS accuracy settings -
 
1. High Accuracy - Choosing this option will optimize for accuracy using extra inferences and heuristics for quicker location resolution.
 
2. Device Only - Choosing this option will just use GPS chipset of device and will not use any extra inferences or heuristics. This can slow down location resolution.
 
3. Battery Saver - This option will optimize for longer battery life at the cost of accuracy of location.
 
4. Off - Turns of Device GPS.
 
**11. Bluetooth & Devices**
 
This feature will allow user control over bluetooth connection of the device. Turning off the toggle button turns Off the bluetooth on device.
When on, the information under "Paired devices" will show the number of devices paired and whether they are connected.
 
For example when no device is connected -
![](../../../assets/devicesettings/devicebluetooth.png)
 
When a device is paired as well as connected -
![](../../../assets/devicesettings/devicebluetooth1.png)
 
Here, the device name as well as its IP address and connection status is shown. If the device gets disconnected, it will continue to show in the Paired list but the connection status will shows as "Disconnected."
 
Until the device user removes the device by choosing to "Forget Device" from the list of paired bluetooth devices, it will continue to show in the "Paired devices" list on Dashboard.
 
 
**12. ADB access**
 
Google defines ADB as “Android Debug Bridge (adb) is a versatile command-line tool that provides access to Unix shell to communicate with an android device.
 
Turn on ADB of your Esper Managed Device with easy by turning on the ADB toggle button. Use the drop down menu to turn on adb for a configurable time period.
 
You may also choose the Always On option to keep ADB on. However, Esper does not recommend this practice as ADB is a gateway to communication with core of device and should be used in a highly secure manner.
 
![](../../../assets/devicesettings/deviceadb.png)
 
In case dashboard user needs to turn on the adb for communication to device for purpose of debugging or run external tools, they may choose to enable it from here.
Below are the time configurations for which adb can be turned on-
 
   - Always On
   - 1 hour
   - 3 hour
   - 8 hour
   - 1 day
 
After the completion of this time period from the point of provisioning, the ADB will automatically turn off for the device.
<br>
 
**12. Timezone**
 
With our supervisor plugin, we have enabled you to change timezone of device remotely via dashboard. 
 
:::tip
Timezone feature is only available for devices which are running Esper Enhanced Android or the devices for which Esper's supervisor plugin has been signed by the manufacturer of the device.
:::
 
 
![](../../../assets/settings/timezone.png)
 
 
[Return to View More](../index.md)
 


## Device Graphs

This section represents the graphical representation of the various attributes of a particular device whose ID is displayed at the top. The values that can be monitored includes information related to battery, memory, WiFi, and their usage over time.

With the new Telemetry Cloud infrastructure in place, Esper Device metrics have now increased to 15 metrics that can be accessed via Device graphs:
1. Battery Current 
2. Wifi Signal Strength
3. Available Internal Storage
4. Wifi Link Speed
5. Data Usage (Download) 
6. Data Usage (Upload)
7. Battery Capacity Total
8. OS Occupied Storage
9. Battery Current Average
10. Battery Capacity Count
11. Available RAM
12. Battery Level
13. Battery Voltage
14. Wifi Frequency
15. Battery Temperature

![Device Management](../../../assets/OLD_DASHBOARD/7_DM.png)

However, if a device stays inactive for more than 7 days, you will see an empty state requesting to activate the device: ![Device Management](../../../assets/OLD_DASHBOARD/8_DM.png)

## Apps

This sections lists the Apps that are installed on the device along with the Version code, Package Name, Approval status (On/Off toggle button) and Available Actions. The apps that are already installed in the device are specified in this list including Private, Preloaded (In-ROM) and Google Apps. Toggling the button On will un-hide the app and toggling it back to Off wil hide the app.

![Device Management](../../../assets/OLD_DASHBOARD/3_DM.png)

There are also radio buttons at the bottom end where user can choose to `Install` or `Uninstall` a private app on the device which is previously uploaded in the `Apps` section of the Dashboard.

There are many different ways to install various type of apps on a device as listed below - 

### Installing an App in a Single Device - 

#### Private Apps

These are company apps or privately owned app versions that can be uploaded on the dashboard from the `Apps` section. In-order to install this app on the device, click on the radio button in Device->Details->Apps section for Install, choose the app and click Install.

#### Google Apps

1. Go to Play For Work
2. Click on the app (Make sure its approved
3. Click Select
4. Select the device you wish to install it on from the dropdown on top left
5. Click Install

#### Preloaded Apps

Approve a preloaded app to show in the device from the list of apps in Device-Apps section by turning **on** the toggle button.

### Uninstalling an App on a Single Device 
 
#### Private Apps

Select the 'uninstall' radio button and choose the app to be uninstalled from the drop down menu. Click Uninstall.

#### Google Apps

 1. Go to Play For Work
 2. Click on the app 
 3. Click Select
 4. Select the device you wish to uninstall it on from the dropdown on top left
 5. Click Uninstall

#### Preloaded Apps

Turn off the toggle button from the app list for the preloaded app. It does not uninstall the app but hides it. 
 
 

:::tip 
 Please note that some preloaded apps are designed to be uninstallable by the device manufacturers so they can be hidden but can not be uninstalled. 
:::


## Compliance Policy

If user wants to switch to a new policy, they can select from the drop down menu and apply it. To create a new policy, click [here](../../../../home/console/device-management/-/index.md#compliance-policy).

![Device Management](../../../assets/OLD_DASHBOARD/Device-Compliance_Policy_image_1.png)

## Security

This page will inform user of security risks that device is facing. If there are any risks, it will show the threat level, cause of the threat, and advise user to secure the device.

![Device Management](../../../assets/OLD_DASHBOARD/Device_Security_image_1.png)

The security risk calculation and advise is done on basis of whether the devices that show signs of tampering or having been rooted. A device that has been tampered with for example, will be considered High Risk. An emulator or virtual device will also fall in High Risk category. 

Following are the criterion and details based on which the security risks are calculated - 

1. **BasicIntegrity** - BasicIntegrity gives you a signal about the general integrity of the device and its API. Rooted devices fail basicIntegrity, as do emulators, virtual devices, and devices with signs of tampering, such as API hooks.

2. **CtsProfileMatch** - CtsProfileMatch gives you a much stricter signal about the compatibility of the device. Only unmodified devices that have been certified by Google can pass ctsProfileMatch. Devices that will fail ctsProfileMatch include the following:

    a. Devices that fail basicIntegrity

    b. Devices with an unlocked bootloader.

    c. Devices with a custom system image (custom ROM)
    
    d. Devices for which the manufactured didn't apply for, or pass, Google certification

    e. Devices with a system image built directly from the Android Open Source Program source files

    f. Devices with a system image distributed as part of a beta or developer preview program (including the Android Beta Program)

    When present, the advice parameter provides information to help explain why the SafetyNet Attestation API set either ctsProfileMatch or basicIntegrity to false in a particular result. The parameter's value contains a list of strings, such as the        ones in the following example:

        {"advice": "LOCK_BOOTLOADER,RESTORE_TO_FACTORY_ROM"}

3. Security Patch Version - Last updated security patch version 

Device:
Device will send the above 3 fields in DeviceStatus and Device API. BasicIntegrity and CtsProfileMatch will be calculated on 3 instances:

1. During provisioning
2. When Requested from Dashboard
3. After every 5 hrs.


### Security Dashboard

Cloud will receive the above values and figure out the the security state, reason and advise.

* If Basic Integrity is false, then its a high risk device(<=5 points)
* If Basic Integrity is true, little more weightage to ctsProfile(3) then Security patch(2) out of 5 points. if both are false (= 5 points), consider medium risk.
* If Basic Integrity is true, Ctsprofile is also true and patch version is > 3 months old, then consider as a low risk.

### Points Table:

* 0-5 points   → High Risk
* 5-7 points   → Medium Risk
* 8-9 points   → Low Risk
* 9-10 points → Secure

## Remote Viewer

The remote viewer section lets the user remotely view the device and take screenshots of a remote device.


How to remotely view your device

*   Remote viewer is a feature which allows one to observe the device remotely and allow Admin (Dashboard user) to monitor the device live.

*   The ‘Capture screenshot’ button will capture the current screen of the device. There is a recorded history of all screenshots captured per device under the screenshots section.

*   For remote viewing of the device we need to click on the ‘Start session’ icon. Once the user allows the remote view request, a secure connection will get established and device screen will be streamed on the dashboard. 

![Device Management](../../../assets/OLD_DASHBOARD/4_DM.png)

*   The session automatically ends after 15 minutes. You can also stop it by clicking the ‘Stop session’.

![Device Management](../../../assets/OLD_DASHBOARD/5_DM.png)

*   The ‘Portrait’ button allows you to turn the screen to portrait as well as landscape mode.
*   Single Device to Cloud session is allowed at a time.

### Remote Control

On Esper Enhanced Devices, or devices that have manufacture signed supervisor plugin in the system, there is an option to `Remote Control` the device. This means that any action such as click performed on the dashboard will result in remote action on the device. 

Through Esper obtaining membership in SEAP (Samsung Enterprise Alliance Program), our platform now supports Samsung Knox specific extensions and as a result can now provide the Remote Control feature available for any Esper provisioned Samsung devices running Knox 3.x.

### Capture Logs

This section lets the user capture bug report from the device in question. You can select the bug report radio button and press the 'Start' button. The status will change from `Requesting Report` to `Permission Granted` to `Download`. The last status 'Download' is a link that will download the bug report with date and time stamp from the device to help your technical staff debug any issues. If device user denies the permission to share the logs, the status will change to `Permission Denied by User`.

![Device Management](../../../assets/OLD_DASHBOARD/10_DM.png)

:::tip
Please note that the user on the device side needs to swipe down the notification bar and click on the bug report line. On being prompted, the device user needs to choose `Share`. If they choose `Decline` the Bug Report will not be shared.
:::
