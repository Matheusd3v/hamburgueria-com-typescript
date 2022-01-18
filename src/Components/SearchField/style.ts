import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const InputFilter = styled(TextField)({    
    '& .MuiOutlinedInput-inputAdornedEnd': {
        height: '60px',
        boxSizing: 'border-box',      
    },
    '& .MuiOutlinedInput-adornedEnd': {
        width: '365px',
        background: '#F5F5F5'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#333333',
        },
    },
    '& .closeInput': {
        background: '#27AE60',
        border: 'none',
        width:'53px',
        height: '40px',
        borderRadius: '5px',
        marginLeft: '5px',
        color: '#FFFFFF',
        fontWeight: 'bold',
        '& svg': {
            width: '20px',
            height: '20px',
        }
    }
    
   
}) 