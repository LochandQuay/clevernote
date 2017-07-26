json.byId do
  @notebooks.each do |notebook|
    json.set! notebook.id do
      json.partial! 'notebook', notebook: notebook
    end
  end
end
json.allIds @notebook_ids
