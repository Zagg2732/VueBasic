<template>
  <div></div>
</template>

<script>
export default {
  name: "ChildComponent2", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  methods: {
    callFromParent() {
      console.log('부모 컴포넌트에서 직접 호출한 함수 ^^')
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>

