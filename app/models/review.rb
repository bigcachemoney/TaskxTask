# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  tasker_id   :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :rating, :tasker_id, presence: true

  # belongs_to :task
  belongs_to :user,
    class_name: :User
end
