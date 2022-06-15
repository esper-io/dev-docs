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

| FQDNs                                 | Ports                           | Features                                                                                 |
|---------------------------------------|---------------------------------|------------------------------------------------------------------------------------------|
| *.amazonaws.com                       | 443 and 8883                    | For provisioning, app management and device management                                   |
| [mqtt.shoonyacloud.com:1883] |                           | Backup device managemnt channel                                                          |
| mqtt2.shoonyacloud.com                | 1883                            | Backup device managemnt channel                                                          |
| [services.shoonyacloud.com]           | TCP: 80 (HTTP), 443 (HTTPS)     | IMEI/ Seamless provisioning and remote viewer APK                                        |
| [turn.shoonyacloud.com]                | "TCP: 3478, 5349                | For remote viewer and control                                                            |
| dpcdownloads.esper.cloud              | UDP: 3478, 5349, 49152 - 65535" | For the 6-tap QR code method of provisioning and Remote viewer APK                       |
| [customer endpoint].esper.cloud       | N/A                             | For Esper Console                                                                        |
| [customer endpoint]-api.esper.cloud   | TCP: 443                        | For communication from device to cloud (device status event and command success/failure) |
| mqtt-telemetry-prod.esper.cloud       | 1883                       | Deep telemetry from devices                                                              |
| firebaseinstallations.googleapis.com and fcm.googleapis.com| 1883                            | Backup channel and used for ping command to wakeup a device (Only for GMS devices)       |

Note: For static IP, please contact [Esper team](https://support.esper.io/s/).

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

