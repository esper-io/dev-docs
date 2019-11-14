---
title: Remote adb
lang: en-US
---

# Remote ADB

Developer should be able to debug their devices remotely without even physical association with the device. ADB is android tool that help you to get take actions on the device, get the device or application logs and help you in resolving customer or in-field issues right by sitting remotely in your office.

:::tip
Steps to connect to remote Adb:
:::

1.  On to Esper Dashboard `https://<env.esper.cloud>`, Go to `Devices` tab, then to your device and to `Actions`.

2.  At the bottom of the page, Click `enable adb`.

3.  On to your android device, connect via usb cable and enable adb over `tcpip` by following command:
    ```js{4}
    adb tcpip 5555
    ```
4.  Disconnect usb cable from the device.

5.  Again go to Esper Dashboard `https://<env.esper.cloud>`, Go to `Devices` tab, then to your device and to `Actions`.

6.  Click `Enable Remote adb` and click `Start`. Wait for few moments to appear IP and port to connect to.

7.  On to your Laptop/Desktop with adb tools available, run following command:
    ```js{4}
     adb connect <IP:Port>
    ```
8.  You are connected to adb.

:::warning
Now onwards until device is rebooted, You would be able to connect to the device remotely. Post reboot you have to do Step 1-7 again
:::
