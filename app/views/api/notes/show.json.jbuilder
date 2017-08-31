json.set! @note.id do
  json.partial! 'api/notes/note', note: @note
  json.partial! 'api/notes/notebook', notebook: @note.notebook
end
