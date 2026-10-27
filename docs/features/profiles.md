# Profiles

Every setting you change lives in a profile. Keep one per situation — a streaming layout, a practice setup, a clean look for recording — and switch between them in a click, or hand one to a friend as a file.

## Where to find it

Open the Quartz menu in-game and pick **Profiles** from the sidebar.

## Managing profiles

The list shows every profile you have, with the active one highlighted by a tinted row.

- **Add Profile** — type a name into **Profile Name**, then add it. The new profile starts clean — only your language and the menu toggle key carry over — and switches to it straight away. If it can't be created, the page says so.
- **Select** — switch to another profile. The menu rebuilds around it.
- **Export** — save a profile as a `.qprofile` file you can back up or share.
- **Import** — load a `.qprofile` file (or a legacy `.krprofile`) as a new profile. It isn't selected automatically, so importing never disturbs what you're using. If the profile carries settings for a feature you have switched off, that feature is switched on for you, so nothing in it silently goes missing.
- **Delete** — remove a profile. It asks **Sure?** first, and the active profile can't be deleted.
- **Open Folder** — reveal the folder the profiles are stored in.

!!! tip "Export before a manual update"
    Updating the mod by hand can replace your `UserData` folder and take your settings with it. Export a profile first and import it back afterwards.

## Presets

Presets are ready-made profiles that ship with Quartz. **Apply** one to bring in its whole setup as a profile of its own.

| Preset | What it's set up for |
|--------|----------------------|
| **Refreshin** | A clean, pared-back look. |
| **JeulGemi** | Casual play: Auto Deafen, a compact judgement row with X-Perfect shown, a 16-key limiter, overlay panels, and a slim progress bar. |

A preset carries the look, not the author — applying one leaves your interface language alone.

## Moving a profile between monitors

Overlay positions are stored against the display they were placed on, so a profile built on one monitor can land off-target on another.

**Recalibrate Display** re-baselines every overlay to the monitor you're on now, keeping them exactly where they currently sit. From then on they scale proportionally if the profile is used on a different-sized display.

The Quartz menu size also travels with the profile. It is stored in proportion to the display, reloaded when you select a profile or apply a preset, and kept within the visible area when the resolution changes.
