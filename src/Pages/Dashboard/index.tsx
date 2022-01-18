
import { useContext, useEffect, useState } from 'react'
import CartPopUp from '../../Components/CartPopUp'
import NavBar from '../../Components/NavBar'
import ProductCards from '../../Components/ProductCards'
import { ProductsContext } from '../../Providers/Products'
import { PromotionProduct } from '../../Types'
import ToastAnimated from '../../ui-lib/toast'
import { ProductsContainer } from './style'

const Dashboard = () => {
    const { callingProducts, products, promotionList, callingPromotion } = useContext(ProductsContext)
    const { searchProducts } = useContext(ProductsContext)
    const [allProducts, setAllProducts] = useState<PromotionProduct[]>([])

    useEffect(() => {
        callingProducts()
        callingPromotion()        
    }, [])    

    const joinProductLists = () => {
        setAllProducts([...products, ...promotionList])
    }

    useEffect(() => {
        joinProductLists()
    }, [callingPromotion])

    return (
        <>
        <NavBar/>
        <ProductsContainer>
            <ToastAnimated/>
            {allProducts.filter((el) => {
                if (searchProducts === '') {
                    return el
                }
                else if (el.name.toLowerCase().includes(searchProducts.toLocaleLowerCase())){
                    return el
                }
            }).map(el => (
                <ProductCards key={el.id} product={el}/>
            ))}

            <CartPopUp/>
        </ProductsContainer>
        </>
    )
}

export default Dashboard
