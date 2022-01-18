import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #F5F5F5;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .descriptionContainer {
        width: 450px;
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            margin-top: 25px;
            width: 50%;
        }
    }

    .title {
        display: flex;
        align-items: flex-end;
        width: 100%;

        h1, h3 {
            margin: 0
        }     
        
        h1 {
            margin-right: 10px;
            color: #333333;
        }

        h3 {
            color: #EB5757;
        }
    }

    .description {
        width: 372px;
        height: 90px;
        display: flex; 
        justify-content: flex-start;
        border: 1px solid #E0E0E0;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;

        p {
            margin: 0;
            line-height: 1.5;
            color: #828282;
        }

        span {
            color: #333333;
            font-weight: 600;
        }
    }

    .bagIcon {
        height: 100%;
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #27AE601A;
        margin-right: 15px;
        color: #27AE60;
        border-radius: 3px;

        svg {
            width: 25px;
            height: 25px;
        }
    }

    @media screen and (max-width: 950px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding: 0 30px;
        padding-top: 20px;
        box-sizing: border-box;

        .descriptionContainer {
            height: 150px;

            img {
                display: none;
            }
        }
    }

    @media screen and (max-width: 550px) {

        .descriptionContainer {
            width: 100%;
        } 
        
        .description {
            width: 100%;
            height: 110px;
        } 
    }

`

export const LoginContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 50px;

    p {
        margin-top: 0;
        width: 70%;
        color: #828282;
        text-align: center;

        a {
            text-decoration: none;
            color: #828282;
            margin-top: 50px;
        }

        :last-child {
            margin-top: 15px;
        }
    }

    @media screen and (max-width: 950px) {
        margin: 0;   
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }
`