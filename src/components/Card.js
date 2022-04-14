import React from "react"
import styled from "styled-components"
import { Data } from "./Data"


const Card1 = styled.div`
    text-align: center;
    border: 3px solid aqua;
    background-color: whitesmoke;
    padding: 0 10px 10px 10px;
    margin: 10px;
    align-items: center;
`


const Card = (props) => {
    return (
        <Card1>
            <h3>{props.job.title}</h3>
            <p><b>Preço:</b> R${props.job.price.toFixed(2)}</p>
            <p><b>Prazo:</b> {Data(props.job.dueDate)}</p>
            <button onClick={() => props.goToDetailPage(props.job.id)}>Detalhes</button>
            <button onClick={() => props.addCart(props.job)}>Adicionar ao Carrinho</button>
        </Card1>
    )
}

export default Card