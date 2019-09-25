<template>
  <div class="topBar">
    <img src="/img/koa-logo.png" class="logo">
    <div class="left">
      <a class="link">
        koffein kakao
      </a>
      <a class="link">
        shop
      </a>
      <a class="link">
        koakult
      </a>

    </div>
    <div class="right">
      <a class="link">
        koakult
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "TopBar",
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.topBar {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 102px;
  background-color: grey;
  display: flex;
}
.left {
  padding-top: 45px;
  flex: 1 0 auto;
}
.right {
  padding-top: 45px;
  flex: 0 1 auto
}
.link {
  color: white;
  padding: 5px 15px;
}
.logo {
  width: 227px;
  float: left;
  flex: 0 1 auto;
  background-color: white;
}
</style>