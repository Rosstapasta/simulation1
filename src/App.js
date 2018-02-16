import React, { Component } from 'react';
import './App.css';

import Home from './home';
import ShelfA from './shelves/shelfA';
import ShelfB from './shelves/shelfB';
import ShelfC from './shelves/shelfC';
import ShelfD from './shelves/shelfD';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>

            <div>

            <Switch>

                  <Route exact path='/' component={ Home }/>
                  <Route  path='/A' component={ ShelfA }/>
                  <Route  path='/B' component={ ShelfB }/>
                  <Route  path='/C' component={ ShelfC }/>
                  <Route  path='/D' component={ ShelfD }/>

            </Switch>

            </div>
          
      </div>
    );
  }
}

export default App;
