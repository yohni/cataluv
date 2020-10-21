<template>
  <div class="nav">
    <Container class="nav__container">
      <div class="nav__content">
        <img
          src="/images/logo__cataluv.svg"
          alt=""
          class="nav__content__brand"
        />
        <div class="nav__content__back">
          <nuxt-link to="/">
            <span class="material-icons"> keyboard_backspace </span>
          </nuxt-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/MyContainer.vue'
export default {
  components: {
    Container,
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'
.nav
  width: 100%

  &__container
    background: $originWhite
    padding: 0 88px
    @include breakpoint-down($md)
      padding: 0 24px
  &__content
    padding: 24px 0
    display: flex
    justify-content: center
    align-items: center
    position: relative

    &__back
      cursor: pointer
      transition: all .2s
      position: absolute
      left: 24px
</style>
