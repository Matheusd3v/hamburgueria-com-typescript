import { useContext} from "react";
import { IoIosClose } from "react-icons/io";
import Popup from "reactjs-popup";
import { Ancor, BackgroundPopUp, CartContainer } from './style'
import { ChildrenProps } from "../../Types";
import { CartContext } from "../../Providers/Cart";
import CardProductCart from "../CardProductCart";
import ButtonDefault from "../ButtonDefault";

const CartPopUp = ({ children }: ChildrenProps) => {
    const { open, setOpen, cartList, removeFromCart, totalPrice } = useContext(CartContext)
    
    const closeModal = () => setOpen(false);

    const removeAll = () => {
        cartList.forEach(el => removeFromCart(el))
    }

    return (
        <div>    
            {open && <BackgroundPopUp/> }       
            <Popup open={open} nested closeOnDocumentClick onClose={closeModal}>

            <CartContainer>
                <header>
                    <h3>Carrinho de Compras</h3>

                    <Ancor className="close" onClick={closeModal}>
                    <IoIosClose />
                    </Ancor>
                </header>

                { cartList.length < 1? (
                    <div className='bagEmpty' >                
                        <h3>Seu carrinho está vazio</h3>
                        <p>Adicione itens</p>
                    </div>
                    ) : (
                        <div className='mainContainer'>
                            {cartList.map(el => (
                                <CardProductCart key={el.id} datas={el}/>
                            ))}
                            <div className='finalDescription'>
                                <div className='totalPrice'>
                                    <h4>Total</h4>
                                    <span>R$ {totalPrice.toFixed(2).toString().replace( '.', ',')}</span>
                                </div>
                                <ButtonDefault
                                    greyColor={true}
                                    functionName={removeAll}
                                >
                                    Remover todos
                                </ButtonDefault>
                            </div>
                        </div>
                    ) 
                }       
                
            </CartContainer>
        
            </Popup>
        </div>
    )
}

export default CartPopUp
