<template>
  <h3>자식이 부모값 inject 받아서 만들었어요 --> {{itemLength}}</h3>
  <h3>자식이 부모값 inject 받아서 만들었어요 --> {{itemOne}}</h3>
  <h3>자식이 부모값 inject 받아서 만들었어요 --> {{itemTwo}}</h3>
  <h3>자식이 부모값 inject 받아서 만들었어요 --> {{itemThree}}</h3>
  <h3>자식이 부모값 inject 받아서 만들었어요 --> {{itemFour}}</h3>
</template>

<script>

export default {

  name: "parent", //컴포넌트 이름
  components: {
  }, //다른 컴포넌트 사용 시 import(배열로 등록)
  inject : ['itemLength', 'itemOne', 'itemTwo', 'itemThree',  'itemFour'],
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
    };
  },
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  methods: {} //컴포넌트 내에서 사용할 메소드 정의

}

</script>

<style scoped>

</style>

