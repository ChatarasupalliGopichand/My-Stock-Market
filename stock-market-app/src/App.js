import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StockDetails from './pages/StockDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/stock/:symbol" component={StockDetails} />
      </Switch>
    </Router>
  );
}

export default App;
