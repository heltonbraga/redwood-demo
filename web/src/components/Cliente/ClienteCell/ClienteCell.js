import Cliente from 'src/components/Cliente/Cliente'

export const QUERY = gql`
  query FindClienteById($id: Int!) {
    cliente: cliente(id: $id) {
      id
      name
      birthday
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Cliente not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ cliente }) => {
  return <Cliente cliente={cliente} />
}
