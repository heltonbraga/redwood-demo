import { db } from 'src/lib/db'

export const produtos = () => {
  return db.produto.findMany()
}

export const produto = ({ id }) => {
  return db.produto.findUnique({
    where: { id },
  })
}

export const createProduto = ({ input }) => {
  return db.produto.create({
    data: input,
  })
}

export const updateProduto = ({ id, input }) => {
  return db.produto.update({
    data: input,
    where: { id },
  })
}

export const deleteProduto = ({ id }) => {
  return db.produto.delete({
    where: { id },
  })
}
