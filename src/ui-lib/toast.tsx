import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProps } from '../Types';


const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: '#155BCB';
  }
.Toastify__toast--success {
    background: '#168821';
  }
.Toastify__toast--warning {
    background: '#FFCD07';
  }
.Toastify__toast--error {
    background: '#E60000';
  }
`;

export const showToast = ({ type, message }: ToastProps) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};


export default function ToastAnimated() {
  return <Toast />;
}