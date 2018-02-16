import React, {Component} from 'react';
import './shelf.css';




export default class Bin1a extends Component{

    constructor(){
        super()

        this.state= {
            stuff: '',
            price: 0

        }

        this.stuffInput = this.stuffInput.bind(this);
        this.priceInput = this.priceInput.bind(this);
        //bind server function here

    }

    stuffInput(val){
        this.setState({stuff: val})
        console.log(this.state.stuff)
    }


    priceInput(val){
        this.setState({price: val})
        console.log(this.state.price)
    }

    //send to server function on click


    render(){
        return(
            <div className='inputfeild'>
                <p>Stuff</p>
                <input onChange={ (e) => this.stuffInput(e.target.value) }></input>
                <p>Price</p>
                <input onChange={ (e) => this.priceInput(e.target.value)}></input>
                <button >add to inventory</button>
            </div>
        )
    }
}

