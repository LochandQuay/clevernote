# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text
#  author_id   :integer          not null
#  archived    :boolean          default("false"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  notebook_id :integer          not null
#

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
