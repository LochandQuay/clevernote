# == Schema Information
#
# Table name: notebooks
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, :author, presence: true
  validates :title, length: { maximum: 140 }

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

  has_many :notes,
    dependent: :destroy

  def self.find_notebooks_by_author(user)
    return [] unless user
    Notebook.all.where("author_id = ?", user.id)
  end
end
