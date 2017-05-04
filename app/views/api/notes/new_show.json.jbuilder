json.extract! @note, :id, :title, :body, :author_id, :updated_at
json.notebook do
  json.extract! @note.notebook, :id, :title
end
json.tags @note.tags, :id, :name
