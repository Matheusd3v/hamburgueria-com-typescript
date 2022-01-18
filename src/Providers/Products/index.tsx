import { createContext, useContext, useState } from "react";
import api from "../../Services";
import { ChildrenProps, ProductsProps, ProductsProviderData, PromotionProduct } from "../../Types";
import { UserContext } from "../User";

export const ProductsContext = createContext<ProductsProviderData>({} as ProductsProviderData)

export const ProductsProvider = ({ children }: ChildrenProps) => {
    const { userToken } = useContext(UserContext)
    const [products, setProducts] = useState<ProductsProps[]>([])
    const [searchProducts, setSearchProducts] = useState<string>('')
    const [promotionList, setPromotionList] = useState<PromotionProduct[]>([])
    
    const callingProducts = () => {
        api
        .get('/products', {
            headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((resp) => {
            setProducts(resp.data)
        })
        .catch(e => console.log(e))
    }

    const callingPromotion = () => {
        api
        .get('/promotions')
        .then(resp => {
            setPromotionList(resp.data)
        })
    }

    return (
        <ProductsContext.Provider
            value={{
                products, 
                callingProducts, 
                searchProducts, 
                setSearchProducts, 
                promotionList,
                callingPromotion
            }} >
            {children}
        </ProductsContext.Provider>
    )
}