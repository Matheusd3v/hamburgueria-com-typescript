import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const FormRegister = styled.form`
    width: 450px;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 30px;
    box-sizing: border-box;
    border: 1px solid #E0E0E0;
    border-radius: 5px;

    h3, div {
        margin:0;
    }

    .headerForm {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 14px;
            color: #828282;
            font-weight: 600;
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 950px) {
        margin-top: 15px;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 550px) {
        width: 100%;
    }

`

export const TextFildRegister = styled(TextField)({
    width: '100%',
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