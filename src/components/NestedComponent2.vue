<template>
  <div>
    <BlogPost ></BlogPost>
    <!-- 그냥 입력하면 String이됨 -->
    <BlogPost likes="54321"></BlogPost>
    <!-- v.bind:likes="54321" 와 같이 바인딩해줘야 숫자형으로 전달이됨 -->
    <BlogPost :likes="54321"></BlogPost>
    <BlogPost :likes="likes"></BlogPost>
    <h1> -------- Boolean -------- </h1>
    <blog-post likes="54321" :is-published="false"></blog-post>
    <h1> -------- Array -------- </h1>
    <blog-post :comment-ids="[123,456,789]"></blog-post>
    <h1> -------- Object -------- </h1>
    <blog-post :post="post"></blog-post>
  </div>
</template>

<script>
  import BlogPost from "./BlogPost";

  export default {
    data() {
      return {
        likes : 19930504,
        post : {
          id: '김수연',
          message : '나는 천재야'
        }
      }
    },
    components : {
      BlogPost
    },
    methods : {
      checkType() {
        alert(typeof this.likes)
      }
    }
  }

</script>

<style scoped>

</style>