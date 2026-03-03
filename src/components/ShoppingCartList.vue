<template>
    <div class="product-container" v-for="item in cartItems" :key="item.id">
        <img class="product-image" :src="item.imageName" alt="product image">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>
    <button class="checkout-button">Proceed to Checkout</button>
</template>

<script>
export default {
    name: 'ShoppingCartList',
    props: {
        cartItems: {
            type: Array,
            required: true,
        }
    }
}
</script>