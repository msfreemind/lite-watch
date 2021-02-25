class Reaction < ApplicationRecord
  validates :user_id, uniqueness: { 
    scope: :video_id,
    message: "has already reacted to video"
  }

  belongs_to :user
  belongs_to :video
end