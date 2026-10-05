# Auto Deafen

Automatically deafens you on Discord once a run passes a percentage you choose, and undeafens the moment you die, finish, or leave the run — handy for not hearing your voice chat blast through a recording, without remembering to toggle it yourself.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Auto Deafen (Discord)** from the sidebar.

## Highlights

- **Deafen At %** — how far into the run to trigger the deafen.
- **Only When Starting From 0%** — skip deafening on checkpoint restarts, only arming on a fresh run.
- **Don't Deafen While Auto Is On** — skip deafening while the game's auto-play is running, so watching a bot clear doesn't mute your call. On by default.
- Three ways to actually flip the Discord toggle, picked with **Mode**:
    - **Shortcut** (Windows only) — taps your own Discord "Toggle Deafen" keybind directly. Tick whichever of **Keybind Ctrl**, **Keybind Shift**, **Keybind Alt**, and **Keybind Win** apply, and set **Discord Key** to match whatever you've bound in Discord's settings.
    - **Bot** — connects through your own Discord application instead of a keybind. Paste its **Discord Client ID**, then **Authorize (Open Discord)** to link your account; **Unlink** to disconnect.
    - **Discord Login** — uses the account you're logged into in Quartz's [Discord](discord.md) page, with no keybind or application to set up. It only works while you're in voice through that page, not through the Discord app.

!!! warning "Shortcut mode is Windows-only"
    On macOS and Linux, **Shortcut** isn't offered — pick **Bot** or **Discord Login**.
