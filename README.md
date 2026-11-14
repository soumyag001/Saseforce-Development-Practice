# Salesforce Dev Sheet

A practice sheet for Salesforce developer interviews, laid out like Striver's DSA sheet: pick a topic, work through the problems from easy to hard, tick them off. It covers Apex, LWC and Aura.

**Live site:** https://soumyag001.github.io/Saseforce-Development-Practice/

Every coding problem comes with a proper statement, a sample input/output and a hint you can open if you get stuck. There's no backend. Your ticks, stars and notes are saved in your own browser, so each visitor gets their own tracker.

## What's covered

**Apex:** working with objects and relationships, SOQL and aggregates, triggers, automation (Flow actions, approvals, email, schedulers), async Apex, integrations and testing, security and sharing.

**LWC:** component basics, wire and Apex, Lightning Data Service, parent/child and LMS communication, Kanban/lookup/chart style builds, Jest.

**Aura:** basics, events, dynamic components, and moving Aura code to LWC.

There's also a separate Theory Q&A tab with concept and scenario questions for the interview round.

## Using the sheet

Click a problem to read it. Tick it when you're done, star it if you want to come back to it, and use the pencil icon to keep your own solution. Progress can be exported and imported as a JSON file if you switch browsers or devices.

## Adding problems

Coding problems live in `problems_apex.js` and `problems_lwc_aura.js`, one line per problem:

```js
P("Title", "E|M|H", "Problem statement", "Example", "Hint"),
```

Theory questions live in `questions.js`:

```js
["Question", "E|M|H", "C|K|S"],
```

Saved progress is tied to where a problem sits in its topic, so add new ones at the end of a topic. Reordering or deleting existing ones will shift people's ticks.

Pull requests with new problems are welcome. Include a clear statement, an example and a hint.

## License

MIT
