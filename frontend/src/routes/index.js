import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Instrucoes from '../pages/Instrucoes';
import CadastroAluno from '../pages/CadastroAluno';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Instrucoes} />
    <Route path="/admin" exact component={Dashboard} />
    <Route path="/cadastro" exact component={CadastroAluno} />
    {/* <Route path="*" component={Dashboard} /> */}
  </Switch>
);

export default Routes;
