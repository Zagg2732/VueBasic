<!--Select 데이터바인딩. v-model -->
<template>
  <div>
    <!-- city 의 값에맞게 option을 Mapping -->
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
  <div>
    <br><br><br>
    <!-- checkbox -->
    <label><input type="checkbox" v-model="checked"> {{checkboxText}}</label>
    <br><br>
    <h3>true-value와 false-value로 v-model 에 들어온 변수 데이터를 변경가능합니다 ! </h3>
    <p> 현재 checked의 value : {{checked}} </p>
    <label><input type="checkbox" v-model="checked" true-value="true-value can change v-model value" false-value="false-value can change v-model value too" >{{checked}}</label>
  </div>

</template>

<script>
export default {
  data() {
    return {
      city : "064",
      checked : true,
      checkboxText : '나는 v-model boolean값에 의해 체크되었어'
   };
  }
}
</script>

<style scoped>

</style>