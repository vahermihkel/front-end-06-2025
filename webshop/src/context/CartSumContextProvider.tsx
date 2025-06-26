import { ReactNode, useState } from "react"
import { CartSumContext } from "./CartSumContext"
import { Product } from "../models/Product";

export const CartSumContextProvider = ({children}: {children: ReactNode}) => {
  const [cartSum, setCartSum] = useState(calculateCartSum());

  function calculateCartSum() {
    const products: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalPrice = products.reduce((sum, product) => sum + Number(product.price || 0), 0);
    return totalPrice;
  }

  const empty = () => {
    setCartSum(0);
  }

  const add = (price: number) => {
    setCartSum(cartSum + price);
  }

  const minus = (price: number) => {
    setCartSum(cartSum - price);
  }

  return (
    <CartSumContext.Provider value={{cartSum, empty, add, minus}}>
      {children}
    </CartSumContext.Provider>
  )
}