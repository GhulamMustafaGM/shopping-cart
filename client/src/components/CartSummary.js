import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartModal from "./CartModal";
import { CartIcon } from "./Icons";

export default function CartSummary() {
    const { formattedTotalPrice, cartCount } = useShoppingCart();
    const [isOpen, setOpen] = React.useState(false);

    const toggleModal = () => setOpen(!isOpen);


}