import {
  produtos,
  produto,
  createProduto,
  updateProduto,
  deleteProduto,
} from './produtos'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('produtos', () => {
  scenario('returns all produtos', async (scenario) => {
    const result = await produtos()

    expect(result.length).toEqual(Object.keys(scenario.produto).length)
  })

  scenario('returns a single produto', async (scenario) => {
    const result = await produto({ id: scenario.produto.one.id })

    expect(result).toEqual(scenario.produto.one)
  })

  scenario('creates a produto', async () => {
    const result = await createProduto({
      input: { name: 'String', quantity: 4592226, cost: 2645459.2225278616 },
    })

    expect(result.name).toEqual('String')
    expect(result.quantity).toEqual(4592226)
    expect(result.cost).toEqual(2645459.2225278616)
  })

  scenario('updates a produto', async (scenario) => {
    const original = await produto({ id: scenario.produto.one.id })
    const result = await updateProduto({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a produto', async (scenario) => {
    const original = await deleteProduto({ id: scenario.produto.one.id })
    const result = await produto({ id: original.id })

    expect(result).toEqual(null)
  })
})
