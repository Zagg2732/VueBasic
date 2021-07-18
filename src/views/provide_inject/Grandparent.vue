<template>
  <parent></parent>
</template>

<script>
import Parent from "./Parent";

export default {
  name: "grandparent", //컴포넌트 이름
  components: {Parent}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      items : ['LSJ', 'KSY', 'Ahri', 'Docker']
    };
  },
  provide() {
    return {
      itemLength : this.items.length,
      itemOne : this.items[0],
      itemTwo : this.items[1],
      itemThree : this.items[2],
      itemFour : this.items[3]
    };
  }
}
</script>

<style scoped>

</style>

