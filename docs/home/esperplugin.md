# Esper Android Studio Plugin (Preview Release Version)
<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}</div>


Esper Plugin for Android Studio

The Esper Plugin for Android Studio enables developers to upload APKs directly from Android Studio to an Esper Endpoint. Once uploaded to Esper you can use the Esper APIs, SDK, or CLI from Android Studio Terminal to provision devices with the APK for testing or deployment purposes. Or you can go to the Esper Console and work with your APK from there.
This guide describes the steps to take to install the Esper Plugin into Android Studio.

## Requirements
Before you start with this guide, make sure you have Android Studio installed, version 181 or greater. 
To verify your Android Studio go to Help → About. The version number is circled below:


![](./assets/OLD_DASHBOARD/1_asp_AndroidStudioAbout.jpg)

In case you have a version before 181, simply upgrade your Android Studio to the latest version. The latest available version can be installed by clicking on Help → Check for Updates and then following the subsequent prompts.
You will also need an account on an Esper Endpoint. Have your Endpoint name, username, and password available. If your company doesn’t have an Esper Endpoint, sign up for an Esper Trial account [here](https://esper.io/signup).

## Installation
Next, you will find the Esper Plugin from the Plugin Marketplace; go ahead and install it.
Go to File → Settings and then click on Plugins (or Android Studio → Preferences for Mac). Then click on Marketplace:

![](./assets/OLD_DASHBOARD/2_asp_PluginDialog.jpg)


In the new window that displays, type Esper in the Search plugins in marketplace input field and hit Enter. Click on Install to start the installation process.


![](./assets/OLD_DASHBOARD/3_asp_MarketplaceSearch.jpg)

The Plugin will then download and install, and you’ll need to restart the IDE to activate the change to your Plugins.
If this is the first time you are installing a 3rd-party plugin, Android Studio will show you the following warning:

![](./assets/OLD_DASHBOARD/14_asp_missingwarning.png)

Click on Accept to proceed. If you have installed third-party plugins before, you will not see this prompt, and you can proceed to the next step.
Once Android Studio restarts, check the Event Log in the lower right corner to verify the Plugin successfully installed.

## Setup and Use
The setup for the Esper Plugin is Project specific for the currently open Project. If you wish to use the Esper Plugin for other Projects, be sure to perform the setup for each. 
With your desired Project open, go to File → Settings (or Android Studio → Preferences for Mac). Click on the drop down for Other Settings, and the click on Esper from the resulting list. In the Esper window, type in the relevant credentials for your Endpoint Name, Username, and Password. Hit Apply and then OK.

![](./assets/OLD_DASHBOARD/4_asp_Configuration.jpg)


The Plugin is now configured to your Endpoint for this Project.

Now once you are ready to upload an .apk file to your Endpoint, simply go to Build → Upload APK to Esper:

![](./assets/OLD_DASHBOARD/5_asp_Build.jpg)


In the dialog that appears, choose the .apk to upload to your Endpoint, and then hit OK:

![](./assets/OLD_DASHBOARD/6_asp_Upload.jpg)


You’ll see a dialog box showing the status of the upload process. If the upload succeeds, you will see the following message:

![](./assets/OLD_DASHBOARD/7_asp_UploadSuccess.jpg)

If there's any error, you'll see an error as shown below:

![](./assets/OLD_DASHBOARD/8_asp_Error.jpg)

Note that trying to upload the same version of the .apk you already have on your Endpoint will produce an error. You currently cannot overwrite it using the Plugin, you will have to delete it using the Esper Console or from the CLI.

## Uninstalling

To uninstall the Esper Plugin Go to File → Settings (or Android Studio → Preferences for Mac), click on Plugins ensuring you are displaying Installed Plugins. Then click on the Esper bolded Plugin name:

![](./assets/OLD_DASHBOARD/9_asp_Uninstall_1.jpg)

This will bring up the Esper Plugin detail. Go over to the dropdown that is displaying Disable, Click the dropdown and then select Uninstall.

![](./assets/OLD_DASHBOARD/10_asp_Uninstall2.jpg)

Confirm you wish to uninstall the Plugin by clicking on Yes:

![](./assets/OLD_DASHBOARD/11_asp_Uninstall_3.jpg)


Now click on the Restart IDE button:

![](./assets/OLD_DASHBOARD/12_asp_Uninstall_4.jpg)

Then click Restart to remove the Plugin:

![](./assets/OLD_DASHBOARD/13_asp_Uninstall_5.jpg)

That's it. The Esper Plugin should now be uninstalled.



