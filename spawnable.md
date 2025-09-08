---
next:
  text: 'Packaging your Mod'
  link: '/packaging'
---
# Creating your first spawnable

## Setting up a synced object
Acquire or make a model. Typically models used in NervBox are under 20k triangles. In this example we'll be making a crowbar.

![crowbar](images/spawnable/a31371b9-902b-42b1-93f6-41f451ddb97d.png)

Create an empty GameObject, and name it whatever you want your spawnable name to be. This will be your spawnable root. Drag your model in as a child of this GameObject. This is done to allow you to scale your art without having to scale the root of the spawnable.

![root](images/spawnable/0f772529-315a-43fd-bf55-2880a0b88346.png)

Beneath your spawnable root, create a new GameObject. Name it `Colliders`. Beneath this GameObject, create and add colliders for your model. We recommend using primitive colliders whenever possible, and avoiding mesh colliders with too many tris. The hierarchy of the individual colliders can be setup however you like.

![col-graph](images/spawnable/2a93bad2-565b-4489-a51a-aae5e307300d.png)

![crowbar-col](images/spawnable/23190912-3af9-4b04-be3c-17a652ffa602.png)

Now that you have your model setup with colliders, it is time to add a rigidbody to make it have physical. Click on your spawnable root, then in the inspector choose Add Component -> Rigidbody. A rigidbody component will be added. Now you need to set the mass of your object in kilograms. In NervBox we typically use real-world masses for our spawnables, so it is a good practice to reference the real world version of your spawnable. Leave Interpolate to None and Collision Detection to Discrete unless you find that your spawnable is falling through the world in-game.

![rigidbody](images/spawnable/90a3fd87-afb0-4e78-a963-af6f2ee5ced4.png)

You now have a physics object, but it still needs to be synced over the network. To do this, add a Networked Interactable component to the spawnable root. If there are any child rigidbodies, add a Networked Interactable to each of those as well. Your object won't work properly without this!

![networked interactable](images/spawnable/image.png)

## Grips
For this simple prop, we'll use a `Generic Grip`. A `Generic Grip` can be grabbed from any location, at any orientation. Generic grips use procedural hand poses. For more information about `Generic Grips` or other grips, see the [grips page](/grips).

To use a `Generic Grip`, add the component to either your Spawnable Root or specific colliders that you wish to be grabbable. In this example we'll add a generic grip to the handle of the crowbar.

![generic grip](images/spawnable/image-1.png)

## NBImpact 
For your object to have impact sounds, take bullet hits, and be able to be stabbed, it needs to be tagged with NervBox's material system. To do this, add a NB Impact component to your spawnable root. See the [impact properties page](/impact_painter.md) for more information.

![nb impact](images/spawnable/image-2.png)

You are now ready to package your mod. See [packaging your mod](/packaging.md) for the next steps, or check out the Component Reference to make your mod more advanced.