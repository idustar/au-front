/**
* Created by dustar on 2017/10/7.
*/

<template>
  <span>
    <el-button @click.native.prevent="dialogVisible=true"
               type="text"
               class="hi"
               size="small">
          编辑

    </el-button>
  <el-dialog
    class="d"
    title="编辑社团"
    :visible.sync="dialogVisible"
    width="900px"
    :modal-append-to-body="false"
    top="50px"
    :before-close="handleClose">
    <setting-page></setting-page>
  </el-dialog>
    </span>
</template>

<script>
  import SettingPage from 'PAGES/club/SettingPage'
  export default {
    components: {
      SettingPage
    },
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      handleClose (done) {
        this.dialogVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hi {
    padding: 10px;
  }
  .d {
    z-index: 800;
  }
</style>
