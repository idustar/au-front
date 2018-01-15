/**
* Created by dustar on 2017/7/12.
*/

<template>
  <span>
  <el-dropdown trigger="click" @command="handleCommand">
    <i class="more iconfont icon-shezhi1"></i>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="d"><i class="iconfont icon-bukejian"></i> 删除成员</el-dropdown-item>
      <el-dropdown-item command="f"><i class="iconfont icon-huiyuan"></i> 分配其它职位</el-dropdown-item>
      <el-dropdown-item command="z" v-if="power===1"><i class="iconfont icon-yanzhengma"></i> 转让社长职位</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
    </span>
</template>

<script>
  import UserTitleSetting from 'COMPONENTS/admin/UserTitleSetting'
  export default {
    components: {UserTitleSetting},
    props: ['power', 'userid'],
    methods: {
      handleClose (done) {
        this.dialogVisible = false
      },
      handleCommand (command) {
        const h = this.$createElement
        if (command === 'd') {
          this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {}).catch(() => {})
        } else if (command === 'f') {
          this.$msgbox({
            title: '分配权限',
            message: h('p', null, [
              h('user-title-setting', null, null)
            ]),
            showConfirmButton: false,
            showCancelButton: false
          })
        } else {
          this.$msgbox({
            title: '转让社长权限',
            message: h('p', null, [
              h('p', null, '请选择转让后您的权限：'),
              h('user-title-setting', null, null)
            ]),
            showConfirmButton: false,
            showCancelButton: false
          })
        }
      }
    },
    data () {
      return {
        dialogVisible: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .more{
    cursor: pointer;
    color: #C0CCDA;
    font-size: 40px;
    line-height: 50px;
  }
  .more:hover {
    color: #ffffff;
  }
</style>
