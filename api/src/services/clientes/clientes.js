import { db } from 'src/lib/db'

export const clientes = () => {
  return db.cliente.findMany()
}

export const cliente = ({ id }) => {
  return db.cliente.findUnique({
    where: { id },
  })
}

export const createCliente = ({ input }) => {
  return db.cliente.create({
    data: input,
  })
}

export const updateCliente = ({ id, input }) => {
  return db.cliente.update({
    data: input,
    where: { id },
  })
}

export const deleteCliente = ({ id }) => {
  return db.cliente.delete({
    where: { id },
  })
}
