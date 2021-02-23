import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app/App';
import CharacterList from './components/character-list/CharacterList';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Welcome from './components/welcome/Welcome';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/list" exact component={CharacterList} />
        <Route path="/login" exact component={Login} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
