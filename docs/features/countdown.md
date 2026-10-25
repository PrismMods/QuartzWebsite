# Countdown

Slows down the countdown you get when a run starts from a checkpoint or from a middle tile in the level editor. The game's own version gives you a handful of fast ticks and then drops you straight into the pattern; Countdown stretches that lead-in into something you can actually count yourself into.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Countdown** from the sidebar. Turn on **Use this feature** at the top of the page to use it — off, the game's own countdown is used.

## How it works

The speed of the lead-in tiles is multiplied by a power of two until the ticks land inside the range you set:

- **Minimum Countdown Tempo** and **Maximum Countdown Tempo** — the window the countdown is pulled into, from 100 to 1000 BPM. Pull one past the other and it drags the other along, so the range can never invert.

The music is never re-pitched. The audio seek is pulled back by however much the lead-in grew, so your first hit still falls on its real beat — the countdown gets longer without the song getting slower.

Only the ticks and the travel between tiles slow down. A pause, free roam or hold sitting on one of those tiles keeps the length the chart gives it, so starting from a paused tile waits exactly as long as it should and the music underneath stays where it belongs.

!!! note
    While a TUFReplay replay is playing back, the game's own countdown is used.
