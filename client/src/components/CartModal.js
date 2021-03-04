// @ts-nocheck
import React from "react";
import Modal from "react-modal";
import { useShoppingCart } from "use-shopping-cart";
import useCheckout from "../utils/useCheckout";
import CartItem from "./CartItem";

Modal.setAppElement("#root");

export default function CartModal({ isOpen, toggleModal }) {
    const { cartCount, formattedTotalPrice, cartDetails } = useShoppingCart();
    const handleCheckout = useCheckout();

    const cartItems = Object.keys(cartDetails).map((key) => cartDetails[key]);


}