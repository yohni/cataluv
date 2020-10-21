<template>
  <div class="preview">
    <img :src="viewedImage" alt="no image" class="preview__img" />
    <div v-if="images && images.length > 1" class="preview__nav">
      <div
        v-for="(item, idx) in images"
        :key="item.url"
        class="preview__nav__item"
        :class="{ preview__nav__item__actived: idx === activedImage }"
        @click="setPrev(idx)"
      >
        <img :src="item.url" alt="" class="preview__nav__item__img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagePrev',
  props: ['images'],
  data() {
    return {
      activedImage: 0,
    }
  },
  computed: {
    viewedImage() {
      return this.images[this.activedImage].url
    },
  },
  methods: {
    setPrev(index) {
      this.activedImage = index
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'
.preview
  &__img
    max-width: 375px
    width: 375px
    height: 375px
    box-sizing: border-box
  &__nav
    display: flex
    align-items: center
    justify-content: center
    margin-top: 12px

    &__item
      overflow: hidden
      margin: 0 6px
      cursor: pointer
      transition: all .2s
      border: $smoothGrey solid 2px

      &__actived
        border: $giantPink solid 2px
        border-radius: 12px

      &:hover
        opacity: 0.8

      &__img
        width: 48px
        height: 48px
        border-radius: 5px
</style>
