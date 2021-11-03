import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../src/assets/scss/main.scss'
import Faq from './components/Faq/Faq';
import Referal from './components/Referal/Referal';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Referal} />
          <Route exact path="/faq" component={Faq} />
        </Switch>
    </BrowserRouter>
    
  );
}

export default App;
