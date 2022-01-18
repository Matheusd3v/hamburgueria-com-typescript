import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const FormLogin = styled.form`
    width: 450px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    h3 {
        margin: 0
    }

    div {
        margin: 0;
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }

`

export const TextFiledLogin = styled(TextField)({
    width: '100%',
    margin: '0',
    boxSizing: 'border-box',
    '& label.Mui-focused': {
        color: '#828282',
    },
    '& .MuiOutlinedInput-input': {
        height: '60px',
        boxSizing: 'border-box',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#000000',
    },
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: '#000000',
    },
    '&:hover fieldset': {
        borderColor: '#27AE60',
    },
    '&.Mui-focused fieldset': {
        borderColor: '#000000',
    },
    },
})