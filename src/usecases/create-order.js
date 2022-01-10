const { usecase, Ok, step } = require('@herbsjs/herbs')
const Order = require('../entities/Order')
const Item = require('../entities/Item')

module.exports = () =>
  usecase('Create Order', {
    response: Order,
    'Create and return an order': step((ctx) => {
      const order = Order.fromJSON({
        id: 1,
        status: 'CREATED',
        items: [],
      })

      // Pushing the right entity type? Works fine...
      const itemEntity = Item.fromJSON({
        id: 1,
      })

      order.items.push(itemEntity)

      // Pushing an different entity type? Works fine...
      const orderEntity = Order.fromJSON({
        id: 2,
      })

      order.items.push(orderEntity)

      // the problem occurs when it is pushed an non herbs-entity object
      const nonEntity = { anything: true }
      // order.items.push(nonEntity)

      ctx.ret = order

      return Ok()
    }),
  })
