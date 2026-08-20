# Discord

A Discord client built into Quartz — log in, browse your servers and DMs, read and send messages, and join voice chat, all without leaving the game.

## Where to find it

Open the Quartz menu in-game and select **Discord** from the sidebar.

## Logging in

- **Log In with QR** shows a QR code — open Discord on your phone, go to **Settings → Scan QR Code**, and point your camera at it.
- Or paste a **Discord token** into the field and press **Log In**.
- Once you're logged in with a saved token, **Forget Saved Token** signs you out and clears it.

!!! warning "About tokens"
    Pasting a token gives Quartz full access to your account, and third-party clients that use one this way are against Discord's terms of service. The QR login doesn't have this problem.

## Browsing and messaging

The left rail lists your servers and **Direct Messages**; picking one loads its channel list beside it. Locked channels show a lock icon and can't be opened. Select a channel to load its recent messages, then type in the box at the bottom and press **Send** (or Enter) to post.

## Voice chat

Open a voice channel and press **Join Voice** in the bar above the chat to connect; the same button becomes **Disconnect** once you're in. While connected, **Mute**/**Unmute** toggles your microphone, and the status line shows the end-to-end encryption state along with live sent/received/dropped audio frame counts.

Voice needs a small native runtime that isn't bundled with Quartz. Scroll down to the **Voice** section and press **Install Voice Runtime** — it shows your platform, the installed version, and live install progress. **Remove Voice Runtime** takes it back out.

!!! note "Not available on every platform"
    If no voice runtime is published for your platform, voice chat isn't available, and the **Voice** section says so.

## Diagnostics

**Test Connection**, below the Discord window, checks HTTPS, gateway, and crypto connectivity separately — useful for narrowing down why login or voice isn't working.
