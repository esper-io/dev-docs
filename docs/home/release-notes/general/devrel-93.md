# Esper Release Notes - DevRel 93

Date: 9/22/2022

Esper DevRel 93 is a standard release with exciting new updates and improvements. Along with adding Android 13 support, we added several improvements to the Blueprint experience. 

- Significant improvement on time taken for Kiosk mode changes to reflect on console
Support for Android 13

We now support provisioning and managing Android 13 devices.

## Phone number information added to the Network event

You can now see the phone number for an Esper managed device with an actived cellular connection on Esper Console under "Device → Overview → Network".

## Kiosk Mode State Status Console Performance Improvement

We have made a significant improvement on time taken for Kiosk mode changes made to a device to then be reflect on the Esper Console. 

## Blueprint information added to Esper Settings

You can now see Blueprint versions under "Esper Settings → About". Blueprint version changes follow Blueprint config setup, where: 

1. If you remove a Blueprint from a Group, the device will still have the Blueprint version last set to it.
2. Blueprint version will only be updated when you move the device to a different Group with an assigned Blueprint.
 
## Set or change language on Samsung devices using a Blueprint

The device language can now be set or changed using a Blueprint during and post provisioning on Knox supported Samsung devices.


## Bug report request support for offline devices on Blueprints release

For our customers who are on the Blueprints experience, we now allow you to queue a bug report request when a device is offline. The log request command stays queued for 7 days, waiting for the device to come back online.

## Bug Fixes and Improvements

- We fixed a bug where in some cases apps were not installed upon reapplying a Blueprint.
- We fixed the “Created at” bug where the Device Record Registration was showing the incorrect record creation date. All record registration now logs the correct time and date.
- We fixed the issue where Bluetooth was staying turned off when enabled with Blueprints. It now turns on automatically when provisioning is completed.
- We fixed an edge case bug where the files were failing to save in the desired location during provisioning with a Blueprint.

We’re excited to launch DevRel 93, and the Esper team is hard at work on the next release, which is currently scheduled to launch early October 2022. Please contact [Esper Support](mailto:support@esper.io) to share your thoughts on how Esper can improve future releases.




