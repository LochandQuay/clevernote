# Component Hierarchy

#### AuthFormContainer
- AuthForm

#### HomeContainer
- Home
  - HomeHeader
    - Logo
    - NavBar
  - QuickAuthForm
  - FeaturesIndex
    - FeaturesIndexItem

#### UserHomeContainer
- UserHome
  - Sidebar
    - UserInfo

#### NoteIndexContainer
- NoteIndex
  - NotesHeader
  - NoteIndexItem

#### NoteEditorContainer
  - NoteEditor
    - NoteTools
    - NoteInfo
      - NoteTagsList
        - NoteTagsListItem
    - FormattingBar
    - Editor

#### NotebookIndexContainer
- NotebookIndex
  - NotebooksHeader
    - NewNotebookButton
  - NotebookIndexItem

#### NotebookDetailContainer
- NotebookDetail
  - NotebookHeader
  - NoteIndex
    - NoteIndexItem

#### NewNotebookFormContainer
- NewNotebookForm

#### TagIndexContainer
- TagIndex
  - TagsHeader
    - NewTagButton
  - TagIndexItem

#### TagDetailContainer
- TagDetail
  - TagHeader
  - NoteIndex
    - NoteIndexItem

#### NewTagFormContainer
- NewTagForm

#### SearchContainer
- Search
  - SearchBar
  - SearchResults
    - SearchResultsItem

# Redux Routes

| Path  | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "UserHomeContainer" |
| "/notes" | "NotesContainer" |
| "/notebooks" | "NotebooksContainer" |
| "/tags" | "TagsContainer" |
| "/home/notes/:noteId" | "NotesContainer" |
| "/home/notebooks/:notebookId/notes/:noteId" | "NotebookDetailContainer" |
| "/home/tags/:tagId/notes/:noteId" | "TagsContainer" |
| "/notes/new" | "NoteDetailContainer" |
| "/notebooks/new" | "NewNotebookFormContainer" |
| "/tags/new" | "NewTagFormContainer" |
| "/search" | "SearchContainer" |
