import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    height: 80px;
    background: #E0E0E0;
    box-sizing: border-box;
    padding: 0 25px;
    display: flex;
    align-items: center;

    .container {
        width: 100%;
        max-width: 1380px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        a {
            text-decoration: none;
            color: #333333;
        }

        a svg {
            width: 25px;
            height: 25px;
            margin: auto 0;
        }
    }

    @media screen and (max-width: 550px) {
        img {
            width: 150px;
        }

        h1 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 550px) { 

        img {
            display: none;
        }

        h1 {
            margin: 0 auto;
        }
    }

`

export const MainContent = styled.section`
    max-width: 1380px;
    width: 90%;
    padding-top: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    min-height:calc(100vh - 80px);
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media screen and (max-width: 1530px) {
        width: 1020px;
    }

    @media screen and (max-width: 1024px) {
        width: 680px;
    }


    @media screen and (max-width: 750px) {
        min-height: 400px;
        width: 100%;
        flex-wrap: nowrap;
        overflow: auto;
        padding-left: 40px;
    }
`