const { entity, id, field } = require('@herbsjs/herbs')

const Item = entity('Item', {
  id: id(Number),
  price: field(Number),
  description: field(String),
})

module.exports = Item
