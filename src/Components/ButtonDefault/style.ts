
import styled, { css } from 'styled-components'

interface StyleButtonProps {
    sizeFont?: boolean;
    gray?: boolean;
}

export const BtnDefault = styled.button<StyleButtonProps>`
    width: 100%;
    height: 60px;
    background: #27AE60;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    transition: 1s;
    cursor: pointer;

    :hover {
        background: #93D7AF;
    }

    ${(props) =>
        props.sizeFont && css`
        height: 40px;
    `}

    ${(props) => 
        props.gray && css`
        background: #E0E0E0;
        color: #828282;

        :hover {
            background: #828282;
            color: #E0E0E0;
        }
    `}
`