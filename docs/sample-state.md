```js
{
  currentUser: {
    id: 1,
    username: "eevee"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["title can't be blank"]}
  },

  notes: {
    1: {
      title: "Puppy's first note",
      body: "...",
      author_id: 1,
      notebook_id: 1
      tags: {
        1: {
          id: 1
          name: "Coding"
        }
      }
    }
  },

  notebooks: {
    1: {
      title: "Eevee's first notebook",
      author_id: 1,
      description: "filled with notes and stuff"
    }
  },

  tagFilters: [1, 3, 9] // Used to track Tags for filtering of notes
}
```
