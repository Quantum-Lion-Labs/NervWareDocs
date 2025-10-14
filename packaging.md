# Packaging your Mod
You are now ready to start packaging your Spawnable or level.

For Spawnables, you must make a prefab of your Spawnable. To do this, create a folder within your project called `Prefabs`. Next, drag your spawnable GameObject from the hierarchy into the `Prefabs` folder. This will create a prefab.

![prefab view](images/spawnable/00ba18ed-f1ea-46e8-a88d-b962b1570527.png)

Now that you have your prefab or scene asset, right click on it in the Asset Browser and choose `Create Mod Data`. A mod data scriptable object will be created. These mod data scriptable objects will always be created next to your mod asset. They contain information about your mod and store persistent data so that you can update your mod if needed.
 
![create mod data](images/spawnable/50b0f705-4380-474d-8c65-41135fc841cc.png)

Within this data you can fill out information about your mod for uploading. Under Mod Assets, you must assign a logo for your mod. Use the `Thumbnail Creator` button to open the Thumbnail Creator window. See the [thumbnail creator page](/thumbnail.md) for more information.

![mod data panel](images/spawnable/a299df09-1061-4515-a369-337aaf33890a.png)

Once you have your mod information setup, you can create the mod page by clicking `Create Mod Page`. This will create a mod page on Mod.IO which you can view by clicking the new `Open Mod Page in Browser` button. You'll now need to build your mod by clicking the `Build and Upload Mod Content` button. The time this takes can vary depending on the size of your mod. Spawnables should generally be smaller and quicker to build and upload, while levels can take longer, especially when compiling shaders. All uploaded mods will not be published by default. You will need to test your mod in-game before publishing. See the [mod testing page](/testing.md) for more details. The visibility of your mod can be seen at the top of your mod data or on Mod.IO. 

![mod controls](images/spawnable/e8cab12f-ce46-40d1-96b2-c6bef61718f5.png)

## Publishing your mod
After your mod has been packaged, given appropriate information, and uploaded, you can finally publish it on Mod.IO. To publish a mod, click the `Publish Mod` button. Your mod will now be public for everyone to enjoy! For future updates of your mod, you will need to re-build and re-upload, but the data can stay the same, and the mod will continue to be public.

![published mod](images/spawnable/60abb3ad-c82d-4922-a59b-ea7a118516a5.png)
