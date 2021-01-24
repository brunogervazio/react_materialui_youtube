import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './layout/Menu'
import Home from './pages/Home';


function AppRoute({component: Component, layout: Layout, ...rest}){
  return(
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
};

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <AppRoute
          path="/" 
          component={Home} 
          layout={Menu} />
      </Switch>
    </BrowserRouter>
  )
};