import { Link, routes } from '@redwoodjs/router'

import Clientes from 'src/components/Cliente/Clientes'

export const QUERY = gql`
  query FindClientes {
    clientes {
      id
      name
      birthday
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clientes yet. '}
      <Link to={routes.newCliente()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clientes }) => {
  return <Clientes clientes={clientes} />
}
