/**
* Created by dustar on 2017/10/7.
*/

<template>
    <div class="admin-index">
      <div class="left" @mouseenter="isCollapse=false" @mouseleave="isCollapse=true">
        <el-menu :default-active="$route.name" class="el-menu-vertical-demo" @open="handleOpen"
                 @close="handleClose" :collapse="isCollapse">
          <el-menu-item index="adminAppsBudget" @click="$router.push({name: 'adminAppsBudget'})">
              <i class="ic iconfont icon-yusuanshenhe"></i>
              <span slot="title">预算申请</span>
          </el-menu-item>
          <el-menu-item index="adminAppsPoster" @click="$router.push({name: 'adminAppsPoster'})">
            <i class="ic iconfont icon-haibaotuiguang"></i>
            <span slot="title">海报张贴申请</span>
          </el-menu-item>
          <el-menu-item index="adminAppsSite" @click="$router.push({name: 'adminAppsSite'})">
            <i class="ic iconfont icon-changdikaitai"></i>
            <span slot="title">场地申请</span>
          </el-menu-item>
          <el-menu-item index="adminAppsOther" @click="$router.push({name: 'adminAppsOther'})">
            <i class="ic iconfont icon-dianping"></i>
            <span slot="title">其它申请</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <transition name="router-fade71" mode="out-in">
        <router-view></router-view>
        </transition>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: true,
        route2index: {
          'adminAppsBudget': '1',
          'adminAppsPoster': '2',
          'adminAppsSite': '3',
          'adminAppsOther': '4'
        }
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .admin-index {
    display: flex;
  }
  .left {
  }
  .right {
    width: 100%;
    margin-left: 20px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;

  }
  .el-menu-vertical-demo {
    height: 100%;
  }
  .ic {
    padding-right: 10px;
  }
  .router-fade71-enter-active {
    animation: bounce-11in-page1 .5s;
  }
  .router-fade71-leave-active {
    animation: bounce-11in-page-reverse1 .5s;
  }
  @keyframes bounce-11in-page1 {
    0% {
      opacity: 0;
      transform:  translateX(-380px) scaleX(0);

    }
    100% {
    }
  }
  @keyframes bounce-11in-page-reverse1 {
    0% {
    }
    100% {
      opacity: 0;
      transform:  translateX(-380px) scaleX(0);
    }
  }

</style>
