<template>
  <div class="headingCTA">
    <div class="headingContainer">
      <span class="heading">{{ heading }}</span>
    </div>
    <div class="cta">{{ cta }}</div>
  </div>
</template>

<script>
export default {
  name: "Banner1",
  components: {
  },
  props: {
    heading: String,
    cta: String
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../hdui.scss';

.headingCTA {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
}
.headingContainer {
  flex: 0 1 auto;
  display: table;
  padding: 8px 13px;
  padding-bottom: 0;
  margin-bottom: 2px;
}
.heading {
  font-size: 30px;
  line-height: 43px;
  background: repeating-linear-gradient(transparent, transparent 0px, $white 0px, $white 43px, transparent 43px, transparent 45px)
}
.cta {
  background-color: #ffe904;
  padding: 8px 13px;
  color: #1a1a18;
  flex: 0 1 auto;
  margin-left: 23px;
  font-size: 18px;
  &:before {
    content: "> ";
  }
}
</style>