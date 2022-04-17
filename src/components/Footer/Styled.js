import styled from "styled-components";

export const Rodape = styled.footer `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100vw;
    height: 500px;
    background-color: #e1e1e1;

    .services {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .div-services {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        width: 70%;
        height: 300px;

        .div-services-columns {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-evenly;
            
        }

        .img-redes {
            width: 40px;
            height: 40px;
        }

        .div-services-columns-rs {
            display: flex;
            flex-direction: column;
            margin-top: 10%;
        }

        .div-services-columns-img {
            margin: 10% 0 0 50px;
        }

        .div-services-rs {
            display: flex;
            justify-content: space-around;
        }
    }
    hr {
        width: 70%;
    }

    .informations {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 150px;
    }

    .informations-content {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        width: 70%;
    
        .div-buttons {
            display: flex;
            justify-content: space-around;
        }
    }

    .button-informations {
        background: none;
        border: none;
        color: #717171;

        &:hover {
            color: #2790b0;
            cursor: pointer;
        }
    }

    .copyright {
        display: flex;
        justify-content: center;
        background-color: #dadbdc;
        width: 100%;
        color: #00000080;
    }

    .copyright-text {
        width: 70%;
        font-size: 0.8rem;
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