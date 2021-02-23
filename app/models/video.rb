class Video < ApplicationRecord
  validates :title, presence: true

  belongs_to :author, class_name: "User", foreign_key: "author_id"

  has_one_attached :video_data
  has_one_attached :thumbnail  
end