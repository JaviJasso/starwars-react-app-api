import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Explorer from './components/Explorer';

import Films from './components/Films';
import People from './components/People';
import Starships from './components/Starships';
import BaseLayout from './components/Layout';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route  path="/starships" component={Starships} />
        <Route  path="/films" component={Films} />
        <Route  path="/people" component={People} />
        <Route path="/" component={Explorer} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
