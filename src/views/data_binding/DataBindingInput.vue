<!--Form 입력 데이터바인딩. v-model -->
<template>
  <div>
    <p>데이터 바인딩의 value 값은 v.model을 씁니다</p>
    <input type="text" v-model="valueModel">
    <p>↓ 문자가 아니라 숫자로 데이터를 관리하고 싶을때는 v-model.number를 씁니다 ↓</p>
    <input type="number" v-model.number = "numberModel">
    <p>↓ textarea 는 v.model 을 씁니다 ↓</p>
    <textarea v-model="message"></textarea>

  </div>
</template>

<script>
export default {
  data() {
    return {
      valueModel: 'South Korea',
      numberModel: 12345,
      message: 'textarea에 들어갈 message를 쓰는중입니다'
   };
  }
}
</script>

<style scoped>

</style>