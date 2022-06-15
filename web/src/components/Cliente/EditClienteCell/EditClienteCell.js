import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ClienteForm from 'src/components/Cliente/ClienteForm'

export const QUERY = gql`
  query EditClienteById($id: Int!) {
    cliente: cliente(id: $id) {
      id
      name
      birthday
    }
  }
`
const UPDATE_CLIENTE_MUTATION = gql`
  mutation UpdateClienteMutation($id: Int!, $input: UpdateClienteInput!) {
    updateCliente(id: $id, input: $input) {
      id
      name
      birthday
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ cliente }) => {
  const [updateCliente, { loading, error }] = useMutation(
    UPDATE_CLIENTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Cliente updated')
        navigate(routes.clientes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateCliente({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Cliente {cliente.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ClienteForm
          cliente={cliente}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
