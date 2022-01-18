import { ChildrenProps } from "../Types"
import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Products"
import { UserProvider } from "./User"


const Providers = ({children}: ChildrenProps) => {
    return (
        <UserProvider>
            <ProductsProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </ProductsProvider>
        </UserProvider>
    )
}

export default Providers