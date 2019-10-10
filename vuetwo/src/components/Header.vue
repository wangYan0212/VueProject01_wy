<template>
    <fieldset>
      <legend>
        <h2>这是谁的头！</h2>
        <router-link :to="{path:'/home'}">首页</router-link>
        <router-link :to="{path:'/center'}">个人中心</router-link>
      </legend>
    </fieldset>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
