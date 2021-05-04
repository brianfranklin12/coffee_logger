class CreateLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :logs do |t|
      t.string :dose
      t.string :yield
      t.string :grind_size
      t.string :brew_method
      t.integer :rating
      t.string :notes
      t.string :brew_time
      t.belongs_to :coffee

      t.timestamps
    end
  end
end
