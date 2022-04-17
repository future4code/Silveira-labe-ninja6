import React from "react";
import { Cabeçalho, Button_home } from "./Styled";

const C = (props) => {
    return (
        <Cabeçalho>
            <div className="div-header">
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,900&display=swap" rel="stylesheet"/>
                <Button_home onClick={() => props.changePage("home")}><h2 className="titulo">LabeNinjas</h2></Button_home>
                <div className="div-buttons">
                    <button className="button-carrinho" onClick={() => props.changePage("cart")}><p>Carrinho</p></button>
                    <button className="button-cadastro" onClick={() => props.changePage("form")}><p>Seja um ninja</p></button>
                </div>
            </div>
        </Cabeçalho>
    )
}

export default C