class ChangeLikeToAllowNullInReactions < ActiveRecord::Migration[6.1]
  def change
    change_column_null :reactions, :like, true
  end
end
