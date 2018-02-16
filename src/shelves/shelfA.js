import React, {Component} from 'react';
import './shelf.css';
import {Switch, Route, Link} from 'react-router-dom';
import Bin1a from './bin1a';
import Bin2a from './bin2a';
import Bin3a from './bin3a';

// import {Link} from 'react-router-dom';

class shelfA extends Component{
    render(){
        return(

            <div>

            <header className="appHeader">shelfie</header>
            
                    <Link to='/A/B1'>
                    <div className="shelfbox"></div>
                    </Link>

                    <Link to='/A/B2'>
                    <div className="shelfbox"></div>
                    </Link>

                    <Link to='/A/B3'>
                    <div className="shelfbox"></div>
                    </Link>

                {/* <Switch>
                    <Route exact path='/A/B1' component={ Bin1a }/>
                    <Route  exact path='/A/B2' component={ Bin2a }/>
                    <Route  exact path='/A/B3' component={ Bin3a }/>
                </Switch> */}

                
            </div>
        )
    }
}

export default shelfA