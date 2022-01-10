const { id, entity, field } = require('@herbsjs/herbs')
const Item = require('./Item')

const Order = entity('Order', {
  id: id(Number),
  status: field(String),
  items: field([Item]),
})

module.exports = Order
