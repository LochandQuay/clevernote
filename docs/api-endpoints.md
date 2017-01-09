# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `DELETE` /api/users/:id (optional/bonus)

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
  - Notes index/search
  - Accepts `tag_name` query param to list notes by tag
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`
  - Index of all notes for a notebook

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - Includes query param for autocomplete suggestions
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - If note doesn't already exist, it will be created (interesting idea from sample proposal)
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
