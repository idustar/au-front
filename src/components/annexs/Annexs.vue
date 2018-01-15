/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div id="annexs">
      <div id="header">
        <i class="iconfont icon-lianjie"></i>
        附件
        <el-badge class="mark" :value="annexs.length" />
      </div>
      <transition-group tag="div" name="fade">

        <annex v-for="(value, index) in annexs"
               :key="value.file_name" :annex="value" :manage="manage" :k="index" @rm="rmAnnex(index)"
        ></annex>
        <new-annex v-if="manage" :key="0"></new-annex>
      </transition-group>
    </div>
</template>

<script>
  import Annex from './Annex'
  import NewAnnex from './NewAnnex'

  export default {
    components: {Annex, NewAnnex},
    props: [
      'annexs',
      'manage'
    ],
    methods: {
      rmAnnex (key) {
        this.annexs.splice(key, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #annexs {
    background: #475669;
    padding: 20px;
  }
  #header {
    font-size: 24px;
    font-weight: lighter;
    color: #acacac;
    line-height: 40px;
  }
  #header>i {
    font-size: 24px;
  }
  .mark {
  }
</style>
