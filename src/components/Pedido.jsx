import React, { Component } from 'react';

export default class Pedido extends Component {

    state = {
        pedido: "" 
    }

    componentDidMount = () => {
        setTimeout(() => { this.setState({ pedido: this.props.pedido }) }, 2000);
    }

    componentDidUpdate = () => {
        console.log("El componente se actualizó!");
    }

    componentWillUnmount = () => {
        alert("Tu pedido ha sido cancelado");
    }

    render() {
        return (
            <>
                <h2>{this.state.pedido}</h2>
                <button onClick={() => this.props.onRemove()}>Cancelar Pedido</button>
            </>
        )
    }
}
