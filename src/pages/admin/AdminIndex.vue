/**
* Created by dustar on 2017/10/7.
*/

<template>
    <div class="index">
      <div v-for="btn in btns" class="block" @click="$router.push(btn.to)">
        <i class="ic iconfont" :class="btn.icon"></i>
        <div class="label">{{btn.label}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        btns: [
          {
            icon: 'icon-yusuanshenhe',
            label: '预算申请',
            to: '/admin/apps/budget'
          },
          {
            icon: 'icon-haibaotuiguang',
            label: '物料申请',
            to: '/admin/apps/poster'
          },
          {
            icon: 'icon-changdikaitai',
            label: '场地申请',
            to: '/admin/apps/site'
          },
          {
            icon: 'icon-dianping',
            label: '其它申请',
            to: '/admin/apps/other'
          },
          {
            icon: 'icon-fankui',
            label: '群发通知',
            to: '/send?all=true'
          },
          {
            icon: 'icon-shenfenzheng',
            label: '人员管理',
            to: '/admin/users'
          },
          {
            icon: 'icon-chengyuan',
            label: '社团管理',
            to: '/admin/clubs'
          },
          {
            icon: 'icon-tuichudenglu',
            label: '退出登录',
            to: '/login'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    margin-top: -28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }
  .block {
    width: 200px;
    height: 180px;
    background: #DFE4ED;
    margin: 10px;
    cursor: pointer;
    color: #B4BCCC;
    font-weight: 200;
    padding-top: 20px;
  }
  .block:hover {
    background: #B4BCCC;
    color: #878D99;
  }
  .block:active {
    background: #878D99;
    color: #323033;
  }
  .ic {

    font-size: 100px;

    margin-left: 50px;
  }
  .label {
    margin-top: 10px;
    font-size: 32px;
    width: 200px;
    text-align: center;
  }

</style>
