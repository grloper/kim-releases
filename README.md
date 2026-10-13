# Mothlight Archive — Releases

**Keep the shelves from fading.**

This is the **public releases** repository for Mothlight Archive (Kim).

| Repository | Visibility | Contents |
|------------|------------|----------|
| Production source | **Private** | Full app source (web + Android), research, internal docs |
| **[This repo](https://github.com/grloper/kim-releases)** | **Public** | Release notes, branded landing, download hooks — **no production source** |

**Live landing:** [grloper.github.io/kim-releases](https://grloper.github.io/kim-releases/) · [jsDelivr (no CI)](https://cdn.jsdelivr.net/gh/grloper/kim-releases@main/index.html)

**No CI/CD** — this repo is static only. GitHub Actions is disabled so release pushes do not consume Actions minutes.

---

## What is Mothlight?

A ~3 minute nightly fantasy session: restore fading Dream Shelf dioramas with Luma.
Under the fantasy — observe→recall, spaced Thread Cards, free-recall Ink Whisper.

Archive Score tracks practice on Mothlight scenes.  
We do **not** sell photographic memory, IQ boosts, or medical claims.

---

## Latest release

See [CHANGELOG.md](./CHANGELOG.md) and [GitHub Releases](../../releases) (when published).

Play listing stills (Glass Greenhouse + Salt Library, feature graphic): [`store/`](./store/).

| Channel | Status |
|---------|--------|
| Web app | Private production — demos via private builds |
| Android (Play) | Coming — APK/AAB attached to Releases when ready |
| Landing | Open [`index.html`](./index.html) or run the static site below |

---

## Hooks (ethical)

- **Daily ~3 minutes** — small enough to keep
- **Streaks with forgiveness** — freezes + pause, no guilt spam
- **Shareable scores** — real counts, not fake percentiles
- **Free forever daily loop** — Pro later for extras, never mid-game ads

---

## Run the public landing locally

```bash
# no build step required for the static landing
python3 -m http.server 43128 --bind 127.0.0.1
# open http://127.0.0.1:43128
```

Or with any static host (Netlify, Cloudflare Pages, GitHub Pages).

---

## Honesty

Memory practice ≠ genius unlock.  
Spaced repetition and retrieval practice are well-supported for remembering practiced material. Far transfer to “smarter at life” is not what we claim.

---

## License

Release collateral © Kim. Source code remains private until explicitly open-sourced.

**Kim** — *Observe → hide → recall.*
