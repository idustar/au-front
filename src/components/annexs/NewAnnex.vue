/**
* Created by dustar on 2017/10/5.
*/

<template>
  <div id="annex-panel">
      <i class="iconfont icon-zixuan"></i> 添加附件
  </div>
</template>

<script>
  import AnnexIcon from 'COMPONENTS/annexs/AnnexIcon'
  export default {
    data () {
      return {
        mouseIn: false
      }
    },
    components: {
      AnnexIcon
    },
    props: ['annex', 'manage', 'k'],
    methods: {
      mouseOn () {
        this.mouseIn = true
      },
      mouseOff () {
        this.mouseIn = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #annex-panel {
    text-align: center;
    cursor: pointer;
    background: #475669;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    color: #E5E9F2;
    transition: all .5s;
    line-height: 50px;
  }
  #annex-panel:hover {
    background: #8492A6;
    margin-right: 0px;
    color: #F9FAFC;
  }
</style>
