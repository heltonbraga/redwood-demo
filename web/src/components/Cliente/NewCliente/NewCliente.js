import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ClienteForm from 'src/components/Cliente/ClienteForm'

const CREATE_CLIENTE_MUTATION = gql`
  mutation CreateClienteMutation($input: CreateClienteInput!) {
    createCliente(input: $input) {
      id
    }
  }
`

const NewCliente = () => {
  const [createCliente, { loading, error }] = useMutation(
    CREATE_CLIENTE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Cliente created')
        navigate(routes.clientes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createCliente({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Cliente</h2>
      </header>
      <div className="rw-segment-main">
        <ClienteForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCliente
