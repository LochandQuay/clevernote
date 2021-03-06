clevernote: project proposal
===================

[Heroku link (TBD)][heroku]

[Trello link][trello]

[heroku]: http://www.clevernote-dev.herokuapp.com
[trello]: https://trello.com/b/P9JY6DAy

## Minimum Viable Product

clevernote is a web application inspired by Evernote built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

MVP Features
 - [x] Hosting on Heroku
 - [x] New account creation, login, and guest/demo login
 - [x] Notes
 - [x] Notebooks for organizing notes
 - [x] Tags
 - [x] Rich Text Editing
 - [ ] Production README



## Design Docs
* [Wireframes][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [DB Schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1D2-3)

**Summary:** Functioning rails project with front-end authentication

* Back-end authentication with Rails
* Front-end authentication with React
* Users
  * table migrations
  * model validations and associations
  * controller
  * components
  * CSS styling

### Phase 2: Notes Model, API, and components (2 days, W1D4-5)

**Summary:** Notes can be created, read, edited and deleted through
the API.
* Notes
  * table migration
  * model validations and associations
  * controller
  * components
  * CSS styling

### Phase 3: Notebooks (2 days, W2D1-2)

**Summary:** Notes belong to Notebooks that can be created, read, edited and deleted through the API.
* Notebook
  * table migration
  * model validations and associations
  * controller
  * components
  * CSS styling

### Phase 4: Tags (1 day, W2D3 EOD)

**Summary:** Notes can be tagged with multiple tags, and tags are searchable.
* Tags
  * table migration
  * model validations and associations
  * controller
  * components
  * CSS styling

### Phase 5: Allow Complex Styling in Notes (1 day, W2D4 EOD)

**Summary:** Allow rich text editing of notes

### Bonus Features

 - [x] Autosave
 - [ ] Search Functionality (notes, notebooks, tags)
 - [ ] Infinite Scroll
 - [ ] Search notes by content
 - [x] Code snippets
 - [ ] Wiki View
 - [ ] Set reminders on notes
 - [ ] Changelogs for Notes
 - [ ] Multiple sessions
