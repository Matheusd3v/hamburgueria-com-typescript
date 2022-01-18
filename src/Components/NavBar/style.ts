import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const BarNavigation = styled.nav`
    width: 100%;
    height: 80px;
    background: #E0E0E0;
    padding: 0 25px;
    box-sizing: border-box;

`

export const ContainerNavBar = styled.div`
    width: 100%;
    max-width: 1380px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    .mob {
        display: none;
    }

    .leftComponents {
        display: flex;
        align-items: center;

        .filterImg {
            width: 53px;
            height: 40px;
        }

        .btn {
            position: relative;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 20px;
            border: none;
            background: transparent;
            cursor: pointer;
        }

        .cartBtn span{
            background: #27AE60;
            width: 15px;
            height: 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-weight: bold;
            position: absolute;
            top: 8px;
            right: 3px;
        }

        .magnifier , .mob{
            display: none;
        }

        #activFilter {
            position: absolute;
            z-index: 2;
            left: 10px;
            width: 95%;

            .MuiOutlinedInput-adornedEnd {
                width: 95vw;
            }
        }
       
    }

    

    @media screen and (max-width: 800px) {
        .desktop {
            display: none;
        }

        .mob, .leftComponents .mob {
            display: block;
        }
    }

    @media screen and (max-width: 350px) {
        .leftComponents .btn {
            margin-left: 5px;
        }
    }

`

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
    
   
}) 