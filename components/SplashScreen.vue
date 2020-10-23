<template>
  <Container class="wrapper">
    <div class="splash">
      <div class="splash__logo">
        <Logo />
      </div>
      <div class="splash__text">Loading...</div>
    </div>
  </Container>
</template>

<script>
import Logo from '@/components/LogoIcon.vue'
import Container from '@/components/MyContainer.vue'

export default {
  name: 'SplashScreen',
  components: {
    Logo,
    Container,
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/variables'
@include keyframes(clinging)
  from
    opacity: 1

  to
   opacity: 0
.wrapper
  position: relative
  min-height: calc( 100vh - 80px )
.splash
  position: absolute
  top: -80px
  right: 0
  bottom: 0
  left: 0
  background: $originWhite
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column

  &__logo
    margin-bottom: 12px

  &__text
    color: $originGrey
    font-family: Poppins, sans-serif
    @include animation(clinging)
</style>
