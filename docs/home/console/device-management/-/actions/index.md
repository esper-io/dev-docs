[Introduction](../../../../console.md) / [Devices](../../index.md) / [View More](../index.md) / Actions
# Actions
<div class="avg-reading-time" style="margin-top: 0rem;">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}</div>


Actions that can be performed on the device from cloud portal

## Device Actions

All the device actions that can be performed are shown.

Select a particular action to perform on the active device.

**1\. Reboot**

Click on the ‘Reboot’ option and then confirm to reboot the device remotely.

**2\. Lock**

To lock the device, click on ‘Lock device’ and confirm the same.

**3\. Heart beat**

If the device has been inactive for a while, it means the device has entered Doze mode during which network activity is disabled.

The Ping device command forces the device to come out of Doze mode and tell the Dashboard it is active.

**4.** **Wipe device**

In order to wipe or factory reset the device, click on ‘Wipe device’ tile. Toggle the external storage to ON if you want to wipe the external storage also.

Confirm by clicking ‘Wipe’ and the device will be automatically Wiped.

**5. Device Mode** <Badge text="New" type="tip"/>

If your device was provisioned in kiosk mode, you may use this button to exit out of the kiosk mode or enter back in. When you exit the kiosk mode, the kiosk mode app (selected during provisioning) will get unpinned and device user will be able to use the device in multi-application mode. When you click this button again, it will re-enter kiosk mode and the same app will again get pinned to the device screen.


**6. ADB access** <Badge text="New" type="tip"/>

Turn on ADB of your Esper Managed Device with easy by turning on the ADB toggle button. This only works for physically connected devices via USB.

**7. Device Settings** 

Change Device settings from Esper Dashboard. Following are features available -
 * Turn on/off bluetooth  <br>
 * Select screen timeout duration  <br>
 * Select screen orientation  <br>
 * Select GPS accuracy  <br>
 * Increase/decrease Brightness, Volume (alarm, notification, ring and music)  <br>

<br>
See screenshot of the Device Actions page below - 

![Device Management](../../../../assets/OLD_DASHBOARD/Device-actions.png)

[Return to View More](../index.md)
