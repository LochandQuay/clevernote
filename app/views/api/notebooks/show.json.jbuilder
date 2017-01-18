json.partial! '/api/notebooks/notebook_with_notes', notebook: @notebook
#
# json.set! @notebook.id do
#   json.partial! 'notebook', notebook: @notebook
#   json.partial! 'notes', notes: @notebook.notes
# end
