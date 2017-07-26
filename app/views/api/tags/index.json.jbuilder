json.byId do
  @tags.each do |tag|
    json.set! tag.id do
      json.partial! 'tag', tag: tag
    end
  end
end
json.allIds @tag_ids
