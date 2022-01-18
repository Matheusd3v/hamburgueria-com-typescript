import styled from "styled-components";

export const CartContainer = styled.div`
    width: 500px;
    min-height: 212px;
    background: #F5F5F5;
    border-radius: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    header {
        width: 100%;
        height: 54px;
        background: #27AE60;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 25px;
        box-sizing: border-box;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;

        h3 {
            margin: 0;
        }
    }

    .bagEmpty {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333333;
        margin: auto 0;
        margin-top: 20px;

        p {
            color: #828282;
            margin: 5px 0;
        }
    }


    .totalPrice {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 2px solid #E0E0E0;

        span {
            color: #828282;
            font-weight: bold;
        }
    }

    .finalDescription {
        padding: 0 25px;
        box-sizing: border-box;
        

        button {
            margin-bottom: 25px;
        }
    }

    .mainContainer {
        max-height: 500px;
        overflow: auto;
    }

    @media screen and (max-width: 600px) {
        width: 85vw;
    }

`
export const Ancor = styled.a`
  font-size: 50px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 5px;
  right: 15px;
  transition: 1s;
`;

export const BackgroundPopUp = styled.div`
    background: rgba(51, 51, 51, 0.5);
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

`