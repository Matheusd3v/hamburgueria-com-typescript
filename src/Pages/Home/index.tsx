
import React, { useState } from 'react'
import { HomeContainer, LoginContainer } from './style'
import { BsBagCheck } from "react-icons/bs";
import Login from '../../Components/Login';
import ButtonDefault from '../../Components/ButtonDefault';
import RegisterForm from '../../Components/RegisterForm';
import elipses from '../../Assets/elipse.svg'
import { Link } from 'react-router-dom';
import ToastAnimated from '../../ui-lib/toast';

const HomePage = () => {
    const [showRegister, setshowRegister] = useState(false)

    const changeForm = () => {
        setshowRegister(!showRegister)
    }

    return (
        <>
        <ToastAnimated/>
        <HomeContainer>
            {!showRegister && <LoginContainer>
                <Login/>
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <ButtonDefault 
                    greyColor={true}
                    functionName={changeForm}
                >Cadastrar</ButtonDefault>
                <p>Da uma olhada nessas promoções <b><Link to='/promotions'>aqui</Link> </b>!</p>
            </LoginContainer>}

            <div className='descriptionContainer' >
                <div className='title' >
                    <h1>Burger</h1><h3>Kenzie</h3>
                </div>

                <div className='description'>
                    <div className='bagIcon'>
                        <BsBagCheck/>
                    </div>
                    <p>
                        A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.
                    </p>                  
                </div>

                <img src={elipses} alt='Elipses' />
            </div>
            {showRegister && <RegisterForm changeForm={changeForm} />}
        </HomeContainer>
        </>
    )
}

export default HomePage
