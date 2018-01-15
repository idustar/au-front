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
        <div><el-button round @click="$router.push({name:'appBudget'})">提交新预算申请</el-button></div>
      </div>
      <transition-group name="fades" tag="div">
        <budget-card v-for="app in apps_filter" :app="app" :key="app.app_budget_id"></budget-card>
        <not-found v-if="apps_filter.length === 0" :key="-1"></not-found>
      </transition-group>
    </div>
</template>

<script>
  import BudgetCard from 'COMPONENTS/club/BudgetCard.vue'
  import NotFound from 'COMPONENTS/NotFound.vue'
  export default {
    components: {
      BudgetCard,
      NotFound
    },
    data () {
      return {
        activeName: 'all',
        apps_filter: {},
        apps: [
          {
            app_budget_id: 1,
            user_id: 0,
            username: '王进喜',
            title: '2017年预算申请',
            check_state: 0,
            created_at: '2017年3月4日'
          },
          {
            app_budget_id: 2,
            user_id: 0,
            username: '王进喜',
            title: '2017年预算申请',
            check_state: 2,
            created_at: '2017年3月4日'
          },
          {
            app_budget_id: 3,
            user_id: 0,
            username: '王进喜',
            title: '2017年预算申请',
            check_state: 2,
            created_at: '2017年3月4日'
          },
          {
            app_budget_id: 4,
            user_id: 0,
            username: '王进喜',
            title: '2017年预算申请',
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
    transition: all .5s
  }
  .fades-enter /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0;
    transform: translateX(50px)
  }
</style>
