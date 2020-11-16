class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.integer :tasker_id, null: false
      t.string :description, null: true

      t.timestamps
    end
  end
end
