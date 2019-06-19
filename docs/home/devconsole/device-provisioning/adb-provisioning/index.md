[Provision Device](../index.md) / ADB Provisioning

#### ADB Provisioning

June 6, 2019

ADB Provisioning for Non-GMS and GMS devices

Please set up a Device Template before performing the provisioning process.

The steps for ADB Provisioning are as follows:

1.  Factory reset the device. To find the steps to factory reset your device click here.
2.  Download the esper\_setup.py file to your development computer from here.
3.  Make sure your development computer has Python 3.6 or above installed, and the computer is connected to the Internet.
4.  Do the following steps on the device:

     a. Connect to the device to the Internet via either Cellular or Wi-Fi
     
     b. Go to the Home screen and tap the Menu button, select the About Phone option, and select the Build number. Then tap the build number 6 times to enable developer options.
     
     ![here](../../images/2_ADB.png)
   
     c. Now go back to Settings, and under the Developer options entry select turn on Debugging and then USB debugging.
       
       ![here](../../images/1_ADB_a.png)
       
     d. Connect your Android device to your development computer via USB.
     
     e. Click on the Authorization Dialog box on Android device.
     
     f. Run the esper_setup.py script on your development computer. This will first download the ADB tools from the Internet, then download the Esper Device Management app (DPC) from the Esper Cloud
     
     g. The Esper Device Management app will then install on the device and assign any permissions required
     
     h.  After installation, the QR Code Scanner will be opened up on the device
     
Steps on Cloud Portal

Choose a Device Template to generate a QR code. If there are no saved Device Templates, create a Device Template


Using ADB Provisioning to provision a Non-GMS/GMS device:

6. Scan the QR code generated from the cloud portal

7. Give permission for the Esper Device Manage app to modify system settings and continue provisioning, click RESOLVE

8. Grant permission for the Esper Device Management app to modify system settings by navigating to the Settings app, Apps & notifications, 
Permissions. Choose Esper Device Management and move the slider swich to Allow modify system settings.

9. The Esper Device Manage app (DPC) will be installed.

The device is now provisioned according to the selected Device Template
     
     
     
If you are still facing issues with ADB Provisioning, please contact us at help@esper.io.

[Return to Provision Device](../index.md)
