class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :roaster
      t.string :variety
      t.string :process

      t.timestamps
    end
  end
end
