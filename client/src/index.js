import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './components/app/App';
import CharacterList from './components/character-list/CharacterList';
import Login from './components/login/Login';
import NotFound from './components/not-found/NotFound';
import Signup from './components/signup/Signup';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/list" exact component={CharacterList} />
          <Route path="/login" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
