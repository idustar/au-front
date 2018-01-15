/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div class="card" :class="active?'card-active':''" v-if="item.state!==0"
         @mouseenter="mouseOn()" @mouseleave="mouseOff()"
         @click="gotoNoti()">
        <noti-icon id="icon" :src="item.avatar" :type="item.type"></noti-icon>

      <div id="right">
        <div id="main">
          <div id="title">
            <span :class="item.state===1?'unread':''">{{item.title}}</span> <i class='iconfont icon-new1' v-if="item.state === 1"></i>
          </div>
          <div id="content" :class="item.state===1?'unread':''">
            {{item.content}}
          </div>
        </div>

          <div class="time" v-if="!mouseIn">{{ item.created_at }}</div>
          <div v-else class="doit">
            <i class="iconfont icon-yidu" v-if="item.state===1"></i>
            <i class="iconfont icon-icon_delete"></i>
          </div>
      </div>


    </div>
</template>

<script>
  import NotiIcon from 'COMPONENTS/noti/NotiIcon.vue'
  export default {
    props: ['item', 'type'],
    components: {
      NotiIcon
    },
    data () {
      return {
        mouseIn: false,
        ac1: false,
        active: false
      }
    },
    watch: {
      '$route': 'getActive'
    },
    methods: {
      getActive () {
        this.active = '' + this.$route.params.nid === '' + this.item.notification_id
      },
      mouseOn () {
        this.mouseIn = true
      },
      mouseOff () {
        this.mouseIn = false
      },
      gotoNoti () {
        console.log(this.type)
        this.$router.push({
          name: 'noti',
          params: {
            nid: this.item.notification_id
          }
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    border-bottom: solid 0.5px #E5E9F2;
    color: #324057;
    max-width: 380px;
    cursor: pointer;
    height: 60px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    transition: all .5s;
  }
  .card:hover {
    color: #58B7FF;
    background: #F9FAFC;
  }
  .card:active {
    background: #e1fdff;
  }
  .card-active {
    color: #58B7FF;
    background: #E5E9F2;
  }
  .card-active:hover {
    color: #58B7FF;
    background: #eefff0;
  }
  #icon {
    width: 60px;
  }
  #main {
    margin-left: 20px;
  }
  #right {
    width: 320px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #title {
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
  }
  #content {
    height: 30px;
    overflow: hidden;
    color: #8492A6;
    font-size: 14px;
    line-height: 30px;
  }
  .doit {
    flex-shrink: 0;
    margin-left: 10px;
    line-height: 60px;
    overflow: hidden;
    width: 50px;
    text-align: right;
  }
  .doit > i {
    font-size: 20px;
  }
  .doit>i:hover{
    color: #1D8CE0;
  }
  .unread {
    font-weight: bold;
  }
  .time {
    text-align: right;
    width: 50px;
    min-width: 50px;
    font-size: 12px;
    line-height: 60px;
    height: 60px;
    overflow: hidden;
  }
  .icon-new1 {
    font-size: 20px;
    color: #1D8CE0;
  }
</style>
