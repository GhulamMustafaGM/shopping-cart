import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "../utils/formatProductPrice";

export default function CartItem({ cartItem }) {
    const { setItemQuantity } = useShoppingCart();

    function handleSetItemQuantity(event) {
        setItemQuantity(cartItem.sku, event.target.value);
    }


}