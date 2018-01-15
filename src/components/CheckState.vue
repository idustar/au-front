/**
* Created by dustar on 2017/10/4.
*/

<template>
  <span v-if="state === 1" class="success"><i class="iconfont icon-wancheng"></i> 审批通过</span>
  <span v-else-if="state === 2" class="fail"><i class="iconfont icon-tishi"></i> 审批拒绝</span>
  <span v-else="" class="waiting"><i class="iconfont icon-jiazai"></i> 等待审批</span>
</template>

<script>
  export default {
    props: ['state']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .success {
    color:#67C23A;
    font-weight:bold
  }
  .fail {
    color: #FA5555;
    font-weight:bold
  }
  .waiting {
    color: #EB9E05;
    font-weight:bold
  }

</style>
