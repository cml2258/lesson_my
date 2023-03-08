<template>
  <div>
    {{ JSON.stringify(banners) }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  banners: {
    type: Array,
    default : []
  }
})
</script>

<style scoped>

</style>