<template>
  <div class="nutritionInformation">
    <table>
      <tr>
        <td>Brennwert</td>
        <td class="data">{{info.calories}}</td>
      </tr>
      <tr>
        <td>Fett</td>
        <td class="data">{{info.fat}}</td>
      </tr>
      <tr>
        <td>davon gesätigte Fettsäuren</td>
        <td class="data">{{info.saturated}}</td>
      </tr>
      <tr>
        <td>Kohlenhydrate</td>
        <td class="data">{{info.carbohydrates}}</td>
      </tr>
      <tr>
        <td>davon Zucker</td>
        <td class="data">{{info.sugars}}</td>
      </tr>
      <tr>
        <td>Eiweiß</td>
        <td class="data">{{info.protein}}</td>
      </tr>
      <tr>
        <td>Salz</td>
        <td class="data">{{info.salt}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "NutritionInformation",
  props: {
    info: {
      type: Object,
      default: {
        calories: "1513 kkJ / 360 kcal",
        fat: "5,9g",
        saturated: "3,5g",
        carbohydrates: "53g",
        sugars: "44g",
        protein: "14g",
        salt: "<0,03g"
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../../hdui.scss";

.nutritionInformation {
  @media only screen and (min-width: $breakpoint-mobile-landscape) {
  }
}
table { 
  border-collapse: collapse;
  width: 100%; 
}
tr:not(:last-child) {
  border-bottom: solid 1px #f6dd8e;
}
.data {
  float: right;
}
</style>