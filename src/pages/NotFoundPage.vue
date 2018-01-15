/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="not-found-page" @click="$router.replace('/')">
    <not-found></not-found>
    - 返回首页 -
  </div>
</template>

<script>
  import NotFound from 'COMPONENTS/NotFound'
  export default {
    components: {
      NotFound
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .not-found-page {
    width: 400px;
    margin: auto;
    background: white;
    border-radius: 20px;
    text-align: center;
    padding-bottom: 20px;
    color: #58B7FF;
    cursor: pointer;
  }
</style>
