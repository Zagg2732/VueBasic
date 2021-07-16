<template>
  <div>
    <!-- click이벤트는 v-on:click = "메소드명" 혹은 @click = "메소드명" 으로 사용가능하다 -->
    <button type="button" @click="increaseCounter">1씩 추가하기</button>
    <br>
    <br>
    <button type="button" @click="setCounter(7)">7로 설정하기</button>    <br>
    <br>
    <button type="button" @click="alert1(), alert2()">얼럿설정</button>
    <p>The counter is : {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "EventClick", //컴포넌트 이름
  component: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      counter: 0
    };
  },
  methods : {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    setCounter(count) {
      this.counter = count;
    },
    alert1() {
      alert("1");
    },
    alert2() {
      alert("2");
    }
  },
  setup() {
  }, //컴포지션 API
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  method: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>