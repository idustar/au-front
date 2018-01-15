BudgetPage.vue/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div class="index-page" v-html="content" v-if="content">
       {{ content }}
  </div>
  <not-found v-else>请等待社长往首页添加内容。</not-found>
</template>

<script>
  import NotFound from 'COMPONENTS/NotFound'
  export default {
    components: {
      NotFound
    },
    data () {
      return {
        content: '<h1>和谐社会</h1>' +
        '<p>我们供奉于</p>'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
