import React from "react";
import CartCard from "../CartCard/CartCard";
import arbusto from "../../img/tumbleweed.png";
import { Div, Buttons, DivButtons } from "./Styled";

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
                <div div-center>
                    {cartCont.length > 0 ? (
                    <div className="div-produto">
                        <DivButtons>
                            <span><b>Total: R${subtotalPrice.toFixed(2)}</b></span>
                            <div>
                                <Buttons onClick={() => this.props.LimparCart()}>Finalizar a Compra</Buttons>
                                <Buttons onClick={() => this.props.changePage("list")}>Voltar para a Lista</Buttons>
                            </div>
                            
                        </DivButtons>
                        <hr/>
                        {cartCont}
                    </div>
                    ) : (
                        <div className="div-imagem">
                            <h1>Carrinho está vazio</h1>
                            <img src={arbusto}/>
                        </div>
                    )}
                </div>
            </Div>
        )
    }
}