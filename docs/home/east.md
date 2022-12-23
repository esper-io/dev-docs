# EAST Tool

The Esper API Support Tool (EAST) is available for Mac and Windows OS. The executables for each OS will be available on the tool’s [Github releases](https://github.com/esper-io/esper-api-support-tool/releases) page.

If you have issues running the application on Mac OS, please try the following.

1.  Open The EsperAPISupportTool.App.
2.  If the application is blocked, navigate to the Security and Privacy section of System Preferences.
3.  Under the General tab, click the lock on the bottom left and click “Open” under the EsperAPISupportTool notification.
    

## Code Environment

The Esper API Support Tool is intended to be available for both Mac and Window OS users. Currently a user will need a Python environment setup in order to run the application.

  

You can clone our tool from its GitHub repository, [here](https://github.com/esper-io/esper-api-support-tool).

  

We recommend installing the following when using the tool:

-   Python 3+
    
-   Git
    
-   An IDE (Integrated Development Environment, recommended: Visual Studio Code)
    

Once you have installed Python, run the following command in the tool’s repository folder.

  

```pip install -r requirements.txt```

  

This should install all the necessary Python modules needed to run the project.

## Using the Tool

### Adding An Endpoint

Upon starting the tool for the first time you will see the following prompt asking for information required to run the tool.

The required information you will need to fill out the form is:

-   Name: The name of the given endpoint, a label for the Endpoint entry
    
-   API Host: The host name of the api url e.g., https://{endpoint-name}-api.esper.cloud/api
    
-   Enterprise ID: The enterprise ID. You can find this by visiting the “API Key Management” section within the Esper Dashboard
    
-   API Key: A generated API key, you can create a key by visiting the “API Key Management” section within the Esper Dashboard. Should be a Bearer token.

-   For more information on how to generate an API Key, please see our [documentation](https://docs.esper.io/home/console.html#api-key-management).
    

After all fields have been populated, the “Add” button will be enabled. Clicking on the “Add” button will create a new Endpoint Entry that the user can select through the “Configurations” menu.

You should see a prompt appear informing you whether or not the Endpoint has been added or not.

You can also add other Endpoints by selecting the menu option under the “File” menu or by using the keyboard shortcut, CTRL + O.

### Removing An Endpoint

To remove an Endpoint, select and load the desired endpoint from the “Configurations” menu. You can then click on the button with the trashcan icon to the right of the “Loaded Configuration” label. Alternatively, you click on the Loaded Configuration box once the Endpoint’s configuration has been loaded in. Then hit the DELETE keyboard key.

A prompt will appear asking you to confirm your decision. Clicking yes will proceed in the removal of the Endpoint.

An Endpoint can only be re-added once it has been deleted.

### User Management

To add, modify, or delete Users in bulk navigate to the File menu and select the "Manage Users" menu item. Alternatively, you can use the keyboard shortcut CTRL + U.

NOTE: Please ensure that you are on the Endpoint that you want to manage Users for.

A prompt should appear. Please select the action you wish to perform from the dropdown: Add, Modify, or Delete.

If you don’t have a CSV ready, please click the Download button for a CSV file that you can fill in. Once the CSV file is ready, you can upload it by clicking the “Upload” button.

NOTE: You can use Group names or their IDs. If you wish for a User to have access to multiple Groups, please separate each group entry with a comma. For example, an entry might look like:

"Best","Test","test@best.com","besttest","!@#$@%","Group Admin","Test,Lab,Hotel d' Vine"

The available roles to a user are:

-   Enterprise Admin
    
-   Group Admin
    
-   Group Viewer
    
-   Viewer
    

Depending on the action, the tool will read in the valid entries in the file and display them in the preview grid.Once you have confirmed that all the entries in the Preview match press the “Execute” button located in the lower-right corner of the prompt. You will be prompted to confirm your decision.

A progress bar prompt will appear, once finished that prompt will be replaced with a summary of results based off that action.

### Toolbar Icons

The following are the available options present in the toolbar: 

* The leftmost icon is a shortcut to quit the application.

* The circular icon with a plus is a shortcut to Adding a New Endpoint.

* The folder icon is a shortcut to opening a CSV file to populate the grids with saved device information.

* The floppy disk icon is a shortcut to save both Device and Network information.

* The right-facing arrow icon is a shortcut to Run the selected Action.

* The command prompt styled icon is a shortcut to Running a Command.

### Setting Preferences

To set your preferences, you will need to open the Preference window by selecting the “Preferences” menu item under the Edit menu option. You can also use the keyboard shortcut, CTRL + SHIFT + P. You should see a window with the following options appear. 

Modify the available preferences and click **Apply** to set and save those preferences.

* General

    - Inhibit Sleep When Running 

    - Include Pre-release Update Check 

    - Allow Auto-Posting of Issues

* Display 

    - Font Size

* Save 

    - Save only visible columns: When saving to a CSV file, only the columns visible in the Grids will be saved to the file.

    - Combine Device and Network Sheets 

    - Maximum Split Sheet Size: Maximum 500. 

* Application 

    - Fetch All Install Apps on Device: Fetch all applications that are installed on the device, including those that are hidden.

    - Set App State to SHOW before Set Kiosk: Set App State to SHOW before setting the application as a Kiosk app on device.

    - Show App's Package Name 

    - Display Veersion Name Instead of Code: Display an Application’s package name (e.g., In the Grids Tag column, or in the Application Input)

    - Filter App Column: opens an menu where you can enter the package names separated by commas.

* Command 

    - Command Tiemout (seconds): How long should we wait for a Command to finish before timing out. Minimum: 0. 

    - Reached Queued Command State Only: Make the tool wait until the Command reaches the Queued state. Tool will not wait for other states.

    - Device Type: Choose from Active, Inactive, or All 

    - Use Json input for Commands: Use the older json input method for command creation.

    - Date Delter for Alias Command: Schedule how long the Alias command should last before expiring.


* Grid 

    - Allow Column Resizing 

    - Sync Grid's Vertical Scroll Position: Sync Grid’s vertical scrollbar position. Sync is disabled once sorted. 

    - Load X Number of Devices in Grid: Will only load a specified amount of devices into the grid at a time. More of the same amount will be loaded once the user has scrolled down far enough.

* Report 

    - Enable Device Selection 

    - Fetch all devices in one page: Attempts to fetch all devices for the selected in one page, should the number of devices exceed the API Request limit.

    - Show Disabled Devices: Show devices that are disabled in the reports (e.g., devices that have been removed from the Esper Dashboard).

    - Filter App State: Choose from SHOW, HIDE, DISABLE, or ALL

    - Show Group Path Instead of Name 

    - API Request Limit: The maximum amount of devices the API should return data about (e.g., if set to 5, it will only return info about 5 devices, even when there are more devices in a Group).

* Schedule 

    - Enable Schedule Report 

    - Report Location 

    - Save File Format 

    - Report Type 

    - Schedule Interval 

* Prompts 

    - Grid Confirmation Prompt 

    - Template Confirmation Prompt


### Obtain Device Information From a Group

Once a configuration has been loaded, you should be able to select a Group under the “Choose a Group” dropdown.
  

Once a Group is selected, you are ready to perform an action on that Group. To display device and network information select the “Show - Device Info & Network Security Report” under the “Action to apply” dropdown.
  

Once the Action has been selected, click on the Run button. Depending on the number of devices in the group selected, you shall see the information displayed in the two grids on the right-hand side shortly. A progress bar located on the bottom right of the application should help indicate when the action is completed.

  

NOTE: The Configuration menu option and select other action options will be disabled when executing certain operations, in order to prevent network request errors. These operations include, but are not limited to: the actions in the Action Input, the Device Grid Action(s), opening the Preference prompt, cloning templates, and running Commands. The menu option will be re-enabled once the operation has been completed.

### Obtain Device Information From a Single Device

Obtaining Device Information for a single device follows the same procedure as when obtaining information from a Group. However, this time after selecting your Group, you will want to choose a Device from the “Choose a Specific Device (Optional)” dropdown. The dropdown should show the devices that belong to the chosen group.

NOTE: If the specific device dropdown is not selectable, you may have disabled the option to use specific devices. Check the Preferences pane and enable it if that is the case.

### Obtain Device Information From External CSV File

If you have saved the Device Information, see the “Saving Device Information” section for details, from a previous run you can upload that data into the API Support Tool.
  

To do this you will first need to make sure you have loaded a Configuration, see the “Loading the Configuration” section for details.

NOTE: In order to apply an action for a device or a group you will need to select the appropriate Configuration, you cannot use another Configuration to apply an action to devices that don’t belong within that Enterprise’s Configuration.

After a Configuration has been loaded, and selected, you will need to click on the File Menu and select the “Open Device CSV” menu item. You can also use the keyboard shortcut, CTRL + D. Then you will need to select your file.

You should see the Device Information Grid populate with the data from the CSV, assuming the file was valid in the first place. From there you can edit and apply actions to the listed devices.

### Saving Device and Network Information

Once the Device Information grid has been populated, you can save the information by selecting “Save Device and Network Info” from the File menu. You can also use the shortcut CTRL+S.

### Grid Searching

To search information within the two grids, first click on the Search input text field in the right-hand side of the toolbar.

Type in your query and then press the ENTER key to start the search. The rows that have a value that matches the submitted query will be highlighted with a yellow color.

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
  

Once you have entered all aliases and or tags to each device you want modified, we will need to apply those changes. To do this select “Action - > Set Device Alias & Tags” in the action dropdown list.

  

Once that action has been selected, click on the run button. On the first device action you should see a confirmation prompt like the one below.
  

Applying a Device Grid Action will attempt to apply the desired action to the devices listed within the grid. Group or Device choices should not have any effect. Press “OK” to continue the action.


Once the action has begun to run you can monitor the progress through the progress bar on the bottom right.
  

NOTE: You will need to be on the same endpoint configuration that hosts those devices in order to apply changes.


The Device grid will update to show the tags that the device has been modified with and also highlight any device’s row should an action have failed on that device, in this case the rows will be highlighted in a red color, or the action’s status is uncertain in its completion, where the row will be highlighted in an orange color.

### Setting Device Mode

To set a group or device to Kiosk Mode or Multi app mode you will need to begin by selecting a Group and or device from the respective dropdown lists and select the “Action > Set Device Mode” from the action’s dropdown.

If you intend to set the devices into Kiosk mode, you will need to select an Application from the Application Tab.

NOTE: If you have chosen a specific device, the application dropdown will show the applications that can be set on that device. Please make sure that the application you wish to set is installed on all devices in a Group before trying to set it as the Kiosk app.

Click the run button, when you are ready to run. A prompt will appear asking which device mode you would like to apply to your selection. Click on your selection then press the OK button, the tool will then process the action.

After the action has been completed, you should see a prompt alerting you on the progress of the device mode Command(s). You can also reload the Device Information Grid at a later point in time to check the Mode each device is on.

### Clear App Data

To clear a specific application’s data you will need to select a Group, and or device, from their respective dropdown lists and then select the “Action > Clear App Data” from the action dropdown list.

Once the action has been selected, the “Select Application” button in the Application tab will be enabled. Select an application from the prompt.
  
After the action has been completed you will see a prompt appear alerting you that attempts to send the command have finished. The prompt will also inform you of the last status of the command sent to each device.

### Running Commands

To run a command you must select a Group in the “Choose a Group” dropdown. You also have an option to run the command on a specific device within the chosen group as well. To do this select a device from the “Choose a specific device (optional)” dropdown.

In the Menu bar select “Run”, then the “Execute Command” menu item. You can also use the keyboard shortcut CTRL+SHIFT+C. You should see one of the following popups depending on the Command Setting opting for Json input: 

* Json Input Command Prompt

* Field Entry Command Prompt

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
    
Then if necessary fill in the JSON input into the text input box. Once you have filled in the necessary information, click on the “OK” button. You will be prompted to confirm the command you want to run, if the input looks correct, click  **OK** once again.
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

  
To start the cloning process, select the “Run” menu and then click on the “Clone Template” menu item. Alternatively, you can use the keyboard shortcut, CTRL + SHIFT + T.
  

The following prompt will appear. Select the two endpoints using the Source Endpoint and Destination Endpoint choice selectors.
  

Once a Source Endpoint has been selected, templates will be loaded into the left pane under the Source Template section. Once a particular template has been selected, that template’s information will be populated in the right-hand pane of the same section.
  

Once you have confirmed which template you want to clone and its destination, the Clone button should be enabled. Click that to start the Cloning process.

The Support Tool will attempt to go through the Source Template and prepare it to be cloned to its destination. This includes downloading any applications that may be missing from the destination endpoint and uploading them. Once that has been completed, a prompt will appear, unless disabled previously, to notify the user of any missing applications, should that application’s download or upload have failed.
  

Click **OK** to continue the cloning process. It will then download any wallpapers from the source template and then upload them to the destination endpoint and then upload the converted source template to the destination endpoint.


Once the template’s upload request has finished a prompt will appear notifying the User whether or not the upload has failed or succeeded.


### EQL Search

EQL, Esper Query Language, is a domain-specific language that can be used to query the devices on Esper.
  
If you don’t wish to create a collection that has a stored EQL query, then you can use the EQL Search option (CTRL + F).  
  
The following prompt will appear, where you can enter an EQL query. Once submitted the query’s results will be displayed within the grids.

  
### Collection Actions

Collections allow for the storage of EQL queries. If you wish to create a Collection, simply fill in the fields on the right-hand side of the pane. You will need to fill in the Name field and a EQL query in the text field below the name input.  
  
Existing Collections will be populated in the list on the upper-left-hand side of the prompt. Selecting a collection will cause its name to be populated in the name field on the right-hand side and a preview of its EQL query to be loaded below.

Clicking on the refresh icon will reload the list of existing Collections.

If you wish to modify an existing Collection, select the Collection from the list on the left-hand side. Select the checkbox, on the right-hand side and fill in the fields as needed.  
  
If you wish to delete a Collection, select a Collection from the list on the left-hand side and press the delete button.  
  
Once you have a collection selected you can execute its EQL query. The results will then appear in the grids once it has finished. 

### Set App State for Particular App

Once you have selected the necessary Groups, and or devices, in the action dropdown list, select the following item, “Action > Set App’s State to…”.

The Application prompt should then be available. Select an app from the prompt. Then select the run button to process the action. A prompt should appear asking which App State you would like to set. Select the desired state and click **OK**.  
  

A prompt should appear when the action is completed, similar to when doing the Setting Kiosk or Setting Multi-App mode actions.

### Set App State for All Apps on Device

If you have populated the grid, either from fetching the info from the tool or importing it from a CSV file, you can set the state of all applications of the devices listed within the grid. To set the stat of all applications select “Action > Set App’s State to…” under the Grid Actions section.

NOTE: The applications affected will be dependent on some of the Application Settings.

Then select the run button to process the action. Like the General Action of the same name, a prompt will appear asking which state you would like to set. Select the desired state and click the OK button.

A prompt should appear when the action is completed, similar to when doing the Setting Kiosk or Setting Multi-App mode actions.

### Remove Non-Whitelisted Access Points

To remove saved networks, except for a select few, you can select the “Remote Non-Whitelisted Wifi Access Point” action from the “Select Action” dropdown and the Group and or Devices you wish to apply the action on.

You will be prompted to enter the SSIDs of the networks you don’t wish to be removed from the device, if present. If you want to whitelist multiple networks, please separate each SSID with a comma.

Once you finish listing the networks you want whitelisted, press the OK button. You should then be greeted with a prompt asking for confirmation of your decision.

If the list looks valid and you wish to proceed press the OK button. The action should run and once finished you should see a prompt that displays the last known statuses for the issued commands.

### Get Installed Devices

To obtain a list of devices that have a specific Enterprise application, you will need to select the “Get Installed Devices” option under the "Run > Applications" menu or use the keyboard shortcut, CTRL + SHIFT + I.

A prompt should appear. One the left-side pane a list of Enterprise Applications should appear. Once you select an application, the right-side pane should populate a list of versions of that application that have been uploaded to your endpoint.

You can also filter the list of applications by typing into the search input box.

Once you select a version and select the “OK” button, the tool will fetch a list of devices that have the matching selection and populate those devices into the grids.

### Managing Groups

Start off by opening the Run menu, then look under the Group submenu. Click on the “Manage Groups” option.

A prompt should appear.

#### Managing a Single Group

If not already, click on the Single tab. A list of groups should be displayed in a tree layout. Below the tree list, there are three actions you can apply to a selected Group.

-   Add - Add a Subgroup
    
-   Rename - Rename the Group
    
-   Delete - Delete the Group (Only available if it has no child groups)


When you apply Add or Rename you will be prompted to type in the new name for the Group/Subgroup.  
  
Another prompt should appear informing you of the success or failure of the operation.

#### Managing Many Groups

If not already, click on the Bulk tab. 
  
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

```“New Sub-Group ”, “All devices”```

If I wanted to rename that group the entry would look like this:

```“New Sub-Group ”, “All devices”, “Totally Cool Group”```

Deleting a group will only require 2 fields, just like adding a Group:

```“Totally Cool Group ”, “All devices”```

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

| Action                    | Keyboard Shortcut |
|---------------------------|-------------------|
| Help                      | F1                |
| Add New Endpoint          | CTRL + A          |
| Open Device CSV           | CTRL + O          |
| Save Grid Info            | CTRL + S          |
| Quit                      | CTRL + Q          |
| Preferences               | CTRL + SHIFT + P  |
| Run                       | CTRL + R          |
| Execute Command           | CTRL + SHIFT + C  |
| Clone Template            | CTRL + SHIFT + T  |
| View Console Logs         | CTRL + L          |
| Perform Collection Action | CTRL + SHIFT + F  |
| EQL Search                | CTRL + F          |
| Manage Users              | CTRL + U          |
| Manage Group              | CTRL + G          |
| Move Device(s)            | CTRL + M          |

  

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

