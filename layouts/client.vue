<template>
  <div class="client">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/MyNavbar.vue'

export default {
  name: 'LayoutClient',
  components: {
    Navbar,
  },
}
</script>

<style></style>
