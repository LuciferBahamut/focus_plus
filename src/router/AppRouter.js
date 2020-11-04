import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import FileList from "../components/FileList"

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={App} path="/" exact={true} />
          <Route component={FileList} path='/list' />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;