<!-- Vue 3.0부터 새로 생긴 Composition API 활용 -->
<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" v-inputTxtLeft="inputvalues"/>
      <span> + </span>
      <input type="text" v-model="num2" v-inputTxtRight="inputvalues" v-focus />
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
  import {plusCalculator} from "./utils/common";
  export default {
    name: 'calculator',
    setup() {
      let {num1, num2, result} = plusCalculator();
      return {
        num1, num2, result
      }
    },
    data() {
      return {
        inputvalues : {left : 10, right : 20}
      }
    },
    directives: {
      focus: {
        // directive 정의
        mounted(el) {
          el.focus()
        }
      },
      inputTxtLeft : {
        mounted(el, binding) {
          el.value = binding.value.left
        }
      },
      inputTxtRight : {
        mounted(el, binding) {
          el.value = binding.value.right
        }
      }
    }
  }
</script>

<style scoped>

</style>

