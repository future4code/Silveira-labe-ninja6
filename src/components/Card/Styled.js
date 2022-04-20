import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #82828280;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px 15px;
    margin: 20px;
    transition: 1s;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 2px 10px 10px 2px;
        transform: translateY(-10px) scale(1);
    }

    .button-detail {
        width: 100%;
        height: 40px;
        background: none;
        border: 2px solid #2b4e72;
        border-radius: 8px;
        color: #2b4e72;
        font-weight: bold;
        cursor: pointer;
        transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
        &:hover {
            background: #2b4e7210;
        }
    }
`