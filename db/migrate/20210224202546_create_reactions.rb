class CreateReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :reactions do |t|
      t.boolean :like, null: false
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :reactions, :user_id
    add_index :reactions, :video_id
    add_index :reactions, [:user_id, :video_id], unique: true
  end
end
