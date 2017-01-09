clevernote: project proposal
===================

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/P9JY6DAy

## Minimum Viable Product

clevernote is a web application inspired by Evernote built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

MVP Features
 - [ ] Hosting on Heroku
 - [ ] New account creation, login, and guest/demo login
 - [ ] Notes
 - [ ] Notebooks for organizing notes
 - [ ] Tags
 - [ ] Rich Text Editing
 - [ ] Infinite Scroll
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

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Summary:** Functioning rails project with front-end Authentication

### Phase 2: Notes Model, API, and components (2 days)

**Summary:** Notes can be created, read, edited and deleted through
the API.

### Phase 3: Notebooks (2 day)

**Summary:** Notes belong to Notebooks that can be created, read, edited and deleted through the API.

### Phase 4: Tags (1 days)

**Summary:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**Summary:** Allow rich text editing of notes.

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**Summary:** Add infinite scroll to Notes Index

### Bonus Features

 - [ ] Search notes by content
 - [ ] Code snippets
 - [ ] Wiki View
 - [ ] Set reminders on notes
 - [ ] Changelogs for Notes
 - [ ] Multiple sessions