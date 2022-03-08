class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :state
      t.string :city
      t.integer :built
      t.integer :rating

      t.timestamps
    end
  end
end
