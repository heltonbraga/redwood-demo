export const schema = gql`
  type Cliente {
    id: Int!
    name: String!
    birthday: DateTime
  }

  type Query {
    clientes: [Cliente!]! @requireAuth
    cliente(id: Int!): Cliente @requireAuth
  }

  input CreateClienteInput {
    name: String!
    birthday: DateTime
  }

  input UpdateClienteInput {
    name: String
    birthday: DateTime
  }

  type Mutation {
    createCliente(input: CreateClienteInput!): Cliente! @requireAuth
    updateCliente(id: Int!, input: UpdateClienteInput!): Cliente! @requireAuth
    deleteCliente(id: Int!): Cliente! @requireAuth
  }
`
