<template>
    <h3>Shopping Cart Page</h3>
    <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
    </div>

    <div v-if="cartItems.length > 0">
        <div class="product-container" v-for="item in cartItems" :key="item.id">
            <img class="product-image" :src="item.imageName" alt="product image">
            <div class="details-wrap">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }}</p>
            </div>
            <button class="remove-button">Remove from Cart</button>
        </div>
        <button class="checkout-button">Proceed to Checkout</button>
    </div>
</template>

<script>

import { cartItems } from '../temp-data';

export default {
    name: 'ShoppingCartPage',
    data() {
        return { cartItems, }
    }
}
</script>