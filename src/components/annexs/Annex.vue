/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div id="annex-panel" @mouseenter="mouseOn()" @mouseleave="mouseOff()">
      <div id="annex-left">
        <annex-icon :filetype="annex.file_type" class="icon"></annex-icon>
        <div class="filename">{{annex.file_name}}</div>
      </div>
      <transition name="fade">
      <div class="annex-right" v-if="mouseIn">
        <el-button type="text">
          <i class="iconfont icon-kejian"></i>
          {{ annex.file_type === 'gif' || annex.file_type === 'jpg' || annex.file_type === 'png'?'预览':'下载'}}
        </el-button>
        <el-button type="text" v-if="manage" @click="$emit('rm')">
        <i class="iconfont icon-icon_delete"></i>
          删除
        </el-button>
      </div>
      </transition>

    </div>
</template>

<script>
  import AnnexIcon from 'COMPONENTS/annexs/AnnexIcon'
  export default {
    data () {
      return {
        visibleClear: false,
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
    overflow: hidden;
    cursor: pointer;
    background: #EFF2F7;
    height: 50px;
    font-size: 14px;
    padding-left: 24px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5px;
    color: #8492A6;
    transition: all .5s;
    line-height: 50px;
  }
  #annex-panel:hover {
    background: #E5E9F2;
    margin-right: 0px;
    color: #475669;
  }
  #annex-left {
    overflow: hidden;
    display: flex;
  }
  .annex-right {
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 20px;
    font-size: 14px;
  }
  .icon {

  }
  .filename {

    margin-left: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: 0.5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: scale(0);
    margin-left: -90px;
  }

</style>
