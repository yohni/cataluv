<template>
  <button type="button" class="fav" @click="setFavorite">
    <span
      class="material-icons fav__icon"
      :class="{ fav__icon__favorited: favorite }"
      >{{ !favorite ? 'favorite_border' : 'favorite' }}</span
    >
  </button>
</template>

<script>
export default {
  data() {
    return {
      favorite: false,
    }
  },
  methods: {
    setFavorite() {
      this.favorite = !this.favorite
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'
.fav
  margin-right: 14px
  border: none
  outline: none
  background: none
  cursor: pointer

  &__icon
    color: $smoothGrey
    transition: all .2s

    &__favorited
      color: $giantPink
</style>
