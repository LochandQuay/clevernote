# == Schema Information
#
# Table name: notes
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text
#  author_id  :integer          not null
#  archived   :boolean          default("false"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :archived, inclusion: [true, false]
  validates :title, length: { maximum: 140 }


  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"


  def self.find_notes_by_author(id)
    Note.all.where("author_id = ?", id)
  end

end
