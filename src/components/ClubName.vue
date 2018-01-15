/**
* Created by dustar on 2017/10/6.
*/

<template>
  <el-tooltip class="item" effect="dark" :content="'访问 '+name+' 社团主页'" placement="bottom">
    <span @click="$router.push({name: 'club', params:{clubid: club_id}})">{{name}}</span>
  </el-tooltip>

</template>

<script>
  export default {
    props: ['club_id', 'name']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    color: #20A0FF;
    cursor: pointer;
  }
  span:hover {
    color: #1D8CE0;
  }
  span:active {
    color: #7E9CFF;
  }

</style>
