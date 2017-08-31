json.tag do
  json.partial! 'tag', tag: @tag
end
json.tagging do
  json.note_id @tagging.note_id
  json.tag_id @tagging.tag_id
end
