import {
  clientes,
  cliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from './clientes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clientes', () => {
  scenario('returns all clientes', async (scenario) => {
    const result = await clientes()

    expect(result.length).toEqual(Object.keys(scenario.cliente).length)
  })

  scenario('returns a single cliente', async (scenario) => {
    const result = await cliente({ id: scenario.cliente.one.id })

    expect(result).toEqual(scenario.cliente.one)
  })

  scenario('creates a cliente', async () => {
    const result = await createCliente({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a cliente', async (scenario) => {
    const original = await cliente({ id: scenario.cliente.one.id })
    const result = await updateCliente({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a cliente', async (scenario) => {
    const original = await deleteCliente({ id: scenario.cliente.one.id })
    const result = await cliente({ id: original.id })

    expect(result).toEqual(null)
  })
})
