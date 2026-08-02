# Install

Quartz ships two zips per release — pick the one that matches your loader. If you don't have a loader yet, use MelonLoader.

[Download the latest build :material-download:](https://github.com/PrismMods/Quartz/releases/tag/latest-alpha){ .md-button .md-button--primary }

!!! note
    Quartz is still in alpha, so every build is published as a pre-release. `latest-alpha` always points at the newest one, and the links on this page follow it — they never go stale.

## MelonLoader (recommended)

1. Download the [modlist.org app](https://github.com/modlist-org/modlist_org_app/releases/latest) and [`Quartz.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/Quartz.zip).
2. If MelonLoader isn't installed yet, install it through the modlist.org app.
3. Press **Install Mod From File** and select `Quartz.zip`.
4. Done — start the game and open the Quartz menu.

!!! tip "macOS"
    There is an [auto installer](https://github.com/sbrothers7/UMMInstall/releases/latest) for Mac users. After installing, press **Copy Native Launch Options** in the modlist.org app's *Installed* tab and paste it into your Steam launch arguments.

### Manual install

1. Make sure MelonLoader is installed (see above).
2. Download [`Quartz.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/Quartz.zip), or pick a build from the [releases page](https://github.com/PrismMods/Quartz/releases).
3. Extract it into your A Dance of Fire and Ice folder.
4. Done — start the game and open the Quartz menu.

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in manually.

## UnityModManager

1. Make sure UnityModManager is set up for A Dance of Fire and Ice.
2. Download [`QuartzUmm.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/QuartzUmm.zip), or pick a build from the [releases page](https://github.com/PrismMods/Quartz/releases).
3. In the UMM installer, use **Install mod** and pick `QuartzUmm.zip` — or extract the `Quartz` folder into your UMM mods directory manually.
4. Open the in-game menu with the mod's keybind. Settings live there, not in the UMM panel.

!!! note "Where your data lives"
    Settings, languages, fonts, presets, and downloaded levels are kept in `Quartz/UserData/`, so the mod folder itself holds only `QuartzUmm.dll` and `Info.json` — the two files an install or an update replaces. Coming from an older build, your existing data moves into `UserData/` by itself on the next launch; there is nothing to do by hand.

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in manually.

## Updating

Download the newest build and install it the same way you installed Quartz the first time. If the game keeps loading the old version, restart Steam and confirm only one Quartz package is installed.

Your features come across untouched: the first launch after updating reads the settings you already have and installs the matching modules for you, using copies inside the download rather than the network. From then on you manage them yourself in the **Modules** tab, and every later update refreshes any module it carries a newer copy of — see [Modules](features/modules.md).

### Choosing which builds you get

Quartz publishes on four channels, and the picker at the top of **Updates** in **Settings** — just above **Check for Updates** — decides which one you follow. **Alpha** is where new builds land first; **Beta** and **Release Candidate** are quieter; **Stable** is final releases only. Each step up accepts fewer builds.

The updater then stays in the channel you chose. On **Alpha** you are offered the newest alpha rather than a beta of the same version, and a final release still replaces the prereleases it was built from. Changing the setting takes effect on the next check, so press **Check for Updates** to see what the new channel has for you.

### Restarting to apply it

An installed update only takes effect the next time the game starts. Once one finishes installing, a **Restart Game** button appears both on the notification in the corner and in **Settings**; it asks once — the button changes to **Restart now?** — and then closes the game and brings it straight back. Quartz saves your settings first, and returns through Steam if that is how you launched the game.

If it can't work out how to relaunch, it says so and leaves the game running, so you can close and reopen it yourself. Nothing is lost either way — the update is already on disk and applies on the next launch.

!!! note
    Quartz's in-app updater checks a downloaded update against its published checksum before installing, so a corrupted or interrupted download can't be applied. If it reports a verification failure, just try the update again.
