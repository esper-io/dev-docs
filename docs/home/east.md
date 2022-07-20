# EAST Tool

## Tool Preparation

### Executable Environment

The Esper API Support Tool is intended to be available for both Mac and Window OS users. The executables for each OS will be available on the tool’s [Github Releases](https://github.com/esper-io/esper-api-support-tool/releases) page.

#### Mac Setup

If you are having issues with running the application on Mac OS please try the following.

1.  Open The EsperAPISupportTool.App.
    
2.  If the application is blocked, navigate to the Security and Privacy section of System Preferences.
    
3.  Under the General tab click the lock on the bottom left and then click “Open” under the EsperAPISupportTool notification.
    

### Code Environment

The Esper API Support Tool is intended to be available for both Mac and Window OS users. Currently a user will need a Python environment setup in order to run the application.

  

You can clone our tool from its GitHub repository, [here](https://github.com/esper-io/esper-api-support-tool).

  

We recommend installing the following when using the tool:

  

-   Python 3+
    
-   Git
    
-   An IDE (Integrated Development Environment, recommended: Visual Studio Code)
    

  

Once you have installed Python run the following command in the tool’s repository folder.

  

pip install -r requirements.txt

  

This should install all the necessary python modules needed to run the project.

## Using the Tool

### Adding An Endpoint

Upon starting the tool for the first time you will see the following prompt asking for information required to run the tool.

  

The required information you will need to fill out the form is:

-   Name: The name of the given endpoint, a label for the Endpoint entry
    
-   API Host: The host name of the api url e.g., https://<nolink>{endpoint-name}-api.esper.cloud/api
    
-   Enterprise ID: The enterprise Id, you can find this by visiting the “API Key Management” section within the Esper Dashboard
    
-   API Key: A generated API key, you can create a key by visiting the “API Key Management” section within the Esper Dashboard. Should be a Bearer token.
    

-   For more information on how to generate an API Key, please see our [documentation](https://docs.esper.io/home/console.html#api-key-management).
    

  

After all fields have been populated, the “Add” button will be enabled. Clicking on the “Add” button will create a new Endpoint Entry that the user can select through the “Configurations” menu.

![endpoint](https://lh6.googleusercontent.com/_Asj1McEKyzuDOR6XGbnIDXXvefZujFAmVJZw6bDPtLXF8prwZSvjxQul20J3xIKg_gMRwoZMLH2FC5vq57BNYwhIyL4mL4v4gi8CaMeodU8mz8XcPGk1vo0K47ExGgTFJyPENDNQ9xs0lau30qgQg)

  

You should see a prompt appear informing you whether or not the Endpoint has been added or not.

  

You can also add other Endpoints by selecting the menu option under the “File” menu or by using the keyboard shortcut, CTRL + O.

  

![add endpoint](https://lh6.googleusercontent.com/fB65gqZRHQHuyGvLxnu5JfBOaRuCIiReGtHa19Fi5a-LN3x3E9o3imMad7MEvcXB8FoB2lUlhAYRIjHHfb213-_-lfFNIgvxu6A34P-M73to3MuEw5GxOq4t3dRGyKwfeOO4bkFNRkYibjn3LcvcPA)

  

### Removing An Endpoint

To remove an Endpoint, select and load the desired endpoint from the “Configurations” menu. You can then click on the button with the trashcan icon to the right of the “Loaded Configuration” label. Alternatively, you click on the Loaded Configuration box once the Endpoint’s configuration has been loaded in. Then hit the DELETE keyboard key.

  

![EAST tool](https://lh6.googleusercontent.com/RAZWI4utabSbAan0QIMTh2uaXHwUuLQmyrL_kkscy0pG4Y5XU6Qx4PdGgTaxH1QVJkzxeNpz1QtgYIV7J5O4ZBUxpC3aoUpilimkmM6B_V_zBbcsCM15WTC6FTmFlcHEzsY4kI7n0TuQqH8BD9ybtw)

  

A prompt will appear asking you to confirm your decision. Clicking yes will proceed in the removal of the Endpoint.

  

An Endpoint can only be re-added once it has been deleted.

### User Management

To add, modify, or delete Users in bulk navigate to the File menu and select the "Manage Users" menu item. Alternatively, you can use the keyboard shortcut CTRL + U.

![user management](https://lh4.googleusercontent.com/vxh1BjRq_qTe5qQgS-dBxanfQbs7lF_Y6SMaQCzMJXx-rx0TO1LX0e7qhipOun3ZQ7ZFitr7kqcix65PkdKjY81fY3LdnEJRLMInd-LyJvViVncEeDLzHMEhQ7PsJ9NxaRQhv0NFsvWutqut9OtGFA)

NOTE: Please ensure that you are on the Endpoint that you want to manage Users for.

  

A prompt should appear. Please select the action you wish to perform from the dropdown: Add, Modify, or Delete.

![prompt](https://lh6.googleusercontent.com/onE1R-eD1qMnu7g1cFQXTaLoTg3ovzLDVsNmlOAWm75f2-rLzodIBT6CiQb0UJzTUb9EqKaDV5GQk4rPStzCilwRg5XH2UGP0XgON4egZ_kc7qHcC0jhYJOF9Shj7MQmaj1uqmnLSP8xsLqXVfe8fw)

If you don’t have a CSV ready, please click the Download button for a CSV file that you can fill in. Once the CSV file is ready, you can upload it by clicking the “Upload” button.

NOTE: You can use Group names or their IDs. If you wish for a User to have access to multiple Groups, please separate each group entry with a comma. For example, an entry might look like:

"Best","Test","test@best.com","besttest","!@#$@%","Group Admin","Test,Lab,Hotel d' Vine"

The available roles to a user are:

-   Enterprise Admin
    
-   Group Admin
    
-   Group Viewer
    
-   Viewer
    

Depending on the action, the tool will read in the valid entries in the file and display them in the preview grid.Once you have confirmed that all the entries in the Preview match press the “Execute” button located in the lower-right corner of the prompt. You will be prompted to confirm your decision.

![user management](https://lh5.googleusercontent.com/r2t6fFWmU3c1E3jIfCVEVqmwn25KcOZ7Xz13OPldyodkbfwjw5w5Uh0OUzKU9X_LvZHP3AKsFB45Q-NndZIzIWx2perKUz47U-kh4vkzAUNAS5akyWtybWsZcPCMrR-sz1meWkV9YULwnzSzkKMJNQ)

A progress bar prompt will appear, once finished that prompt will be replaced with a summary of results based off that action.

  

### Toolbar Icons

The following are the available options present in the Toolbar.

  
  
  

![tool bar](https://lh3.googleusercontent.com/DcvbH0bQ16PJsommD-j4wP5gtnW2bYuseREtbyObxIRHlRTFAyH8ngv_f0y3S3ZRKWb4t2MmKH5CreC67G4guVr4TdgWr40OJD5m9JyThRoXZMO-4woMQv5ck17yqiO3tc21OqfDW09RCamzhMKHig)

The leftmost icon is a shortcut to quit the application.

  

The circular icon with a plus is a shortcut to Adding a New Endpoint.

  

The folder icon is a shortcut to opening a CSV file to populate the grids with saved device information.

  

The floppy disk icon is a shortcut to save both Device and Network information.

  

The right-facing arrow icon is a shortcut to Run the selected Action.

  

The command prompt styled icon is a shortcut to Running a Command.

  

### Setting Preferences

To set your preferences, you will need to open the Preference window by selecting the “Preferences” menu item under the Edit menu option. You can also use the keyboard shortcut, CTRL + SHIFT + P. You should see the following window appear.

  

![settings](https://lh4.googleusercontent.com/1m6BDRF__DNTJ_6X4aUXZfLxn3oNkrZK05s2X_WyO-tQ3Rsdwof3SKKOYviOst99eGX2AZNdVldJD4r1Y0kU0Xe87ZGEk0Mzf3Ugs9rwJFcwc3w2krqDgYRbzeNlH59oJQBOPr0PMGEyAosP7IRlQw)

  
  

Section

Preference

Description

General

Enable Device Selection

Allows the user to specify what device in a group they want to take action on.

General

API Request Limit

The maximum amount of devices the API should return data about. E.g. If set to 5, it will only return info about 5 devices, even when there are more devices in a Group.

General

Font Size

Font size

General

Save only visible columns

When saving to a CSV file, only the columns visible in the Grids will be saved to the file.

  

General

Fetch all devices in one page

Attempts to fetch all devices for the selected in one page, should the number of devices exceed the API Request limit.

General

Show Disabled Devices

Show devices that are disabled in the reports (e.g. devices that have been removed from the Esper Dashboard)

Command

Command Timeout (seconds)

How long should we wait for a Command to finish before timing out.

Min value: 0

Command

Reach Queued Command State Only

Make the tool wait until the Command reaches the Queued state. Tool will not wait for other states.

Command

Use Json Input for Commands

Use the older json input method for command creation.

Command

Device Type

Type of devices the commands should run on.  
All - Both Active and Inactive  
Active - Online Devices  
Inactive - Offline Devices

Command

Date Delta for Alias Command

Schedule how long the Alias command should last before expiring.

Grid

Allow Column Resizing

Allow user to resize columns

Grid

Sync Grid’s Vertical Position

Sync Grid’s vertical scrollbar position. Sync is disabled once sorted.

Grid

Only show immediate subgroups

Only show the immediate subgroups for a particular group. If not enabled it will show all subgroups levels in the grid.

  

Grid

Load X Number of Devices in Grid

Will only load a specified amount of devices into the grid at a time. More of the same amount will be loaded once the user has scrolled down far enough.

  

Grid

Replace Serial Number with Custom

Replaces Serial Number entry with Custom Serial Number, if available.

  

Application

Fetch All Installed Applications

Fetch all applications that are installed on the device, including those that are hidden.

Application

Show Application’s Package Name

Display an Application’s package name (e.g., In the Grids Tag column, or in the Application Input)

Application

Get Applications for each device

Fetch all applications for every device within a group.

Performance may be slower if enabled.

  

Application

Set App State to SHOW before Set Kiosk

Set App State to SHOW before setting the application as a Kiosk app on device.

Prompt

Grid Confirmation Prompt

  

Prompt

Template Confirmation Prompt

  

  
  

Modify and available Preferences and click on the Apply button to set and save those preferences.

### Obtain Device Information From a Group

Once a configuration has been loaded, you should be able to select a Group under the “Choose a Group” dropdown.

  

![device info](https://lh4.googleusercontent.com/9L6UseHD-GsSkLw6ZqP1Hnp7xCUEZRwAqKX2p1R9msdM5plmYW24B6gjOpUJfml0S95zP_UmyQEFjjWHlDx16GfPsUuFS6uHK5tZbVfK5jam6UuqMW-PDIF9nAlwDfun_ACr726F3mtobKCcjv7fXw)

  

Once a Group is selected, you are ready to perform an action on that Group. To display device and network information select the “Show - Device Info & Network Security Report” under the “Action to apply” dropdown.

  

![select group](https://lh6.googleusercontent.com/7IlHAlJNG0_SS5KpongpjbvqSIVIt3yRl9PQJXT9sWllBjikVZwje1xU-e4hY7PmcpErBSYSog1WCgoTCCc-U2faCSDL2LOgO4Cb2sUuMS41sko08e72-Jn1Mkp0nP6sBmbSp7KXhtIcm7NyQyUeLg)

  

Once the Action has been selected, click on the Run button. Depending on the number of devices in the group selected, you shall see the information displayed in the two grids on the right-hand side shortly. A progress bar located on the bottom right of the application should help indicate when the action is completed.

  

NOTE: The Configuration menu option and select other action options will be disabled when executing certain operations, in order to prevent network request errors. These operations include, but are not limited to: the actions in the Action Input, the Device Grid Action(s), opening the Preference prompt, cloning templates, and running Commands. The menu option will be re-enabled once the operation has been completed.

  

![select group](https://lh6.googleusercontent.com/ErZ9WRF70EwElUEeDWMDm5d1YfnFXjcuZ1fDrcJ6topXHf-X0tR_bRhNtQvA8m0FkcQ4yE7wwzZdyofov7Ivafp9Jd_dHYMCXHHc8rW0_RYz9R9TXKAIfYPA11dD-vUlZ_jwpVCfSGrG1pHR9IE3cQ)

### Obtain Device Information From a Single Device

Obtaining Device Information for a single device follows the same procedure as when obtaining information from a Group. However, this time after selecting your Group, you will want to choose a Device from the “Choose a Specific Device (Optional)” dropdown. The dropdown should show the devices that belong to the chosen group.

  

![select device](https://lh3.googleusercontent.com/3iJhF0qycyM4Q1jzdtl8y03DNenT-g6qKe9diphWUh5lF-Cz11VUYGBEZcV3BQCaTQ99Pv0DMOW1eyfR0EK7jk62tUXwhEj5ycUE-rupk-6qJxM0EYqeL23QBq15ifNAWQyDbtC7L3vC1mpZE-uFEw)

  

NOTE: If the specific device dropdown is not selectable, you may have disabled the option to use specific devices. Check the Preferences pane and enable it if that is the case.

### Obtain Device Information From External CSV File

If you have saved the Device Information, see the “Saving Device Information” section for details, from a previous run you can upload that data into the API Support Tool.

  

To do this you will first need to make sure you have loaded a Configuration, see the “Loading the Configuration” section for details.

  

NOTE: In order to apply an action for a device or a group you will need to select the appropriate Configuration, you cannot use another Configuration to apply an action to devices that don’t belong within that Enterprise’s Configuration.

  

After a Configuration has been loaded, and selected, you will need to click on the File Menu and select the “Open Device CSV” menu item. You can also use the keyboard shortcut, CTRL + D. Then you will need to select your file.

  

![csv](https://lh6.googleusercontent.com/XAbYus9DN6w0B1uYBzD0qXZrVon3MfjXaUOcBS_J2xhhsF7AQ8Olu-wjTlxXPqZnPjmqfnQISFahCp8n93yyqFaU50B5SkOpwOCcpfMNuavWC48wI7YlsbfEbxC6AjKehTzMUMLhb_o6zZJG8d6sKA)

  

You should see the Device Information Grid populate with the data from the CSV, assuming the file was valid in the first place. From there you can edit and apply actions to the listed devices.

### Saving Device and Network Information

Once the Device Information grid has been populated, you can save the information by selecting “Save Device and Network Info” from the File menu. You can also use the shortcut CTRL+S.

![network info](https://lh6.googleusercontent.com/fDpK64clhUl9HF47N1xwMU5K0hP8gBiaFXeGxyXPH1HQVeQS0dKgi8kWJs6SFfqJYbakXQU6KnLCS4X-vpRHbNw-h2xE0zNPem4_GbSm6ItPwBgYZqsQ4cQyFQLTcPTdLYWT7Zcl9UMIibsf110CvA)

### Grid Searching

To search information within the two grids, first click on the Search input text field in the right-hand side of the toolbar.

![search](https://lh4.googleusercontent.com/2wmfLRS5BvUjLpes08BLaFoCrlm1QpLuPJ15vnlyCBmdnWMwQ_kDDURRDVSi06A9Y_KKa_wEPbaATrdvxU9Vb9WJt_F4HEN8wN4C3NHCFpkva4r7iu6JgRlU1zmXLIMjk0zXQEHN1NbgkNChAb5igw)

  

Type in your query and then press the ENTER key to start the search. The rows that have a value that matches the submitted query will be highlighted with a yellow color.

  

![query](https://lh3.googleusercontent.com/YMxymHYHhllIeWgxLzNCjF1_MX3tE95WaNV7c4CKGrf-QYdICMp8q9nBevFQvZhE_kCXO6a0sEjGnIuGe3XDhaTU2tSQ72-fw2TAlg9K487GpDpaPTkPVnge2Jscoq-2OS_TVIWJRODmodzH6uCAlg)

  

To remove the highlights by clicking on the clear button in the Search input field (the circular icon with an “X” in the image above).

### Modifying Aliases and Tags

To give or modify an alias and or tags for a Device, you first must have loaded Device Information populated into the Device Information grid. One way to do this is to follow the steps provided in the “ Obtain Device Information From a Group” section.

  

NOTE: Modifying an alias will only be applied when the device is in an online state. If it is offline a command will be issued, for next time it comes online unless the command(s) expires beforehand.

  

Once the information has been loaded you can find a device you wish to provide or modify an Alias for within the grid. Under the Alias column you can fill in the cell with the Alias you wish to use for a particular device, listed in that row.

  

If you do not see the column, please check to see that the visibility of the column has been disabled by checking under the View menu and looking for the “Show Alias” menu item.

  

For tags you can edit the cell in the “Tags” column for a particular device. Each tag should be comma separated. Tags will be processed as comma separated entries. To include a comma within a tag, please surround the tag with double quotations.

  

You can enter each tag as follows:

-   1,2,3,”4,5”,”testers’”
    
-   [1,2,3,”4,5”,”testers’”]
    
-   [‘1’,’2’,’3’,”4,5”,”testers’”]
    
-   [‘1’, 2,’3’, “4,5”,”testers’”]
    
-   [‘1’, 2,’3’, “4,5”,”testers’”]
    

  

These will be processed as individual tags:

-   1
    
-   2
    
-   3
    
-   4,5
    
-   testers’
    

  

NOTE: Tags will be stripped of excess whitespace.  
  

Rows that have their Tag or Alias cells modified will be highlighted in a light blue color, until the modification is reverted or the change has been pushed.

  
![row](https://lh6.googleusercontent.com/W4HhCBnCXxnxtmW8Lzi1ab2bhbyKf77yMPnt0TH0-w7z7o2jTqQ6t65AbMCHMsL7be4UFO_iyRlESTWcHQdIyYFKxvKROLt7ljo6v5VevDOOxC12zOgFEcFUF10AjMZIa3QXSTErsUErVEFqz3ArBg)

  

Once you have entered all aliases and or tags to each device you want modified, we will need to apply those changes. To do this select “Action - > Set Device Alias & Tags” in the action dropdown list.

  

Once that action has been selected, click on the run button. On the first device action you should see a confirmation prompt like the one below.

  

![confirmation](https://lh6.googleusercontent.com/AAFZJFCD8bjrtEccrCpxZp6f08LL82VoO-dbRzMgRNtnDAmv9UQYKZszbjwf7h3umGDJN1OdkSn9Umn2IkJWEemQ3-CVWONYUsPZy5mGLc7pqNsFqMMl-V-pOcnbfcdFhbTGOMaD_LfJHsZ96JEhtw)

  

Applying a Device Grid Action will attempt to apply the desired action to the devices listed within the grid. Group or Device choices should not have any effect. Press “OK” to continue the action.

  

Once the action has begun to run you can monitor the progress through the progress bar on the bottom right.

  

NOTE: You will need to be on the same endpoint configuration that hosts those devices in order to apply changes.

  

The Device grid will update to show the tags that the device has been modified with and also highlight any device’s row should an action have failed on that device, in this case the rows will be highlighted in a red color, or the action’s status is uncertain in its completion, where the row will be highlighted in an orange color.

  

### Setting Device Mode

To set a group or device to Kiosk Mode or Multi app mode you will need to begin by selecting a Group and or device from the respective dropdown lists and select the “Action -> Set Device Mode” from the action’s dropdown.

  

![device mode](https://lh3.googleusercontent.com/3vO7tGD1fxBwGUoUkfz2d2QX-p0fVuH3HaayOFIJKb-jNtF5vdFSgXlbMtYqlvqSlqfoWpxNStHNffLYPt5kFpGon5DwHTQukLg5FJhYX4XgFj9c4h7OmhaQEUywI1emkDgP5fQnuaFUGdUNrDYVIw)

  

If you intend to set the devices into Kiosk mode, you will need to select an Application from the Application Tab.

  

NOTE: If you have chosen a specific device, the application dropdown will show the applications that can be set on that device. Please make sure that the application you wish to set is installed on all devices in a Group before trying to set it as the Kiosk app.

  

Click the run button, when you are ready to run. A prompt will appear asking which device mode you would like to apply to your selection. Click on your selection then press the OK button, the tool will then process the action.

![select mode](https://lh6.googleusercontent.com/YdknCWAKtUmgGw9qwrYE_CtAtzuMShu7mwgwKWroz5IyMqQQTO49bs6YxOm1BLIUnS0VX93CcRsLWJZknimXtxjnz46pbnX5FP3zCBpY27OFtjzXZx4DJIyGYazOXHFmOLbw6mvU19guPD9WdIwLdg)

After the action has been completed, you should see a prompt alerting you on the progress of the device mode Command(s). You can also reload the Device Information Grid at a later point in time to check the Mode each device is on.

### Clear App Data

To clear a specific application’s data you will need to select a Group, and or device, from their respective dropdown lists and then select the “Action -> Clear App Data” from the action dropdown list.

  

![clear data](https://lh6.googleusercontent.com/lkZfysBwmapHjBCf-aJEuNM7ekNjVl9cqLNIfwvyvFoiV4B2HQmtmLxe5iNuD4jzLbms65gWazFHFRsEjERhFEfW7bl_IWc3qWcOAeqdXdgI0g1jUBiT2KDDbrM9t_20X7gAtfdfwE-k7p5-ZwC0uw)

  

Once the action has been selected, the “Select Application” button in the Application tab will be enabled. Select an application from the prompt.

  

After the action has been completed you will see a prompt appear alerting you that attempts to send the command have finished. The prompt will also inform you of the last status of the command sent to each device.

### Running Commands

To run a command you must select a Group in the “Choose a Group” dropdown. You also have an option to run the command on a specific device within the chosen group as well. To do this select a device from the “Choose a specific device (optional)” dropdown.

  

In the Menu bar select “Run”, then the “Execute Command” menu item. You can also use the keyboard shortcut CTRL+SHIFT+C. You should see one of the following popups depending on the Command Setting opting for Json input.

  

![run command](https://lh6.googleusercontent.com/6u05FKH36Nx4Ptuw2qyFK871Tra3kCmbYtMcq4OdKtlWMeIlinjJ5ozT2QBnjXGyv4IEaJc6zzFlGpV25ijL4w9v3N7xNzCppKzxmULMFJHbK4X0wZM70M3szk33pUTP4dLnBrE6LURR5wdWY5x8bQ)

Json Input Command Prompt

![json](https://lh4.googleusercontent.com/_0-xdS_lUA37KVJA58UZzmwj6wyDNdlHSNAqXeWtWM-g44PloQ6wFFIx3ioHrDM6uLhLFoJpkX7y_DzQ_DTlwZ_kA_RHB8Lcx4GwMKP5oWxGu4qLY6W3lSV5H_fM7yzGZsO5VUhYCZQamTe1pz_NKw)

Field Entry Command Prompt

  

Select the type of Command you want to run. The currently available Commands are:

-   REBOOT
    
-   UPDATE_HEARTBEAT
    
-   UPDATE_DEVICE_CONFIG
    
-   SET_NEW_POLICY (Not available in the Field Entry Prompt)
    
-   ADD_WIFI_AP (Not available in the Field Entry Prompt)
    
-   REMOVE_WIFI_AP (Not available in the Field Entry Prompt)
    
-   SET_KIOSK_APP
    
-   SET_DEVICE_LOCKDOWN_STATE
    
-   SET_APP_STATE
    
-   WIPE
    
-   UPDATE_LATEST_DPC
    

  

Then if necessary fill in the JSON input into the text input box. Once you have filled in the necessary information, click on the “OK” button. You will be prompted to confirm the command you want to run, if the input looks correct, click the “OK” button once again.

  

![confirm command](https://lh5.googleusercontent.com/DkSGfy94MojWiRD_y0U9YXI1RrGRhJaZH1btQjP-yFcwkmTMhyVBH8h1hNzFKZPs5IqscKLeVXhha-el_-Ww3NVZIcJlXOp7o0qDD-dNTFYvu4qAFTDSJFdtpfn3d6Hxf2Vb4iequmTj9UnmBpNrnQ)

  

You will be prompted with a dialog with the last status for each command sent.

  

NOTE: If the command you want to execute does not require any extra JSON, leave the JSON input as the default value, “{}”.

  

#### Common Commands

##### Setting Browser Restrictions

To set browser restrictions, for Google Chrome, you will need to use the command type UPDATE_DEVICE_CONFIG when trying to run a command.

  

The following JSON shows the configuration to set the browser restrictions and some other options you can set on the browser. Example JSON:

  
```json
{

    "managedAppConfigurations": {

    "com.android.chrome": {

    "URLBlacklist": [

        "https://www.omegle.com/",

        "Facebook.com",

        "instagram.com"

    ],

    "URLWhitelist": [

        "*"

    ],

    "IncognitoModeAvailability": "1",

    "ForceGoogleSafeSearch": "true",

    "HomepageLocation": "https://esper.io"

    }

 }

}

```  

### Cloning Templates Between Two Endpoints

In order to clone a template from the source endpoint to the destination endpoint, you will need to add both configurations to the Authentication CSV.

  

To start the cloning process, select the “Run” menu and then click on the “Clone Template” menu item. Alternatively, you can use the keyboard shortcut, CTRL + SHIFT + T

  

![run](https://lh6.googleusercontent.com/_Av822iCSvdRXEGP2c-RDWoFi_krDALbcgSWpaNV4XzvY1Y5XwQRRsfOJDaMA77GCmUwoRjfZcNvJbkEHR_cL-Ge-c11RvMAxeDtyN4OG6ggz6tbhORRe1KGpBfmicJiCxqCs9zL6GMfwwGznyOjDw)

  

The following prompt will appear. Select the two endpoints using the Source Endpoint and Destination Endpoint choice selectors.

![east tool](https://lh4.googleusercontent.com/yLxXfhls0gW3kc6mhGpCqpkhYQ2WCNx_iFLS89lE_4LQ3EQ8d6WDEoSBl9UHa7cQwXVQQ2Cg_T7U6eKTyPXUtUeVQmrJslVrTjIbk4PoSCbskJhdGQCMiByfuFMNlRxa7BPaKleEI01UYbm7xSfPVg)

  

Once a Source Endpoint has been selected, templates will be loaded into the left pane under the Source Template section. Once a particular template has been selected, that template’s information will be populated in the right-hand pane of the same section.

  

![clone template](https://lh5.googleusercontent.com/DBeiqSmj7x7DM5tdPtkacj3UL5KNEB-xruPo-TNn9rFGwHiR_sehjLkIfr7Nf2HQBYL3-6CARld4tsU6cflwrwMyuYk2Smt-xyGydtIp2mJxs1g5-IO1xrXgZZRW9WFxV5H6F-EK0MK4V3vkRYhtPw)

  

Once you have confirmed which template you want to clone and its destination, the Clone button should be enabled. Click that to start the Cloning process.

  

The Support Tool will attempt to go through the Source Template and prepare it to be cloned to its destination. This includes downloading any applications that may be missing from the destination endpoint and uploading them. Once that has been completed, a prompt will appear, unless disabled previously, to notify the user of any missing applications, should that application’s download or upload have failed.

  

![confirm](https://lh3.googleusercontent.com/mJUvx7F8yxSP6sBf1H4uBLaKlCfZPebFHzlM0V0Qr_Ir2xWE7FRLCX_EfUaBWc207Oey9yy3RwGhIjpi9sS9gZBZj6MbT59A8yIFI46vhxEdkHCfZ9EH-5XlUk0csZI0U-vozPR9_xrcT5cXt8-RfA)

  

Clicking the OK button will continue the cloning process, where it will then download any wallpapers from the source template and then upload them to the destination endpoint and then upload the converted source template to the destination endpoint.

  

Once the template’s upload request has finished a prompt will appear notifying the User whether or not the upload has failed or succeeded.

  

### EQL Search

EQL, Esper Query Language, is a domain-specific language that can be used to query the devices on Esper.

  
If you don’t wish to create a collection that has a stored EQL query, then you can use the EQL Search option (CTRL + F).  
  
The following prompt will appear, where you can enter an EQL query. Once submitted the query’s results will be displayed within the grids.

  

![EQL Query](https://lh6.googleusercontent.com/tQ4imQTPoR_7jgxW9dKCOzddrsoUONn9i7OuzJhVdbD5GDqT7Huah5CBhQfozz71Jr2kc7SXbviyQvjuTpSYbdZ6hZseYQI40eBaSmqUSVvMklF2LBb9iGR57YmsAOMuNzXxvEgaq-kluLiC6IHBAg)

### Collection Actions

Collections allow for the storage of EQL queries. If you wish to create a Collection, simply fill in the fields on the right-hand side of the pane. You will need to fill in the Name field and a EQL query in the text field below the name input.  
  
Existing Collections will be populated in the list on the upper-left-hand side of the prompt. Selecting a collection will cause its name to be populated in the name field on the right-hand side and a preview of its EQL query to be loaded below.

Clicking on the refresh icon will reload the list of existing Collections.

  

If you wish to modify an existing Collection, select the Collection from the list on the left-hand side. Select the checkbox, on the right-hand side and fill in the fields as needed.  
  
If you wish to delete a Collection, select a Collection from the list on the left-hand side and press the delete button.  
  
Once you have a collection selected you can execute its EQL query. The results will then appear in the grids once it has finished.  
  
  

![collection](https://lh6.googleusercontent.com/imoOZiwaE5CI7LODyNbIgu3SBrgPEf9KG077ahYaAI_4AkuXg2qBXBfjzkTv414z5HS7bhRXIzju_jZjKkXzQdevAmAR3_JRy6G8hsc1UjEb23xO3Mkkl07yl6VQj26rnC_RM7liEmkIhSj705gfdg)

  

### Set App State for Particular App

Once you have selected the necessary Groups, and or devices, in the action dropdown list, select the following item, “Action -> Set App’s State to…”.

  

![select action](https://lh6.googleusercontent.com/ja_E-zBIHgFBBd6pHvLg_7UFwUH-gcotHP-LRaIpnzd4D1B_drSf-anH6WMMsdXFfAbH5mii9E2PcHCin1iMZ_QU_Swhfhm1eHAYyYgaGthaCRmbHFJ9YE29wKTvquQy90R2voR5B9uE-TiFM14XsA)

  

The Application prompt should then be available. Select an app from the prompt. Then select the run button to process the action. A prompt should appear asking which App State you would like to set. Select the desired state and click the OK button.

  

![east tool](https://lh4.googleusercontent.com/dooEazk-TsYQ2dG2ojFMYfqvKdKt0jbWvVfmyt8j7vyrLjlxTYJGK0bHMO0uGh7dpn_1BF6eaezDKJICh_zIZQADXkfYcaXkfws59Fl5AqdkCcWZf-6nM5IpO1A3yn-G8X2OVMq1IHuHEI1Ef2-PhQ)  
  
  

A prompt should appear when the action is completed, similar to when doing the Setting Kiosk or Setting Multi-App mode actions.

### Set App State for All Apps on Device

If you have populated the grid, either from fetching the info from the tool or importing it from a CSV file, you can set the state of all applications of the devices listed within the grid. To set the stat of all applications select “Action -> Set App’s State to…” under the Grid Actions section.

  
![grid action](https://lh3.googleusercontent.com/7j4gDoVakohqFbcj6BQWpW7ZR5UdstC0s7IWKaKZRvtpJGqdSql1i6YLOASk4jwWX2mHPYmgaCJ6ncYIDB0EQpAUjZ0DbKxw67JrEH1tNufjyQp6fGwJ4pXJDgKdLRdaQsGDNFroe_PbgF-KNUZrPw)

  

NOTE: The applications affected will be dependent on some of the Application Settings.

  

Then select the run button to process the action. Like the General Action of the same name, a prompt will appear asking which state you would like to set. Select the desired state and click the OK button.

  

A prompt should appear when the action is completed, similar to when doing the Setting Kiosk or Setting Multi-App mode actions.

  

### Remove Non-Whitelisted Access Points

To remove saved networks, except for a select few, you can select the “Remote Non-Whitelisted Wifi Access Point” action from the “Select Action” dropdown and the Group and or Devices you wish to apply the action on.

![remove AP](https://lh3.googleusercontent.com/-BkYpjRyGm9rMihEsyfY8HkRj2DhZoxCnTbUaB0Q6B-O8cMyClwWAR4tjZnpXZqkBnhKJoUFLFf-NUoNXH0hfTfbHeydZQA97G3WzwVto04_ErjXvDGftvbBuJN-3c6MTiVhBLLwFfciDtd4lVsCow)

  

You will be prompted to enter the SSIDs of the networks you don’t wish to be removed from the device, if present. If you want to whitelist multiple networks, please separate each SSID with a comma.

  

![AP](https://lh3.googleusercontent.com/mrSZ7n4Og0venVuEvepcFQQN2onDhGwDIl8hrl7HQ2npfC4aYaZibVG7Gr_w_8LmJAw3pESH4aYc7PhIzHZ6djp2dg-1u0fnilQXz8d7KFnrIm0KSL4T8YohTSueCbNQiBvIeH-BOWxbWV2Z74QfFg)

  

Once you finish listing the networks you want whitelisted, press the OK button. You should then be greeted with a prompt asking for confirmation of your decision.

  
![done](https://lh4.googleusercontent.com/ZcDHkFXzOfBIvDW3IS48fAYWj54coP7_HPVihUtH6fAmJ6vWth9OIO49GYN-x8sra8HI3tyrUt9CIB4tKcWtPi3QgH7idc3snZfBxnfLf2tOmJsgh-JBTsu7stmptPpI2_9oYEjpfuct-OTfwr9fTg)

  

If the list looks valid and you wish to proceed press the OK button. The action should run and once finished you should see a prompt that displays the last known statuses for the issued commands.

![command](https://lh6.googleusercontent.com/yK1cO9WWY1w1PUrfIJbRI5feuZLKLAEnwA7yY8vmyIRRvStIU_rdt2w37Gcpk5PeYoZwvAebxmcLZzp2DaHMbQVwuCI96XtzRnvNfgzS0EkOljI43q339ieJOF7SIfoLOZXL5E4Wk393QAhKsB3W3g)

### Get Installed Devices

To obtain a list of devices that have a specific Enterprise application, you will need to select the “Get Installed Devices” option under the Run>Applications menu or use the keyboard shortcut, CTRL + SHIFT + I.

![installed device](https://lh3.googleusercontent.com/clUxkd1jXP9sB-89WNvyq4JWYa_EXl4oaKe7PJdTSmz3qBXSqYvhXPSXkS87PNH9KPu3Y38_iJv8KR8Ad3oxHWHXCIjAcTNAiiRDJrHCmTldZYNmeMcFLZr5eH_fsUua7D5y9SzMKFMF2JvuQ4XZZQ)

  

A prompt should appear. One the left-side pane a list of Enterprise Applications should appear. Once you select an application, the right-side pane should populate a list of versions of that application that have been uploaded to your endpoint.

  

You can also filter the list of applications by typing into the search input box.

  

![search input](https://lh6.googleusercontent.com/DJcVsqVcW6BGPTuKm5zYflgvq6pY0EvwbF6hc_ii7tnZ0XODPvi3v5_I5Z4cVimov92WbS5J2IbnQmScLPqykhZB4z848nU-WkZdvrRc1Y-LrdzVrQyAq-dqkTvMt8Hs3F2oNtWcwC74y9orz8xAXw)

  

Once you select a version and select the “OK” button, the tool will fetch a list of devices that have the matching selection and populate those devices into the grids.

### Managing Groups

Start off by opening the Run menu, then look under the Group submenu. Click on the “Manage Groups” option.

  

![manage group](https://lh3.googleusercontent.com/99I4rKGTTztk7ocv9zaoIPRVd8J7H6i1pcGGNpftUIT1RlqcGsjXTMr1CvgyGL0xgO2iSpiCocKF5b2QTFIS5xjGs8hn1AqCLkQDISRZfeH7PMXFUho59UgQws18zyqIBvdMXpEhUsE-gq4iGepiLg)

  

The following prompt should appear:

![manage group](https://lh5.googleusercontent.com/nciyLsMbXuQ7my9bThrL0xLBzz6T_XNjaDn2lTaqs2Wz4dks9ynd6DARJG6Yq140Y7LI3MoPJERbA0ykAWM7QvyGxFM_N7h6zxtqr8yIZg9Grww0t3bcQcbKLiagxXapSjcZgPyerBmriq12li1dAg)

#### Managing a Single Group

If not already, click on the Single tab. A list of groups should be displayed in a tree layout. Below the tree list, there are three actions you can apply to a selected Group.

  

-   Add - Add a Subgroup
    
-   Rename - Rename the Group
    
-   Delete - Delete the Group (Only available if it has no child groups)
    

  

When you apply Add or Rename you will be prompted to type in the new name for the Group/Subgroup.  
  
Another prompt should appear informing you of the success or failure of the operation.

#### Managing Many Groups

If not already, click on the Bulk tab. You should see the following screen.

  

![manage group](https://lh6.googleusercontent.com/ppswiTHGTAhCF71K4OkO9CwtG6MMz13ywKOHf6zdK4_kSj1iDxQFadeih1wTvujH6eEYNdBQu5TOJuI6GeYrmMaZsUshuQMp3AGeEsgOj7uloe__8PjCS_uZUjD7W5MvTjQIx-LUgd_ktQyu8rQBlg)  
  
If needed, you can click on the “Download Group CSV” button in order to generate a CSV file with Groups that you are allowed to edit. By default, the “Parent Group Identifier” field will be populated with the Group Id of the Parent Group.  
  
NOTE: Generation of the CSV may take some time. During this period the download button will be disabled until the operation has successfully completed.  
  
You can use the Group Name as an identifier instead. However, this can lead to unwanted operations if there are multiple groups with the same name. Using Group Ids will provide more accuracy in making sure the operation affects the intended group.  
  
NOTE: Editing the “All devices” group is not allowed and will be absent from the generated CSV file.  
  
You can upload a CSV file to edit many groups at one time. The data within that CSV will be presented in the grid. Which you can then further edit, if need be.

  

The CSV will need three fields at most:

  

-   Group Name - The name of the Group you want to apply the change or the name of the group you want to create.
    
-   Parent Group Identifier - The name or Id of the Parent Group
    
-   New Group Name - The new name you wish to rename the group to. Only required for the Rename action.
    

  

For example, if I wanted to add a Subgroup to the Group, “All devices”, an entry in the uploaded CSV file would look like this:

“New Sub-Group ”, “All devices”

  

If I wanted to rename that group the entry would look like this:

“New Sub-Group ”, “All devices”, “Totally Cool Group”

  

Deleting a group will only require 2 fields, just like adding a Group:

“Totally Cool Group ”, “All devices”

  

### Move Device(s)

#### Move a Selection of Devices

To change the Group a device belongs to, select the Group and then the Device(s) from the selection prompts, as if you were generating a report for a select few devices.  
  
Then either select the “Action - > Move Device to new Group” option under the Action dropdown and click the Run button or navigate to the Group submenu under the Run Menu and select the “Move Device(s)” option.  
  
A familiar prompt should appear, it should look like the Group Selection prompt. Find and select the Group you wish to move the device to and select the OK button.  
  
A message prompt should appear alerting you of the results of the action.

#### Move a Devices From an Uploaded Device Information CSV File

Generate and save a Device Information CSV file, see the “Saving Device and Network Information” section for more information, and then alter the Group field for each device you want to move.  
  
Upload the altered CSV file. Once the file has been populated in the grids, select the Grid action “Move Device(s) to new Group” from the action choice.  
  
The tool will then go through the Grid and attempt to move each device to the specified Group. When finished a prompt will appear indicating the last known status of each attempt in moving the device.  
  

## Keyboard Shortcuts

  

Action

Keyboard Shortcut

Help

F1

Add New Endpoint

CTRL + A

Open Device CSV

CTRL + O

Save Grid Info

CTRL + S

Quit

CTRL + Q

Preferences

CTRL + SHIFT + P

Run

CTRL + R

Execute Command

CTRL + SHIFT + C

Clone Template

CTRL + SHIFT + T

View Console Logs

CTRL + L

Perform Collection Action

CTRL + SHIFT + F

EQL Search

CTRL + F

Manage Users

CTRL + U

Manage Group

CTRL + G

Move Device(s)

CTRL + M

  

## Tool Support

### Where to go for Support

Please create or add to an issue on our Github page. If needed please attach a screenshot of the error, steps to reproduce the issue, and, if possible, the tool’s logs.

  

Link: [Issues · esper-io/esper-api-support-tool (github.com)](https://github.com/esper-io/esper-api-support-tool/issues)

### Where to Find the Tool’s Logs

#### Windows

The Tool’s logs, ApiTool.log, can be found under the EsperApiTool folder in the Roaming App Data directory.

  

Path: C:\Users\<username>\AppData\Roaming\EsperApiTool (%APPDATA%/EsperApiTool)

#### Mac

The Esper API Support Tool will attempt to create a directory on the user’s Desktop, called EsperApiTool, where the log file, ApiTool.log, will be located.

  

Path: ~/Desktop/EsperApiTool/

