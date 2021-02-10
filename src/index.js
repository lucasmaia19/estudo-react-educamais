import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroAtividade from './cadastros/cadastro-atividade/cadastro-atividade';
import CadastroCabecalho from './cadastros/cadastro-cabecalho/cadastro-cabecalho';
import Tabela from './tabela/tabela';

import TabelaAtividades from './dataView/dataView';
import Menu from './menu/menubar';

// const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
   <BrowserRouter>
   <Menu/>

   <Switch>
      <Route path="/cadastro-atividade" component={CadastroAtividade} />
      <Route path="/cadastro-cabecalho" component={CadastroCabecalho} />
      <Route path="/tabela-atividades" component={TabelaAtividades} />
      <Route path="/tabela" component={Tabela} />
      {/* <Route component={Pagina404} /> */}
   </Switch>
   </BrowserRouter>,
  document.getElementById('root')
);