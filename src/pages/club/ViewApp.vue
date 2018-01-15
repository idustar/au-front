/**
* Created by dustar on 2017/10/6.
*/

<template>
    <div class="container">
      <i class="iconfont new-noti icon-fanhui" @click="$router.go(-1)"></i>
      <div class="header">
        <h1 v-if="$route.name[0] === 'a'">提交新的申请</h1>
        <h1 v-else-if="$route.name[0] === 'v'">查看申请表</h1>
        <h1 v-else>编辑申请表</h1>
      </div>
      <slot></slot>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding-left: 10px;
    padding-right: 10px;
    color: #324057;
  }
  .new-noti {
    font-size: 50px;
    position: absolute;
    margin-left: -80px;
    margin-top: 7px;
    cursor: pointer;
    color: #20A0FF;
  }
  .new-noti:hover {
    color: #1D8CE0;
    font-size: 54px;
    margin-left: -82px;
    margin-top: 5px;
  }
  .new-noti:active {
    color: #007eb5;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
</style>
