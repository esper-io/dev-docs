# Esper Release Notes - DevRel 91

Date: 8/16/2022

  

In Esper DevRel 91, we are releasing new APIs — Directory Record Management and Blueprint — for our customers using the Onboarding experience with Esper's new Blueprints. On the Console side, we have added an option to disable SAML SSO login, and added a new parameter to search a device. You can find the complete breakdown of what’s new below.

## Added support to search the device using Wi-Fi MAC ID
    

If MAC address is your primary identifier, you can now search devices using your Wi-Fi MAC address. In “Customize List View,” a “MAC Address” column is added under the “Device Attributes” section.

  

## Added a toggle button to enable/disable SAML
    

On the Esper Console, navigate to User Management > SAML  SSO Provisioning to enable/disable SAML. This feature is only available for Esper Architect/Enterprise customers.

![SAML SSO](https://lh6.googleusercontent.com/1oKXt0jzgoysGS33nxzFtuv55Or5eb-PKEjVD0em65FGNraqmW9mIkl9-cNVExpb7k1084nLdz2_qMZ_MDj8uM60J_EbSHsZy1HUEZ197VEWh2TIUn5hDThepnCL7-IyBhkRZthLGiQx4---2i9GcmI)

Previously SAML SSO provisioning function was enabled by default. We changed the default behavior to disabled. Once you fill in the SAML SSO details, you can enable it based on your use case.

Note: Enabling SAML SSO will disable all the other log-in options — Esper SSO and Google Authentication.

## Display more data usage columns in the reports
    

We have enhanced our report fields. Esper Console now displays all the columns in a daily and a custom report that was only available via API. Navigate to the "Reports" section to view the new data usage columns — Mobile Data Transmitted, Mobile Data Received, Wi-Fi Data Transmitted, and Wi-Fi Data Received.

![Reports](https://lh3.googleusercontent.com/3_RaimF3ecoBvG1ObL18h-U_v7Qgt05-Oq5Xw1DjoU3r-YWGMPzMem7lTAH-EBlLHp_CZOEkM5xWx4J3sbJNqRrIRYEmE1aBmc_zu0wqlLWOTGIfGLPdrIcGO2d7IawTUKtXqGOa7tT5qjuYNwnjXrA)

Please contact [Esper Support](mailto:support@esper.io) to access this capability.

## Bugs and Improvements

-   Previously if you have configured your SNS topic for Alerts in any other region than us-east-1, it wasn't working. We have fixed this to support all the regions for SNS configurations.
    
-   We have fixed the bug with factory resetting a device. Earlier, the factory reset command did not remove offline devices from the Console even after the timeout period (7 days). Now, after 7 days, the offline device will be removed from the Console.
    

## APIs

### New

-   For customers using the new Onboarding experience with Esper's new Blueprints, we have added the Directory Record Management APIs — Create, Delete, Update and List Directory Records.
    
-   For customers using the new Onboarding experience, we have added the Blueprint APIs — Create, Delete, Update, Restore and List Blueprints.
    
-   We have added a new Pipeline API for cancelling Target Run commands.
    

### Updates

-   Added support for the NOTIFY_DEVICE command under ‘Create a command request API’. This NOTIFY_DEVICE command allows you to broadcast messages to the device.
    
-   Added all device state details to the response of the "Fetch all devices in an enterprise" API. This allows querying devices by their state, such as Online, Offline, and Onboarding in progress.
    
-   Added all device state details to the sample response parameter of the "Fetch device details by ID" API. This allows extracting device state insights such as Device is undergoing a Factory Reset, Device is Online, etc.
    
-   Added status descriptions — Processing, Success, Timeout etc. — to Pipeline Runs, Target Runs and Stage Runs APIs.
    
-   Added description for latest_event parameter in the latest event API. This parameter must be set to 1 to return the latest event details.
    

  
  

We’re excited to launch DevRel 91 today, and the Esper team is hard at work on DevRel 92, which is currently scheduled to launch in early October 2022. Please contact [Esper Support](mailto:support@esper.io) to share your thoughts on how Esper can improve future releases.

