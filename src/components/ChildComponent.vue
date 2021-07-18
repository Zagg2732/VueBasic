<template>
  <button type="button" @click="childFunc" ref="btn">Click</button>
</template>

<script>
export default {
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  },
  name: "ChildComponent", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
}
</script>

<style scoped>

</style>
