[Provision Device](../index.html) / ADB Provisioning

#### ADB Provisioning

June 6, 2019

ADB Provisioning for Non-GMS and GMS devices

Please set up a Device Template before performing the provisioning process.

The steps for ADB Provisioning are as follows:

1.  Factory reset the device
2.  Download the esper\_setup.py file to your development computer from here.
3.  Make sure your development computer has Python 3.6 or above installed.
4.  Connect your Android device to your computer via USB.
5.  Do the following steps on the device:
    1.  Connect to the Internet.
    2.  Go to the build number under system settings then tap 6 times to enable developer options.
    3.  Go to developer options and enable USB debugging.
    4.  Click on the Authorization Dialog box on Android device.
    5.  Run the [attached script](../imei-or-serial-number-based-provisioning/general-android-users/esper-python-script/index.html) on your Desktop/Laptop with Python.
    6.  This will first download the ADB tools from the Internet.
    7.  Then it will download the Esper DPC from Esper Cloud.
    8.  It will then install the DPC App on the device and assign any required permissions.
    9.  After installation, the QR Code Scanner will be opened up on the device.

6. Open up a previously created Device Template on the Esper Console.

7. Scan the template QR Code on to the device.

8. Click 'Resolve' on the device's dialog box to give the Esper Device Management App system permissions.

9. The device will then complete provisioning.

If you are still facing issues with ADB Provisioning, please contact us at help@esper.io.

[Return to Provision Device](../index.html)