
import { useContext } from 'react'
import { useHistory } from 'react-router';
import { CartContext } from '../../Providers/Cart';
import { UserContext } from '../../Providers/User';
import { ProductCardProps } from '../../Types'
import { showToast } from '../../ui-lib/toast';
import ButtonDefault from '../ButtonDefault';
import { CardProduct } from './style';

const ProductCards = ({ product }: ProductCardProps) => {
    const { img, name, price, type, last_price } = product;
    const { userId } = useContext(UserContext)
    const { addToCart, cartList } = useContext(CartContext);
    const history = useHistory()

    const pushToCart = () => {        

        if (!userId) {
            history.push('/')
            showToast({ type: "warn", message: "Faça o login para adicionar ao carrinho!" });
        } else {
            const newData = {...product, "userId": userId}
            newData.quantity = 1;

            if (cartList.some((product) => product.name === newData.name)) {   
                showToast({ type: "warn", message: "Produto ja adicionado!" });
            } else {
                addToCart(newData)  
            } 
        }
        
    }

    return (
        <CardProduct>
            <div className='photoContainer' >
                <img src={img} alt='name' />
            </div>

            <div className='description' >
                <h3>{name}</h3>
                <p>{type}</p>
                {last_price && <span className='last_price'>De: R$ {last_price}</span>}
                <span>{last_price && "Por:"} R$ {price}</span>
            </div>            

            <ButtonDefault 
                mediumSize={true}
                greyColor={true}
                functionName={pushToCart}
            >
                Adicionar
            </ButtonDefault>
        </CardProduct>
    )
}

export default ProductCards
