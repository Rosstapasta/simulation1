import React, {Component} from 'react';
import './shelf.css';
import {Switch, Route} from 'react-router-dom';
import ShelfALinks from './shelfALinks';
import Bin1a from './bin1a';
import Bin2a from './bin2a';
import Bin3a from './bin3a';

// import {Link} from 'react-router-dom';

class shelfA extends Component{
    render(){
        return(

            <div>
                <header className="appHeader">shelfie</header>
                

                <Switch>
                    <Route exact path='/A' component={ShelfALinks}/>
                    <Route  path='/A/B1' component={ Bin1a }/>
                    <Route  path='/A/B2' component={ Bin2a }/>
                    <Route  path='/A/B3' component={ Bin3a }/>
                </Switch>

                
            </div>
        )
    }
}

export default shelfA