import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import ProductList from './screens/ProductList';
import Register from './screens/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/productList" component={ProductList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
