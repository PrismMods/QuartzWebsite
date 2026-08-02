# Countdown

Replaces the countdown you get when a run starts from a checkpoint or from a middle tile in the level editor. The game's own version gives you a handful of fast ticks and then drops you straight into the pattern; Countdown gives you a lead-in you can actually count yourself into, in one of two shapes.

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → Countdown** from the sidebar. Turn on **Enable Countdown** to use it — off, the game's own countdown is used.

**Countdown Mode** picks which of the two you get. Both have their own section below the dropdown, and only the one you selected is active.

## Haywire

Keeps the game's own countdown but slows it down. The speed of the lead-in tiles is multiplied by a power of two until the ticks land inside the range you set:

- **Minimum Countdown Tempo** and **Maximum Countdown Tempo** — the window the countdown is pulled into, from 100 to 1000 BPM. Pull one past the other and it drags the other along, so the range can never invert.

The music is never re-pitched. The audio seek is pulled back by however much the lead-in grew, so your first hit still falls on its real beat — the countdown gets longer without the song getting slower.

Only the ticks and the travel between tiles slow down. A pause, free roam or hold sitting on one of those tiles keeps the length the chart gives it, so starting from a paused tile waits exactly as long as it should and the music underneath stays where it belongs.

## Metronome

Freezes the planets on the next manual tile's Pure Perfect timing while a metronome loops, and resumes the run from that exact timestamp on your first input. Instead of counting a lead-in, you sit on the beat until you're ready and then go.

!!! note
    Metronome mode runs during level-editor play-tests only. Haywire is the mode that applies everywhere.

- **Show the metronome panel** — puts a small panel at the bottom of the screen while the start is frozen, so you can change tempo and meter without leaving the play-test. What you set there is saved back into these settings.
- **Show the metronome icon** — draws a metronome in the middle of the screen that swings with every click.
- **Animate the planets while frozen** — loops the planet's approach to the next tile in time with the clicks, so the landing point stays readable. Turn it off to leave the planets perfectly still.
- **Use a fixed metronome tempo** — off, the metronome follows the level's own countdown tempo, doubled or halved until it lands between 200 and 500 BPM. On, it always clicks at **Metronome Tempo**.
- **Metronome Tempo** — the fixed tempo, from 20 to 999 BPM. Dragging it turns **Use a fixed metronome tempo** on for you.
- **Beats per Bar** and **Note Value** — the meter the metronome accents, each from 1 to 16.
- **Metronome Volume** — how loud the clicks are, from 0% to 100%.

### The in-play panel

With **Show the metronome panel** on, the frozen start gets a **Metronome** panel you can work in without leaving the play-test:

- **BPM** — type a tempo, or halve and double it with the **÷2**, **×2**, **÷3** and **×3** buttons.
- **Meter** — step the two halves of the meter up and down.
- **Use game countdown** — restarts the play-test right there with the game's own countdown, for the rest of the editor session. Your **Enable Countdown** setting is left alone, so the next session starts with the metronome again.

Tempo and meter changes made here are written back into the settings page.

## Credits

Metronome mode is a port of [Enhanced Countdown](https://github.com/KGH1113/enhanced-countdown) by **IMPL** (**KGH1113**), shipped with their permission.
