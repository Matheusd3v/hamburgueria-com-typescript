import { ReactComponentElement, ReactNode, SetStateAction } from "react";

export interface UserData {
    email: string;
    name?: string;
    password: string;
}

export interface ButtonProps {
    children: ReactNode;
    functionName?: () => void;
    mediumSize?: boolean;
    greyColor?: boolean;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface ChildrenProps {
    children?: ReactNode;
}

export interface UserProviderData {
    userToken: string;
    userId: string;
    sigIn: (data: UserData) => void;
    logout: () => void;
    registerUser: (data: UserData) => void;
}

export interface ProductsProps {
    id: number;
    name: string;
    img: string;
    type: string;
    price: number;
    quantity: number;
    last_price?: number;
}

export interface ProductsProviderData {
    products: ProductsProps[];
    callingProducts: () => void;
    searchProducts: string;
    setSearchProducts: (data: string) => void;
    promotionList: PromotionProduct[];
    callingPromotion: () => void;
}

export interface ProductCardProps {
    product: ProductsProps;
}

export interface CartData {
    id: number;
    name: string;
    img: string;
    type: string;
    price: number;
    quantity: number
    userId: string;
}

export interface CartProviderData {
    cartList: CartData[];
    callingCart: () => void;
    addToCart: (data: CartData) => void;
    updateCart: (data: UpdateQuantityCart) => void;
    removeFromCart: (data: CartData) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    totalPrice: number;
}

export interface UpdateQuantityCart {
    id: number;
    quantity: number
}

export interface SearchProps {
    active?: boolean;
    callback?: () => void;
}

export interface CardProductCartProps {
    datas: CartData;
}

export interface RoutesProps {
    isPrivate?: boolean;
    exact?: true; 
    path: string; 
    component: () => JSX.Element;
}

export interface PromotionProduct {
    id: number;
    name: string;
    img: string;
    type: string;
    price: number;
    last_price?: number;
    quantity: number;
}

export interface AllProductsList {
    allProducts: PromotionProduct[]
}

export interface ToastProps {
    type: string;
    message: string;
}