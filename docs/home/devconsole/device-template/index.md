[Introduction](../index.html) / Device Template

#### Device Template

June 6, 2019

How to use Esper's Device Template.

Device Template is a one stop means for you to quickly provision your device. It lets you create a profile for the device where you may choose the policy, apps, device settings, Device Group, and the wallpapers that you want to be provisioned on the device. Device Templates can be created, saved, and used to provision at a later point.

Steps to create a Device Template:

1.  Click on 'Device Template'.
2.  Click on 'Create Template'.
3.  Enter a name for the Device Template. Click 'Next'.

![Device Template](https://documentation-media.s3.amazonaws.com/images/1_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=ILHn1nmUuNOmBDa9nJbfVYOiYzE%3D&Expires=1559913433)

In the Policy section:

Set default app permissions, Android setting app, system updates, password rules, and turn on the toggle buttons for the settings you wish to enable on your devices. If you wish to have Google Play Store show up on the device, you may turn on the toggle button. You may reset these values to default at any time by clicking 'Reset to Default'.

In order to restrict phone numbers that can make or receive calls to the device, upload a .csv file with the allowed phone numbers separated by commas. All numbers must be preceded by +country code (for example +1 for US):

![Device Template](https://documentation-media.s3.amazonaws.com/images/2_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=iEMo0fYfPtnsS4DeTTXNbbplIPI%3D&Expires=1559913433)

Click 'Next'.

In the Apps section:

Select 'Kiosk mode' to pin an app during startup or 'Multi application mode' to give users access to the Home screen. Choose the apps that you would like to have installed on your device during provisioning. You may choose from install apps you uploaded via [App Management](../app-management/index.html) or install apps from Google Play Store that you approved via [Play For Work](../play-work/index.html).

*   To add your app, upload APK files on App Management - click on the app from the dropdown, select the version and click on Add:

![Device Template](https://documentation-media.s3.amazonaws.com/images/3_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=7z2Ygx42iu5XL8JUudibCNfBkQQ%3D&Expires=1559913433)

*   To add app from Play Store list - click on the apps to add from the list of available apps. Please note that only once you [Approve a Google Play Store App](how-approve-google-play-store-app/index.html), you may add it from the list shown in the Device Template.

![Device Template](https://documentation-media.s3.amazonaws.com/images/4_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=D5g3VfCtoEcbIG0ybmH2xmFR2iA%3D&Expires=1559913433)

Click 'Next'.

In the Branding section:

Upload landscape and/or portrait wallpaper.

![Device Template](https://documentation-media.s3.amazonaws.com/images/11_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=7ulVADwpaYSkSb5GVI8WoVlLz7M%3D&Expires=1559913434)

There is an option to Preview the uploaded wallpapers:

![Device Template](https://documentation-media.s3.amazonaws.com/images/11.1_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=jW05W4c4uykDIeE5%2BZpuXkEDec8%3D&Expires=1559913434)

Click 'Next'.

In the Settings section:

Choose the device settings you would like to have on your provisioned devices such as Bluetooth, Wi-Fi, volume, screen rotation, GPS, and screen timeout. Click 'Next':

![Device Template](https://documentation-media.s3.amazonaws.com/images/12_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=9hcqa0QIVPQMn4xTXpPB93OWmQo%3D&Expires=1559913434)

In the Group section:

Select an existing Group or create a Group. The devices provisioned using this device profile will be a part of the selected Group. Click 'Next':

![Device Template](https://documentation-media.s3.amazonaws.com/images/13_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=Z5YKs7QGN41MIULL7CEWKzfXayc%3D&Expires=1559913434)

On the Preview screen, you will see a preview of the entire device template. If you wish to edit your settings, use the 'Back' button to go back to the appropriate screen:

![Device Template](https://documentation-media.s3.amazonaws.com/images/14_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=K4u21QUwq56o2e0wd3WFdPedGlQ%3D&Expires=1559913434)

Click 'Save'. You will see a pop-up to confirm your settings. Click 'Okay':

![Device Template](https://documentation-media.s3.amazonaws.com/images/15_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=gLXBaTAvaLcWgkuCf%2BSh1WZ0UV0%3D&Expires=1559913434)

The Device Template you just created will now be visible on the Device Template page. You can search for it in the search bar. Click on it to view the Device Template. Click on 'View QR code' to provision a device using this template directly from your Device Template.

On clicking the View QR code, there is also an option to download the config.json file that can be used during ADB and IMEI provisioning:

![Device Template](https://documentation-media.s3.amazonaws.com/images/19_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=36uFQroKVUw3XTP%2F9incdUjPwfI%3D&Expires=1559913434)

  
You can also Preview, Edit, Duplicate & Delete the template:

![Device Template](https://documentation-media.s3.amazonaws.com/images/16_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=dpk%2B8%2BSU17wsSW3y5y2XgqSZZHs%3D&Expires=1559913434)

Click on the ellipsis (...) on the template tile to preview, edit, duplicate or delete a template.

*   Preview Template

![Device Template](https://documentation-media.s3.amazonaws.com/images/17_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=lM3svSXX9kH9AOG7f4LHT%2FKJZh8%3D&Expires=1559913434)

Click on the Preview option to preview the device template. Click on the + sign to expand and then check selected individual components.

*   Edit Template

To edit any template, click on the 'Edit Template' option. Policy, Apps, Branding, Settings, Group and Add devices options can be updated as required. To save the changes, click on the 'Update' button on the Preview page.

*   Add Devices (IMEI Provisioning)

![Device Template](https://documentation-media.s3.amazonaws.com/images/13.1_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=mM809q6JF2ixlhyQK3qEbMEcGjw%3D&Expires=1559913434)

While editing a template, you also have the option to add IMEI/Serial numbers of devices you want to provision with this template. There is a section 'Add devices' that appears if you click on Edit Template. Using this section, user can upload IMEI and Serial numbers. See details on IMEI Provisioning via Template [here](imei-provisioning-template/index.html).

*   Delete Template

![Device Template](https://documentation-media.s3.amazonaws.com/images/18_DT.width-800.png?AWSAccessKeyId=AKIAJHOTEM5S4GAN2SGA&Signature=3VNI8NwxtGNeXpgfEbjzq28yJSM%3D&Expires=1559913434)

Click on the 'Delete Template' option on top right to delete a selected template.

  

[Return to Introduction](../index.html)