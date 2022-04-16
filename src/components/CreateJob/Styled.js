import styled from "styled-components";

export const CreateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 80vh;

    .div-contain {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
    }

    .div-form {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        
        .div-control {
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 100%;

            select {
                width: 106%;
            }

            input {
                width: 100%;
            }

            input, select {
                background-color: rgba(0, 0, 0, 0.05);
                border: 1px solid rgba(83, 110, 123, 0.2);
                border-radius: 4px;
                color: rgba(0, 0, 0, 0.5);
                display: block;
                font-size: 14px;
                font-style: italic;
                line-height: 1.3;
                padding: 11px;
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

            span {
                font-weight: bold;
            }
        }
    }
    .div-imagem {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
        height: 100%;
        .div-trabalho-img {
            width: 90%;
            height: 90%;

            .img-trabalho {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

`

export const Button_enviar = styled.button`
    width: 106%;
    height: 50px;
    color: white;
    background-color: #2790b0;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: .3px;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
`