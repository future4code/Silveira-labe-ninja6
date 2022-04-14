import styled from "styled-components"
import React from "react"

const HomeContainer = styled.div`
   
    color: blue;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    background-image: url(https://wallpapercave.com/wp/wp9141051.jpg);
    background-size: 3840px 2160px;
`
const Button3 = styled.button`
margin: auto;
padding: 5px;
color: solid black;
background-color: aqua;
&:hover{
    color: red;
    background-color: blueviolet;
}
&:active{
    color: red;
    background-color: black;
}
`

export default class Home extends React.Component {
    render(){
        return(
            <HomeContainer>
                <h1>LabeNinjas 6</h1>
                
                <div>
                    <Button3 onClick={() => this.props.changePage("form")}>Quero ser um LabeNinja</Button3>
                    <hr/>
                    <Button3 onClick={() => this.props.changePage("list")}>Contratar um LabeNinja</Button3>
                </div>
            </HomeContainer>
        )
    }
}