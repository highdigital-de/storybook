<template>
  <div class="topBar" :class="{onTop}" :style="style">
    <div class="logoContainer">
      <img src="/img/koa-logo.png" class="logo" />
    </div>
    <div class="left">
      <a class="link">koffein kakao</a>
      <a class="link">shop</a>
      <a class="link">koakult</a>
    </div>
    <div class="right">
      <IconButton :dark="!onTop" icon="person" />
      <IconButton :dark="!onTop" icon="cart" batch="1" />
      <IconButton :dark="!onTop" icon="hamburger" />
    </div>
  </div>
</template>

<script>
import IconButton from './../molecules/IconButton.vue'

export default {
  name: "TopBar",
  props: {
    marginTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      onTop: true
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
    IconButton
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.topBar {
  position: fixed;
  left: 0;
  right: 0;
  height: 102px;
  background-color: $turquoise;
  color: $black;
  display: flex;
  z-index: 10;
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
}
.right {
  padding-top: 33px;
  padding-right: 33px;
  flex: 0 1 auto;
}
.link {
  color: $black;
  padding: 5px 15px;
}
.logoContainer {
  background-color: white;
  padding-top: 20px;
  padding-left: 70px;
  box-sizing: border-box;
  flex: 0 1 auto;
  transform: rotate(-6deg) translateY(-12px);
  width: 227px;
  height: 90px;
}
.logo {
  width: 120px;
  height: auto;
  transform: rotate(6deg);
}
</style>