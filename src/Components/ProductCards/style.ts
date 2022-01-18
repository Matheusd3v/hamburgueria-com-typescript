import styled from "styled-components";

export const CardProduct = styled.div`
    width: 296px;
    height: 342px;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;

    img {
        height: 120px;
        margin: auto;
    }

    .photoContainer {
        display: flex;
        width: 100%;
        height: 150px;
        background: #F5F5F5;
    }

    .description {
        padding: 0 20px;
        box-sizing: border-box;

        p {
            font-size: 12px;
            color: #828282;
        }

        span {
            color: #27AE60;
            font-weight: 600;
        }

        .last_price {
            text-decoration: line-through;
            color: #EB5757;
            margin-right: 10px;
        }
    }

    button {
        width: 106px;
        color: #FFFFFF;
        margin-left: 20px;
        margin-bottom: 25px;
    }

    :focus-within {
        border-color: #27AE60;

        button {
            background: #27AE60;
            color: #FFFFFF;
        }
    }

    

    @media screen and (max-width: 750px) {
        min-width: 296px;
        margin: 20px;
    }
`