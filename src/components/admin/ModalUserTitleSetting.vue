/**
* Created by dustar on 2017/10/7.
*/

<template>
  <span>
    <el-button @click.native.prevent="dialogVisible=true"
               type="text"
               class="hi"
               size="small">
          权限
    </el-button>
  <el-dialog
    class="d"
    title="编辑用户权限"
    :visible.sync="dialogVisible"
    width="360px"
    :modal-append-to-body="true"
    top="50px"
    :before-close="handleClose">
    <user-title-setting></user-title-setting>
  </el-dialog>
    </span>
</template>

<script>
  import UserTitleSetting from 'COMPONENTS/admin/UserTitleSetting'
  export default {
    components: {
      UserTitleSetting
    },
    data () {
      return {
        dialogVisible: false
      }
    },
    mounted () {
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
    padding: 0;
  }
  .d {
  }
</style>
