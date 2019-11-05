<template>
  <div class="topBarContainer">
    <transition name="slide-fade">
      <div class="banner" v-if="banner && !bannerClosed">
        <OfferBanner :text="banner" @close="bannerClosed = true" />
      </div>
    </transition>
    <div class="topBar" :class="{onTop}" :style="style">
      <div class="logoContainer">
        <img src="/assets/img/koa-logo.png" class="logo" />
      </div>
      <div class="left">
        <slot name="left">
          <a class="link">koffein kakao</a>
          <a class="link">shop</a>
          <a class="link">koakult</a>
        </slot>
      </div>
      <div class="right">
        <slot name="right">
          <IconButton :dark="!onTop" icon="person" />
          <IconButton :dark="!onTop" icon="cart" batch="1" />
          <IconButton :dark="!onTop" icon="hamburger" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import OfferBanner from './../atoms/OfferBanner.vue'
import IconButton from './../molecules/IconButton.vue'

export default {
  name: "TopBar",
  props: {
    marginTop: {
      type: Number,
      default: 0
    },
    banner: String
  },
  data() {
    return {
      onTop: true,
      bannerClosed: false
    }
  },
  computed: {
    style() {
      return {
        top: this.marginTop
      }
    }
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY == 0) {
        this.onTop = true
      }
      else {
        this.onTop = false
      }
    }
  },
  components: {
    IconButton,
    OfferBanner
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";
.topBarContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.topBar {
  height: 102px;
  background-color: $turquoise;
  color: $black;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;
  a {
    text-decoration: none;
  }
  &.onTop {
    background-color: transparent;
    .link {
      color: $white;
    }
  }
}
.left {
  padding-top: 33px;
  flex: 1 0 auto;
  display: none;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    display: block;
  }
}
.right {
  padding-top: 15px;
  padding-right: 0px;
  flex: 0 1 auto;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    padding-top: 20px;
    padding-right: 25px;
  }
  button, a {
    float: right;
  }
}
.link {
  color: $black;
  padding: 5px 15px;
}
.logoContainer {
  margin-left: -60px;
  background-color: white;
  padding-top: 20px;
  padding-left: 70px;
  box-sizing: border-box;
  flex: 0 1 auto;
  transform: rotate(-6deg) translateY(-12px) scale(0.7);
  width: 197px;
  height: 90px;
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
    margin-left: -30px;
  }
}
.logo {
  width: 120px;
  height: auto;
  transform: rotate(6deg);
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  margin-top: -50px;
}
</style>