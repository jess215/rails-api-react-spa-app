class CreateDragons < ActiveRecord::Migration[7.0]
  def change
    create_table :dragons do |t|
      t.string :variety
      t.string :color
      t.string :element
      t.string :personality
      t.string :alignment
      t.string :age
      t.integer :hp
      t.integer :cr

      t.timestamps
    end
  end
end
