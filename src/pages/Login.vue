/**
* Created by dustar on 2017/10/6.
*/

<template>
    <div class="login">
      <div class="login-container">
        <div class="logo">
          <img :src="logo">
        </div>
        <el-form :model="loginForm" ref="loginfForm" label-width="0" class="form">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
                       class="login-btn"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
  import logo from '@/assets/images/logo.png'
  export default {
    data () {
      return {
        logo,
        loginForm: {
          username: '',
          password: ''
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
    height: 100vh;
  }
  .login-container {
    padding-top: calc((100vh - 300px) / 2);
    width: 300px;
    padding-left: calc((100vw - 300px) / 2);
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
    margin-top: 30px;
  }
  .login-btn {
    width: 300px;
  }
</style>
