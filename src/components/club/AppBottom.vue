/**
* Created by dustar on 2017/10/6.
*/

<template>
  <transition name="fades">
    <div class="app-bottom" v-if="show && !(state===0 && power>1)" :class="toClass[state]+(simple?' simple':'')">
      <div class="app-bottom-container">
        <div class="left" v-if="state">
          <span v-if="state===1">
            <i class="iconfont icon-xuanze-duoxuan"></i>&nbsp;
            审批通过!
          </span>
          <span v-else>
            <i class="iconfont icon-tishi"></i>&nbsp;
            审批被拒绝!
          </span>
          <span v-if="!simple">
             &nbsp;这篇申请于 {{check_at}} 完成审批。 操作人是
          </span>
          <username-and-avatar class="user" v-if="!simple"></username-and-avatar>
        </div>
        <div class="left" v-else>
          <i class="iconfont icon-jiazai-tianchong"></i>&nbsp;暂未审批。
          <span v-if="!simple">
             &nbsp;请耐心等待管理员或指导老师操作。
          </span>
        </div>
        <div class="right">
          <span class="right-btn" @click="$router.push({name:'send',query:{to: user_id}})" v-if="!simple && state">
            <i class="iconfont icon-fankui-tianchong"></i> &nbsp;给{{checker_name}}发消息
          </span>
          <i class="right-btn back iconfont icon-fanhui"
             v-if="!simple"
             :class="toClass[state]+'-color'"
             @click="simple = !simple"></i>
          <i class="right-btn back" v-else
             @click="simple = !simple"></i>
        </div>
      </div>
    </div>


    <div class="app-bottom" v-else-if="show" :class="simple?' simple':''">
      <div class="app-bottom-container">
        <div class="left">
          <i class="iconfont icon-jiazai-tianchong"></i>&nbsp;暂未审批。
          <span v-if="!simple">
             &nbsp;请可以对本申请表进行操作。
          </span>
        </div>
        <div class="right">
          <span v-if="!simple">
          <span class="right-btn" @click="">
            <i class="iconfont icon-xuanze-duoxuan-tianchong"></i> &nbsp;通过
          </span>
          <span class="right-btn danger-btn" @click="">
            <i class="iconfont icon-jinzhi"></i> &nbsp;拒绝
          </span>
          <span class="right-btn" @click="">
            <i class="iconfont icon-shenhe"></i> &nbsp;修改并通过
          </span>
          <span class="right-btn danger-btn" @click="">
            <i class="iconfont icon-dianping"></i> &nbsp;修改并拒绝
          </span>
          </span>
          <i class="right-btn back iconfont icon-fanhui"
             v-if="!simple"
             :class="toClass[state]+'-color'"
             @click="simple = !simple"></i>
          <i class="right-btn back" v-else
             @click="simple = !simple"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  export default {
    components: {
      UsernameAndAvatar
    },
    mounted () {
      setTimeout(() => { this.show = true }, 500)
    },
    data () {
      return {
        power: 1,
        show: false,
        simple: false,
        toClass: {
          1: 'success',
          2: 'danger',
          0: 'warning'
        },
        user_id: 2,
        checker_name: '杜佳豪',
        state: 0,
        check_at: '2017年12月17日 23:17'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-bottom {
    z-index: 800;
    position: absolute;
    bottom:20px;
    background: #58B7FF;
    border-bottom: 5px solid #008e96;
    height: 40px;
    width: 900px;
    left: calc((100vw - 900px) / 2);
    border-radius: 10px;
    box-shadow: 0px -5px 20px rgba(0,0,0,0.7);
    color: rgba(255,255,255,0.8);
    font-weight: 300;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    transition: all 1s;
  }
  .simple {
    width: 160px;
  }
  .app-bottom:hover {
    background: #52abed;
  }
  .app-bottom-container {
    padding-left: 20px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
  }
  .left {
    display: flex;
  }
  .danger-color {
    color: #FF4949;
  }
  .success-color {
    color: #67C23A;
  }
  .warning-color {
    color: #F7BA2A;
  }
  .danger {
    background: #FA5555;
    border-bottom: 5px solid #ff8c00;
  }
  .danger:hover {
    background: #e04242;
  }

  .success {
    background: #67C23A;
    border-bottom: 5px solid #006d2e;
  }

  .success:hover {
    background: #12a460;
  }
  .warning {
    background: #F7BA2A;
    border-bottom-color: #836500;
  }
  .warning:hover {
    background: #d5c20c;
  }
  .user {
    font-size: 16px;
    background: rgba(0,0,0,0.2);
    padding: 1px 0 3px 5px;
    margin-top: 6px;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: 900;
  }
  .right-btn {
    background: rgba(0,0,0,0.3);
    padding: 3px 15px 3px 15px;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 5px;
  }
  .back {
    padding: 4px 10px 6px 10px;
    margin-left: 10px;
  }
  .right-btn:hover {
    background: rgba(0,0,0,0.4);
  }
  .right-btn:active {
    background: rgba(0,0,0,0.5);
  }

  .fades-enter-active {
    animation: boun1ce-in-page2 .5s;
  }
  @keyframes boun1ce-in-page2 {
    0% {
      opacity: 0;
      transform: translateY(-50px) scaleX(0.9);
    }
    100% {
    }
  }
  .danger-btn {
    background: rgba(255,73,73,0.5);
  }
  .danger-btn:hover {
    background: rgba(255,73,73,0.6);
  }
  .danger-btn:active {
    background: rgba(255,73,73,0.7);
  }

</style>
