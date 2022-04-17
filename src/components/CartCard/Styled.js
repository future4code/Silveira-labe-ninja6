import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    border: 1px solid #82828280;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px 15px;
    margin: 20px;

    .button-detail {
        width: 100%;
        height: 40px;
        background: none;
        border: 2px solid #2b4e72;
        border-radius: 8px;
        color: #2b4e72;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            background: #2b4e7210;
        }
    }
`