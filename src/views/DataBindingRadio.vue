<!--Radio 데이터바인딩. v-bind:value -->
<template>
  <!-- 체크박스와 라디오의 v-model 은 value가 아닌 checked 에 바인딩이 이루어진다. 따라서 value를 바인딩하고싶으면 v-bind:value를 사용해야한다.  -->
  <div>
      <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
      <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
      <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
      <br>
      <span>선택한 지역 : {{picked}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked : '',
      radioValue1 : "서울",
      radioValue2 : "부산",
      radioValue3 : "제주"
   };
  }
}
</script>

<style scoped>

</style>