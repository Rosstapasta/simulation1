import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">
            <p className="headerText">SHELFIE</p>
        </header>

                    <Link to='/A'>
                        <div className="shelfbox">
                            <p id="boxtext" className="headerText">Shelf A</p>
                        </div>
                    </Link>



                    <Link to='B'>
                        <div className="shelfbox">
                            <p id="boxtext" className="headerText">Shelf B</p>
                        </div>
                    </Link>



                    <Link to='/C'>
                        <div className="shelfbox">
                            <p id="boxtext" className="headerText">Shelf C</p>
                        </div>
                    </Link>



                    <Link to='D'>
                        <div className="shelfbox">
                            <p id="boxtext" className="headerText">Shelf D</p>
                        </div>
                    </Link>

        </div>
    );
  }
}

export default Home;