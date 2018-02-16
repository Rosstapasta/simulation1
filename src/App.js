import React, { Component } from 'react';
import './App.css';

import Home from './home';
import ShelfA from './shelves/shelfA';
import ShelfB from './shelves/shelfB';
import ShelfC from './shelves/shelfC';
import ShelfD from './shelves/shelfD';
import Bin1a from './shelves/bin1a';
import Bin2a from './shelves/bin2a';
import Bin3a from './shelves/bin3a';

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

                    <Route path='/A/B1' component={ Bin1a }/>
                    <Route path='/A/B2' component={ Bin2a }/>
                    <Route path='/A/B3' component={ Bin3a }/>

            </Switch>
            
            </div>
          
      </div>
    );
  }
}

export default App;
