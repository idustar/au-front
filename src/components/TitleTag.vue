/**
* Created by dustar on 2017/10/3.
*/

<template>
      <el-tag size="mini" :type="trans[title]?trans[title]:''">{{title}}</el-tag>
</template>

<script>
  export default {
    data () {
      return {
        trans: {
          '社长': 'danger',
          '副社长': 'success'
        }
      }
    },
    props: ['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-tag {
    user-select: none;
    cursor: default;
  }

</style>
