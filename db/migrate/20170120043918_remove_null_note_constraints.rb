class RemoveNullNoteConstraints < ActiveRecord::Migration[5.0]
  def change
    change_column_null :notes, :title, true
    change_column_null :users, :name, true
    change_column_null :users, :email, true
  end
end
