# Esper Emulator

 Virtual devices are powerful when you want to test features and rapidly deploy new things without worrying about breaking your hardware device. For a little bargain on the performance front you get a very capable and streamlined medium that can hugely boost your workflow.

Esper developer platform provides you customized Emulator images based on x64 platform that allows you to get on board on the esper platform with zero hassles. You can register your emulator serial number or IMEI number on to the template of your choice to which you want to onboard your device and re-start the simulator. On boot emulator device will get enrolled to your platform automatically and you can start accessing and take actions using the esper cloud dashboard.

In this guide we will help you with creating your own Esper emulated device.

## Pre-requisites

Before you start with this guide, make sure you have the following things in place:

- You should have Android Studio and Android SDK installed. The emulator functionality depends on the Android SDK and it is important for it to be in place. Download [Android Studio from here](https://developer.android.com/studio#downloads) if you haven't already.
- You should have Java JDK 1.8 installed. The SDK tools require a specific version of Java and and our installer script requires the same. Make sure you have set Java 8 as the default environment. You can execute ```java -version``` to check which version you are currently on.
- The installed script requires Python 3 installed. You can [download it from here](https://www.python.org/downloads/).
- We also require an additional python library to help us download the emulator images hassle free. We will get more in to that in the next section.
- Currently only Windows and MacOSX are supported platforms. The script probably wouldn't work on Linux.

## Getting started with the installation script

We provide you with a handy script that downloads all the right components and installs the AVD for you with minimum effort from your side. You can just run the script and let it do all the work for you.

### Downloading the script

You can download [the script from here](https://downloads.esper.cloud/avd_creator.zip). Just unzip the file somewhere and start a terminal or command prompt at the extracted folder location.

Before you run the script please install the python ```requests``` library. You can do it by issuing the following command windows OR:

```pip3 install requests```

Or on a Mac run the following on your terminal:

```sudo pip3 install requests```

### Running the script

With the script in place you can simply execute it. You can start a terminal on mac (or command prompt/powershell on Windows) and issue the following command:

```python3 avd_creator.py```

This will take some time as the script downloads th required files and sets up the Esper AVD.

## Testing the AVD

Once the script has successfully executed you need to start the emulator. You can do it from Android Studio. Within Android Studio Menu choose Tools > AVDManager. You can see the esper AVD. Simply click on the green run button under the actions column and this should launch yor AVD.

Optionally if you are facing an issue or do not want to run android studio to launch the AVD, head to the sdk tools directory. And execute the following.

```bash
cd ~/Library/Android/sdk/tools
./emulator @esper
```

On Windows you can do the same from your command prompt.

```cmd
cd %LOCALAPPDATA%\Android\Sdk\tools
emulator.exe @esper
```
