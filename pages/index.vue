<template>
  <div>
    <Container class="container">
      <div class="category category--mb-24">
        <Heading class="category__heading">Top Categories</Heading>
        <div class="category__items">
          <div
            v-for="item in $store.state.categories"
            :key="item.id"
            class="category__item"
          >
            <CategoryItem :icon="item.icon" :name="item.name" />
          </div>
        </div>
      </div>
      <div class="foryou foryou--mb-24">
        <Heading class="foryou__heading">Just For You</Heading>
      </div>
      <div class="foryou__cards">
        <div
          v-for="item in $store.state.products"
          :key="item.id"
          class="foryou__card"
        >
          <nuxt-link :to="{ name: 'product-id', params: { id: item.id - 1 } }">
            <ProductCard
              :name="item.name"
              :image="item.images[0].url"
              :price="item.price"
            />
          </nuxt-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/MyContainer.vue'
import Heading from '@/components/SectionHeading.vue'
import CategoryItem from '@/components/CategoryItem.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  layout: 'client',
  components: {
    Container,
    Heading,
    CategoryItem,
    ProductCard,
  },
  created() {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchProducts')
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'
.container
  background: $originWhite
  min-height: calc( 100vh - 80px )

.category
  &--mb-24
    margin-bottom: 24px
    padding: 0 88px

    @include breakpoint-down($md)
      padding: 0px 24px

  &__items
    display: grid
    grid-template-columns: auto auto auto auto

    @include breakpoint-up($md)
      grid-template-columns: auto auto auto auto auto auto auto auto

.foryou
  &--mb-24
    margin-bottom: 24px
    padding: 0 88px

    @include breakpoint-down($md)
      padding: 0px 24px

  &__cards
    padding: 0 88px
    display: grid
    grid-template-columns: auto auto

    @include breakpoint-down($md)
      padding: 0px
      grid-template-columns: auto

  &__card
    display: flex
    justify-content: center
</style>
