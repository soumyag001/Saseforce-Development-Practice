# Salesforce Dev Sheet (Apex, LWC, Aura)

A Striver-style practice sheet for Salesforce developer interviews. Topic-wise questions tagged **Easy / Medium / Hard** and by type (**Concept / Coding / Scenario**), with progress tracking, revision stars and per-question notes.

Pure HTML, CSS and JavaScript. No build step, no backend. Progress is stored in each visitor's browser (localStorage), so everyone who opens your Pages link gets their own tracker.

## Features
- Sections: Apex, LWC, Aura, and Platform & Scenario rounds
- Progress bars overall and per difficulty, plus per topic
- Search, filter by difficulty, type and status
- Star questions to revise later, add personal notes
- Export / import progress as JSON (move between devices)
- Dark mode

## Host on GitHub Pages
1. Create a new public repository, for example `sf-dev-sheet`.
2. Upload all files in this folder to the root of the repo (`index.html`, `style.css`, `app.js`, `questions.js`, `README.md`, `.nojekyll`).
3. Go to **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. After a minute your site is live at `https://<your-username>.github.io/sf-dev-sheet/`.

## Add or edit questions
Everything lives in `questions.js`. Each question is one line:

```js
["Question text", "E|M|H", "C|K|S"],
```

- `E / M / H` = Easy / Medium / Hard
- `C / K / S` = Concept / Coding / Scenario

Progress is tied to the position of each question, so **add new questions at the end of a topic** (and new topics at the end of a section) to avoid shifting people's saved progress. Reordering or deleting questions will shift saved progress for existing visitors.

## Contributing
Pull requests with new questions are welcome. Keep questions interview-level and attach the right difficulty tag.

## License
MIT
