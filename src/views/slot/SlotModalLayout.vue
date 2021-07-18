<template>
  <div class="modal-container">
    <header>
      <slot name="header">
        <h1>slot 기본헤더</h1>
      </slot>
    </header>
    <main>
      <slot>
        <p>slot 컨텐츠1</p>
        <p>slot 컨텐츠2</p>
      </slot>
    </main>
    <footer>
      <slot name="footer">
        <h1>slot 기본푸터</h1>
      </slot>
    </footer>
  </div>
</template>
<style scoped>
.modal-container {
  border: 1px solid #ddd;
}
</style>