/**
* Created by dustar on 2017/10/4.
*/

<template>
    <div class="card" @mouseenter="mouseOn()" @mouseleave="mouseOff()"
         @click="$router.push({name:'viewSite', params: {clubid:$route.params.clubid, appid:app.app_site_id}})">
      <div class="big-left">
      <div class="left">
        <div class="container">
          <username-and-avatar></username-and-avatar>
        </div>
        <div class="ca">提交于 {{app.created_at}}</div>
      </div>
      <div class="title">
        <el-tag type="gray"> <i class="iconfont icon-changdikaitai"></i> 活动场地申请 </el-tag> {{app.activity_name}}
      </div>
      </div>
      <div class="right">
        <div class="state">
          <check-state :state="app.check_state"></check-state>

        </div>
        <transition name="fade">
          <div v-if="mouseIn" class="doit"><i class="iconfont icon-kejian"></i> 查看详情</div>
        </transition>
      </div>

    </div>
</template>

<script>
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar.vue'
  import CheckState from 'COMPONENTS/CheckState.vue'
  export default {
    components: {
      UsernameAndAvatar,
      CheckState
    },
    props: ['app'],
    data () {
      return {
        mouseIn: false
      }
    },
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
  .card {
    overflow: hidden;
    cursor: pointer;
    height: 50px;
    border-radius: 25px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 16px;
    font-size: 14px;
  }
  .card:hover {
    background: #E5E9F2;
  }
  .ca {
    padding-top: 10px;
    color: #99A9BF;
  }
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .big-left {
    display: flex;

  }
  .left {
    overflow: hidden;
    min-width: 150px;
  }
  .title {
    margin-left: 30px;
    font-size: 20px;
    line-height: 50px;
    color: #475669;
    overflow: hidden;
  }
  .right {
    line-height: 50px;
    display: flex;

  }
  .state {
    width: 100px;
    overflow: hidden
  }
  .doit {
    margin-left: 20px;
    overflow: hidden;
    width: 90px;
  }
  .doit:hover{
    color: #1D8CE0;
  }
  .title:hover {
    color:#1D8CE0;
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
