# Downloading Executable

## Downloading Executable For Windows

1.  Click <a href="https://downloads.esper.io/esper_provisioner_windows.exe" download>**here**</a> to download the Windows Executable.
2.  After downloading, click on the small arrow next to download and select **"Keep"**.\
     a. Do this step for IMEI provisioning for non-Esper devices. Download the **config.json** file <a href="/Executables/config.json" download>**here**</a>. This file needs to be edited for changing the **username** and **password** that you have setup for your Esper endpoint. Also, if you enter the WiFi information, it will enable the device to connect to WiFi automatically. Place this file in the same folder as the Esper-Provisioner executable downloaded above.
3.  Open **command prompt**. Click the "Start >> Program Files >> Accessories >> Command Prompt".
4.  Go to the folder where the executable was downloaded. For example if you downloaded it in **"Downloads"**, run "cd Downloads" from root.
5.  Run the following command

```sh
esper_provisioner_windows.exe -rc prod
```

after connecting and enabling USB debugging on the device. See instructions on how to enable USB debugging under ADB provisioning section [here](../index.md).

## Downloading Executable For Mac

1.  Click <a href="https://downloads.esper.io/esper-device-provisioner-macos" download>here</a> to download the Mac Executable.
2.  After downloading, Ctrl + click on the icon and select Open. This will give permission to the executable to run on your Mac.\
     a. Do this step for IMEI provisioning for non-Esper devices. Download the config.json file <a href="/Executables/config.json" download>here</a>. This file needs to be edited for changing the username and password that you have setup for your Esper endpoint. Also, if you enter the WiFi information, it will enable the device to connect to WiFi automatically. Place this file in the same folder as the Esper-Provisioner executable downloaded above.
3.  Open command prompt by pressing Command + Space to launch Spotlight and type "Terminal".
4.  Go to the folder where the executable was downloaded. For example if you downloaded it in "Downloads", run "cd Downloads" from root.
5.  Run the following command

     ```sh
     chmod +x esper-device-provisioner-macos
     ```

6.  Run the following command

     ```sh
     ./esper-device-provisioner-macos -rc prod
     ```

after connecting and enabling USB debugging on the device. See instructions on how to enable USB debugging under ADB provisioning section [here](../index.md).
