class Destination < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts

end
