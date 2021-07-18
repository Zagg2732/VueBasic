<!-- Vue 3.0부터 새로 생긴 Composition API 활용 -->
<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1"/>
      <span> + </span>
      <input type="text" v-model="num2"/>
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue'; // reactive,computed 로 값 변경 감지해서 연산시킴. toRefs는 여러 컴포넌트에서 재사용 할수있게 코드를 분리해줌

function plusCalculator() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });
  return toRefs(state); //반응형으로 선언된 메소드들이 외부 function에서도 작동하려면 toRefs를 사용해야 한다
}

export default {
  name: "CompositionAPI", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  data() { //html과 js코드에서 사용할 데이터 변수 선언
    return {
      sampleData: ""
    };
  },
  setup() { //컴포지션 API
    let {num1, num2, result} = plusCalculator(); //외부 function
    return {
      num1, num2, result
    }
  },
  created() {
  }, //컴포넌트가 생성되면 실행
  mounted() {
  }, //template에 정의된 html 코드가 랜더링된 후 실행
  unmounted() {
  }, //unmount가 완료된 후 실행
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>

