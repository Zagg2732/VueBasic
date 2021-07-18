<template>
  <child-component @send-message="sendMessage" ref="child_component"></child-component>

</template>

<script>

import ChildComponent from "./ChildComponent2";

export default {
  name: "ParentComponent2", //컴포넌트 이름
  components: { //다른 컴포넌트 사용 시 import(배열로 등록)
    ChildComponent
  },
  mounted() { //template에 정의된 html 코드가 랜더링된 후 실행
    this.$refs.child_component.callFromParent();
  },
  methods: {} //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>

