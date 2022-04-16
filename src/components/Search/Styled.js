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
`