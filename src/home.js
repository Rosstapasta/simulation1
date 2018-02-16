import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="appHeader">shelfie</header>

                    <Link to='/A'>
                        <div className="shelfbox">shelfA</div>
                    </Link>



                    <Link to='B'>
                        <div className="shelfbox">shelfB</div>
                    </Link>



                    <Link to='/C'>
                        <div className="shelfbox">shelfC</div>
                    </Link>



                    <Link to='D'>
                        <div className="shelfbox">shelfD</div>
                    </Link>

        </div>
    );
  }
}

export default Home;