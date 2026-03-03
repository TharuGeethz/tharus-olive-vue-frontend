<template>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/products">
        <button>Back to Products</button>
    </router-link>
</template>


<script>
export default {
    name: 'NotFoundPage',
}
</script>