
import React, { useContext } from 'react'
import ButtonDefault from '../ButtonDefault'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterData } from '../../Types';
import { FormRegister, TextFildRegister } from './style';
import { UserContext } from '../../Providers/User';
import ToastAnimated from '../../ui-lib/toast';

interface RegisterProps {
    changeForm: () => void;
}

const RegisterForm = ({ changeForm }: RegisterProps) => {
    const { registerUser } = useContext(UserContext)

    const formSchema = yup.object().shape({
        name: yup.string()
            .required('Preenchimento obrigatório!'),
        email: yup.string()
            .required('Preenchimento obrigatório!')
            .email('Email inválido!'),
        password: yup.string()
            .required('Preenchimento obrigatório!').min(6, 'Deve ter no mínimo 6 dígitos!'),
        passwordConfirmation: yup.string()
            .required('Preenchimento obrigatório!')
            .oneOf([yup.ref('password')], 'Senhas inconsistentes!'),
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterData>({ resolver: yupResolver(formSchema) });

    const onSubmitFunction = ( data : RegisterData) => {
        const {name, email, password} = data;
        const userRegister = {name, email, password}
        registerUser(userRegister)
        reset();
    }    

    return (
        <>
        <ToastAnimated/>
        <FormRegister onSubmit={handleSubmit(onSubmitFunction)}>
            <div className='headerForm' >
                <h3>Cadastro</h3>
                <button onClick={changeForm}>Retornar para o login</button>
            </div>

            <TextFildRegister
                label="Nome"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />

            <TextFildRegister
                label="Email"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextFildRegister
                label="Senha"
                margin="normal"
                variant="outlined"
                type='password'
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            />

            <TextFildRegister
                label="Confirmar Senha"
                margin="normal"
                variant="outlined"
                type='password'
                size="small"
                color="primary"
                {...register("passwordConfirmation")}
                error={!!errors.passwordConfirmation}
                helperText={errors.passwordConfirmation?.message}
            />
            <ButtonDefault greyColor={true} >Cadastrar</ButtonDefault>
        </FormRegister>
        </>
    )
}

export default RegisterForm
