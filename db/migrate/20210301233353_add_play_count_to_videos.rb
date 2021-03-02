class AddPlayCountToVideos < ActiveRecord::Migration[6.1]
  def change
    add_column :videos, :play_count, :integer, default: 0
  end
end
