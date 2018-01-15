/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div class="container">
    <div class="left">
      <el-form ref="form" :model="club" label-width="80px">
        <el-form-item label="社团名称">
          <el-input v-model="club.name" :disabled="power<2">
            <
          </el-input>
        </el-form-item>
        <el-form-item label="社团介绍">
          <el-input
            placeholder="请输入社团介绍"
            v-model="club.description"></el-input>
        </el-form-item>
        <el-form-item label="LOGO">
          <avatar-upload :imageurl="club.logo"></avatar-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>清空内容</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <quill-editor v-model="club.content"
                    ref="myQuillEditor"
                    class="editor"
                    :options="editorOption">
      </quill-editor>
    </div>
  </div>

</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import AvatarUpload from 'COMPONENTS/AvatarUpload.vue'
  export default {
    components: { AvatarUpload, quillEditor },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      }
    },
    data () {
      return {
        editorOption: {
          placeholder: '请在此输入正文'
        },
        power: 2,
        club: {
          club_id: 0,
          content: '<h1>和谐社会</h1>',
          name: '和谐社团',
          description: '你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮',
          logo: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          created_at: '2017年8月24日'
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;

  }
  .left {
    width: 350px;
    margin-left: 30px;
    border-right: 1px solid darkgrey;
    padding-right: 20px;
  }
  .right {
    margin-left: 20px;
    width: 500px;
  }
  .el-form {
  }
  .editor {
    height: calc( 100% - 90px ) ;
  }
</style>
