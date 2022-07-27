# Requirements

The following documentation details the minimum requirements necessary for using various parts of Esper.

## Web-Based Console (\*.esper.cloud)

The Console requires [Chrome](https://www.google.com/chrome) v80 or above. At present, viewing the console on mobile devices is not supported.

## Dedicated Android Devices

Targeted Dedicated Devices must run Android version 4.4 KitKat (API Level 19) or above. However, we recommend that devices running Android version 7.0 Nougat (API Level 24) or above be used with Esper.

We have recently started supporting latest Android version 10 on our platform.

Esper Development Devices running Esper Enhanced Android will always be supported be used. Such devices open up additional features for developers, when using Esper.

## Esper Feature Support

### If you have any questions about what feature support we offer for your device, please contact support@esper.io

#### Legend:

* :heavy_check_mark: - Feature Supported
* :x: - Feature Not Supported
* :exclamation: - A prompt will be provided to the user, which then has to be approved unless a supervisor is present, in which case silent application install/uninstall is supported.
* :question: - Partially supported. This option is only supported if a supervisor is available.


|   |Android 4.4 (KitKat)   |Android 5.0 (Lollipop)   |Android 5.1 (Lollipop MR1)   |Android 6.0 (Marshmallow)   |Android 7.0 (Nougat)   |Android 7.1 (Nougat MR1)   |Android 8.0 (Oreo)   |Android 8.1 (Oreo MR1)   |Android 9.0 (Pie)   | Android 10.0 (Q)
|---|---|---|---|---|---|---|---|---|---|---|
| Managed Google Play  | :x:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| App Install/Uninstall  | :exclamation:  | :exclamation:  | :exclamation:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| App Permission Management   | :x:  | :x:  | :x:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark: | :heavy_check_mark: 
| Remote Viewer & Screenshot  | :x:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| **Device Commands**  |  | | | | | | | | |
| Reboot  |  :question: |  :question: | :question: | :question:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Location Control  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Brightness Control  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Volume Controls  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Rotation Control  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Screen Timeout Control  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark: 
| **Policy Features**  |  |  | | | | |  |  | |
| Disable Lockscreen  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  |:heavy_check_mark: | :heavy_check_mark: 
| Disable Camera  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable Status Bar  | :x:  | :x:   | :x:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable NFC Beam  | :x:  | :x:  |  :heavy_check_mark: | :heavy_check_mark:   | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable Outgoing Calls  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable Factory Reset  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark: 
| Disable USB Connectivity  | :x:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable Screenshot  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable Safe Mode  | :x:  | :x:  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Disable SMS  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Enforce Password Rules  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark: 
| Enforce Default App Permissions  | :x:   | :x:  | :x:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark: 
| Safety Net  | :heavy_check_mark:   | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark: 
| Device Telemetry  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 
| Kiosk Mode & Lockdown  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:   | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark:  | :heavy_check_mark: 

## Infrastructure

Dedicated devices are often behind corporate firewalls, preventing the Esper backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports, in case your fleet is running behind such a firewall.

### Firewall Requirements

Dedicated devices are often behind corporate firewalls, preventing Esper's backend from communicating with them (or vice-versa). Please make sure to whitelist the following URLs and Ports if your fleet runs behind such a firewall.

| FQDNs                                 | Ports                           | Features                                                                                 |
|---------------------------------------|---------------------------------|------------------------------------------------------------------------------------------|
| *.amazonaws.com                       | TCP: 443 (HTTPS), TCP: 8883                     | For provisioning, app management and device management                                   |
|  mqtt.shoonyacloud.com |       TCP: 1883 (MQTT)                 | For MQTT communication with devices                                                          |                                                         |
| services.shoonyacloud.com           | TCP: 80 (HTTP), TCP: 443 (HTTPS)     | Provisioning services and Remote Viewer APK                                        |
| turn.shoonyacloud.com              | TCP/UDP: 3478 (SCTP), TCP/UDP: 5349 (SCTP)               | For Remote Viewer and Remote Control services                                                            |
| dpcdownloads.esper.cloud              | UDP: 3478, 5349, 49152 - 65535 | For the 6-tap QR code method of provisioning and Remote Viewer APK                       |
| [customer endpoint].esper.cloud       | TCP: 443 (HTTPS)                            | Grants access to the Esper Console when operating under a network with a restricted outbound firewall                                                                        |
| [customer endpoint]-api.esper.cloud   | TCP: 443 (HTTPS)                      | For communicating from the device to the Esper Endpoint. (example: device status events and command success/failure messages) |
| mqtt-telemetry-prod.esper.cloud       | TCP: 1883                      | Deep telemetry from devices                                                              |
| IP: 13.52.132.230          |  TCP: 40000 - 50000 | For allowing secure remote ADB access to your devices                       |
| firebaseinstallations.googleapis.com and fcm.googleapis.com| TCP: 1883 (HTTPS) | Backup channel, also used for ping command to wake up a device (Only for GMS devices)       |


:::tip
For static IP, please get in touch with the [Esper team](https://support.esper.io/s/).
:::


  

## Esper Dev Tools Requirements

Various Esper tools and SDK require a Python installation. The table below lists the requirements for Python, depending on the tool you would like to use. Python can be downloaded and installed from [python.org](https://www.python.org/).

| Tool      | Python 2.7 | Python 3.6+ |
| --------- | :--------: | ----------: |
| Esper SDK |    Yes     |         Yes |
| Esper CLI |            |         Yes |

### Esper SDK Language Support

* Python

To use the Esper Python SDK, please ensure you are using Python v2.7 or above.

> Note: Esper plans to release SDK support for Kotlin, Java, and JavaScript. If you are using a language other than Python and would like to start work with the Esper APIs right away, please consider calling the APIs directly. You can refer to the Esper API documentation [here](./api.md).

## Supported Development Platforms

* MacOS
* Windows
* Linux

At Esper, our developers use all of the above platforms to interact with Esper itself. So feel free to use whatever platform fits well for you!

## Help

If you face any issues setting up your requirements for Esper, please don't hesitate to [ask for some help!](./support.md) We'll be happy to assist you.



[mqtt.shoonyacloud.com:1883]: http://mqtt.shoonyacloud.com:1883/
[turn.shoonyacloud.com]: http://turn.shoonyacloud.com/
[downloads.esper.io]: http://downloads.esper.io/
[services.shoonyacloud.com]: http://services.shoonyacloud.com/

