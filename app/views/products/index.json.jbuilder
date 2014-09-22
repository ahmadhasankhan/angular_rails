json.array!(@products) do |product|
  json.extract! product, :id, :name, :price, :descriprion, :image
  json.url product_url(product, format: :json)
end
