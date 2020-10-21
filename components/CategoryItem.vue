<template>
  <div class="category-item">
    <img :src="icon" alt="icon" class="category-item__icon" />
    <div class="category-item__name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: ['icon', 'name'],
}
</script>

<style lang="sass" scoped>
.category-item
  cursor: pointer
  display: flex
  flex-direction: column
  align-items: center
  padding: 12px 0

  &__icon
    border-radius: 12px
    margin-bottom: 6px
    width: 64px
    height: 64px

  &__name
    font-family: Poppins, sans-serif
    font-size: 12px
</style>
