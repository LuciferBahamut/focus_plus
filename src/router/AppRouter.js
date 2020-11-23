import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import Video from '../components/Video';
import Forum from '../components/Forum';
import Home from '../components/Home';
import ListFile from '../components/FileList';
import Connection from '../components/Login';
import Signup from '../components/Signup';
import CreatePost from '../components/CreatePost';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={Home} path="/" exact={true} />
          <Route component={Home} path="/Focus_plus" exact={true} />
          <Route component={App} path="/focus+" exact={true} />
          <Route component={Video} path="/video" exact={true} />
          <Route component={Forum} path="/forum" exact={true} />
          <Route component={CreatePost} path="/createPost" exact={true} />
          <Route component={ListFile} path="/list" exact={true} />
          <Route component={Connection} path="/login" exact={true} />
          <Route component={Signup} path="/signup" exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;