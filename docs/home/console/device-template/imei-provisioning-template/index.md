# IMEI Provisioning via Template

IMEI or Serial number of devices to be provisioned need to be added to the relevant template

See steps on how to [create a template](../index.md).

1.  On the template which you want your devices to provision against, click on the … and then select Edit

    ![IMEI Provisioning via Template](../../images/temp_2.png)

2.  On the page that pops up, click on Add devices:

    ![IMEI Provisioning via Template](../../images/template_for_imei1.png)

3.  Then grab the serial number of the device which will be seamlessly provisioned, and enter it as shown. Then click on the Add button:

    ![IMEI Provisioning via Template](../../images/template_for_imei2.png)

4.  Within a few seconds, the serial number will be registered with the backend, and a message will appear in the bottom left corner:

    ![IMEI Provisioning via Template](../../images/template_for_imei3.png)

5.  Hit cancel to exit the above dialog.

6.  To view all serial numbers associated with a template, simply click on the Preview option of the template:

    ![IMEI Provisioning via Template](../../images/template_for_imei4.png)

    Then on the resulting dialog expand the IMEI/Serial section, and then you can see the serial numbers associated with the template.

    ![IMEI Provisioning via Template](../../images/template_for_imei5.png)

7.  To delete a serial number from a template, simply follow steps 1 to 4, and click on the trash-can icon to delete a serial number from the template.

    All this means that during manufacturing, we will need to get a list of serial numbers for all Kiosks, and the serial number should ideally be listed somewhere on the unit, so that it can be easily identified. Serial numbers can be added in bulk using CSV files.

    The user can upload IMEI/Serial numbers with a Csv file in the following way -

    ![Device Template](../../../assets/OLD_DASHBOARD/imei_real.png)

## The CSV file containing the IMEI's and serial numbers should adhere to the below conditions

* The IMEI numbers and serial numbers can be entered separated by comma in the CSV file
* The IMEI numbers should be valid 15 digits. Serial numbers do not have any validation.
* File should not be empty
* The first line and column of the excel file should be exactly* "imei1, imei2, serialnumber"
* For any line imei1 , imei2 , serial number all the three should not be empty
* Invalid IMEI will not be accepted. IMEIs are being validated through Luhn's algorithm.
* There should not be more than 3 values for a row
* Duplicate IMEIs should not be uploaded.
* IMEI and serial number should not be switched.
* If user does not want to add a second IMEI or serial number, they should leave the space blank between the commas

### Examples for CSV , where a serial number or an IMEI number could be missing

![Screenshot 2019-05-19 at 12.54.58 PM (2).png](../../../assets/OLD_DASHBOARD/imei1.png)

![Screenshot 2019-05-19 at 12.54.49 PM (2).png](../../../assets/OLD_DASHBOARD/imei2.png)

[Return to Device Template](../index.md)
