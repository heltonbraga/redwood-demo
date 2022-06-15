import { Router, Route, Set, Private } from '@redwoodjs/router'
import ProdutosLayout from 'src/layouts/ProdutosLayout'
import ClientesLayout from 'src/layouts/ClientesLayout'
import BaseLayout from 'src/layouts/BaseLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={BaseLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Set wrap={ProdutosLayout}>
          <Route path="/produtos/new" page={ProdutoNewProdutoPage} name="newProduto" />
          <Route path="/produtos/{id:Int}/edit" page={ProdutoEditProdutoPage} name="editProduto" />
          <Route path="/produtos/{id:Int}" page={ProdutoProdutoPage} name="produto" />
          <Route path="/produtos" page={ProdutoProdutosPage} name="produtos" />
        </Set>
        <Private unauthenticated="login">
          <Set wrap={ClientesLayout}>
            <Route path="/clientes/new" page={ClienteNewClientePage} name="newCliente" />
            <Route path="/clientes/{id:Int}/edit" page={ClienteEditClientePage} name="editCliente" />
            <Route path="/clientes/{id:Int}" page={ClienteClientePage} name="cliente" />
            <Route path="/clientes" page={ClienteClientesPage} name="clientes" />
          </Set>
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
