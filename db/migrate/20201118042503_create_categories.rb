class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :job_type, null: false
      t.integer :task_id, null: false
    end
    add_index :categories, :task_id
  end
end
