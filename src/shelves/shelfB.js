import React, {Component} from 'react';
import './shelf.css';
import {Switch, Route} from 'react-router-dom';
import ShelfBLinks from './shelfALinks';
import Bin1b from './bin1b';
import Bin2b from './bin2b';
import Bin3b from './bin3b';
import Bin4b from './bin4b';



class shelfB extends Component{
    render(){
        return(

            <div className="App">
                <header className="shelfHeader">shelf B</header>
                

                <Switch>
                    <Route exact path='/B' component={ShelfBLinks}/>
                    <Route  path='/B/B1' component={ Bin1b }/>
                    <Route  path='/B/B2' component={ Bin2b }/>
                    <Route  path='/B/B3' component={ Bin3b }/>
                    <Route path='/B/B3' component={ Bin4b}/>
                </Switch>

                
            </div>
        )
    }
}

export default shelfB