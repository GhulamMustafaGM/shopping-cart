import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import useCheckout from "../utils/useCheckout";

export default function CheckoutCart() {
    const { cartCount } = useShoppingCart();
    const handleCheckout = useCheckout();


}