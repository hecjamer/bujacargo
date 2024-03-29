import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import ModalMision from '../pages/ModalMision';

import NotFound from '../pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/ModalMision" component={ModalMision} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
  )
}

export default App;
