# Reorganize

Reorganize mode is where you place Quartz's overlays on screen: drag them, resize and rotate them, and pin them to a corner or edge so they stay put on any resolution.

## Where to find it

Press the menu key (default ++alt+k++). Instead of the settings window, it opens the reorganize hub: the game dims, every overlay becomes movable, and the middle of the screen offers two buttons.

| Button | What it does |
|--------|--------------|
| **Settings** | Opens the settings window on top of the hub. Its close button takes you back to the hub, not out of Quartz. |
| **Close** | Leaves reorganize mode and closes Quartz. |

++esc++ steps back one level at a time: first it deselects the overlay you picked, then it closes the settings window if it's open, and finally it closes the hub. The menu key itself can be changed with **Toggle Menu Keybind** on the **Settings** page.

## Moving overlays

- **Finding them** — every movable overlay shows a faint box with its name tag above it, so you can spot overlays that are empty or hidden right now.
- **Select and drag** — click an overlay to select it, then drag it anywhere. It snaps to the edges and centre of the screen and to other overlays as you move; hold ++alt++ while dragging to place it freely. Click empty screen to deselect.
- **Resize** — drag any corner grip of the selected overlay.
- **Rotate** — drag the knob above the selected overlay's outline.
- **Stacked overlays** — when overlays overlap, the selected one keeps the drag even if another sits on top of it. Click again without dragging to move the selection one layer down, so a covered overlay can always be reached.

The selected overlay also gets a small panel with its name and **X Position**, **Y Position**, **Size**, and **Rotation** sliders for exact values. Drag the panel by its background to move it out of the way; it reopens where you left it.

Everything Quartz draws on screen joins in: the Key Viewer (and its foot keys and tabub picture), Combo, Judgement, Progress Bar, Song Title, Panels, the Practice Difficulty readout, and a stand-in for the Calibration popup.

## Anchors

Each overlay is pinned to one of nine anchor points — the corners, the middle of each edge, or the centre — and keeps its distance from that point when the screen size changes. While an overlay is selected, a line joins it to its anchor so you can see which one it uses.

The **Anchor** dropdown on the Combo, Judgement, Progress Bar, Song Title and Panels pages picks the anchor. Its first option, **Closest**, is the default: the overlay re-anchors to the nearest of the nine as you move it, so an overlay dragged into the top-right corner is pinned to **Top Right** without you choosing it. Pick any other option to pin it there for good.

## Undo and redo

++ctrl+z++ undoes a move, resize, or rotation; ++ctrl+shift+z++ or ++ctrl+y++ redoes it. Reorganize and the [Key Viewer](key-viewer.md) layout editor share one history, so the shortcuts step back through both in the order you made the changes.

!!! tip
    Lost an overlay off screen? Its page has a **Reset Position** button (**Reset Popup Position** for Calibration) that puts it back.
