<template>
  <div class="banner1">
    <Columns>
      <Column>
        <div class="content">
          <h2>Unsere Mission</h2>
          <div class="text">
            Hallo. Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein:
          </div>
          <Button1>
            mehr erfahren
          </Button1>
        </div>
      </Column>
      <Column>
        <img class="image" src="/assets/img/banner1.png">
      </Column>
    </Columns>
  </div>
</template>

<script>
import Button1 from './../atoms/Button1.vue'
import Columns from './../molecules/Columns.vue'
import Column from './../molecules/Column.vue'

export default {
  name: "Banner1",
  data() {
    return {
    }
  },
  components: {
    Button1,
    Columns,
    Column
  }
}
</script>

<style lang="scss" scoped>
.banner1 {
}
.content {
  margin: 50px 50px;
  box-sizing: border-box;
}
.text {
  margin-bottom: 40px;
}
.image {
  width: 100%;
}
</style>