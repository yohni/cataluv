<template>
  <div class="client">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/DetailNav.vue'

export default {
  name: 'LayoutClient',
  components: {
    Navbar,
  },
}
</script>

<style></style>
