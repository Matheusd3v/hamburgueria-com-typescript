import  { useContext, useEffect, useState } from 'react'
import { BarNavigation, ContainerNavBar} from './style'
import logo from '../../Assets/Logo.png'
import logoMob from '../../Assets/LogoMob.png'
import cartIcon from '../../Assets/cart.svg'
import logoutIcon from '../../Assets/logout.svg'
import searchIcon from '../../Assets/searchMob.png'
import { CartContext } from '../../Providers/Cart'
import SearchField from '../SearchField'
import { UserContext } from '../../Providers/User'
import { ProductsContext } from '../../Providers/Products'

const NavBar = () => {
    const { callingPromotion } = useContext(ProductsContext)
    const { logout } = useContext(UserContext)
    const { cartList, callingCart, setOpen } = useContext(CartContext)
    const [showInput, setshowInput] = useState(false)

    useEffect(() => {
        callingCart()
    }, [callingPromotion])

    return (
        <BarNavigation>
            <ContainerNavBar>

            <img className='desktop'  src={logo} alt='Burguer Kenzie'/>

            <img className='mob'  src={logoMob} alt='Burguer Kenzie'/>

            <div className='leftComponents' >
                <span className='desktop'>
                    <SearchField/>
                </span>

                <button 
                    className='btn  mob'
                    onClick={() => setshowInput(!showInput)}
                >
                    <img src={searchIcon} alt='magnifier'/>
                </button>

                {showInput && <span className='mob' id='activFilter' >
                    <SearchField active={showInput} callback={() => setshowInput(!showInput)} />
                </span>}

                <button 
                    className='btn cartBtn'
                    onClick={() => setOpen(true)}
                    >
                    <span>{cartList.length}</span>
                    <img src={cartIcon} alt='cart' />
                </button>

                <button 
                    className='btn logoutBtn'
                    onClick={logout} 
                >
                    <img src={logoutIcon} alt='Door open' />
                </button>
                
            </div>            

            </ContainerNavBar>
        </BarNavigation>
    )
}

export default NavBar
