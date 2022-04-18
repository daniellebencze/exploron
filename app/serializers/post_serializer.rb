class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :photograph, :blurb, :destination_id
end
