# General

## Provisioning

-   Can I use the Google Zero-touch enrollment method with any Android devices?
    

Not really. Google Zero-touch enrollment works only on the device purchased from a reseller.

  

-   Why do I get "Couldn’t find your Google account” error after entering afw#esper?
    

A possible cause for this error message is that the pre-configured Google account was not removed from the device before the factory reset.

To solve this problem, provide the previously configured Google account credentials and reset the device. Remove the Google account from the device and factory reset it again.

## Device details

-   How often does the device communicate with the Console?
    

The device communicates every minute to maintain its status.

  

-   How is the security status of a device determined?
    

The OS/Builds known security exploits and vulnerabilities determine the security status.

  

-   Can I find out which devices use Wi-Fi vs. cellular data?
    

You can add a filter on the device list view — the "Network Type" as a column option.

  

![filter](https://lh6.googleusercontent.com/T-mw1IrqEjhRuE8aMWAAxDEeBwv2bOBs6Er2971raOyB-MgtAWlrPWsC4Uj-IBGbzcB6s3eG70EvX4NMjYwEjyqB3XMyV3k1QUsQBnxEDl6bF2Lr-cW13vnuGbc8ImkSLN2Rs7oMR6Holg3YbcZeBg)

  

-   Why is landscape and portrait mode reversed in my device?
    

This device-specific behavior depends on the device manufacturer and OS image installed on the device. The same system would be landscape for some devices and portrait for others.

  

-   How can I remove Esper from my device?
    

You can reset the device locally or perform the same action from the Esper Console.

Note: The device should be online and connected to an active network while you send the reset command to the device.

## Launcher

-   Can I set my own application as the default launcher instead of the Esper launcher?
    

1.  Select Android launcher in the Blueprint/Template.
    
2.  Add the following lines of code in your application to set as a default launcher.
    

<category android:name="android.intent.category.HOME" />  
<category android:name="android.intent.category.DEFAULT" />

  

-   Can I set Kiosk Mode using the Android launcher?
    

Android launcher works only in Multi-app Mode. Multi-app Mode enables simultaneous use of Esper and Android MDM. You cannot set Kiosk Mode if the device is using an Android launcher.

## Kiosk Mode

-   Can I block system alerts — such as amber alert — in Kiosk Mode?
    

In Kiosk Mode, the notification bar is disabled; you shouldn't receive such notifications. They will be populated in the notification panel and will not interfere with the user's work.

  

-   Can I update the Wi-Fi password in Kiosk mode?
    

In Kiosk Mode, you can retrieve the hidden dock — 3-taps on the right corner — which allows you to access Esper settings or the Esper Wi-Fi settings page.

## Apps

-   When does an approved Play Store application show under the list of the available apps?
    

You approve Play Store apps on the Google Iframe; then our backend gets the callback from Google about the approval, and we display your applications. Sometimes the callback takes a while to initiate, causing a delay.

  

-   Can I choose the version for a Play Store application to install?
    

There is no version control with Play Store apps. You will always get the latest version.

However, you can upload an APK found [online](https://apkpure.com/teamviewer-remote-control/com.teamviewer.teamviewer.market.mobile/versions) and use a specific version using Esper Cloud. [Here](https://console-docs.esper.io/apps/upload-apps.html), you can find more information on uploading APK to Esper Cloud.

  

-   Can I upgrade the APK file?
    

You can upgrade an APK only if both versions have the same signature. Android doesn't allow the same app with varying signatures; you can:

-   Try uninstalling the older APK and then push the latest one.
    
-   Sign the latest APK with the same signature key as the former APK.
    

  

-   What is the maximum size of an APK that I can upload to the Esper Console?
    

You can upload an APK up to 2 GB.

  

-   I am trying to install an application from Google Play( Esper Console > Apps > Play Store). I searched and approved the app. But the system throws an error: "Error performing the task."
    

Make sure the app is not under development (EarlyAccess only). Alternatively, you can download APK from Google Play and upload it via the Esper Console.

-   I am not able to open my app as permissions are not provided to the app, and I am getting a message that the admin controls this?
    

Sometimes customers are not able to use their apps that require extra permissions. They get messages such as “Permission needed” and “Action Not Allowed” when trying to change settings or open the app.

In the Compliance policy or Blueprint, choose ‘Ask User’ for Run-time Permissions. This will allow the device users to give the required permission to the application. 

![permissions](https://lh5.googleusercontent.com/x9jAEbuRyzOhJiXLGF69pQinQWlCTpdcmHV-kcMqXfPhgGr4Po4lsQsO0lqiIjVLsvsgR0eVp3O_FRoJGNajhdyxPrTUCeolv4vH99T_BLJUnENT-4XQHhzIAiXqIUoFNfbz5_UmbQLvjhKMVd3fmA)

-   Can I disable pre-loaded apps? What happens when I factory reset the device?
    

Yes — you can disable pre-loaded apps. Navigate to the Device Settings> Apps> Preloaded apps. From the drop-down, select the “Disable” option for the App State.

Note: On the Console, system applications are shown under Preloaded apps. You cannot disable system apps.

  
![pre-loaded](https://lh6.googleusercontent.com/6QsAa26AtK4ondDR2KN3U_8L2p5TjJGL09Es8yHExcBNcn-F1gbuk5G5M3La4EiqyIy3c-dziLgV2ZOXC-7XslJYe8c-S3bQk45DPstuy-jM7ND5GcUKkX0P6Tgnm-G3_ulrlIB3LRlUEDsHEHQC_x0)  

If you factory reset the device, the device will take the App State as mentioned in the Provisioning Template or the Blueprint.

  

## File transfer

-   Can I push content to the devices when using a cellular network?
    

Yes — you can push content to your device fleet on the cellular network.

## Remote Viewer

-   Can I increase the Remote Viewer session to over 15min?
    

No. At this point, we only allow a 15-minute Remote Viewer session.

  

-   Can I start a Remote Viewer session on my phone?
    

Currently, Esper does not support mobile browsers. The capability of the mobile browser limits some features on the Esper Console. For instance, the Remote Viewer is supported for Chrome (version 78+), Edge (version 80+), and Firefox (version 80+).

  

-   I cannot use the Remote Control feature for my Android devices.
    

Contact [Esper support](mailto:support@esper.io) to add a supervisor plugin.

## Managed Google Play

-   Can I add a Google account during provisioning?
    

You cannot define an account in the Template; this would need to be done manually on the device.

However, you can link your company’s Google account to Esper through the EMM Enrollment process. Once the account is linked, all devices obtain a Managed Google Account once provisioned.

Note: Currently, we can't add those Managed Google Accounts to already provisioned devices.

  

-   Is it possible to enroll for EMM using an email ID already enrolled in EMM?
    

No, it is not possible. Either you need to use a new email id that has never been enrolled. Or you need to un-enroll your previously used Gmail ID from EMM and then re-enroll with the same email ID.

  

-   I cannot push any apps/APK from the Esper Console to the device.
    

This is an issue with Google PlayProtect interference. You need to decline the Google Play Protect prompt during provisioning. Alternatively, you may use Play For Work to deploy apps or simply appeal to the [PlayProtect](https://support.google.com/googleplay/android-developer/answer/2992033?hl=en).

## Tags

-   Can I update/apply tags to all devices in a Group?
    

Updating or adding tags for all the devices is not possible via the Console. However, you can use the [East](https://docs.google.com/document/d/1WwDIQ-7CzQscVNFhiErbYtIwMyE34hGxE_MQWBqc9_k/edit) tool for the same.

## SAML/SSO

  

-   Are all the users required to sign in via Single Sign-on SSO through an identity provider (IdP) once it is configured?
    

Yes, once you configure the SAML or OIDC SSO, all users will be routed to sign in via your own IdP.

  

-   Can anyone enable or disable the SAML SSO configuration in Esper?
    

No, only Enterprise Admins can enable/disable the SAML SSO configuration.


-   Does my organization need SSO? 

Not every organization will need SSO. However, if you are already using an IdP, it may make sense. See our [Setting Up SSO documentation](https://console-docs-v2.esper.io/sso/) for more information. 
  

## Factory reset

-   Can I restrict users from hard resetting a device?
    

You cannot completely block hard resetting a device, but you can use [Factory Reset Protection (FRP)](https://console-docs.esper.io/compliance-policy/frp.html#how-to-get-google-id-and-use-frp-factory-reset-protection-feature).

  

-   How to reset an 'offline' device in a boot loop?
    

Connect the device to a computer (not just a power plug) and press the power button + volume up button.

## Esper Cloud

-   What are the limitations of uploading an application to Esper Cloud?
    

You cannot upload signed applications with a debug key — use a release key. Follow the Play Store [naming conventions](https://developer.android.com/studio/publish/app-signing) for an APK.

Esper cloud does not support app bundles. Please upload 1 APK per application.

## Payment

-   What happens if a payment is unsuccessful?
    

A user has one month (from the time of the first failure) to resolve a failed payment. After one month without resolution, they will automatically be downgraded to the Free plan.

  

-   What happens to an account that exceeds 100 devices and has not paid?
    

You may continue using Esper and will be notified to upgrade your plan. 
  

-   Are Esper Essential invoices sent automatically to the customer? If so, who?
    

Customers get a receipt sent to them and may download the invoice.

## Esper Software Updates

Note: At this time, Esper Software Updates are only available to certain tenants.

-   Can I have Esper Software Updates automatically deployed to my devices?
    

Yes, of course! Navigate to the settings tab for Esper Software Updates and uncheck the Enable automatic updates.

  

-   How often does the device check for a new Esper Agent version?
    

If you select the Esper Software Updates option, the devices check for an Esper Agent version every hour.

  

-   Can I use the Esper Agent chosen under Esper Software Updates available for provisioning?
    

Yes! The QR code is updated to reflect the Esper Agent version chosen. You will use this QR code when you provision a device using a 6-tap or Device Provisioner.

## Groups and Blueprints

-   Is a Blueprint applied automatically when I create a Group?
    

No, Groups are created without Blueprints. There are various ways to assign a Blueprint to a Group after it is added to your directory: “Create a new Blueprint,” “Clone Existing Blueprint,” or “Import Blueprint.”

Note: A Blueprint with default settings is assigned to that Group without a Blueprint. If you want to change this configuration, you can either change the Blueprint settings or reapply a different Blueprint. Check out the default Blueprint settings [here](https://onboarding-esper.netlify.app/blueprint_default_values.pdf).

  

-   Can I restore a deleted Group?
    

You cannot restore a deleted Group. Groups and subgroups are not versioned, so you must create a new one from scratch if you delete a Group.

  

-   Can I move a device to a different Group?
    

Certainly! Navigate to the Group where the device is onboarded, select the device, click the “Actions” button, choose “Move,” and then select the destination Group.

  

-   What happens to a device if I delete the Group it is onboarded to?
    

You cannot delete a Group with onboarded devices. To delete a Group, you must first migrate your devices to another Group.

  

-   Do I need to manually create Groups/subgroups on the Console and move devices over for managing device updates?
    

Not at all! You can use Esper APIs for automating Device/Group management. Check out more [here](https://api.esper.io/tag/Device-Group).

  

-   Is it mandatory to create a Group to manage devices?
    

You need at least one parent-level Group to start managing your devices. Creating sub-groups is optional.

  

-   Where are the Groups hosted?
    

All the Groups and devices are hosted in the root level, “The Directory.”

  

-   Can I factory reset all the devices in a Group/sub-group?
    

Yes. You can apply the factory reset command to the Group, sub-group, or individual devices.

  

-   Is it possible to have dynamic Groups with the same device in multiple Groups?
    

Not currently. A device can only be assigned to a single Group, but you can move it if necessary.

## Geofence

-   I am not able to delete a Geofence. I get an error “Cannot delete a geofence; geofence still applied on the device”?
    

Follow [these steps](https://console-docs.esper.io/geofence/deletefromdevice.html) to delete any devices linked to the Geofence. Once you remove the devices, delete the Geofence.

## Pipelines

-   I am trying to only update tablets with specific app versions, so I would like to query tablets by a particular installed app version. Is there a way to do advanced queries in Pipelines to filter the devices or Groups?
    

This level of fine-grained filtering functionality is not available through the Console. You can set Pipelines to target either individual devices or devices at a Group level. You can create tags and aliases for your devices to bucket them, and when selecting the Pipeline targets, you can filter the devices by these.

  

-   What are the benefits of using Esper Pipelines APIs?
    

By using our APIs, you can integrate Esper Pipelines to your CI/CD flow. Additionally, you can create, update, delete, or query Pipeline, Stage, and Target Runs at scale. Check out Esper Pipelines APIs [here.](https://api.esper.io/tag/Pipelines)

  

-   When can I edit a Pipeline's properties, targets, and operations?
    

You can edit Pipeline settings during the definition stage — before running the Pipeline. Once you send the Run Pipeline command, you can no longer edit that specific Run instance. However, once the run is complete, you can configure a new Run and edit the Pipeline properties, stage operations, and targets.

  

-   What happens if I target offline devices?
    

The Pipeline stages time out after a week. The device will receive the set operation if it becomes online in that period. If not, you can re-run the Pipeline and target those offline devices.

  

## Provisioning Template

-   What is the difference between Provisioning Template and Compliance Policy?
    

Customers often ask us the difference between Provisioning Template and Compliance Policy, which are applied on devices. The main and most fundamental difference between Provisioning Template and Compliance Policy is that Provisioning Template is used to apply on devices during provisioning and NEVER after that. The Compliance Policy, on the other hand, is applied on Esper Managed devices once they have already been provisioned.

