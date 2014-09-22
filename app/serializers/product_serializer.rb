class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :created_at

  url :product
end
