# Getting Started

## Setup

1. **Esper Developer Trial** 

First Step to begin your development is to create a developer account 
<br>
Sign up for the Esper Dev Trial using the Link [Singup](www.esper.io/signup) .

During the signup process you will set up your environment name. Once your environment is set you can login to your account on `{{ esper_env_name }}.shoonyacloud.com` where “{{ esper_env_name }}” is your chosen environment name giving you access to both the Esper Dev Console. 
  
2. **Target Device**  
 
Any Android device can act as a targete devices for your your application. Esper tools enable you to communicate with your target device enabling you to deploy and test your application.  

Esper will be soon launching Developer Kits and Virtual device emulators  

.[DevKits](./module/devkits.md)

.[DeviceEmulators](./module/emulator.md)

3. **Device template** 

Next step is to create a Device Template where you define the initial profile for your device's configuration, apps, and settings. A device is then provisioned using the  Device Template.
See [Creating a device template](/home/devconsole/device-template/)

4. **Device Provisioning** 

Inorder for the Esper developer tools and console to communicate with your target device, the device needs to be provisioned. By provioning Esper devcie agent is installed on the device. 

See [Provisioning a device](/home/devconsole/device-provisioning/)

5. **Start Developing** 

As you being your Android application development on Android Studio, you can start using Esper APIs to deploy and test your application on your target device. Try the Esper CLI by downloading directly from GitHub and installing it on your system. Explore the Web-based Esper Dev Console and Esper Manage Dashboard on the Esper Cloud using your Esper Dev Console account, or access the Esper APIs using one of the method mentioned below

    - If you are calling the Esper APIs using `HTTP`, see the Esper [API Reference v1](https://api.esper.io)
    - If you are using the Python SDK in Android Studio to call the Esper APIs using the Esper SDK, see [Esper SDK](./pythonsdk.md)
    - Download the Command line tool, Esper CLI with full source code, to work the Esper APIs. Download the Esper CLI [here](./espercli.md)

## Quick links

Below are the quick links to the guide for specific actions on the Esper platform.

- [Getting started with Esper SDK](./pythonsdk.md)
- [Getting started with Esper CLI](./espercli.md)
