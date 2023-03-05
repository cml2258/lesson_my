<script setup lang="ts">
import { useProductStore, Product} from './store/products'

const productStore = useProductStore()
productStore.fetchAll()
</script>

<template>
  <ul>
    <li v-for="product in productStore.all" :key='product.id'>
      商品的名称{{product.title}}
      商品的得分{{product.rating.rate}}
    </li>
  </ul>

</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
