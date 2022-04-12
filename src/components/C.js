import React from "react"
import { scryRenderedComponentsWithType } from "react-dom/test-utils"
import styled from "styled-components"
import SCT from "../img/SCT.png"

const Cabeçalho = styled.div`
border: 5px solid whitesmoke;
background-color: blue;
padding: 0 18px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const Button2 =  styled.button`

&:hover{
    color:red;
    background-color: aqua;
}

&:active{
color: black;
background-color: blueviolet;

}

`


const C = (props) => {
    return (
        <Cabeçalho>
            <Button2 onClick={() => props.changePage("home")}><h2>LabeNinjas 6 - Home</h2></Button2>
            
            <h3>Trabalhando com a sua confiança.</h3>

            <div>
                <button onClick={() => props.changePage("cart")}><img src={SCT}/></button>
            </div>
        </Cabeçalho>
    )
}

export default C
