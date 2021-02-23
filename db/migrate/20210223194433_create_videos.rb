class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false

      t.timestamps
    end
    
    add_index :videos, :author_id
  end
end
