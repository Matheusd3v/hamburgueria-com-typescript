import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";
import { CartData, CartProviderData, ChildrenProps, UpdateQuantityCart } from "../../Types";
import { showToast } from "../../ui-lib/toast";
import { UserContext } from "../User";

export const CartContext = createContext<CartProviderData>({} as CartProviderData)

export const CartProvider = ({ children }: ChildrenProps) => {
    const { userToken, userId } = useContext(UserContext)
    const [cartList, setCartList] = useState<CartData[]>([])
    const [open, setOpen] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const sumTotalPrice = () => {
        let total = cartList.reduce((acc, el) =>  acc + (el.price * el.quantity) ,0)
        setTotalPrice(total)
    }

    const callingCart = () => {
        api
        .get(`/users/${userId}/cart`, {
            headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(resp => {
            setCartList(resp.data)
        })
        .catch(e => console.log(e))
    }

    const addToCart = (data: CartData) => {
        api
        .post('/cart', data, {
            headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(resp => {
            console.log(resp)
            callingCart()
            showToast({ type: "success", message: "Adicionado ao carrinho!" });
        })
        .catch(e => {
            console.log(e)
            showToast({ type: "error", message: "Erro ao adicionar!" });
        })
    }

    const updateCart = (data: UpdateQuantityCart) => {
        const { id } = data; 
        api
        .patch(`/cart/${id}`, data, {
            headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(resp => {
            console.log(resp)
            callingCart()
            showToast({ type: "success", message: "Carrinho alterado!" });
        })
        .catch(e => {
            console.log(e)
            showToast({ type: "error", message: "Erro ao atualizar o carrinho!" });
        })
    }

    const removeFromCart = (data: CartData) => {
        const { id } = data; 
        api
        .delete(`/cart/${id}`, {
            headers: { Authorization: `Bearer ${userToken}` },
        })
        .then(resp => {
            console.log(resp)
            callingCart()
            showToast({ type: "success", message: "Produto removido!" });
        })
        .catch(e => {
            console.log(e)
            showToast({ type: "error", message: "Erro ao remover!" });
        })
    }

    useEffect(() => {
        sumTotalPrice()
    }, [callingCart, addToCart, updateCart, removeFromCart])

    return (
        <CartContext.Provider 
            value={{ 
                addToCart, 
                callingCart, 
                cartList, 
                removeFromCart, 
                updateCart,
                open,
                setOpen,
                totalPrice 
            }} 
        >
            {children}
        </CartContext.Provider>
    )
}