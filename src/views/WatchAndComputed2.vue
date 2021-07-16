<template>
  <!-- computed는 최초에 한번 실행하여 자원을 만든다. 그 후에 자원의 변경이 일어나는것이 감지되면 다시 실행된다. -->
  <h1>Full Name : {{fullName}}</h1>
  <button type="button" @click="changeName">변경</button>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'SJ',
      lastName: 'Lee'
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName(){
      this.firstName = 'Seung Joon';
    }
  }
}
</script>