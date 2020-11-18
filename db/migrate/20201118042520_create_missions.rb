class CreateMissions < ActiveRecord::Migration[5.2]
  def change
    create_table :missions do |t|
      t.integer :task_id, null: false
      t.integer :tasker_id, null: false
      t.integer :categories_id, null: false
      t.date :start_date, null: false
      t.boolean :completed, null: false

      t.timestamps
    end
    add_index :missions, :task_id
    add_index :missions, :tasker_id
    add_index :missions, :categories_id
  end
end
