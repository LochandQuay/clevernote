# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  name            :string
#  password_digest :string
#  email           :string
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :name, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :ensure_default_notebook

  attr_reader :password

  has_many :notes,
    primary_key: :id,
    foreign_key: :author_id

  has_many :notebooks,
    primary_key: :id,
    foreign_key: :author_id

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(128)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(128)
  end


  def ensure_default_notebook
    Notebook.create!(
      title: "Personal Notebook",
      description: "This is your default notebook. Use it for whatever you like!",
      author_id: self.id)

    Note.create!(
      title: "Welcome to clevernote!",
      body: "Thanks for signing up!",
      notebook_id: self.notebooks.first.id,
      author_id: self.id
    )
  end

end
