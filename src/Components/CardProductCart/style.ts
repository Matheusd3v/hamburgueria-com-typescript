import styled from "styled-components";

export const CardCart = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    box-sizing: border-box;

    .informations {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
    }

    .backgroundImg {
        width: 80px;
        height: 80px;
        background: #E0E0E0;
        border-radius: 10px;
        display: flex;
        margin-right: 25px;

        img {
            width: 55px;
            max-height: 55px;
            margin: auto;
        }
    }

    .attributes {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 { 
            margin: 0;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background: #E0E0E0;
            border-radius: 5px;
            height: 34px;
            width: 110px;
        }

        span p {
            margin: 0;
            background: #F5F5F5;
            width: 40px;
            height: 85%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        span button {
            width: 29px;
            height: 29px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: none;
            color: #EB5757;
            cursor: pointer;
        }
    }

    .trash {
        color: #E0E0E0;
        background: transparent;
        border: none;
        display: flex;
        cursor: pointer;

        svg {
            width: 20px;
            height: 20px;
            margin-bottom: auto;
            margin-top: 20px;
        }
    }
`