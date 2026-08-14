# Install

Quartz ships a full package and a standalone Key Viewer package for each loader. If you don't have a loader yet, use MelonLoader.

| Edition | MelonLoader | UnityModManager |
|---------|-------------|-----------------|
| Full Quartz | [`Quartz.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/Quartz.zip) | [`QuartzUmm.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/QuartzUmm.zip) |
| Key Viewer only | [`QuartzKeyViewer.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/QuartzKeyViewer.zip) | [`QuartzKeyViewerUmm.zip`](https://github.com/PrismMods/Quartz/releases/download/latest-alpha/QuartzKeyViewerUmm.zip) |

[Download the latest build :material-download:](https://github.com/PrismMods/Quartz/releases/tag/latest-alpha){ .md-button .md-button--primary }

!!! note
    Quartz is still in alpha, so every build is published as a pre-release. `latest-alpha` always points at the newest one, and the links on this page follow it — they never go stale.

## MelonLoader (recommended)

1. Download the [modlist.org app](https://github.com/modlist-org/modlist_org_app/releases/latest) and the MelonLoader package you want from the table above.
2. If MelonLoader isn't installed yet, install it through the modlist.org app.
3. Press **Install Mod From File** and select the zip you downloaded.
4. Done — start the game and open the menu. Full Quartz opens its regular menu; the standalone edition opens directly to Key Viewer.

!!! tip "macOS"
    There is an [auto installer](https://github.com/sbrothers7/UMMInstall/releases/latest) for Mac users. After installing, press **Copy Native Launch Options** in the modlist.org app's *Installed* tab and paste it into your Steam launch arguments.

### Manual install

1. Make sure MelonLoader is installed (see above).
2. Download `Quartz.zip` for full Quartz or `QuartzKeyViewer.zip` for the standalone Key Viewer, or pick a build from the [releases page](https://github.com/PrismMods/Quartz/releases).
3. Extract it into your A Dance of Fire and Ice folder.
4. Done — start the game and open the Quartz menu.

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in manually.

## UnityModManager

1. Make sure UnityModManager is set up for A Dance of Fire and Ice.
2. Download `QuartzUmm.zip` for full Quartz or `QuartzKeyViewerUmm.zip` for the standalone Key Viewer, or pick a build from the [releases page](https://github.com/PrismMods/Quartz/releases).
3. In the UMM installer, use **Install mod** and pick the zip — or extract its `Quartz` or `QuartzKeyViewer` folder into your UMM mods directory manually.
4. Open the in-game menu with the mod's keybind. Full Quartz settings live there, not in the UMM panel; the standalone edition opens directly to Key Viewer.

!!! note "Where your data lives"
    MelonLoader keeps full Quartz data in `UserData/Quartz/` and standalone data in `UserData/QuartzKeyViewer/`. UnityModManager keeps them in `Quartz/UserData/` and `QuartzKeyViewer/UserData/` inside its mods directory. The two editions do not share settings or updater files. Coming from an older full Quartz build, your existing UMM data moves into `Quartz/UserData/` by itself on the next launch; there is nothing to do by hand.

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in manually.

## Standalone Key Viewer

The standalone edition contains the Key Viewer and the overlay support it needs, opens to one focused page, and updates from its own package. It does not include the rest of Quartz or the Key Limiter. See [Key Viewer](features/key-viewer.md) for its controls.

!!! warning "Do not load both editions"
    Full Quartz already includes Key Viewer. If full Quartz and `QuartzKeyViewer` are both installed, full Quartz runs and the standalone edition stays off to prevent a duplicate menu. To use the standalone edition, remove or move aside the full Quartz mod and restart the game. To keep full Quartz, remove `QuartzKeyViewer` instead and restart.

## Updating

Download the newest package for the same edition and loader, then install it the same way you did the first time. If the game keeps loading the old version, restart Steam and confirm only one copy of that package is installed.

With full Quartz, your features come across untouched: the first launch after updating reads the settings you already have and installs the matching modules for you, using copies inside the download rather than the network. From then on you manage them yourself in the **Modules** tab, and every later update refreshes any module it carries a newer copy of — see [Modules](features/modules.md). The standalone edition keeps its fixed Key Viewer modules and follows the standalone updater package instead.

### Choosing which builds you get

Quartz publishes on four channels, and the picker at the top of **Updates** in **Settings** — just above **Check for Updates** — decides which one you follow. **Alpha** is where new builds land first; **Beta** and **Release Candidate** are quieter; **Stable** is final releases only. Each step up accepts fewer builds.

The updater then stays in the channel you chose. On **Alpha** you are offered the newest alpha rather than a beta of the same version, and a final release still replaces the prereleases it was built from. Changing the setting takes effect on the next check, so press **Check for Updates** to see what the new channel has for you.

### Restarting to apply it

An installed update only takes effect the next time the game starts. Once one finishes installing, a **Restart Game** button appears both on the notification in the corner and in **Settings**; it asks once — the button changes to **Restart now?** — and then closes the game and brings it straight back. Quartz saves your settings first, and returns through Steam if that is how you launched the game.

If it can't work out how to relaunch, it says so and leaves the game running, so you can close and reopen it yourself. Nothing is lost either way — the update is already on disk and applies on the next launch.

!!! note
    Quartz's in-app updater checks a downloaded update against its published checksum before installing, so a corrupted or interrupted download can't be applied. If it reports a verification failure, just try the update again.
