<template>
    <h3>Shopping Cart Page</h3>
    <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
    </div>

    <div v-if="cartItems.length > 0">
        <ShoppingCartList :cartItems="cartItems" />
    </div>
</template>

<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import { cartItems } from '../temp-data';

export default {
    name: 'ShoppingCartPage',
    data() {
        return { cartItems, }
    },
    components: { ShoppingCartList }
}
</script>