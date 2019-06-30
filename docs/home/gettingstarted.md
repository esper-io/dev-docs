# Getting Started
<div class="avg-reading-time">Average reading time : {{ $page.readingTime.text.replace(' read', '') }}s</div>


## Setup

1. **Esper Developer Trial** 

     The first step to start developing with Esper is to create a developer account. 
     Sign up for the Esper Developer trial using the [Signup](http://www.esper.io/signup) link.

     During the signup process you will set up your environment name. Once your environment is set you can login to your account on `{{ esper_env_name }}.shoonyacloud.com` where “{{ esper_env_name }}” is your chosen environment name giving you access to the Esper dev console. 
  
2. **Target Device**  
 
     Any Android device can act as a target device for your application. Esper tools enable developers to communicate with their target device so they can deploy and test the application on the actual device.  

     Esper will soon be launching Developer Kits and Virtual device emulators.  

     [DevKits](./devicekit.md)

     [DeviceEmulators](./emulator.md)

3. **Device template** 

     The next step in the development process is to create a Device Template where you define the initial profile for your device by specifying the configuration, apps to be loaded, and unique settings you wish to be applied. Once the template is created, a device is then provisioned using the Device Template settings.
     Please see the Instructions for [Creating a device template](./devconsole/device-template/index.md)

4. **Device Provisioning** 

     In order for the Esper developer tools and Esper Console to communicate with your target device, the device needs to be provisioned. During the provisioning stage, the Esper device agent is installed on the device. 
     Please see the Instructions for  [Provisioning a device](./devconsole/device-provisioning/index.md)

5. **Start Developing** 

     As you begin your application development on Android Studio, you can start using the Esper APIs to deploy and test applications on your target device. Try the Esper CLI by downloading it directly from GitHub and installing it on your system. Explore the Web-based Esper Dev Console and Esper Manage Dashboard on the Esper Cloud using your Dev Console account. Or, you can access the Esper APIs using one of the methods described below. 
     * If you are calling the Esper APIs using HTTP, see the Esper [ API Reference v1](https://api.esper.io) 
     * If you are using the Python SDK in Android Studio to call the Esper APIs, see [Esper SDK](./pythonsdk.md)
     * Download the Command line tool, Esper CLI, with full source code, to work the Esper APIs. You can go here to Download [Esper CLI](./espercli.md)

## Quick links

Below are the quick links to the guide for specific actions on the Esper platform.

- [Getting started with Esper SDK](./pythonsdk.md)
- [Getting started with Esper CLI](./espercli.md)
