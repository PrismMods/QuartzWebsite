# Troubleshooting

## Quartz does not appear

- Confirm the zip matches your loader: `Quartz.zip` for MelonLoader, `QuartzUmm.zip` for UnityModManager.
- Confirm the loader itself is installed for A Dance of Fire and Ice.
- Restart the game after installing Quartz.

## The game starts but settings are missing

Open the in-game Quartz menu with the mod's keybind (default: `ALT + K`). For UMM installs, Quartz settings live in the Quartz menu rather than inside the UMM panel.

## A setting resets or goes missing after a restart

If a saved value cannot be read back — a keybind, a collapsed section, a profile's name, a stored key count — Quartz drops that one entry and keeps the rest of the file. It records what it dropped in your loader's log, so the log will name the setting rather than leaving you guessing. MelonLoader keeps its log at `MelonLoader/Latest.log` beside the game.

If the same setting keeps resetting, the log line is the thing to include when you report it.

## The game keeps loading an old version

Restart Steam and confirm only one Quartz package is installed. Remove any leftover `Koren.dll` from older installs — Quartz migrates old Koren data automatically, but the old DLL itself should not stay loaded.

## A fix shipped but the feature still behaves the old way

Compare the module's version, shown on its row under **Modules → All Modules**, with the Quartz version on **Home**. Builds up to `v2.0.0-alpha-102` wrote a module into your install only once, so a module could sit several builds behind the mod around it and never receive a fix that shipped inside it.

`v2.0.0-alpha-103` and newer refresh your modules whenever Quartz updates. The repair lives in the mod rather than in the modules, though, so an install that is already behind catches up on the update *after* the one that brings it in. To fix a single module right away, press **Update** on its row, or **Remove** it and install it again.

## The in-app updater never offers a new build

Start with the channel picker at the top of **Updates** in **Settings**. The updater only offers builds from the channel you picked and the stabler ones above it, so a **Stable** setting stays quiet for as long as only prereleases are being published.

Builds up to `v2.0.0-alpha-98` also had a bug here: picking **Alpha** could still install `v2.0.0-beta-1`, and once that was on disk nothing newer was ever offered. To get out, set the channel to **Beta** and update once — `v2.0.0-beta-2` carries the fix — then set it back to **Alpha**. Installing the newest build by hand from the releases page works just as well.

## The in-app updater reports a verification failure

Quartz checks a downloaded update's checksum before installing it, so a corrupted or interrupted download won't be applied. Just try updating again; if it keeps failing, download the release manually from the releases page below and install it the normal way.

## A download link is blocked

Use the latest build's page directly:

```text
https://github.com/PrismMods/Quartz/releases/tag/latest-alpha
```

## A level refuses to load because it requires mods

A Dance of Fire and Ice blocks any level that lists required mods, whether or not you actually have them. With Quartz installed, a level like this loads as long as every mod it lists is present; the block only remains when one of them is genuinely missing, and the level's error still names what it needs.

## Getting a more detailed log

Quartz suppresses errors it can safely recover from, so they stay out of your log by default. To record them anyway, set `QUARTZ_DIAG=1` in the environment the game launches from, then reproduce the problem:

```text
QUARTZ_DIAG=1
```

!!! tip

    Turn it on only while chasing a problem. It makes the log noisier, and every line it adds is something Quartz already handled.

## Still stuck?

Ask in the [Discord](https://discord.gg/mAzAghu5Xq) or open an issue on [GitHub](https://github.com/PrismMods/Quartz/issues). A log captured with `QUARTZ_DIAG=1` set is the most useful thing you can attach.
