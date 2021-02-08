import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroAtividade from './cadastro-atividade';
import CadastroCabecalho from './cadastro-cabecalho';
import Inicial from './menu';

const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
   <BrowserRouter>
   <Switch>
      <Route path="/cadastro-atividade" component={CadastroAtividade} />
      <Route path="/cadastro-cabecalho" component={CadastroCabecalho} />
      <Route path="" component={Inicial} />
      <Route component={Pagina404} />
   </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);