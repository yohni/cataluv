<template>
  <div class="heading">
    <h2 class="heading__h2">
      <slot />
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Heading',
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'

.heading
  &__h2
    font-size: 16px
    font-family: Poppins, sans-serif
    font-weight: 600
    color: $originGrey
    margin-bottom: 12px
</style>
