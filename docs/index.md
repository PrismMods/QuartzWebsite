# Quartz Documentation

Quartz is a mod for **A Dance of Fire and Ice** that puts gameplay overlays, editor tools, and visual tweaks in a single in-game menu.

Every feature is built in — there is nothing extra to download. You choose what runs from the **Features** tab, and a feature you switch off is fully unloaded — see [Features tab](features/features-tab.md).

The menu key (default ++alt+k++) opens the [Reorganize](features/reorganize.md) hub, where you drag overlays into place; press **Settings** there to open the menu itself. Categories sit in an icon sidebar on the left that expands when you hover it, and each category's pages are tabs under the top bar.

The **Home** tab is where the menu opens. It shows how many features are on and how many addons you have, and each of those is also the way in, so clicking one opens the page it counts. When a Quartz update is available it says so in a banner across the top, with a button straight to **Settings**. The **Credits** tab lists the team, the mods Quartz has ported or drawn from, the testers, and the people who have supported it.

<div class="grid cards" markdown>

- **[Install](install.md)** — get Quartz running with MelonLoader or UnityModManager.
- **[Troubleshooting](troubleshooting.md)** — fix the most common setup problems.
- **[Features tab](features/features-tab.md)** — switch built-in features on and off in-game.
- **[Features](features/index.md)** — what Quartz can do, one page per feature.

</div>

## Game versions

One Quartz build runs on both the current **A Dance of Fire and Ice** 3.x releases and the older **2.9.8**. There is no separate download — install the same zip either way, and Quartz works out which version it is running on at launch. A handful of things the older version simply doesn't have (its results screen and planet system differ) switch themselves off there; everything else behaves the same.

## Choosing a loader

Every release ships full Quartz and a focused standalone Key Viewer for both loaders:

| Package | Loader | When to pick it |
|---------|--------|-----------------|
| `Quartz.zip` | [MelonLoader](https://melonwiki.xyz/) | **Recommended** for most players. |
| `QuartzUmm.zip` | [UnityModManager](https://www.nexusmods.com/site/mods/21) | Only if your ADOFAI setup already runs UMM. |
| `QuartzKeyViewer.zip` | MelonLoader | When you want the Key Viewer without the rest of Quartz. |
| `QuartzKeyViewerUmm.zip` | UnityModManager | The same focused Key Viewer for an existing UMM setup. |

The two full packages expose the same Quartz menu and settings. The standalone packages open directly to one Key Viewer page and keep their files separate from full Quartz. Install one or the other, not both.

!!! note
    The UMM build does **not** use UMM's IMGUI settings panel — settings live in Quartz's own menu, opened with the mod's keybind.

## Settings

Menu-wide options live on the **Settings** page, separate from the individual feature tabs.

- **Block game inputs while menu is open** — on by default. While the Quartz menu is up, the game underneath ignores input entirely, so you can't accidentally restart, pause, or land hits on the level behind the panel. Autoplay is exempt, so a run left playing behind the menu keeps going.
- **Wide color picker** — lays color controls out side by side instead of stacking them, which keeps the popup usable on shorter windows. Color settings open in a responsive popup with direct hex and channel controls either way.

The menu shortcut pauses while a text field is focused, so typing a bound key cannot close the menu underneath you.

### Per-setting hotkeys

Any toggle in the menu can have a key of its own. Right-click its row, press the key you want, and it's bound; press ++esc++ or ++backspace++ while binding to unbind it again. The current binding shows at the right of the row.

A bound toggle can be flipped without opening the menu at all — including mid-run — so things you switch often, like an overlay or a restriction, are one keypress away.

## Starting over

The **Reset** card on **Home** has two buttons. **Reset All Settings** puts every setting back to the defaults of a fresh install. **Clean** does the same and also empties your key layouts, panels and key lists, for when you want to build a setup from nothing. Your feature switches, addons and other profiles stay as they are. Each button asks once — it changes to **Click again to confirm** — and then applies straight away; the card suggests restarting the game afterwards so everything picks up the change.

## Turning Quartz off

The power button at the bottom of the sidebar switches all of Quartz off and on in one press. While it's off, nothing Quartz does stays active in the game, and every page sits under a **Quartz is inactive** cover with a **Turn On** button, so settings can't be changed by accident.

## Language

Quartz's menu ships in English, Korean, and Simplified Chinese. On its first launch it matches the language you play the game in — a Korean game gets Korean menus, with no trip to the settings — and stays on English when it ships no translation for that language. Switch at any time from the **Language** dropdown on the **Settings** page — each option is listed by its native name (English, 한국어, 简体中文) — and once you pick one by hand, Quartz keeps it and stops matching the game. Chinese text stays readable even when the font you've picked only covers Korean or Latin, because Quartz falls back to its bundled Noto Sans SC for the characters your font is missing — see [Fonts](features/in-game-overlay.md).

Translations ship with each build, so the menu is fully usable offline and never waits on the network. **Reload** next to the dropdown reads the language files again from disk.

!!! tip "Translating Quartz"
    Translations are community-maintained in [Quartz-i18n](https://github.com/PrismMods/Quartz-i18n). Improvements made there reach you with the next Quartz build.

## Links

- [Latest build](https://github.com/PrismMods/Quartz/releases/tag/latest-stable)
- [All releases](https://github.com/PrismMods/Quartz/releases)
- [GitHub repository](https://github.com/PrismMods/Quartz)
- [Discord](https://discord.gg/mAzAghu5Xq)
