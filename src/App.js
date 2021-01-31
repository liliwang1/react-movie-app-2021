import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Nav from './components/Nav';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Nav />
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
  );
}

export default App;
