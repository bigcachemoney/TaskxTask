class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :task
  belongs_to :user,
    class_name: :User
end