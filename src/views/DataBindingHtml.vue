<!--html 태그가 포함된 데이터바인딩은 v-html 에 값을 넣어준다.-->
<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlString: '<p> p태그가 포함되었습니다 </p>'
    };
  }
}
</script>

<style scoped>

</style>