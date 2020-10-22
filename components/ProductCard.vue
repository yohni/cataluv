<template>
  <div class="card">
    <img :src="image" alt="picture" class="card__img" />
    <div class="card__body">
      <div class="card__body__info">
        <div class="card__body__info__title">{{ name }}</div>
        <div class="card__body__info__price">IDR {{ formatPrice(price) }}</div>
      </div>
      <div class="card__body__action">
        <ButtonFav class="card__body__action__fav" />
        <button class="card__body__action__buy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFav from '@/components/ButtonFav.vue'

export default {
  name: 'ProductCard',
  components: {
    ButtonFav,
  },
  props: ['image', 'name', 'price'],
  data() {
    return {
      favorite: false,
    }
  },
  methods: {
    setFavorite() {
      this.favorite = !this.favorite
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'

.card
  background: $originWhite
  max-width: 375px
  width: 100%
  box-shadow: 0px 4px 8px rgba(133, 133, 133, 0.25)
  cursor: pointer
  transition: all .25s
  margin-bottom: 12px
  border-radius: 5px
  overflow: hidden

  &:hover
    box-shadow: 0px 8px 10px rgba(133, 133, 133, 0.25)

  &__img
    width: 375px
    height: 375px

  &__body
    padding: 16px
    display: flex
    justify-content: space-between
    align-items: center
    font-family: Poppins, sans-serif
    font-size: 16px

    &__info
      display: flex
      flex-direction: column
      color: $turnBlack

      &__title
        font-weight: 600

      &__price
        font-weight: 500

    &__action
      display: flex
      align-items: center

      &__buy
        border: none
        outline: none
        padding: 12px 32px
        background: $giantPink
        font-weight: 600
        border-radius: 3px
        color: $originWhite
        cursor: pointer
        transition: all .2s

        &:hover
          transform: translateY(-1px)
</style>
