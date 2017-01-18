@notes.each do |note|
  json.set! note.id do
    json.partial! 'note', note: note
    json.partial! 'notebook', notebook: note.notebook
  end
end
