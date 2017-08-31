# @tagged_notes.each do |note|
#   json.set! note.id do
#     json.partial! '/api/notes/note', note: note
#   end
# end
json.tag do
  json.partial! 'tag', tag: @tag
end
json.tagging do
  json.note_id @tagging.note_id
  json.tag_id @tagging.tag_id
end
