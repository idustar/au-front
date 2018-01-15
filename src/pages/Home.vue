<template>
  <div id="home">
    <div id="home-header">
      <div id="home-header-left" class="home-header-item">
        <img :src="logo" id="logo" @click="$router.push('/')">
      </div>
      <div class="home-header-item"></div>
      <div class="home-header-item home-header-right">
        <noti></noti>
        <el-dropdown @command="handleCommand">
          <avatar size="middle" id="avatar" :avatar="user.avatar"></avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>{{user.name}}</el-dropdown-item>
              <el-dropdown-item divided command="/setting"><i class="iconfont icon-shezhi"></i> 个人设置</el-dropdown-item>
            <el-dropdown-item command="login"><i class="iconfont icon-tuichudenglu"></i> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div id="home-container">

      <transition name="router-fade2" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import logo from '@/assets/images/logo.png'
  import Avatar from 'COMPONENTS/Avatar.vue'
  import Noti from 'COMPONENTS/header/Noti.vue'
  export default {
    data () {
      return {
        logo,
        user: {
          user_id: 0,
          name: 'DuStark',
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
          club_id: 0,
          club_name: '同济某社团',
          title_id: 0,
          title: '社长'
        }
      }
    },
    components: {
      Avatar,
      Noti
    },
    methods: {
      handleCommand (command) {
        this.$router.push(command)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  #home-container {
    height: calc(100vh - 112px);
    overflow-y: auto;
    overflow-x: hidden;
    background: #e6f1fe;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  i {
    font-size: 24px;
  }

  #home-header {
    height: 72px;
    background: #1D8CE0;
    line-height: 72px;
    font-size: 32px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 60px;
    padding-right: 60px;
  }

  #logo {
    margin-top: 18px;
    cursor: pointer;
  }

  .home-header-item {

  }

  .home-header-right {
    display: flex;
    flex-direction: row;
  }

  #avatar {
    margin-top: 16px;
    margin-left: 20px;
  }

  .home-menu-item :hover {

  }


  .home-menu > i:hover {

  }

  .router-fade2-enter-active {
    animation: bounce-in-page2 .5s;
  }
  .router-fade2-leave-active {
    animation: bounce-in-page-reverse2 .5s;
  }
  @keyframes bounce-in-page2 {
    0% {
      opacity: 0;
      transform: translateY(-500px);

    }
    100% {
    }
  }
  @keyframes bounce-in-page-reverse2 {
    0% {
    }
    100% {
      opacity: 0;
      transform: translateY(-500px);
    }
  }


</style>
