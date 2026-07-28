# Editor

Small quality-of-life additions to the level editor's tile selection and playback.

## Where to find it

Open the Quartz menu in-game and go to the **Editor** tab.

## Highlights

- **Selected Tile Readout** — shows a live readout on one of the selected tiles: total **angle** (in degrees), **beats** (angle ÷ 180), tile **count**, and **duration** in seconds.
    - **Prevent the last tile from being counted in timing calculation** matches the Tulttak mod's behavior, leaving the last selected tile out of the angle/beats/duration totals.
- **BGA Mod** — hides every tile and planet while the level plays, so only the background shows, for recording a background animation to composite gameplay over later. Only kicks in during play-test or actual gameplay; the editor's edit view is unaffected.
    - **Disable tile decorations** / **Disable planet decorations** additionally hide decorations attached to tiles or planets while BGA Mod is active. Background- and camera-anchored decorations stay visible either way.
- **Flip & Rotate Tiles** — when you flip or rotate the selected tiles, optionally carry their **Position Track** event coordinates along, so anything placed by those events moves with the tiles.
    - **Adjust Position Track when flipping** and **Adjust Position Track when rotating** turn this on for flips and rotations respectively.
    - **Use a custom rotation angle** rotates the selection by the **Rotation angle** you set instead of the default 90° (the 180° shortcut always stays 180°). Fractional angles like 22.5° are fine.
    - Shortcuts — flip horizontally (`Ctrl+L`), flip vertically (`Ctrl+Shift+L`), rotate counterclockwise (`Ctrl+,`), rotate clockwise (`Ctrl+.`), and rotate 180° (`Ctrl+/`).
- **Decoration Preview** — **Preview decoration images in the list** replaces the generic icon beside each entry in the editor's decoration list with the decoration's own image, scaled to fit and shown at full brightness, so you can tell entries apart without selecting them. Text and object entries keep their generic icon, as does a particle whose image can't be found.

!!! note "Credit"
    Decoration Preview is a port of [DecoPreview](https://github.com/rdzip/DecoPreview) by rdzip, licensed under the GNU GPL v3.

!!! note
    [Nostalgia](nostalgia.md) adds several more editor-specific toggles (legacy button positions/designs, old auto-play behavior, and more). They live on Nostalgia's own **Editor** page, reached from the **Nostalgia** sidebar tab — not this one.
