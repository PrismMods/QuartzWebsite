# Fonts

Pick the font Quartz uses on screen: one global font for every overlay, a different one for any overlay that should stand out, a separate font for the settings window, and the option to carry your font onto A Dance of Fire and Ice's own judgement popup.

## Where to find it

- The global font and the settings-window font are in the **Font** and **Settings Window Font** sections at the bottom of the **Settings** page.
- Each overlay's own **Font** dropdown is on its page: **Combo**, **Judgement**, **Key Viewer**, **Panels**, **Song Title**, and **Practice Difficulty**.
- **Judgement Popup Font** is on **Overlay → Judgement**.

## The global font

The **Font** dropdown sets the font every overlay uses unless you give it its own. The default is **Default (Maplestory Bold)**. Quartz also ships **Fira Code Regular**, **Gmarket Sans Medium**, **JetBrains Mono Regular** and **Super Mindset**, and offers the game's own Korean font as **godoMaum (ADOFAI)**. Each entry in the list is drawn in its own font, so you can see what you're picking.

- **＋  Add custom font…** at the end of the list imports a `.ttf`, `.otf`, or `.ttc` file from your computer.
- A custom font can be renamed with **Font Name** and **Rename**, or removed with **Delete**, which asks **Sure?** first.

### Size and line spacing

**Font Size** and **Line Spacing** under the dropdown are multipliers for the selected font, useful when a font draws smaller or tighter than the others. They're saved per font and apply wherever that font is used across Quartz, so switching fonts brings back the adjustment you made for each one.

## Fonts per overlay

Every overlay starts on **Global font (…)**, which follows whatever the global font is. Pick a font in an overlay's own **Font** dropdown to give just that overlay a different one; pick **Global font (…)** again to go back to following the global font.

## Settings window font

**Settings Window Font** is for Quartz's own menu. It defaults to **Default (SUIT)**; **Same as overlay font** follows the global font instead, or you can pick any font from the list. It has its own **Font Size** and **Line Spacing** too.

## Judgement popup font

**Judgement Popup Font** applies the global font to the game's per-hit rating popup ("Perfect!"/"Early!"), so your chosen font shows up at the planet during play. It's off by default — turn it on with the switch on its section header — and its **Font Size** slider scales just the popup.

!!! note
    The **Judgement Popup Font** only re-fonts the per-hit rating popup. It's separate from the [Judgement](judgement.md) overlay, which shows accumulated hit counts.

!!! tip "Missing characters"
    When a font has no glyph for a character, Quartz borrows it from SUIT for Korean and Latin text and from the bundled Noto Sans SC for Chinese, so text never turns into empty boxes whatever font you pick.

!!! note "Fonts that are no longer included"
    A few fonts earlier versions shipped (Comic Sans, Cookie Run, Darkella, Linotte, Matcha Cih, Nostalgic Letter and Same Mistake) are no longer bundled. If you own one, add it back with **＋  Add custom font…**.
