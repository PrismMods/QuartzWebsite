# Modules

Every Quartz feature ships as its own module — a separate file you install, remove, switch on, or switch off from inside the game. A fresh install is the menu and little else; you add what you actually want, and a feature you remove leaves nothing behind, not even its sidebar tab.

## Where to find it

Open the Quartz menu in-game and select **Modules** from the sidebar. Its first page is **All Modules**; each sidebar tab that owns modules gets its own page under it.

## All Modules

The landing page shows how many modules are installed, how many are running, and where the module catalog came from, followed by three buttons:

| Button | What it does |
|--------|--------------|
| **Refresh** | Re-downloads the module catalog. |
| **Reload Modules** | Unloads everything, re-scans the module folder, and rebuilds the menu. |
| **Open Folder** | Opens the module folder in your file browser. |

Below that, **Tabs** lists every sidebar tab that can hold modules — **Overlay**, **Gameplay**, **Visuals**, **Tweaks**, **Editor**, **Nostalgia** and **TUF**. Each row has a switch that hides or shows that whole tab, an expandable list of the modules themselves, and up to two buttons: **Install All** whenever the tab still has something to offer, and **Remove** whenever it holds something already installed.

!!! note "Hiding a tab is not the same as removing it"
    The switch only controls whether the tab appears in the sidebar — the modules keep running. Use **Remove** to actually uninstall.

## Managing a single module

Each module row has a switch and a **Remove** button beside it.

- **The switch** loads or unloads the module immediately. Its patches stop and its pages disappear from the sidebar the moment you turn it off, and come back when you turn it on.
- **Remove** deletes the module's files. It asks once — the button changes to **Sure?** — before anything is deleted. Your settings for that feature are kept, so re-installing restores them exactly.

## Installing

Modules listed under **Get more features** install with one click. Two kinds appear there:

- **Included with Quartz** — the copy that shipped inside your download. These install instantly with no connection at all, which is how you get a removed module back.
- **Catalog modules** — fetched from the latest release. Press **Refresh** first if you have been offline.

Anything a module depends on is installed with it, in the right order.

To set up a whole tab at once, press **Install All** on its row under **Tabs**. The bundled modules go in immediately, then everything left downloads as a single job with one progress readout — so you get one install to wait on rather than one per module.

!!! warning "Restart to pick up an updated module"
    A module's code is only read from disk once per session. **Reload Modules** re-runs what is already loaded — after replacing a `.qmod` file, restart the game.

## Upgrading from an older Quartz

Nothing is lost. The first time this version runs it reads the settings you already have and installs exactly the modules for the features you had switched on, copying them out of your download — so it works with no connection.

## Addons

Third-party addons live in this tab too, below the module tabs. See [Addons](addons.md).
