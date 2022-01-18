
import { CardProductCartProps } from '../../Types'
import { CardCart } from './style'
import { FaTrash } from "react-icons/fa";
import { CartContext } from '../../Providers/Cart';
import { useContext } from 'react';
import { GoPlus, GoDash } from "react-icons/go";
import ToastAnimated, { showToast } from '../../ui-lib/toast';

const CardProductCart = ({ datas }: CardProductCartProps) => {
    const { img, name, id,  quantity} = datas;
    const { updateCart, removeFromCart } = useContext(CartContext)

    const addOneQuantity = () => {
        let data = {
            id: id,
            quantity: quantity + 1,
        }

        updateCart(data)
    }

    const subOneQuantity = () => {
        if (quantity > 1) {
            let data = {
                id: id,
                quantity: quantity - 1,
            }

            updateCart(data)
        }
        else {
            showToast({ type: "warn", message: "Remova do carrinho!" });
        }
    }

    const removeProductFromCart = () => {
        removeFromCart(datas)
    }

    return (
        <> 
        <ToastAnimated/>
        <CardCart>
           
            <div className='informations'>
                <div className='backgroundImg' >
                    <img src={img} alt='name'/>
                </div>

                <div className='attributes' >
                    <h3>{name}</h3>

                    <span>
                        <button
                            onClick={subOneQuantity}
                        >
                            <GoDash/>
                        </button>

                        <p>{quantity}</p>

                        <button
                            onClick={addOneQuantity}
                        >
                            <GoPlus/>
                        </button>
                    </span>
                </div>
            </div>

            <button 
                className='trash'
                onClick={removeProductFromCart}
            >
                <FaTrash/> 
            </button>
        </CardCart>
        </>
    )
}

export default CardProductCart
