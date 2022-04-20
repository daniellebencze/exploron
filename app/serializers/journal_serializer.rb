class JournalSerializer < ActiveModel::Serializer
  attributes :id, :wishlist, :itenerary, :other
  has_one :user
end
