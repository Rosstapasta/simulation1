import React, { Component } from 'react';
import './shelf.css';
import {Link} from 'react-router-dom';

class ShelfALinks extends Component {
  render() {
    return (
      <div>
        

        <Link to='/A/B1'>
        <div className="shelfbox"></div>
        </Link>

        <Link to='/A/B2'>
        <div className="shelfbox"></div>
        </Link>

        <Link to='/A/B3'>
        <div className="shelfbox"></div>
        </Link>




        </div>

    );
  }
}

export default ShelfALinks;