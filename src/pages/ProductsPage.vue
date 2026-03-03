<template>
    <h1>Products</h1>
    <products-list :products="products" />
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import { products } from '../temp-data';

export default {
    name: 'ProductsPage',
    data() {
        return {
            products,
        }
    },
    components: {
        ProductsList,
    }
}
</script>