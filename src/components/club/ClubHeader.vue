/**
* Created by dustar on 2017/10/3.
*/

<template>
    <div id="header">
      <div id="left">
        <div id="logo">
          <img :src="club.logo">
        </div>
        <div id="info-right">
          <div id="clubname">{{club.name}}</div>
          <div id="clubdesc">{{club.description}}</div>
        </div>
      </div>
      <div id="right">
        <div class="title-text" v-if="club_id === club.club_id">欢迎光临，您是本社团的 <title-tag :title="title"></title-tag> 。</div>
        <div class="title-text" v-else-if="power >= 2">尊敬的 <title-tag :title="title"></title-tag> ，你好。</div>
        <div class="title-text" v-else>欢迎访问{{club.name}}。</div>
        <div id="menu">

            <div  v-for="m in menus" class="menu-item" :key="m.key"
                  :class="$route.name === m.name?'menu-item-current':''"
                  @click="selectPage(m)"
                  v-if="power >= 1 || ((club_id === club.club_id || !m.self) && ((power === 1) || m.power))"
            >{{m.title}}</div>

        </div>
      </div>

    </div>
</template>

<script>
  import TitleTag from 'COMPONENTS/TitleTag.vue'
  export default {
    name: 'ClubHeader',
    components: { TitleTag },
    props: ['club'],
    data () {
      return {
        title: '宣传部部长',
        club_id: 0,
        power: 0,
        menus: [
          { key: 0, title: '首页', link: '/club/index', name: 'index', self: false, power: true },
          { key: 1, title: '预算', link: '/club/budget', name: 'budget', self: true, power: true },
          { key: 2, title: '物料', link: '/club/poster', name: 'poster', self: true, power: true },
          { key: 3, title: '场地', link: '/club/site', name: 'site', self: true, power: true },
          { key: 4, title: '其它', link: '/club/other', name: 'other', self: true, power: true },
          { key: 5, title: '设置', link: '/club/setting', name: 'setting', self: true, power: false }
        ],
        currentPage: 0
      }
    },
    methods: {
      selectPage (m) {
        this.$router.push({
          name: m.name,
          params: {
            clubid: this.$route.params.clubid
          }
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
    display: flex;
    flex-direction: row;
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
  #logo > img {
    width: 80px;
    height: 80px;
    border: #99A9BF solid 1px;
    border-radius: 20%;
  }
  #info-right {
    padding-left: 20px;
  }
  #clubname {
    color: #324057;
    font-size: 30px;
    line-height: 50px;
  }
  #clubdesc {
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
