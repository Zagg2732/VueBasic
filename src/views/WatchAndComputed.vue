<template>
  <!-- watch는 watch 당하고있는 값에 변화가 일어나야지 메소드가 실행된다. -->
  <div>
    <h1>Full Name : {{fullName}}</h1>
    <h1>Full Name : {{fullName}}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: 'SJ',
      lastName: 'Lee',
      fullName: 'watch메소드 실행되기 전'
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName(){
      this.firstName = 'Seung Joon';
    }
  }
}
</script>