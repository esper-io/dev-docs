[Introduction](../../index.md) / [Device Template](../index.md) / IMEI Provisioning via Template

# IMEI Provisioning via Template
<div class="avg-reading-time" style="margin-top: 0rem;">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>

IMEI or Serial number of devices to be provisioned need to be added to the relevant template

See steps on how to [create a template](../index.md).

After creating a template, click on Edit template. 

![here](../../images/temp_2.png)

During editing, you also see the option to add IMEI/Serial numbers of devices you want to provision with this template. There is a section "Add devices" that appears during edit just before Preview section. Using this "Add devices" section, user can either enter IMEI/Serial numbers or upload Csv file with IMEI and Serial numbers.

The user can enter IMEI numbers and Serial numbers in the text box and click Add.

OR

The user can upload IMEI/Serial numbers with a Csv file.

![Device Template](https://documentation-media.s3.amazonaws.com/images/20.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

The csv file containing the IMEI's and serial numbers should adhere to the below conditions-

*   The IMEI numbers and serial numbers can be entered separated by comma in the csv file
*   The IMEI numbers should be valid 15 digits. Serial numbers do not have any validation.
*   File should not be empty
*   The first line and column of the excel file should be exactly- "imei1, imei2, serialnumber"
*   For any line imei1 , imei2 , serial number all the three should not be empty
*   Invalid IMEI will not be accepted. IMEIs are being validated through Luhn's algorithm.
*   There should not be more than 3 values for a row
*   Duplicate IMEIs should not be uploaded.
*   IMEI and serial number should not be switched.
*   If user does not want to add a second IMEI or serial number, they should leave the space blank between the commas

**Examples for csv , where a serial number or an IMEI number could be missing**

![Screenshot 2019-05-19 at 12.54.58 PM (2).png](https://documentation-media.s3.amazonaws.com/images/Screenshot_2019-05-19_at_12.54.58_PM_2.width-500.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

![Screenshot 2019-05-19 at 12.54.49 PM (2).png](https://documentation-media.s3.amazonaws.com/images/Screenshot_2019-05-19_at_12.54.49_PM_2.width-500.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

![Screenshot 2019-05-19 at 12.54.58 PM (2).png](https://documentation-media.s3.amazonaws.com/images/Screenshot_2019-05-19_at_12.54.58_PM_2.width-500.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA)

[Return to Device Template](../index.md)
