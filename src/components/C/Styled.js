import styled from "styled-components";

export const Cabeçalho = styled.header`
    display: flex;
    /* background-color: #2790b0; */
    width: 100vw;
    height: 15vh;
    justify-content: center;

    .div-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        height: 100%;
    }

    .div-buttons {
        display: flex;
        width: 35%;
        justify-content: space-around;
        align-items: center;
        p {
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
        }
        .button-carrinho {
            background: none;
            border: none;
            color: #2b4e72;
            transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
            &:hover {
                color: #2790b0;
                cursor: pointer;
            }
        }

        .button-cadastro {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 180px;
            border: 2px solid #2b4e72;;
            border-radius: 10px;
            background: none;
            color: #2b4e72;
            transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
            &:hover {
                cursor: pointer;
                background-color: #2790b020;
            }
        }
    }

    
`
export const Button_home =  styled.button`
    display: flex;
    background: none;
    border: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 1rem;
    .titulo {
        font-family: 'Raleway', sans-serif;
        font-size: 2rem;
    }

    &:hover {
        cursor: pointer;
    }
`