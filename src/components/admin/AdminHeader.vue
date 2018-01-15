/**
* Created by dustar on 2017/10/3.
*/

<template>
    <div id="header">
      <div id="left">
        <div id="info">
          <div id="adminname">管理后台</div>
          <div id="admindesc">同济大学社团联合会</div>
        </div>
      </div>
      <div id="right">
        <div class="title-text">尊敬的 <title-tag :title="title"></title-tag> ，你好。</div>
        <div id="menu">

            <div  v-for="m in menus" class="menu-item" :key="m.key"
                  :class="$route.name[5] === m.name[5]?'menu-item-current':''"
                  @click="selectPage(m)"
            >{{m.title}}</div>
        </div>
      </div>

    </div>
</template>

<script>
  import TitleTag from 'COMPONENTS/TitleTag.vue'
  export default {
    components: { TitleTag },
    data () {
      return {
        title: '社团联管理员',
        power: 2,
        menus: [
          { key: 0, title: '首页', link: '/admin/index', name: 'adminIndex' },
          { key: 1, title: '审批', link: '/admin/apps', name: 'adminApps' },
          { key: 2, title: '社团', link: '/admin/clubs', name: 'adminClubs' },
          { key: 3, title: '人员', link: '/admin/users', name: 'adminUsers' },
          { key: 4, title: '职位', link: '/admin/titles', name: 'adminTitles' },
          { key: 5, title: '场地', link: '/admin/sites', name: 'adminSites' },
          { key: 6, title: '日志', link: '/admin/logs', name: 'adminLogs' }
        ],
        currentPage: 0
      }
    },
    methods: {
      selectPage (m) {
        this.$router.push({
          name: m.name
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    color: #1F2D3D;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #left {

  }
  #right {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }
  .title-text {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }
  #adminname {
    color: #324057;
    font-size: 30px;
    line-height: 50px;
  }
  #admindesc {
    color: #8492A6;
    line-height: 20px;
    font-size: 16px;
    max-height: 40px;
    overflow-y: hidden;
  }
  #menu {
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: flex-end;
    line-height: 40px;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 20px;
  }

  .menu-item {
    width: 90px;
    cursor: pointer;
    text-align: center;
    border-radius: 20px;
    transition:all .3s;

  }
  .menu-item:hover {
    background: #58B7FF;
    color: #f4f4f4;
  }
  .menu-item-current {
    border-bottom: solid 5px #58B7FF;
    height: 35px;
    color: #58B7FF;
  }
  .menu-item-current:hover {
    background: #20A0FF;
  }
</style>
