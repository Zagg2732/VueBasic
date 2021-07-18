<template>
  <div>
    <!-- import 한 컴포넌트 이름으로 태그를 만들어줍니다 -->
    <PageTitle title="pageTitle"></PageTitle>
    <PageTitle v-bind:title="pageTitle"></PageTitle>

  </div>
</template>

<script>
  import PageTitle from "./PageTitle"; //Component import

  export default {
    data() {
      return {
        pageTitle: '바꾼값'
      }
    },
    components : {
      PageTitle // 현재 컴포넌트에서 사용할 컴포넌트 등록
    }
  }
</script>

<style scoped>

</style>