// Question bank. Format per question: [title, difficulty (E|M|H), type]
// type: C = Concept, K = Coding, S = Scenario/Design
// To add questions, just add a line to the right topic. IDs are generated from position,
// so ADD NEW QUESTIONS AT THE END of a topic to keep existing users' progress intact.

window.SHEET = [
  {
    id: "apex",
    name: "Apex",
    topics: [
      {
        name: "Apex Basics & OOP",
        qs: [
          ["What is Apex and how is it different from Java?", "E", "C"],
          ["Primitive vs sObject vs collection data types in Apex", "E", "C"],
          ["Difference between Integer, Long, Decimal and Double", "E", "C"],
          ["What are access modifiers? Explain with sharing, without sharing and inherited sharing", "E", "C"],
          ["Difference between abstract class, virtual class and interface", "M", "C"],
          ["Static vs instance variables and static blocks - lifetime in a transaction", "M", "C"],
          ["What is a constructor? Can Apex classes have multiple constructors?", "E", "C"],
          ["Explain inner classes and their limitations in Apex", "M", "C"],
          ["How does polymorphism work in Apex? Show override with virtual methods", "M", "K"],
          ["Explain the 'final' keyword and its use with variables, methods and classes", "E", "C"],
          ["What is the transient keyword and when does it matter?", "M", "C"],
          ["Write a utility class that safely converts a String to Date/Integer with defaults", "E", "K"]
        ]
      },
      {
        name: "Collections (List, Set, Map)",
        qs: [
          ["List vs Set vs Map - when to use which", "E", "C"],
          ["Remove duplicates from a List<Id> using a Set", "E", "K"],
          ["Build a Map<Id, List<Contact>> grouped by AccountId from a query result", "M", "K"],
          ["How does a Set<sObject> behave with duplicates? Why is it risky?", "H", "C"],
          ["Convert a List<Account> to Map<Id, Account> in one line and its caveats", "E", "K"],
          ["Find the intersection and difference of two Set<String>", "M", "K"],
          ["Sort a List of custom objects using the Comparable interface", "M", "K"],
          ["Sort a List<Account> by Revenue descending without SOQL ORDER BY", "M", "K"],
          ["Difference between Map.get() returning null vs containsKey()", "E", "C"],
          ["Find the first non-repeating character in a String using a Map", "M", "K"],
          ["Group Opportunities by Stage and compute the sum of Amount per stage", "M", "K"],
          ["What is the maximum size of a collection / heap limit and how do you stay under it?", "H", "C"]
        ]
      },
      {
        name: "SOQL",
        qs: [
          ["SOQL vs SOSL - differences and when to use each", "E", "C"],
          ["Parent-to-child and child-to-parent relationship queries with examples", "E", "K"],
          ["What is a semi-join and anti-join? Write one of each", "M", "K"],
          ["Use of GROUP BY, HAVING and aggregate functions in SOQL", "M", "K"],
          ["How do you use dynamic SOQL safely? Explain SOQL injection and String.escapeSingleQuotes", "M", "C"],
          ["Bind variables in SOQL - what can and can't be bound?", "M", "C"],
          ["What is a SOQL for loop and why does it save heap?", "M", "C"],
          ["What is the difference between WITH SECURITY_ENFORCED and WITH USER_MODE?", "H", "C"],
          ["How does the query optimizer use indexes? What makes a filter selective?", "H", "C"],
          ["Write a query to get Accounts having no Contacts", "M", "K"],
          ["FOR UPDATE - when and why do you use it? Row locking behaviour", "H", "C"],
          ["Handle a query that returns more than 50,000 rows - options (Batch, Queryable cursors, Bulk API)", "H", "S"],
          ["Querying polymorphic fields (Who, What, Owner) using TYPEOF", "H", "K"],
          ["What is the difference between ALL ROWS and a normal query?", "M", "C"]
        ]
      },
      {
        name: "DML & Database Class",
        qs: [
          ["insert vs Database.insert - difference and allOrNone", "E", "C"],
          ["Explain upsert with external ID and the matching rules", "M", "C"],
          ["How do you inspect Database.SaveResult errors and report them?", "M", "K"],
          ["What is a mixed DML error and how do you avoid it?", "M", "C"],
          ["Savepoint and rollback - write an example and its limits", "M", "K"],
          ["What is DML on a List with mixed sObject types?", "H", "C"],
          ["Difference between delete, hard delete and undelete; ALL ROWS use", "M", "C"],
          ["What is Database.merge and what are its rules?", "H", "C"],
          ["How do you avoid 'UNABLE_TO_LOCK_ROW' errors?", "H", "S"],
          ["Explain Database.setSavepoint and where partial commits can still happen (callouts)", "H", "C"],
          ["Insert parent and child records in one transaction using external IDs", "H", "K"]
        ]
      },
      {
        name: "Triggers",
        qs: [
          ["Before vs after triggers - when to use each", "E", "C"],
          ["List the trigger context variables (Trigger.new, oldMap, isInsert...)", "E", "C"],
          ["Write a trigger to prevent deletion of Accounts that have open Opportunities", "M", "K"],
          ["Write a trigger that rolls up the count of Contacts onto Account", "M", "K"],
          ["What is a trigger handler / framework and why use one?", "M", "S"],
          ["Order of execution in Salesforce - explain end to end", "H", "C"],
          ["How do you prevent recursion in triggers?", "M", "K"],
          ["Can you do DML on Trigger.new in a before trigger? In an after trigger?", "E", "C"],
          ["Bulkify a trigger that has SOQL inside a for loop", "M", "K"],
          ["What happens when a trigger and a Flow update the same field? Explain recursion with flows", "H", "S"],
          ["How do you bypass triggers for data loads (custom setting / custom permission)?", "H", "S"],
          ["Write a trigger to auto-create a Task when an Opportunity is Closed Won", "M", "K"],
          ["Trigger Handler: write a full framework with one trigger per object and a Domain class", "H", "K"],
          ["What is Trigger.operationType and how do you use it in a switch?", "M", "C"],
          ["Explain after undelete and when it fires", "E", "C"]
        ]
      },
      {
        name: "Governor Limits & Bulkification",
        qs: [
          ["List the main per-transaction governor limits (SOQL, DML, heap, CPU)", "E", "C"],
          ["Sync vs async limit differences", "M", "C"],
          ["What is bulkification? Rewrite non-bulk code to bulk", "M", "K"],
          ["How do you monitor limits at runtime (Limits class)?", "M", "K"],
          ["How do you debug a 'Too many SOQL queries: 101' error in production?", "M", "S"],
          ["What is a CPU time limit exception and how do you reduce CPU time?", "H", "S"],
          ["Heap size too large - causes and fixes", "H", "S"],
          ["What are per-namespace limits in managed packages?", "H", "C"],
          ["Explain Limits.getQueries() vs Limits.getLimitQueries()", "E", "K"],
          ["Design a process to update 5 million records safely", "H", "S"]
        ]
      },
      {
        name: "Asynchronous Apex",
        qs: [
          ["Future methods - rules, limits and when to avoid them", "E", "C"],
          ["Batch Apex - start, execute, finish; chunk size and state across chunks", "M", "K"],
          ["Database.Stateful - how it works and its cost", "M", "C"],
          ["Queueable Apex - chaining, passing complex types, limits", "M", "K"],
          ["Queueable vs Future vs Batch - how do you choose?", "M", "S"],
          ["Schedulable Apex - cron expressions and limits (100 jobs)", "M", "K"],
          ["Run a Batch every 5 minutes using Schedulable (workaround)", "H", "K"],
          ["Batch Apex that handles failures and retries only failed records", "H", "K"],
          ["What is Platform Event and how does it differ from async Apex?", "H", "C"],
          ["How do you test Batch, Queueable and Schedulable classes?", "M", "K"],
          ["What is a Finalizer in Queueable and how do you use it?", "H", "K"],
          ["How many batches can be queued / running simultaneously (Flex Queue)?", "M", "C"],
          ["Can you call a future method from a batch or another future? What about Queueable?", "H", "C"],
          ["Abort a running batch job and monitor jobs from Apex", "M", "K"],
          ["Design: nightly job that syncs 2M Accounts to an external system", "H", "S"]
        ]
      },
      {
        name: "Exception Handling",
        qs: [
          ["try-catch-finally and exception types (DmlException, QueryException...)", "E", "C"],
          ["Create and throw a custom exception class", "E", "K"],
          ["Which exceptions can't be caught? (LimitException)", "M", "C"],
          ["How do you log errors without rolling back the log (Platform Events / separate transaction)?", "H", "S"],
          ["AuraHandledException - why use it and how to set the message correctly", "M", "K"],
          ["Design a reusable error-logging framework", "H", "S"],
          ["What happens to partial work when an unhandled exception occurs?", "M", "C"]
        ]
      },
      {
        name: "Testing",
        qs: [
          ["Why 75% code coverage? What really makes a good test?", "E", "C"],
          ["Explain @isTest, @testSetup and seeAllData", "E", "C"],
          ["Test.startTest() and Test.stopTest() - what do they do?", "M", "C"],
          ["Write a test with System.runAs to verify sharing/permissions", "M", "K"],
          ["Mock a callout using HttpCalloutMock", "M", "K"],
          ["How do you test a trigger in bulk (200 records)?", "M", "K"],
          ["Stub API / Test.createStub for unit testing without DML", "H", "K"],
          ["How do you test Queueable chains and Batch with Test.stopTest?", "H", "K"],
          ["Write a test data factory utility", "M", "K"],
          ["How do you test Platform Events and Change Data Capture?", "H", "K"],
          ["Assertions - System.assert vs Assert class; negative testing example", "E", "K"],
          ["Test email sending without actually sending", "M", "K"],
          ["How do you test a Visualforce/LWC controller's AuraEnabled method?", "M", "K"]
        ]
      },
      {
        name: "Security & Sharing",
        qs: [
          ["Explain CRUD, FLS and sharing in Apex - which are enforced by default?", "M", "C"],
          ["Security.stripInaccessible vs Schema describe checks", "H", "K"],
          ["Difference between with sharing, without sharing, inherited sharing", "M", "C"],
          ["Explain Apex managed sharing and sharing reasons", "H", "K"],
          ["What is a sharing recalculation and when is it expensive?", "H", "C"],
          ["Explain user mode vs system mode for DML and SOQL", "H", "C"],
          ["Securing an @AuraEnabled method against unauthorized access", "M", "S"],
          ["Org-wide defaults, role hierarchy, sharing rules, manual share - how do they stack?", "M", "C"],
          ["Custom permissions and how to check them in Apex", "M", "K"]
        ]
      },
      {
        name: "Integrations & Callouts",
        qs: [
          ["Make a REST callout with HttpRequest and parse JSON", "M", "K"],
          ["Named Credentials vs Remote Site Settings", "M", "C"],
          ["Expose an Apex REST service (@RestResource) with GET and POST", "M", "K"],
          ["JSON.deserialize vs deserializeUntyped, and JSON.serialize options", "M", "K"],
          ["Callout after DML - 'uncommitted work pending' error and fixes", "H", "S"],
          ["Callout from a trigger - how?", "H", "S"],
          ["Continuation object for long-running callouts", "H", "C"],
          ["SOAP callout using WSDL2Apex", "M", "C"],
          ["Design an idempotent inbound integration endpoint", "H", "S"],
          ["External Services, Platform Events, CDC, Outbound Messages - compare", "H", "S"],
          ["Handle callout limits (100 per txn, 120s timeout) with retries", "H", "S"],
          ["OAuth flows in Salesforce - web server vs JWT bearer vs client credentials", "H", "C"]
        ]
      },
      {
        name: "Design Patterns & Architecture",
        qs: [
          ["Singleton pattern in Apex and the pitfall of static state", "M", "K"],
          ["Selector / Domain / Service layers (fflib) - explain", "H", "S"],
          ["Factory and Strategy pattern with a dynamic Type.forName", "H", "K"],
          ["Dependency injection and mocking in Apex", "H", "S"],
          ["How do you design a trigger framework that supports bypass and ordering?", "H", "S"],
          ["Describe the Unit of Work pattern for DML", "H", "S"],
          ["Custom Metadata vs Custom Settings vs Custom Labels - when to use each", "M", "C"],
          ["Describe how to avoid hardcoded IDs and values", "E", "C"]
        ]
      },
      {
        name: "Platform Events, CDC & Misc Apex",
        qs: [
          ["Publish and subscribe to a Platform Event in Apex", "H", "K"],
          ["Change Data Capture vs Platform Events", "H", "C"],
          ["Schema class and dynamic describe - get all fields of an object", "M", "K"],
          ["Dynamic Apex: create sObject and set fields dynamically", "M", "K"],
          ["Apex Cursors / Iterable for large data, Iterator and Iterable in Batch", "H", "K"],
          ["What is the Apex Crypto class used for? Sign / hash example", "M", "K"],
          ["Custom iterable in Batch Apex", "H", "K"],
          ["Describe Wrapper classes with an example", "E", "K"],
          ["Use of @InvocableMethod and @InvocableVariable for Flow", "M", "K"],
          ["@future(callout=true) vs Queueable with Database.AllowsCallouts", "M", "C"],
          ["What is a Custom REST vs Platform API call count and API limits?", "M", "C"],
          ["Describe the String, Date, DateTime and Time methods you use most", "E", "K"]
        ]
      }
    ]
  },
  {
    id: "lwc",
    name: "LWC",
    topics: [
      {
        name: "LWC Fundamentals",
        qs: [
          ["What is LWC and how is it different from Aura?", "E", "C"],
          ["Files in an LWC bundle (html, js, css, meta xml, svg)", "E", "C"],
          ["Explain the template syntax: if:true, for:each, key, lwc:if, lwc:elseif", "E", "C"],
          ["Why is a key required in for:each and what makes a good key?", "M", "C"],
          ["Data binding in LWC: one-way vs two-way (and why there is no two-way)", "M", "C"],
          ["Explain Shadow DOM vs Light DOM in LWC", "H", "C"],
          ["What is lightning-meta targets and how do you expose a component to App Builder?", "E", "C"],
          ["Explain getters and computed properties in LWC", "E", "K"],
          ["Why is the Web Components standard important for LWC?", "M", "C"],
          ["Naming conventions: camelCase vs kebab-case across JS / HTML", "E", "C"],
          ["Render a list and conditionally style rows based on a field value", "M", "K"]
        ]
      },
      {
        name: "Decorators: @api, @track, @wire",
        qs: [
          ["Explain @api, @track and @wire", "E", "C"],
          ["Does every property need @track? Reactive properties after Spring '20", "M", "C"],
          ["Parent-to-child: pass data with @api property and call a child's @api method", "E", "K"],
          ["Why can't a child mutate an @api property it receives?", "M", "C"],
          ["@api getter/setter pair - when and how", "M", "K"],
          ["What is a reactive variable in @wire and how do you make it dynamic ($prop)?", "M", "K"],
          ["@wire as a property vs as a function - differences", "M", "K"],
          ["Wire adapters: getRecord, getFieldValue, getObjectInfo, getPicklistValues", "M", "K"],
          ["Why does @wire return undefined initially? How do you handle that?", "M", "C"],
          ["Proxy objects: why can't you mutate data returned from @wire?", "H", "C"]
        ]
      },
      {
        name: "Lifecycle Hooks",
        qs: [
          ["List the lifecycle hooks in order", "E", "C"],
          ["constructor vs connectedCallback - what can you do in each?", "M", "C"],
          ["renderedCallback - why can it run multiple times and how do you guard it?", "M", "K"],
          ["disconnectedCallback - what do you clean up there?", "M", "C"],
          ["errorCallback - how to build an error boundary component", "H", "K"],
          ["Parent and child lifecycle order of execution", "H", "C"],
          ["Where should you load a third-party library (loadScript) and why?", "M", "K"]
        ]
      },
      {
        name: "Events & Communication",
        qs: [
          ["Child-to-parent communication with CustomEvent", "E", "K"],
          ["bubbles, composed and cancelable - what do they do?", "H", "C"],
          ["Sibling and unrelated component communication with Lightning Message Service", "M", "K"],
          ["Pub-sub pattern vs LMS - when would you use each?", "H", "S"],
          ["Application events in Aura vs LWC communication", "M", "C"],
          ["How do you pass a Detail payload safely (don't mutate)?", "M", "C"],
          ["Event.stopPropagation vs stopImmediatePropagation in the context of LWC", "H", "C"],
          ["Handle a child event in the parent template (onitemselected)", "E", "K"],
          ["Build a parent/child filter component where a child emits a filter and the parent re-queries", "M", "S"]
        ]
      },
      {
        name: "Apex Integration with LWC",
        qs: [
          ["Call Apex imperatively vs via @wire - differences", "E", "C"],
          ["Why is cacheable=true needed for @wire? What does it imply?", "M", "C"],
          ["refreshApex and notifyRecordUpdateAvailable - when to use which", "M", "K"],
          ["Handle errors from Apex and show a toast", "M", "K"],
          ["Call a non-cacheable method after user action (button click)", "E", "K"],
          ["Pass complex parameters (list, wrapper) from LWC to Apex", "M", "K"],
          ["Pagination with Apex: server-side vs client-side", "H", "S"],
          ["Debounce a search input and call Apex", "M", "K"],
          ["Optimistic UI vs refresh strategies after DML", "H", "S"],
          ["Avoid exposing sensitive fields from an AuraEnabled method", "H", "S"]
        ]
      },
      {
        name: "Lightning Data Service & UI API",
        qs: [
          ["lightning-record-form vs record-edit-form vs record-view-form", "E", "C"],
          ["createRecord, updateRecord, deleteRecord from lightning/uiRecordApi", "M", "K"],
          ["What is LDS caching and how does it reduce Apex calls?", "M", "C"],
          ["Use getRecord with fields and optionalFields", "M", "K"],
          ["Get picklist values by record type", "M", "K"],
          ["Navigate to a record or list view using NavigationMixin", "M", "K"],
          ["Use lightning-datatable with inline editing and save", "H", "K"],
          ["Load more / infinite scrolling in a datatable", "H", "K"],
          ["Show a toast with ShowToastEvent and a link", "E", "K"],
          ["Use GraphQL wire adapter (lightning/uiGraphQLApi) - basics", "H", "K"]
        ]
      },
      {
        name: "Styling, SLDS & Accessibility",
        qs: [
          ["How does CSS scoping work in LWC?", "M", "C"],
          ["Styling hooks and CSS custom properties", "H", "C"],
          ["Using SLDS utility classes and blueprints", "E", "C"],
          ["Dynamic classes (classMap approach) in LWC", "M", "K"],
          ["ARIA, labels, keyboard handling basics", "M", "C"],
          ["Override base component styles - what is allowed and what is not", "H", "C"],
          ["Make a component responsive with lightning-layout", "M", "K"]
        ]
      },
      {
        name: "Testing, Debugging & Performance",
        qs: [
          ["Jest in LWC: write a basic test for rendering", "M", "K"],
          ["Mock a wire adapter and an Apex method in Jest", "H", "K"],
          ["How do you debug LWC (Chrome DevTools, Lightning Debug Mode)?", "M", "C"],
          ["What are the common performance issues in LWC and how do you fix them?", "H", "S"],
          ["Lazy loading components using dynamic imports", "H", "K"],
          ["Avoid unnecessary re-renders and large @track objects", "H", "C"],
          ["Large list rendering - virtualisation techniques", "H", "S"],
          ["Lightning Locker vs Lightning Web Security", "H", "C"]
        ]
      },
      {
        name: "Advanced LWC & Architecture",
        qs: [
          ["Slots in LWC: default, named and slotchange", "M", "K"],
          ["Composition vs inheritance in LWC - why composition?", "M", "C"],
          ["Use a shared JS module (service component) for utilities", "M", "K"],
          ["Dynamic components with lwc:component and lwc:is", "H", "K"],
          ["Reuse a component in Aura, Flow, Experience Cloud and App Builder", "M", "C"],
          ["Build a reusable modal component with slots", "M", "S"],
          ["Custom lookup component with search, debounce and keyboard navigation", "H", "S"],
          ["Design a Kanban board component with drag and drop", "H", "S"],
          ["Flow screen component with inputs/outputs and validation", "H", "K"],
          ["Quick Actions with LWC (headless vs screen)", "M", "K"],
          ["LWC in Experience Cloud: guest user and security considerations", "H", "S"],
          ["Use lwc:ref and querySelector - and when not to use it", "M", "C"],
          ["Offline / mobile considerations for LWC (Mobile Offline)", "H", "C"]
        ]
      }
    ]
  },
  {
    id: "aura",
    name: "Aura",
    topics: [
      {
        name: "Aura Fundamentals",
        qs: [
          ["What is the Aura framework and when would you still use it?", "E", "C"],
          ["Bundle structure: .cmp, controller, helper, renderer, style, design, svg, doc", "E", "C"],
          ["Attributes and expression syntax: {!v.x} vs {#v.x}", "M", "C"],
          ["aura:if vs aura:iteration vs aura:set", "E", "K"],
          ["Component composition and aura:id with find()", "M", "K"],
          ["Explain the difference between Controller and Helper", "E", "C"],
          ["Implement interfaces: force:hasRecordId, flexipage:availableForAllPageTypes", "M", "K"],
          ["Why should heavy logic live in the helper?", "M", "C"]
        ]
      },
      {
        name: "Aura Lifecycle & Events",
        qs: [
          ["Component events vs Application events - differences and use cases", "E", "C"],
          ["Write and fire a component event, handle it in the parent", "M", "K"],
          ["Application event: register, fire and handle", "M", "K"],
          ["Event propagation: capture, bubble in component events", "H", "C"],
          ["init, render, afterRender, rerender, unrender - order of execution", "M", "C"],
          ["What is aura:valueChange and aura:locationChange?", "M", "C"],
          ["Why are application events considered a performance risk?", "H", "C"],
          ["How do you stop event propagation?", "H", "K"]
        ]
      },
      {
        name: "Aura & Apex",
        qs: [
          ["Call an Apex method from an Aura controller", "E", "K"],
          ["Server-side actions: setCallback, setParams, $A.enqueueAction", "M", "K"],
          ["Storable actions and client-side caching - risks", "H", "C"],
          ["Handle errors from the server and show a toast", "M", "K"],
          ["Boxcar-ing of actions - what is it?", "H", "C"],
          ["Background actions and setBackground", "H", "C"],
          ["Why is @AuraEnabled(cacheable=true) used with Aura storable actions?", "H", "C"]
        ]
      },
      {
        name: "Aura Interoperability & Migration",
        qs: [
          ["Use an LWC inside an Aura component and pass attributes/events", "M", "K"],
          ["Why can't you use Aura inside LWC?", "M", "C"],
          ["Plan a migration of an Aura component to LWC step by step", "H", "S"],
          ["Map Aura concepts to LWC equivalents (events, attributes, helper...)", "M", "C"],
          ["Use lightning:navigation / force:navigateToSObject in Aura", "M", "K"],
          ["Convert an Aura app event into Lightning Message Service", "H", "S"],
          ["Which features are Aura-only today? (e.g. certain overrides, utility bars)", "H", "C"]
        ]
      },
      {
        name: "Aura Advanced & Debugging",
        qs: [
          ["Debugging Aura: $A.log, Lightning Inspector, debug mode", "M", "C"],
          ["Create components dynamically with $A.createComponent", "H", "K"],
          ["aura:method - exposing methods to the parent", "M", "K"],
          ["Locker Service restrictions in Aura", "H", "C"],
          ["Use a static resource / external library with ltng:require", "M", "K"],
          ["Custom renderers - when needed", "H", "C"],
          ["Design resources for App Builder: design:component, design:attribute", "M", "K"],
          ["Build a reusable data table in Aura with sorting and pagination", "H", "S"],
          ["Override standard actions (New, Edit) with Aura components", "M", "K"]
        ]
      }
    ]
  },
  {
    id: "mixed",
    name: "Platform & Scenario Rounds",
    topics: [
      {
        name: "Data Model & Declarative",
        qs: [
          ["Master-detail vs lookup vs hierarchical vs junction", "E", "C"],
          ["Roll-up summary fields - limitations and alternatives (DLRS / Flow / Apex)", "M", "S"],
          ["Record types, page layouts and profiles - how they interact", "M", "C"],
          ["Flow vs Apex - how do you decide?", "M", "S"],
          ["Validation rule vs trigger - which wins in order of execution?", "M", "C"],
          ["Permission sets vs profiles; permission set groups", "M", "C"],
          ["Large data volumes: skinny tables, indexes, archiving", "H", "S"]
        ]
      },
      {
        name: "Scenario / System Design",
        qs: [
          ["Design an Apex + LWC solution to show a related list with inline edit and 100k child records", "H", "S"],
          ["How do you design an error-resilient integration with an ERP? Retries, idempotency and logging", "H", "S"],
          ["Account hierarchy with 10 levels - efficiently roll up values", "H", "S"],
          ["Build a case assignment engine with round-robin in Apex", "H", "S"],
          ["Approve records with a custom approval UI in LWC and Apex", "H", "S"],
          ["Data migration of 20M records - strategy, tools and sequencing", "H", "S"],
          ["Design a multi-currency pricing calculator for quotes", "H", "S"],
          ["CI/CD pipeline for Salesforce (SFDX, scratch orgs, GitHub Actions)", "M", "S"],
          ["Support 50 concurrent batch jobs and avoid lock contention", "H", "S"],
          ["Explain how you'd secure an Experience Cloud site for guest users", "H", "S"]
        ]
      }
    ]
  }
];
