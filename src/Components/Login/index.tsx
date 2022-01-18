
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserData } from "../../Types";
import { FormLogin, TextFiledLogin } from "./style";
import { BtnDefault } from "../ButtonDefault/style";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import ToastAnimated from "../../ui-lib/toast";

const Login = () => {
    const { sigIn } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string()
            .required('Preenchimento obrigatório!')
            .email('Email inválido!'),
        password: yup.string()
            .required('Preenchimento obrigatório!')
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UserData>({ resolver: yupResolver(formSchema) });

    const onSubmitFunction = ( data: UserData) => {
        sigIn(data)
        reset();
    }

    return (
        <>
        <ToastAnimated/>
        <FormLogin onSubmit={handleSubmit(onSubmitFunction)}>
            <h3>Login</h3>
            <TextFiledLogin
                label="Email"
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextFiledLogin
                label="Senha"
                type='password'
                margin="normal"
                variant="outlined"
                size="small"
                color="primary"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            />

            <BtnDefault  >Logar</BtnDefault>
        </FormLogin>
        </>
    ) 
}

export default Login
