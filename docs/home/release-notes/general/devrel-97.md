# Esper Release Notes - DevRel 97

Date: 11/07/2022
 
We’ve made significant improvements to Blueprints by addressing issues related to seamless provisioning, and added new capabilities for Templates, Blueprints, and Esper Foundation for Android.
 
Find a breakdown of the improvements below. 
 
## New Features

We’ve added some new features in this release to make the most out of provisioning your devices:

- Setting a Wi-Fi access point (AP) on a device using Esper Settings now supports APs without a password.

- You can now set a proxy for Wi-Fi during provisioning using JSON Settings. 

- For Template users, you can now change the device’s language via API after provisioning on Knox-enabled devices or devices with a signed Supervisor plugin installed.

- We’ve added the unique capability for Esper Foundation for Android x86 to support 802.1X via Ethernet. As part of this support you can now configure the required Ethernet certificate via JSON Settings in a Template or Blueprint, or via Namespace API.

- We've added a new command to set the static IP of a device connected to a network via Wi-Fi or Ethernet. For Wi-Fi devices, you'll need an Android version 6-12. For Ethernet, you'll need an Esper Foundation for Android device (x86 device) running on the SDK 3.0+.

If you’re using Esper’s Blueprints feature, you now have the option to prevent enrolling devices in Android EMM (AKA Managed Google Play) during provisioning. Use this option if you do not need Play Store Apps for your deployment. If you choose this and later on wish to add Android EMM capabilities to your devices, they will need to be factory reset and re-provisioned.

 
## Bug Fixes and Improvements

-  Fixed an issue that led some devices to get stuck during provisioning. 

-  Patched a bug that resulted in the Play Store shortcut being hidden post-installation. 

-  Patched an issue where an app is set to Launch on Start but ended up in the background. 

-  Patched a bug where the device appeared as offline post-provisioning. 

-  Patched a bug that prevented apps from uninstalling on some devices.

-  Fixed an issue in the Device Provisioner when searching in a group, global search results were returned. 

-  Made a fix where changing the static IP of a device connected via Ethernet and Wi-Fi was not executed on the device.

-  Improved stability of our remote control and remote view system found in **Devices & Groups > Remote Viewer**. 

-  Plus, fixed bugs and made performance improvements with a focus on the Blueprints experience.

We’re excited to launch DevRel 97, and the Esper team is hard at work on the next release. Please contact [Esper Support](mailto:support@esper.io) to share your thoughts on how Esper can improve future releases.
 
