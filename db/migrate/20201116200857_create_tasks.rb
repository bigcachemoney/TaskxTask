class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :client_id, null: false
      t.string :description, null: true

      t.timestamps
    end
    add_index :tasks, :client_id
  end
end
