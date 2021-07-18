<template>
  <CompositionAPIInject></CompositionAPIInject>
</template>

<script>
import {provide} from 'vue';
import CompositionAPIInject from "./CompositionAPIInject";

export default {
  name: "CompositionAPIProvide", //컴포넌트 이름
  components: { //다른 컴포넌트 사용 시 import(배열로 등록)
    CompositionAPIInject
  },
  setup() {
    provide('title', 'Vue.js 프로젝트'); //provide 함수를 통해서 전달할 키, 값 설정
  }, //컴포지션 API
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>

