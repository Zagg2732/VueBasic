<!-- Elements Attribute 바인딩은 v-bind 사용 -->
<template>
  <div>
    <!-- img Attribute src 에 바인딩! -->
    <img v-bind:src="imgSrc"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc : "https://mblogthumb-phinf.pstatic.net/MjAxOTAxMThfMTQ2/MDAxNTQ3NzcyMTQ2MjU2.SB61AFroby9ljr4ZHF26THJSKph3rQwlIJj0-TRJ0D0g.r8hrrDZtFZ7xa3K9X1nKZo-CG69NN4vW-68SL35kN6og.JPEG.pola0216/43585514_2261668924110804_3027692200071745663_n.jpg?type=w800"
   };
  }
}
</script>

<style scoped>

</style>