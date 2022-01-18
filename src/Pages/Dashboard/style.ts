import styled from "styled-components";

export const ProductsContainer = styled.div`
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