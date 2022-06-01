# Esper Release Notes - DevRel 86

Date: 6/9/2022

  

Esper DevRel 86 is a minor release with essential updates and improvements— for new Esper signups, we have added a new application syncing functionality to Blueprints.  You can find the complete breakdown of what’s new below.

## Blueprint Application Syncing
    

When a blueprint is applied to a device, changes made to the applications section in the blueprint now reflect on the device. When an app is removed from a blueprint, it is uninstalled from the device. Similarly, the device reflects the corresponding change when a version of an application is changed in the blueprint (upgraded to a higher version or downgraded to a lower one).

When a device is moved to a new blueprint (new group), all apps will be removed, updated/downgraded, installed, or hidden/shown to match the new blueprint state.

## API for scheduled power ON/OFF
    

We have added an API for scheduled power ON/OFF for specific Lenovo devices. Please contact the [Esper team](https://support.esper.io/s/) to know more about this feature.

  

## Fetching device UUID
    

We have added the new method in our Device SDK to fetch the device UUID. This is needed for executing our cloud APIs directly from the device.


``` java
String uuid = esperDeviceInfo.getUUID()
```


## Bugs and Improvements

-   When canceling a Pipeline run or stage, the corresponding commands in the queued state will now be canceled as well.  

-   Added support for all of the special characters while creating/updating a password in user management.    

-   Users can now update the password from user management.   

-   We have resolved a bug with the Device Provisioner tool that was causing an interruption during provisioning.
  

We’re excited to launch DevRel 86 today, and the Esper team is hard at work on DevRel 87, which is currently scheduled to launch in June 2022. Please [reach out](https://support.esper.io/s/) to share your thoughts on how Esper can improve future releases.

