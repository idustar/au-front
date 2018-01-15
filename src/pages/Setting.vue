/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="login">
    <div class="login-container">
      <el-tabs  v-model="activeTab">
        <el-tab-pane label="个性资料">

          <el-form :model="form" ref="form" label-width="0" class="form">
            <el-form-item prop="name">
              <el-input v-model="form.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item prop="campus">
              <el-radio-group v-model="form.campus">
                <el-radio-button style="margin-left:2px;" label="所在校区" :disabled="true"></el-radio-button>
                <el-radio-button class="radio-button" label="四平路校区"></el-radio-button>
                <el-radio-button class="radio-button" label="嘉定校区"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="description">
              <el-input v-model="form.description" placeholder="个人简介"></el-input>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="form.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane label="密码">
          <el-form :model="form1" ref="form1" label-width="0" class="form">
            <el-form-item prop="password">
              <el-input type="password" v-model="form1.password" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item prop="checkpass">
              <el-input v-model="form1.checkpass" placeholder="确认新密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form1')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>

        <el-tab-pane label="头像">
          <el-form :model="form2" ref="form2" label-width="0" class="form">
            <el-form-item prop="avatar">
              <avatar-upload :imageUrl="form2.avatar" style="margin-left: 10px;"></avatar-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form2')"
                         class="login-btn"
              >提交</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
  import AvatarUpload from 'COMPONENTS/AvatarUpload'
  import logo from '@/assets/images/logo.png'
  export default {
    components: {
      AvatarUpload
    },
    data () {
      return {
        logo,
        activeTab: '',
        form: {
          description: '',
          campus: '',
          username: '',
          password: '',
          name: '',
          phone: ''
        },
        form1: {
          password: '',
          checkpass: ''
        },
        form2: {
          avatar: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    background: white;
    width: 330px;
    margin: auto;
    padding: 0px;
    border-radius: 20px;
    padding-top: 3px;
  }
  .login-container {
    margin: 15px;
  }
  .logo {
    background: #20A0FF;
    text-align: center;
    padding: 20px;
  }
  img {
    width: 250px;
  }
  .form {
    margin-top: 20px;
  }
  .login-btn {
    width: 100%;
  }
  .code {
    text-align: center;
    margin-top: 20px;
    color:#99A9BF;
  }
  .active {
    color: #58B7FF;
  }
  .radio-button {
    margin-left: -3px;
  }
</style>
