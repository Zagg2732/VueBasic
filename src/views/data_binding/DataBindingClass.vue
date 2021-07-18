<!--Class 데이터바인딩. Class는 일반적인 상황에서는 html class 를 쓰면되지만 조건이 붙을경우 v-bind:class를 이용하여 추가적으로 정의할 수 있다
    다른 속성들의 경우 하나의 속성만을 이용해서 바인딩해야 하지만 클래스의 경우 기본 클래스와 데이터바인딩을 공존할 수 있다-->
<template>
  <!-- boolean 이 true 면 .active .text-red 와 같은 클래스들이 적용됨 -->
  <div class="container" v-bind:class="{
    'active' : isActive, 'text-red': hasError
  }">
    Class Binding
  </div>
  <!-- 배열을 이용해서 바인딩 할 수 있으나, 이 경우 조건에 따른 바인딩 처리가 불가하다 -->
  <div class="container" v-bind:class="[activeClass, errorClass]">
    Class Binding
  </div>
  <!-- 인라인 스타일 바인딩은 스타일 데이터를 오브젝트로 선언해서 바인딩할 수 있다 -->
  <div class="container" v-bind:style="styleObject">
    인라인 스타일 바인딩
  </div>

</template>

<script>
export default {
  data() {
    return {
      isActive:true,
      hasError:false,
      activeClass : 'active',
      errorClass : 'text-red',
      styleObject: {
        color: 'hotpink',
        fontSize : '50px'
      }
   };
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 400px;
  }
  .active {
    background-image: url("https://mblogthumb-phinf.pstatic.net/MjAxOTAxMThfMTQ2/MDAxNTQ3NzcyMTQ2MjU2.SB61AFroby9ljr4ZHF26THJSKph3rQwlIJj0-TRJ0D0g.r8hrrDZtFZ7xa3K9X1nKZo-CG69NN4vW-68SL35kN6og.JPEG.pola0216/43585514_2261668924110804_3027692200071745663_n.jpg?type=w800");
    font-weight: bold;
  }
  .text-red {
    color: red;
  }


</style>