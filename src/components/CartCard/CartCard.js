import React from "react"
import styled from "styled-components"
import { CardContainer } from "./Styled"

const CartCard = (props) => {
    return (
        <CardContainer>
            <h3>{props.title}</h3>
            <p>R${props.price.toFixed(2)}</p>
            <button className="button-detail" onClick={() => props.removerCart(props.id)}>Remover</button>
        </CardContainer>
    )
}

export default CartCard