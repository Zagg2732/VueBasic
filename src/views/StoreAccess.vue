<template>
  <p>Count: {{count}}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
  name: "StoreAccess", //컴포넌트 이름
  components: {}, //다른 컴포넌트 사용 시 import(배열로 등록)
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment');
    }
  } //컴포넌트 내에서 사용할 메소드 정의
}
</script>

<style scoped>

</style>