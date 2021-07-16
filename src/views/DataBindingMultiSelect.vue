<!--Select 데이터바인딩. v-model -->
<template>
  <!-- 여러개의 체크를 받고싶을때는 [] 배열선언으로 해주면된다! -->
  <div>
    <label><input type="checkbox" value="서울" v-model="multipleChecked"> 서울 </label>
    <label><input type="checkbox" value="부산" v-model="multipleChecked"> 부산 </label>
    <label><input type="checkbox" value="제주" v-model="multipleChecked"> 제주 </label>
    <br>
    <span>체크한 지역 : {{multipleChecked}}</span>

  </div>
</template>

<script>
export default {
  data() {
    return {
      multipleChecked : []
   };
  }
}
</script>

<style scoped>

</style>