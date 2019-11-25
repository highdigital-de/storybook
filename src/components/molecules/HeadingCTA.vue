<template>
  <div class="headingCTA">
    <div class="headingContainer">
      <span class="heading">{{ heading }}</span>
    </div>
    <div class="cta">
    <Button4 icon>{{ cta }}</Button4>
    </div>
  </div>
</template>

<script>
import Button4 from './../atoms/Button4.vue'

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
  components: {
    Button4
  }
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
  margin-bottom: 0px;
}
.heading {
  font-size: 30px;
  line-height: 43px;
  font-family: Poets;
  background: repeating-linear-gradient(transparent, transparent 0px, $white 0px, $white 43px, transparent 43px, transparent 65px);
  padding-top: 6px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.cta {
  padding-left: 13px;
  color: #1a1a18;
  flex: 0 1 auto;
  margin-left: 23px;
}
</style>