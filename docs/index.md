# Quartz Documentation

Quartz is a mod for **A Dance of Fire and Ice** that puts gameplay overlays, editor tools, and visual tweaks in a single in-game menu.

Every feature is a module you install, remove, or switch off from inside the game, so you only carry what you use — see [Modules](features/modules.md).

The **Home** tab is where the menu opens. It counts your installed modules, how many are running, your addons, and any module updates waiting — and each of those cards is also the way in, so clicking one opens the page it counts. When a Quartz update is available it says so in a banner across the top, with a button straight to **Settings**. The **Credits** tab lists the team, the mods Quartz has ported or drawn from, the testers, and the people who have supported it.

<div class="grid cards" markdown>

- **[Install](install.md)** — get Quartz running with MelonLoader or UnityModManager.
- **[Troubleshooting](troubleshooting.md)** — fix the most common setup problems.
- **[Modules](features/modules.md)** — add, remove, and switch features on and off in-game.
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

## Language

Quartz's menu ships in English, Korean, and Simplified Chinese. On its first launch it matches the language you play the game in — a Korean game gets Korean menus, with no trip to the settings — and stays on English when it ships no translation for that language. Switch at any time from the **Language** dropdown on the **Settings** page — each option is listed by its native name (English, 한국어, 简体中文) — and once you pick one by hand, Quartz keeps it and stops matching the game. Chinese text stays readable even when the font you've picked only covers Korean or Latin, because Quartz falls back to the game's own CJK font for the characters your font is missing.

Translations keep themselves up to date. The languages bundled with your build load immediately, so the menu never waits on the network; in the background Quartz then checks the community translation repo, [Quartz-i18n](https://github.com/PrismMods/Quartz-i18n), and quietly folds in anything newer. A corrected Korean string reaches you without waiting for a Quartz release, and a language added to that repo shows up in the dropdown on its own. **Reload** forces the check immediately and re-applies the result.

!!! note
    If the check can't run — no connection, or GitHub unreachable — the bundled translations simply stay in place and nothing changes. The zips always carry a full set, so Quartz is fully usable offline.

!!! tip "Translating Quartz"
    Translations are community-maintained in [Quartz-i18n](https://github.com/PrismMods/Quartz-i18n) rather than in the mod repo, so improving a language — or adding a new one — doesn't mean waiting on a Quartz build.

## Links

- [Latest build](https://github.com/PrismMods/Quartz/releases/tag/latest-alpha)
- [All releases](https://github.com/PrismMods/Quartz/releases)
- [GitHub repository](https://github.com/PrismMods/Quartz)
- [Discord](https://discord.gg/mAzAghu5Xq)
