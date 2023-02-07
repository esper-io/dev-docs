# Esper Release Notes - DevRel 102

Date: 01/04/2023

In this release, we made significant improvements to remote viewer sessions, provisioning, and bug reports.

## New Features

* In Blueprints: 

    - Added a new debug mode that captures bug reports from a device even if it’s in kiosk mode. Previously, devices needed to be taken out of kiosk mode or a temporary compliance policy needed to be applied to fetch a bug report. Now, devices can stay in kiosk mode and share their bug reports with the console.

    - Added the ability to enable Android Debug Bridge (ADB) outside of Blueprints at an individual device level. 

* In Templates: 

    - Added the ability to  set the device’s language at the QR-code step, saving time during the provisioning process. 

* We’ve made several improvements to remote viewer sessions. These changes will be available for both Templates and Blueprints: 

    - Added the ability to increase session time (up to 30 minutes) depending on your use case.  

    - Added the ability to collapse the modal during a full screen remote session. 

## Bug Fixes and Improvements

* In Blueprints, we resolved an issue where the version field failed to update when trying to upload a different version of the same app. 

* We’ve exposed app installation permissions which will help users update their apps even when a device is idle. 

We’re excited to launch DevRel 102, and the Esper team is hard at work on the next release. Please contact Esper Support to share your thoughts on how Esper can improve future releases.