import { Link, routes } from '@redwoodjs/router'

import Produtos from 'src/components/Produto/Produtos'

export const QUERY = gql`
  query FindProdutos {
    produtos {
      id
      name
      category
      quantity
      cost
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No produtos yet. '}
      <Link to={routes.newProduto()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ produtos }) => {
  return <Produtos produtos={produtos} />
}
