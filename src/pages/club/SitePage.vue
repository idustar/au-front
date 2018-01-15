/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div id="page">

    <div id="header">

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="all">
          <span slot="label"><i class="iconfont icon-ziliaoku"></i> 所有申请 <el-badge class="mark" :value="apps.length" /></span>
        </el-tab-pane>
        <el-tab-pane name="1">
          <span slot="label"><i class="iconfont icon-wancheng"></i> 审批通过</span>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label"><i class="iconfont icon-tishi"></i> 审批拒绝</span>
        </el-tab-pane>
        <el-tab-pane name="0">
          <span slot="label"><i class="iconfont icon-jiazai"></i> 等待审批</span>
        </el-tab-pane>
      </el-tabs>
      <div><el-button round @click="$router.push({name:'appSite'})">提交新活动场地申请</el-button></div>
    </div>
    <transition-group tag="div" name="fades">
      <site-card v-for="app in apps_filter" :app="app" :key="app.app_site_id"></site-card>
      <not-found v-if="apps_filter.length === 0" :key="-1"></not-found>
    </transition-group>
  </div>
</template>

<script>
  import SiteCard from 'COMPONENTS/club/SiteCard.vue'
  import NotFound from 'COMPONENTS/NotFound.vue'
  export default {
    components: {
      SiteCard,
      NotFound
    },
    data () {
      return {
        activeName: 'all',
        apps_filter: {},
        apps: [
          {
            app_site_id: 0,
            user_id: 0,
            username: '王进喜',
            activity_name: '2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请2017年预算申请',
            check_state: 1,
            created_at: '2017年3月4日'
          },
          {
            app_site_id: 1,
            user_id: 0,
            username: '王进喜',
            activity_name: '2017年预算申请',
            check_state: 0,
            created_at: '2017年3月4日'
          },
          {
            app_site_id: 2,
            user_id: 0,
            username: '王进喜',
            activity_name: '2017年预算申请',
            check_state: 2,
            created_at: '2017年3月4日'
          },
          {
            app_site_id: 2,
            user_id: 0,
            username: '王进喜',
            activity_name: '2017年预算申请',
            check_state: 2,
            created_at: '2017年3月4日'
          },
          {
            app_site_id: 2,
            user_id: 0,
            username: '王进喜',
            activity_name: '2017年预算申请',
            check_state: 2,
            created_at: '2017年3月4日'
          }
        ]
      }
    },
    created () {
      this.apps_filter = this.apps
    },
    methods: {
      handleClick (tab, event) {
        if (this.activeName === 'all') {
          this.apps_filter = this.apps
        } else {
          this.apps_filter = this.apps.filter((a) => '' + a.check_state === this.activeName)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .fades-enter-active {
    transition: all .1s
  }

  .fades-enter /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateX(50px);

  }
</style>
