<template>
  <div>
    <!-- 插槽 -->
    <Layout>
      <!-- 具名插槽 -->
      <template v-slot:header>头部标题</template>
      <!-- 匿名插槽 -->
      <template>中间内容部分</template>
      <!-- 作用域插槽 -->
      <!-- 对象解构 -->
      <template v-slot:footer="{fc}">{{fc}}</template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/slots/Layout.vue";

export default {
  components: {
    Layout
  }
};
</script>

<style scoped>
</style>