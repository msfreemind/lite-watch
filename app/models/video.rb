class Video < ApplicationRecord
  validates :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: "author_id"
  has_many :reactions

  has_one_attached :video_data
  has_one_attached :thumbnail

  def like_count
    self.reactions.where("reactions.like IS TRUE").length
  end

  def dislike_count
    self.reactions.where("reactions.like IS FALSE").length
  end

  def user_reaction(user)
    self.reactions.where("user_id = ?", user.id).first
  end
end