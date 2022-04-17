import React from "react"
import styled from "styled-components"


const Card = styled.div`
    
    
    background-color: lightblue;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


const CartCard = (props) => {
    return (
        <Card>
            <h3>{props.title}</h3>
            <p>R${props.price.toFixed(2)}</p>
            <button onClick={() => props.removerCart(props.id)}>Remover</button>
        </Card>
    )
}

export default CartCard