# Welcome to NervWare!

**The Official Modding SDK for NervBox.**

NervWare provides the tools necessary to easily create custom content for NervBox. Built on top of Unity 6, the NervWare SDK allows you to construct complex physics-based assets and environments that are [multiplayer](#multiplayer-by-default) and [streamable](#mod-streaming) out of the box.

### Physics-First Workflows
NervWare is designed to minimize boilerplate code. We believe modders should spend their time designing, not debugging interaction scripts.

Instead of writing complex code to handle collisions or grabbing mechanics, you focus on defining the **physical properties** of your objects. By configuring standard Unity components and NervWare-specific parameters — such as **colliders, mass, drag, material types, and grip points** — you can define exactly how an object behaves.

Once configured, the NervBox engine handles the underlying interaction logic. Your assets will react realistically to players, physics, and the environment right out of the box, without requiring custom scripts for basic functionality.

### Multiplayer by Default
NervBox is a multiplayer-native experience, and NervWare ensures your mods are too.

* **Networked Interactables:** Simply attaching the `NetworkedInteractable` component ensures your object’s position, rotation, and velocity are synchronized across all clients.
* **Shared Physics:** When you create a weapon or a prop, the physics interactions (recoil, impact, weight) are calculated and synced, ensuring a consistent experience for everyone in the lobby.

### Mod Streaming
NervBox removes the friction between creating a mod and playing it. With **Mod Streaming**, players can load community-made content directly into an active session — live, on the fly.

If a mod exists on the network, it can be spawned instantly into the game. This allows for a dynamic sandbox where the available library of tools and worlds is limited only by what the community has created.

### What Can You Build?
The SDK supports the creation of two primary content types:

* **Spawnables:** Create anything from simple props to complex weapons and gadgets. Utilize the `Generic Grip` system for procedural hand posing, and the `NB Impact` system to define how your object sounds and reacts when striking different materials.
* **Levels:** Build custom maps ranging from intimate arenas to sprawling cities. The SDK includes tools for defining the physical properties of surfaces, baking **Adaptive Probe Volumes** lighting, generating NavMeshes for NPC AI, and integrating Meta’s acoustic ray-tracing for immersive audio.

### Upcoming Features
Check out the [roadmap](/roadmap) for more information on upcoming features.

### Get Started
Ready to start building?

* [Installation](/installation) – Setup the SDK in Unity.
* [Creating a Spawnable](/spawnable) – Learn the physics-first workflow by building your first object.
* [Creating a Level](/level) – Design and bake a fully interactive world.