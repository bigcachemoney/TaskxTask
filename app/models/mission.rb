# == Schema Information
#
# Table name: missions
#
#  id            :bigint           not null, primary key
#  task_id       :integer          not null
#  tasker_id     :integer          not null
#  categories_id :integer          not null
#  start_date    :date             not null
#  completed     :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Mission < ApplicationRecord

  belongs_to :tasks,
    class_name: :tasks 
end
