import React, { Component } from 'react';
import './shelf.css';
import {Link} from 'react-router-dom';

class ShelfBLinks extends Component {
  render() {
    return (
      <div>
        

        <Link to='/B/B1'>
            <div className="shelfbox">
                <p className="boxtext">Box 1</p>
            </div>
        </Link>

        <Link to='/B/B2'>
             <div className="shelfbox">
                <p className="boxtext">Box 2</p>
             </div>
        </Link>

        <Link to='/B/B3'>
             <div className="shelfbox">
                <p className="boxtext">Box 3</p>
             </div>
        </Link>

        <Link to='/B/B3'>
            <div className="shelfbox">
                <p className="boxtext">Box 4</p>
            </div>
        </Link>

        </div>

    );
  }
}

export default ShelfBLinks;