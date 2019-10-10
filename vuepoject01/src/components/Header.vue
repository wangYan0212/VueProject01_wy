<template>
    <fieldset>
      <legend>
        <h2>这是header</h2>
        <router-link :to="{path:'/cart'}">购物车</router-link>
        <router-link :to="{path: '/center'}">个人中心</router-link>
        <router-link :to="{path:'/dd'}">订单信息</router-link>
      </legend>
    </fieldset>

</template>

<script>

    export default {
        name: "Header",
    }
</script>

<style scoped>

</style>
