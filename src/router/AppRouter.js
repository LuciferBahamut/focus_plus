import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import Video from '../components/Video';
import Forum from '../components/Forum';
import Home from '../components/Home';
import ListFile from '../components/FileList';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={Home} path="/" exact={true} />
          <Route component={App} path="/focus+" exact={true} />
          <Route component={Video} path="/video" exact={true} />
          <Route component={Forum} path="/forum" exact={true} />
          <Route component={ListFile} path="/list" exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;