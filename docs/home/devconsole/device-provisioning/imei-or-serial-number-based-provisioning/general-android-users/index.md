#### IMEI Provisioning - Android

June 6, 2019

For devices not using Esper Enhanced Android (e.g. stock Android), take the following steps to use IMEI based provisioning.

In the Esper Console, create a new Device template then 'Edit' the template and go to ‘Add devices’. Upload the IMEI csv file you have previously prepared. Update the template. See more details below:

[Creating a Template with IMEI](../../../device-template/imei-provisioning-template/index.md)

Steps on device:

1.  Boot the device.
2.  Go to 'System' then select 'About phone':

![IMEI](https://documentation-media.s3.amazonaws.com/images/2_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

3\. Tap ‘Build number’ 6 times:

![IMEI](https://documentation-media.s3.amazonaws.com/images/3_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

You will see the toast message ‘You are now a developer!':

![IMEI](https://documentation-media.s3.amazonaws.com/images/4_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

4\. Navigate back to 'System', then open ‘Developer options’:

![IMEI](https://documentation-media.s3.amazonaws.com/images/5_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

5\. Turn 'Debugging' to on, then confirm that 'USB debugging' is also turned on and click 'OK' on the resulting pop-up:

![IMEI](https://documentation-media.s3.amazonaws.com/images/6_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

![IMEI](https://documentation-media.s3.amazonaws.com/images/7_IMEI.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

6\. Connect your Android device to your development computer via USB.

7\. Make sure your development computer has access to the Internet and has Python 3.6 or above installed.

8\. Download the esper\_setup.py script from [here](esper-python-script/index.md).

9\. Open a command prompt on your development computer.

10\. Change to the directory where esper\_setup.py was downloaded.

11\. Run the command 'python esper\_setup.py' to execute the script.

12\. Allow USB debugging on the device, and then the DPC will be installed.

13\. Connect to an available Wi-Fi or data network on the device.

14\. The device will then be provisioned to the parameters set in the template that includes the device's IMEI previously uploaded to Esper.

[Return to IMEI (or Serial number) based Provisioning](../index.md)
