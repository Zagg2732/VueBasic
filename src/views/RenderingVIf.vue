<!--v-if 값이 true일 경우 렌더링됨 -->
<template>
  <div>
    <h1 v-if="type=='A'">type이 A면 렌더링되는 h1</h1>
    <h1 v-else-if="type=='B'">type이 B면 렌더링되는 h1</h1>
    <h1 v-else>C</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 'A'
    };
  }
}
</script>