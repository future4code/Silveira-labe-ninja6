import React from "react";
import { Data } from "../Data";
import { CardContainer } from "./Styled.js";

const Card = (props) => {
    return (
        <CardContainer>
            <div>
                <h3>{props.job.title}</h3>
                <p>★ ★ ★ ★ ★</p> 
            </div>
            <p>{props.job.description}</p>
            {/* <p><b>Preço:</b> R${props.job.price.toFixed(2)}</p> */}
            <p><b>Prazo:</b> {Data(props.job.dueDate)}</p>
            <button className="button-detail" onClick={() => props.goToDetailPage(props.job.id)}>Detalhes</button>
            <button onClick={() => props.addCart(props.job)}>Adicionar ao Carrinho</button>
        </CardContainer>
    )
}

export default Card