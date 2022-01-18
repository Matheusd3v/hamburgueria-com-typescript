import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../Services';
import { UserData, UserProviderData, ChildrenProps } from '../../Types';
import { showToast } from '../../ui-lib/toast';

export const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({children}: ChildrenProps) => {
    const history= useHistory();

    const [userToken, setUserToken] = useState<string>(
        () => localStorage.getItem("token") || ""
    );

    const [userId, setuserId] = useState<string>(
        () => localStorage.getItem("userId") || ''
    )

    const sigIn = (data: UserData) => {
        api
        .post('/login', data)
        .then((resp) => {
            localStorage.setItem("token", resp.data.accessToken);
            localStorage.setItem("userId", resp.data.user.id);
            setUserToken(resp.data.accessToken);
            setuserId(resp.data.user.id)
            history.push('/dashboard')
            showToast({ type: "success", message: "Seja bem-vindo(a)!" });
        })
        .catch((e) => {
            console.log(e)
            showToast({ type: "error", message: "Error! Email ou senha incorretos!" });
        })
    }

    const registerUser = (data: UserData) => {
        api.post('/register', data)
        .then(resp => {
            showToast({ type: "success", message: "Cadastro efetuado!" });
        })
        .catch(e => {
            console.log(e)
            showToast({ type: "error", message: "Erro ao cadastrar!" });
        })
    }

    const logout = () => {
        localStorage.clear();
        setUserToken('');
        setuserId('');
        showToast({ type: "success", message: "Até breve!" });
        history.push('/');        
    }

    return (
        <UserContext.Provider value={{
            userToken, 
            sigIn, 
            userId, 
            logout, 
            registerUser
            }} 
        >
            {children}
        </UserContext.Provider>
    )
   
}