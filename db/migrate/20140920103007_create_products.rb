class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :descriprion
      t.string :image

      t.timestamps
    end
  end
end
