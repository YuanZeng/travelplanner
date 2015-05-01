class AddPhotoCreateddAtToPins < ActiveRecord::Migration
  def change
    add_column :pins, :photo_created_at, :datetime
  end
end
