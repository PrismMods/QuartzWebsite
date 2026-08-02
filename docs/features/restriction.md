# Restriction

Two independent ways to force a run to end early based on how you're playing, for practicing under stricter conditions than the game enforces by default.

## Where to find it

Open the Quartz menu in-game and go to **Gameplay** in the sidebar. Restriction is two pages there: **Judgement Restriction** and **Death Limit**.

## Judgement Restriction

Instantly fails the run the moment a hit breaks a rule you choose:

- **Minimum Accuracy** — fail if a single hit's accuracy drops below a threshold.
- **Pure Perfect Only** — anything less than a Perfect fails the run.
- **X-Perfect Only** — same, but requires X-Perfect specifically (needs the XPerfect mod installed).
- **No Too Early** — fail on a Too Early judgement.
- **Custom Judgements** — pick exactly which judgements are allowed; anything else fails.

!!! warning "Custom Judgements needs at least one judgement ticked"
    With nothing ticked — which is how it starts — this mode fails nothing at all, rather than failing everything. Tick the judgements you want to *allow* before relying on it.

The fail screen shows a message you can customize, with `{judgement}` standing in for whichever judgement broke the run.

### Restricting only part of a level

By default the rule covers the whole chart. Turn on **Restrict Only In Sections** to narrow it to the stretches you actually want to drill: press **Add Section** and set that section's **Start (%)** and **End (%)** to a percentage range of the level. Hits taken inside a range are judged exactly as above; everywhere else the restriction stays out of the way, so a slip in the easy half doesn't end a run you started for the one transition you keep dropping.

Sections can overlap, order doesn't matter, and you can have up to 16 of them. **Remove** deletes one.

!!! warning "Sections on, but none added, fails nothing"
    With the toggle on and an empty section list there is nowhere for the rule to apply, so no hit can ever end the run. The page says as much in place of the list — add a section, or turn the toggle back off to restrict the whole level.

## Death Limit

Fails the run once too many misses or overloads pile up, instead of on the first one:

- **Limit Misses** / **Max Misses** and **Limit Overloads** / **Max Overloads** — cap each independently.
- **Limit Deaths (Miss + Overload)** / **Max Deaths** — cap the combined total instead.

Pairs well with **No Fail** — since No Fail keeps the run going through misses, Death Limit gives you a hard stop instead of playing out the whole chart.
