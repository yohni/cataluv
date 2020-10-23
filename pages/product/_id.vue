<template>
  <!-- <div v-if="$fetchState.pending" class="fetch__pending">Please Wait</div> -->
  <!-- <div v-else-if="$fetchState.error" class="fetch__failed">
    Fetching data failed
  </div> -->
  <SplashScreen v-if="$fetchState.pending" />
  <Container v-else>
    <div v-if="data" class="product">
      <div class="product__image">
        <ImagePrev :images="data && data.images" />
      </div>
      <div class="product__detail">
        <h1 class="product__detail__name">
          {{ data && data.name }}
        </h1>
        <div class="product__detail__category">
          {{
            $store.getters.getCategoryById(data.category_id) &&
            $store.getters.getCategoryById(data.category_id).name
          }}
          &bull;
          {{ data.genre }}
        </div>
        <div class="product__detail__size size label">
          <div class="size__label">Size</div>
          <div class="size__value value">
            <span v-for="(item, idx) in data.size" :key="item"
              >{{ item }}<span v-if="data.size.length - 1 > idx">, </span>
            </span>
          </div>
        </div>
        <div class="product__detail__material material label">
          <div class="material__from">Material: {{ data.material.name }}</div>
          <div class="material__description material value">
            {{ data.material.description }}
          </div>
        </div>

        <div class="product__detail__price">
          IDR {{ formatPrice(data.price) }}
        </div>

        <div class="product__action">
          <div class="product__action__favorite">
            <ButtonFav />
          </div>
          <button class="product__action__buy">Buy</button>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import ImagePrev from '@/components/ImagePrev.vue'
import Container from '@/components/MyContainer.vue'
import ButtonFav from '@/components/ButtonFav.vue'
import SplashScreen from '@/components/SplashScreen.vue'

export default {
  name: 'Product',
  components: {
    ImagePrev,
    Container,
    ButtonFav,
    SplashScreen,
  },
  async fetch() {
    const { id } = this.$route.params
    this.data = await this.$axios
      .get(`https://cataluv-94a78.firebaseio.com/product/${id}.json`)
      .then((resp) => {
        return resp.data
      })
  },
  data() {
    return {
      data: null,
    }
  },
  created() {
    this.$store.dispatch('fetchCategories')
  },
  methods: {
    async fetchProduct(id) {
      const resp = await this.$axios.get(
        `https://cataluv-94a78.firebaseio.com/product/${id}.json`
      )
      if (resp) {
        this.data = resp.data
      }
    },
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
  head() {
    return {
      title: this.data && this.data.name + ' | Cataluv - Shop for moslem wears',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Mix and create your own fashion and let the world now that you are the most colorfull one.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.data && this.data.name + ' | Cataluv - Shop for moslem wears',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.data && this.data.images[0].url,
        },
      ],
    }
  },
  layout: 'detail',
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'

.product
  background: $originWhite
  min-height: calc( 100vh - 80px )
  display: flex
  flex-wrap: wrap
  justify-content: space-around

  &__image
    max-width: 40%
    padding: 0 0 0 88px

    @include breakpoint-down($md)
      max-width: 100%
      padding: 0

  &__detail
    max-width: 60%
    padding: 24px

    &__name
      color: $originBlack
      opacity: 0.8
      font-family: Poppins, sans-serif
      font-size: 18px
      font-weight: bold

    &__category
      text-transform: capitalize
      font-family: Open-sans, sans-serif
      font-weight: 300
      font-size: 14px
      color: $originBlack
      opacity: 0.6
      margin-bottom: 12px

    @include breakpoint-down($md)
      max-width: 100%

    .label
      font-family: Poppins, sans-serif
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: $originBlack
      opacity: 0.8

    .value
      font-family: Open Sans
      font-style: normal
      font-weight: 300
      font-size: 14px
      line-height: 19px
      color: $originBlack
      opacity: 0.6
      margin-bottom: 12px
      max-width: 300px

    &__price
      color: $giantPink
      font-family: Poppins
      font-style: normal
      font-weight: 500
      font-size: 20px
      line-height: 30px
      margin-bottom: 24px

  &__action
    display: flex
    align-items: center
    justify-content: flex-end

    &__buy
      padding: 12px 120px
      background: $giantPink
      outline: none
      border: none
      border-radius: 5px
      color: $originWhite
      font-family: Poppins
      font-style: normal
      font-weight: 600
      font-size: 16px
      line-height: 24px
      transition: all .2s
      cursor: pointer
      &:hover
        transform: translateY(-1px)
</style>
