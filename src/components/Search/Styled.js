import styled from "styled-components";

export const MainSearch = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
    #img-search {
        width: 25px;
        height: 25px;
    }

    #engenheiro {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        height: 100%;
    }

    .div-search {
        display: flex;
        width: 70%;
        align-items: center;

        .search-box {
            width: 65%;
            height: 100%;

            .search {
                display: flex;
                align-items: center;
                justify-content: space-around;
                border: 2px solid #82828280;
                border-radius: 5px;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                height: 75px;

                .input {
                    background-color: black;
                    display: flex;
                    height: 80%;
                    input {
                        height: 100%;
                        border: none;
                        font-size: 1rem;
                        &:focus {
                            box-shadow: 0 0 0 0;
                            border: 0 none;
                            outline: 0;
                        }
                    }
                }

                .div-button {
                    display: flex;
                    align-items: center;
                    width: 18%;
                    height: 100%;

                    .buttonSearch{
                        border: none;
                        border-radius: 10px;
                        height: 80%;
                        width: 100%;
                        background: #2790b0;
                        color: white;
                        font-size: 1.2rem;
                        font-weight: bold;
                        transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
                        &:hover {
                            cursor: pointer;
                            background: #36a9cc;
                            -webkit-transition: 0.2s;
                            transition: 0.2s;       
                        }
                    }
                }
            }

            .text-bold {
                font-size: 3rem;
            }

            .text-middle {
                margin: 10% 0 10% 0;
                font-size: 1.2rem;
            }
        }

        .div-imagem {
            display: flex;
            width: 45%;
            height: 100%;
            justify-content: center;

            .div-contain {
                width: 90%;
                height: 90%;
            }
        }
    }

    .div-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        margin-top: 5%;

        .text-servicos {
            text-align: center;
            h2 {
                font-size: 2rem;
            }
        }

        .div-button-text {
            margin: 2% 0;
        }

        .button-list {
            width: 110%;
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
            &:hover {
                background: #36a9cc;
                -webkit-transition: 0.2s;
                transition: 0.2s;       
            }
        }

        hr {
            width: 70%;
            height: 1px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 70%;
        }
    }
`