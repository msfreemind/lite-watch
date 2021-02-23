class Video < ApplicationRecord
  validates :title, presence: true

  belongs_to :user

  has_one_attached :video_data
  has_one_attached :thumbnail  
end