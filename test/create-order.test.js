const CreateOrder = require('../src/usecases/create-order')
const { expect } = require('chai')

describe('Create Order usecase', () => {
  it('should create an order with 2 items', async () => {
    const usecase = CreateOrder({})

    const order = await usecase.run()

    expect(order.ok.items.length).to.be.equal(2)
  })
})
