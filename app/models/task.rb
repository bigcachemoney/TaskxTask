# == Schema Information
#
# Table name: tasks
#
#  id :bigint           not null, primary key
#
class Task < ApplicationRecord

    validates :client_id, presence: true

    belongs_to :user,
      class_name: :User
      
    has_many :categories,
      class_name: :category
      
    has_one :mission,
      class_name: :Mission
end
