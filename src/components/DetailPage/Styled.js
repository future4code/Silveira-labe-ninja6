import styled from 'styled-components';

export const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80vh;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 500px;
        height: 500px;
        border: 1px solid #82828280;
        border-radius: 5px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 10px 15px;
        margin: 20px;

        .title{}

        
    }
    button {
            width: 48%;
            height: 40px;
            background: none;
            border: 2px solid #2b4e72;
            border-radius: 8px;
            color: #2b4e72;
            font-weight: bold;
            margin: 1% 1%;
            cursor: pointer;
            &:hover {
                background: #2b4e7210;
            }
        }
    
`