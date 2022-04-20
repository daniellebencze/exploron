class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profilePic
  # , :password

  has_one :journal
end
