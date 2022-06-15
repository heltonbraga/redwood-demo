export const schema = gql`
  type Produto {
    id: Int!
    name: String!
    category: String
    quantity: Int!
    cost: Float!
  }

  type Query {
    produtos: [Produto!]! @skipAuth
    produto(id: Int!): Produto @requireAuth
  }

  input CreateProdutoInput {
    name: String!
    category: String
    quantity: Int!
    cost: Float!
  }

  input UpdateProdutoInput {
    name: String
    category: String
    quantity: Int
    cost: Float
  }

  type Mutation {
    createProduto(input: CreateProdutoInput!): Produto! @requireAuth
    updateProduto(id: Int!, input: UpdateProdutoInput!): Produto! @requireAuth
    deleteProduto(id: Int!): Produto! @requireAuth
  }
`
