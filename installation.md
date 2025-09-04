# Installation Guide

## Quickstart

* Install Unity **6000.2.0f1** + Android & Windows (IL2CPP) modules.
```
unityhub://6000.2.0f1
```
* Create a URP project. 
* Install the NervWare package via git URL. You must have **Git** installed.
```
https://github.com/Quantum-Lion-Labs/NervWare.git
```
* Log in via the Welcome Panel and Inject Project Settings (NervWare > Welcome).
* Create!

## Installing Unity

::: tip Prerequisite
You will need Git for the Unity package manager to function properly. You can download Git [here](https://git-scm.com/downloads/). Default installation settings are fine. Some systems may have this pre-installed. Restart your computer after installing Git.
:::

### You will need Unity Hub and Unity version 6000.2.0f1.

1. Install Unity Hub. You can download Unity Hub [here](https://unity.com/download).

2. Once Unity Hub is installed, open the installer for the correct editor version by pasting `unityhub://6000.2.0f1` into your browser, or by visiting Unity's [download archive](https://unity.com/releases/editor/archive).
```
unityhub://6000.2.0f1
```

3. **Make sure to include the required `Android Build Support` and `Windows Build Support (IL2CPP)` modules**. Everything else can be left unchecked.

![platforms](images/installation/802db1de-b487-418c-8b97-5c7aa609f187-1.png)

![platforms-win](images/installation/03aaa654-b994-4454-a2c2-d234e709f95c.png)

4. Press Continue to install Unity with the required modules.

![continue](images/installation/56901fd3-ea36-487f-bd82-3d215dd05f27.png)


## Making the SDK Unity Project
Once Unity has finished installing, you can make your SDK project. In the `Projects` section of the Unity Hub, choose `New Project`

You can name the project whatever you'd like. You can also store the project wherever you like. The only requirements here are that you choose `Universal 3D Core` as your template project, and that the `Editor Version` is `6000.2.0f1`. This will ensure the render pipeline is setup correctly. Press `Create project` to continue.

![create project window](images/installation/f6c297bc-8dfe-46d8-87a6-971abda42203.png)

After a small wait you should be presented with the Unity Editor. Now it is time to install the SDK.

## Adding the SDK Package

To add the SDK, go to Window > Package Manager to open the Package Manager. Click the `+` drop-down and choose `Install package from git URL...`. In that field, paste in the git URL of this repository:
```
https://github.com/Quantum-Lion-Labs/NervWare.git
```
![package manager](images/installation/524ae4ec-b7d4-4439-8f64-af554d059848.png)

Click `Install`. The SDK will now install. This may take a moment. A `Project Settings` window may open. You can safely close this. You will now have the **latest** version of the NervWare SDK.

## Logging in to Mod.IO
After installing the SDK package, you now need to log-in. NervBox mods are hosted on Mod.IO. An account is required to do so. Luckily this is easy to do through the welcome panel.

To log in:

From the welcome panel (if it is not visible go to the menu bar, choose NervWare > Welcome) enter the email that you wish to use for Mod.IO and click `Request Auth Code`. A code will be sent to your email, which you can then paste into the field to login. You will then be signed into the NervWare SDK.

![welcome panel](images/installation/1ff60c10-c63c-4124-9356-39df0d9c37b3.png)

## Project Settings Injection
Following log-in, the SDK needs to have some settings adjusted to match NervBox's. Open up the welcome panel again. Then click the `Inject` button next to `Project Settings Not Injected` to validate the project settings. This may take a moment.

![project settings](images/installation/9cce8ff3-adab-4ae0-bf6c-4b0decd77175.png)

Upon completion you will see a pop-up letting you know it validated successfully!

![validation](images/installation/768d0d49-5258-4afe-899d-0b099f5460d8.png)

**You now need to restart your project to fully initialize the SDK. A prompt will appear allowing you to automatically do so.**

If you ever change a setting, and your mods are no longer behaving how you expect them to, you can always re-inject the project settings using the same button.

## What's Next
Congrats! You have now installed the NervWare SDK. You can now begin [creating your first spawnable.](/spawnable.md)

## FOR FUTURE SDK UPDATES - Updating the SDK
If your SDK is out of date, you can update it through the Unity Package Manager.

Go to Window > Package Manager. Select the `In Project Category`

![package manager update](images/installation/55f62a4f-07e5-4e3e-9f50-3acecd030b83.png)

There will be a Quantum Lion Labs sub-category. Click the `Update` button to check for SDK updates and update your project.

![update](images/installation/16ada3b4-4548-4858-8082-a3fc2e694c4c.png)