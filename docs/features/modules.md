# Modules

Every Quartz feature ships as its own module — a separate file you install, remove, switch on, or switch off from inside the game. A fresh install is the menu and little else; you add what you actually want, and a feature you remove leaves nothing behind, not even its sidebar tab.

## Where to find it

Open the Quartz menu in-game and select **Modules** from the sidebar. Its first page is **All Modules**; each sidebar tab that owns modules gets its own page under it.

## All Modules

The landing page opens with a line summarising how many modules are installed, how many are running, where the module catalog came from, and how many have an update waiting. Under it are three buttons:

| Button | What it does |
|--------|--------------|
| **Refresh** | Re-downloads the module catalog. |
| **Reload Modules** | Unloads everything, re-scans the module folder, and rebuilds the menu. |
| **Open Folder** | Opens the module folder in your file browser. |

### Finding a module

The **Filter modules** box sits above the list. Type into it and the list narrows to matching modules, with only the sections that contain a match left open — everything else folds away until you clear the box. It searches names, internal ids, and the short descriptions of modules you have not installed yet.

!!! tip "Chosung search"
    With the menu in Korean you can type initial consonants instead of whole words — ㅋㅂㅇ finds 키뷰어.

### Tabs

**Tabs** lists every sidebar tab that can hold modules — **Overlay**, **Gameplay**, **Visuals**, **Tweaks**, **Editor**, **Nostalgia** and **TUF**. Each is a section you can fold open or shut, with a switch that hides or shows that whole tab in the sidebar and a count of how many of its modules you have installed out of how many exist.

Open a section and you get its **Install All** and **Remove All** buttons, then every module in that tab: the ones you have installed first, then the ones you could add.

!!! note "Hiding a tab is not the same as removing it"
    The switch only controls whether the tab appears in the sidebar — the modules keep running. Use **Remove** to actually uninstall.

Each tab also has its own page under **Modules** in the sidebar, showing the same modules on their own with anything you can add gathered under **Get more features**.

## Managing a single module

Each installed module shows its name and version, with a switch and a **Remove** button beside it.

- **The switch** loads or unloads the module immediately. Its patches stop and its pages disappear from the sidebar the moment you turn it off, and come back when you turn it on.
- **Remove** deletes the module's files. It asks once — the button changes to **Sure?** — before anything is deleted. Your settings for that feature are kept, so re-installing restores them exactly. Move the pointer away and it goes back to **Remove** without doing anything.

## Installing

Modules you don't have yet install with one click. Two kinds appear:

- **Included with Quartz** — the copy that shipped inside your download. These install instantly with no connection at all, which is how you get a removed module back.
- **Catalog modules** — fetched from the latest release, listed with their size and anything they'll pull in alongside. Press **Refresh** first if you have been offline.

Anything a module depends on is installed with it, in the right order.

To set up a whole tab at once, press **Install All** in its section. The bundled modules go in immediately, then everything left downloads as a single job with one progress bar — so you get one install to wait on rather than one per module.

## Updating a module

When the catalog has a newer build of something you have installed, an **Update** button appears on that module's row and the row notes which version is available. Press it and Quartz downloads the new copy in place, keeping your settings.

Quartz counts these for you: the summary at the top of **All Modules** says how many are waiting, and an **Updates available** card appears on the **Home** page.

When more than one module on a page has an update waiting, an **Update All** button appears next to **Install All** and takes them all in one download rather than one press each. It stays hidden the rest of the time, so it never sits there duplicating a single module's own **Update** button.

!!! warning "Restart to finish an update"
    A module's code is only read from disk once per session, so a freshly updated module keeps running the old copy until you restart — the row says **Updated — restart the game to apply.** until you do. This applies to replacing a `.qmod` file by hand too; **Reload Modules** only re-runs what is already loaded.

### When Quartz itself updates

Installing a new build of Quartz brings your modules along with it. Anything the download carries a newer copy of is rewritten in place, so a fix that shipped inside a module reaches you without a trip to **All Modules**. A module you took from the catalog that is already ahead of the bundled copy is left where it is, and one you never installed is not pulled in.

## Upgrading from an older Quartz

Nothing is lost. The first time this version runs it reads the settings you already have and installs exactly the modules for the features you had switched on, copying them out of your download — so it works with no connection.

The same applies when a module is later split in two: the new half is installed for you automatically, from your download, with the setting it inherits already in place. You never lose a feature because it moved.

## Addons

Third-party addons live in this tab too, below the module tabs. See [Addons](addons.md).
