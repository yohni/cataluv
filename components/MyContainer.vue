<template>
  <div class="container container--mx-auto">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.container
  &--mx-auto
    max-width: 960px
    margin: 0 auto
</style>
