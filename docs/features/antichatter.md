# AntiChatter

Filters keyboard chatter — the double input a worn or bouncy switch produces — so a single physical press can't register as two hits. It works where the game reads input, for both the regular keyboard reading and the independent input hook, and it can also stop a held key from briefly letting go in the middle of a hold. AntiChatter is a port of copecone's AntiChatter (MIT).

## Where to find it

Open the Quartz menu in-game and pick **Gameplay → AntiChatter** from the sidebar. It has its own entry in the [Features tab](features-tab.md).

## Settings

- **Threshold (ms)** — a second press of the same key that arrives within this many milliseconds of the last counted press is dropped. The default is 35 ms; 0 turns the filter off.
- **Hold Bounce Protection** — on by default. When a held key bounces open and closed again inside the threshold, AntiChatter keeps the hold going instead of ending it and starting a new hit. Genuine releases near the end of a hold are never delayed.
- The status line under the settings counts what has been blocked so far, with the last blocked key and how far apart its presses were. **Reset Stats** zeroes it.

!!! tip "Picking a threshold"
    Start with the default and watch the status line while you play. If blocks show up on taps you meant, lower the threshold; if double-inputs still get through, raise it a little. Set it too high and it will swallow intentional fast taps — a genuine trill on one key can be quicker than you'd expect.

!!! note "Coming from the old Chatter Blocker"
    Your previous Chatter Blocker on/off choice and threshold are imported the first time AntiChatter runs.
