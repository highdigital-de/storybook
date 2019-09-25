<template>
  <div>
    <TopBar />
    <Hero1 />
    <Banner1 />
  </div>
</template>

<script>
import TopBar from './TopBar.vue';
import Hero1 from './Hero1.vue';
import Banner1 from './Banner1.vue';

export default {
  name: "StartPageScreen",
  components: {
    TopBar,
    Hero1,
    Banner1
  }
}
</script>