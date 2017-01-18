json.partial! '/api/notebooks/notebook', notebook: @notebook
#
# json.set! @notebook.id do
#   json.partial! 'notebook', notebook: @notebook
#   json.partial! 'notes', notes: @notebook.notes
# end
