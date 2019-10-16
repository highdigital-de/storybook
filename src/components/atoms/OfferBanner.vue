<template>
  <div class="offerBanner" :style="style">
    <div class="main">
      {{ text }}
    </div>
    <div class="close">
      X
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferBanner",
  props: {
    text: {
      type: String,
      default: 'Advertisement text (please provide text via text prop).'
    },
    backgroundColor: {
      type: String,
      default: '#10cfc9'
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.offerBanner {
  width: 100%;
  min-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $offerbanner-padding;
  padding-right: $offerbanner-padding-right;
  box-sizing: border-box;
}
.text {
  flex: 1;
  margin: auto;
  text-align: center;
  width: 100%;
}
.close {
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    font-size: 18px;
  }
}
</style>