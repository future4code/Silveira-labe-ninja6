import React from "react"
import CartCard from "./CartCard"
import styled from "styled-components"

const Div = styled.div`
border: 3px blue;
text-align: center;
align-items: center;
background-image: url(https://wallpapercave.com/wp/wp9141051.jpg);
color: blue;

&:hover{

    color: red;
    background-color: 5px blue;
}


`


export default class Cart extends React.Component {
    render() {
        const cartCont = this.props.cart.map((item) => {
            return <CartCard key={item.id} title={item.title} price={item.price} id={item.id} removerCart={this.props.removerCart}/>
        })

        let subtotalPrice = 0

        this.props.cart.forEach((item) => {
            subtotalPrice += item.price
        })

        return (
            <Div>
                {cartCont.length > 0 ? (
                    <div>
                        {cartCont}
                        <span>Total: R${subtotalPrice.toFixed(2)}</span>
                        <button onClick={() => this.props.LimparCart()}>Finalizar a Compra</button>
                        <button onClick={() => this.props.changePage("list")}>Voltar para a Lista</button>
                    </div>
                    ) : (
                    <h1>Carrinho as moscas</h1>
                    )}
            </Div>
        )
    }
}

