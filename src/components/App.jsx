import React, { Component } from 'react';
import Pedido from './Pedido';
import '../styles/App.css';


export default class App extends Component {  

  state = {
    pedido: "Pizza",
    estado: true
  }

  handleRemove = () => {
    this.setState({pedido: "", estado: false})
  }
  
  render() {    
    return (
      <div className="App">        
        <h1>Tu pedido:</h1>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/10/0d/0f/hot-and-spicy.jpg" className="App-logo" alt="pizza" />
        <div>{this.state.estado ? <Pedido pedido={this.state.pedido} onRemove={this.handleRemove} /> : <></> }</div>              
      </div>
    )
  }

  

}

