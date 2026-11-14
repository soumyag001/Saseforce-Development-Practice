# Salesforce Dev Sheet (Apex, LWC, Aura)

A Striver-style practice sheet for Salesforce developers. Instead of just question titles, every coding problem has a **full problem statement, an example and a hint**, grouped by topic and tagged **Easy / Medium / Hard**.

Pure HTML, CSS and JavaScript. No build step, no backend. Progress is stored in each visitor's browser (localStorage), so everyone who opens your Pages link gets their own tracker.

## What is inside
- **Coding Problems** (default tab): Apex, LWC and Aura problems with description, example and hint
  - Apex: strings and collections, SOQL and aggregates, triggers, async Apex, integration and testing
  - LWC: component basics, Apex and data service, communication, advanced components, Jest
  - Aura: basics, events, advanced patterns, migration to LWC
- **Theory Q&A**: interview concept questions with Concept / Coding / Scenario tags

## Features
- Click a problem title (or View) to open its statement, example and hint
- Progress bars overall, per difficulty and per topic
- Search, filter by difficulty and status
- Star problems to revise later and keep your own solution in the notes box
- Export / import progress as JSON (move between devices)
- Dark mode

## Host on GitHub Pages
1. Create a new public repository.
2. Upload all files in this folder to the root of the repo.
3. Open the repo **Settings -> Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select your branch and `/ (root)`, then Save.
5. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Add or edit problems
Coding problems live in `problems_apex.js` and `problems_lwc_aura.js`. Each problem is one call:

```js
P("Title", "E|M|H", "Problem statement", "Example input/output", "Hint"),
```

Theory questions live in `questions.js`:

```js
["Question text", "E|M|H", "C|K|S"],
```

Progress is tied to the position of each item, so **add new items at the end of a topic** (and new topics at the end of a section) to avoid shifting people's saved progress. Reordering or deleting items shifts saved progress for existing visitors.

## Contributing
Pull requests with new problems are welcome. Please include a clear statement, an example and a hint.

## License
MIT
