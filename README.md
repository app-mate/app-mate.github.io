# Geometry Lab / Laboratorio de Geometría

An interactive geometry course for kids (age 10+). Each topic has "discover it" panels (drag the shapes and watch a rule hold) and "practice it" exercises that change every time.

Plain HTML + CSS + JavaScript: no frameworks, no build step. Double-click `index.html` to open it, even offline.

## Folder layout

```
index.html          home page: the course map
css/style.css       shared styles
js/core.js          shared engine: geometry math, drawing, draggable points, exercises, language
topics/
  triangles.html + triangles.js
  quads.html     + quads.js
```

## Adding a new topic

1. Copy `topics/quads.html` and `topics/quads.js`, and rename them (e.g. `angles.html` / `angles.js`).
2. In the new `.html`: change the title key, the sub-tabs and the sections, and point the last `<script>` to the new `.js`.
3. In the new `.js`: put the topic's words in `addStrings({es:{...}, en:{...}})`, build the panels with `board(...)`, write exercise generators, and finish with `startPage({...})`.
4. In `index.html`: give the topic's entry in `COURSE` an `href`, e.g. `{k:'c2', href:'topics/angles.html'}`.

## Publishing (GitHub Pages)

1. Push this folder to a GitHub repository.
2. Repository → Settings → Pages → "Deploy from a branch" → `main`, folder `/ (root)`.
3. The site appears at `https://<your-user>.github.io/<repo-name>/`. Every push updates it.
