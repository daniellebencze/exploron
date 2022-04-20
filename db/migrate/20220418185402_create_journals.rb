class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.text :wishlist
      t.text :itenerary
      t.text :other
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
