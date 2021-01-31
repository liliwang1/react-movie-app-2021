import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </HashRouter>
  );
}

export default App;
