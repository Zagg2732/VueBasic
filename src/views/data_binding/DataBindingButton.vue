<!--Select 데이터바인딩. v-model -->
<template>
  <div>
    <input type="text" v-model="textValue"/>
    <p>↓ textValue가 빈 문자열이면 버튼 비활성화 ↓</p>
    <button type="button" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textValue : ""
   };
  }
}
</script>

<style scoped>

</style>