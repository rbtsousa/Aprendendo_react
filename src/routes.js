import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Repository from './pages/Repository';
import Main from './pages/Main';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component ={Main}/>
        <Route path="/Repository" component ={Repository}/>
      </Switch>
    </BrowserRouter>
  );
}