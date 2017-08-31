json.byId do
  @notes.each do |note|
    json.set! note.id do
      json.partial! 'note', note: note
      json.partial! 'notebook', notebook: note.notebook
      json.tags note.tags, :id, :name
    end
  end
end
json.allIds @sorted_notes
