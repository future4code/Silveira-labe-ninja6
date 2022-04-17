import styled from "styled-components";

export const Master = styled.div `
    hr {
        width: 70%;
    }
`

export const ListContainer = styled.div `
    display: flex;
    width: 100vw;
    min-height: 50vh;
    justify-content: center;

    .div-jobs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 70%;
        height: 100%;
    }
`

export const Filters = styled.div `
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 50px;

    .div-control {
        display:flex;
        width: 70%;
    }

    select {
        padding: 0;
    }

    input, select {
        width: 100%;
        height: 35px;
        background-color: rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(83, 110, 123, 0.2);
        border-radius: 4px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 14px;
        font-style: italic;
        line-height: 1.3;
        transition: border-color .15s ease-in,background-color .15s ease-in;

        &:hover {
            background-color: white;
            border: 1px solid black;
        }

        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            background-color: white;
            border: 1px solid black;
        }
    }
`