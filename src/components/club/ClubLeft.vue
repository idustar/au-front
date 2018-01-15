/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div class="club-right">
    <transition name="bounce">
      <div id="rightbar" v-if="showMenu" class="list-complete-item">
        <club-members></club-members>
      </div>
    </transition>
    <div class="pull-item" @click="showmenu()" :class="showMenu?'pull-item-active':''">
      <i class="iconfont icon-yonghuzu"></i><span v-if="showMenu"> 社团成员</span>
    </div>
  </div>

</template>

<script>
  import ClubMembers from './ClubMembers'
  export default {
    components: {ClubMembers},
    data () {
      return {
        showMenu: false
      }
    },
    methods: {
      showmenu () {
        setTimeout(
          () => {
            this.showMenu = !this.showMenu
          }, 50)
      }
    },
    watch: {
      '$route' (to, from) {
        this.showMenu = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .club-right {
    position: fixed;
    z-index: 20;
    left: 0px;
    display: inline-table;
  }
  .pull-item {
    position: static;
    width: 50px;
    height: 50px;
    background: whitesmoke;
    box-shadow: 0 5px 20px #666666;
    border-radius: 0px 25px 25px 0px;
    padding-right: 30px;
    line-height: 50px;
    text-align: right;
    cursor: pointer;
    transition:all 1s;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0,0,0,0.5);
  }
  .pull-item:hover {
    width: 240px;
  }
  .pull-item-active {
    width: 230px;
  }
  .pull-item > i {
    font-size: 24px;
  }
  #rightbar {
    position: static;
    width:240px;
    overflow:hidden;
    height:calc(100vh - 162px);
    background:#F9FAFC;
    box-shadow: 2px 0px 10px rgba(0,0,0,0.2);

  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scaleY(0);
    }
    10% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1.5);
    }
    100% {
      transform: scaleX(1);
    }
  }
  /*.list-complete-item {*/
    /*transition: all 1s;*/
  /*}*/
  /*.list-complete-enter, .list-complete-leave-to*/
    /*!* .list-complete-leave-active for below version 2.1.8 *! {*/
    /*width: 0px;*/
    /*transform: translateY(500px);*/
  /*}*/
  /*.list-complete-leave-active {*/

  /*}*/
</style>
