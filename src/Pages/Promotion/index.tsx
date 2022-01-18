
import React, { useContext, useEffect } from 'react'
import { MainContent, NavContainer } from './style'
import logoPromo from '../../Assets/Logo.png'
import { ProductsContext } from '../../Providers/Products'
import ProductCards from '../../Components/ProductCards'
import { Link } from 'react-router-dom'
import { HiLogin } from "react-icons/hi";

const PromotionPage = () => {
    const { callingPromotion, promotionList } = useContext(ProductsContext)

    useEffect(() => {
        callingPromotion()
    }, [])

    return (
        <>
        <NavContainer>
            <div className='container'>
                <img src={logoPromo} alt='Burger Kenzie'/>
                <h1>Promoções do dia</h1>
          
            <Link to='/'><HiLogin/></Link>
            </div>
        </NavContainer>

        <MainContent>
            {promotionList.map(el => (
                <ProductCards key={el.id} product={el}/>
            ))}
        </MainContent>
            
        </>
    )
}

export default PromotionPage
