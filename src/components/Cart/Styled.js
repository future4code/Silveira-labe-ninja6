import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    width: 100%;
    min-height: 80vh;
    justify-content: center;


    .div-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
        text-align: center;

        .div-produto {
            width: 100%;
            min-height: 100%;
        }
    }
`

export const DivButtons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Buttons = styled.button`
    width: 150px;
    height: 35px;
    color: white;
    background-color: #2790b0;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 800;
    font-size: 0.8rem;
    letter-spacing: .3px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
`