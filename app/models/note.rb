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
  validates :title, :author, :archived, presence: true
  validates :title, length: { maximum: 140 }

  belongs_to :author
    foreign_key: :author_id
    primary_key: :id
    class_name: :user

end
