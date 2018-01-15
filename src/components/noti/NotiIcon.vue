/**
* Created by dustar on 2017/10/5.
*/

<template>
    <avatar size="large" :avatar="src" v-if="type===2"></avatar>
   <div v-else-if="type===3">
     <avatar size="middle" :avatar="src"></avatar>
     <div class="circle more"></div>
   </div>

  <div class="circle admin" v-else-if="type===1">
    <i class="iconfont icon-jingbao"></i>
    <avatar id="fl" size="small" :avatar="src"></avatar>


  </div>
  <div class="circle system" v-else>
    <i class="iconfont icon-shezhi"></i>
  </div>
</template>

<script>
  import Avatar from 'COMPONENTS/Avatar.vue'
  export default {
    components: {
      Avatar
    },
    props: ['type', 'src']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .circle {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    color: #ffffff;

    line-height: 60px;
  }
  .circle > i{
    font-size: 40px;
    padding-left: 10px;
  }
  .admin {
    background: #F7BA2A;
  }
  .system {
    background: #13CE66;
  }
  .more {
    background: #20A0FF;
    width: 30px;
    height: 30px;
    margin-top: -20px;
    margin-left: 30px;
  }
  #fl {
    float: left;
    margin-top: -80px;
  }
</style>
