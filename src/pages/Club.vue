/**
* Created by dustar on 2017/10/3.
*/

<template>
  <div id="content-container">
    <club-left></club-left>
    <div id="club-container">
      <div id="club-content">
        <club-header :club="club"></club-header>
        <div id="sub-club-container">
          <transition name="router-fade1" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import ClubHeader from 'COMPONENTS/club/ClubHeader.vue'
  import ClubLeft from 'COMPONENTS/club/ClubLeft.vue'
  export default {
    name: 'Club',
    components: {
      ClubHeader,
      ClubLeft
    },
    data () {
      return {
        club: {
          club_id: 0,
          content: '<h1>和谐社会</h1>',
          name: '和谐社团',
          description: '你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮你好漂亮',
          logo: 'https://gw.alicdn.com/tps/TB1W_X6OXXXXXcZXVXXXXXXXXXX-400-400.png',
          created_at: '2017年8月24日'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content-container {
  }
  #club-container {

    border-radius: 10px;
    width: 1000px;
    margin:0 auto;
    background: #ffffff;
  }
  #club-content {
    padding: 20px;
  }
  #sub-club-container {
    margin-top: 40px;
  }

  .router-fade1-enter-active {
    animation: bounce-in-page1 .5s;
  }
  .router-fade1-leave-active {
    animation: bounce-in-page-reverse1 .5s;
  }
  @keyframes bounce-in-page1 {
    0% {
      opacity: 0;
      transform: translateX(-100px) scaleX(0.8);

    }
    100% {
    }
  }
  @keyframes bounce-in-page-reverse1 {
    0% {
    }
    100% {
      opacity: 0;
      transform: translateX(100px)  scaleX(0.8);
    }
  }
</style>
