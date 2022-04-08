class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :photograph, :blurb
end
