class AddLatToPin < ActiveRecord::Migration
  def change
    add_column :pins, :lat, :decimal
  end
end
