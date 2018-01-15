/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div class="panel">
      <div class="left">
        <div id="header">
          <el-tabs v-model="activeType" type="card" @tab-click="handleClick">
            <el-tab-pane label="收件箱" name="all">
            </el-tab-pane>
            <el-tab-pane name="unread">
              <span slot="label"><i class="iconfont icon-weidu"></i> 未读 <el-badge class="mark" :value="count" /></span>
            </el-tab-pane>
            <el-tab-pane label="公共通知" name="read"></el-tab-pane>
            <el-tab-pane label="我发出的" name="system"></el-tab-pane>
          </el-tabs>
        </div>
        <div id="message-items">
          <noti-card v-for="noti in notis" :item="noti" :key="noti.notification_id" type="in"></noti-card>
          <not-found v-if="count === 0">
            收件箱里空空如也的，怎么搞的~
          </not-found>
        </div>
      </div>
      <div class="right">
          <transition name="router-fade-kk" mode="out-in">
            <router-view></router-view>
          </transition>
      </div>
      <i class="iconfont new-noti icon-zixuan" v-show="'noti' === $route.name" @click="$router.push({name: 'send'})"></i>
    </div>
</template>

<script>
  import NotFound from 'COMPONENTS/NotFound.vue'
  import NotiCard from 'COMPONENTS/noti/NotiCard.vue'
  export default {
    components: {NotiCard, NotFound},
    data () {
      return {
        activeType: 'all',
        count: 3,
        notis: [
          {
            sender_name: '王昌龄',
            notification_id: 0,
            avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4137574537,1797912673&fm=173&s=52353DC010E0651FC0153C030300B09A&w=218&h=146&img.JPG',
            sender_id: 2,
            type: 0,
            title: '我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你',
            content: '你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。',
            created_at: '昨天',
            state: 1
          },
          {
            sender_name: '王昌龄',
            notification_id: 1,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            sender_id: 2,
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '12月16日',
            state: 1
          },
          {
            sender_name: '王昌龄',
            notification_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            sender_id: 2,
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 0
          },
          {
            sender_name: '王昌龄',
            notification_id: 3,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 2
          },
          {
            sender_name: '王昌龄',
            notification_id: 4,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 2
          },
          {
            sender_name: '王昌龄',
            notification_id: 5,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 2
          },
          {
            sender_name: '王昌龄',
            notification_id: 6,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 2
          },
          {
            sender_name: '王昌龄',
            notification_id: 7,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 2
          }
        ]
      }
    },
    methods: {
      handleClick () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel {
    width: 1000px;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-between;
  }
  .left {
    border-radius: 20px;
    width: 410px;
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
    height: calc(100vh - 152px);
  }
  #message-items {
    height: calc(100vh - 190px);
    overflow-y: auto;
  }
  .right {
    border-radius: 20px;
    height: calc(100vh - 152px);
    overflow: hidden;
    width: 580px;
    background: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  #header {
    margin-bottom: -16px;
  }

  .router-fade-kk-enter-active {
    animation: bounce-in-sspage .5s;
  }
  .router-fade-kk-leave-active {
    animation: bounce-in-sspage-reverse .5s;
  }
  @keyframes bounce-in-sspage {
    0% {
      opacity: 0;
      transform: translateY(-500px);

    }
    50% {
      transform: scaleX(0.5);
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bounce-in-sspage-reverse {
    0% {
      opacity: 1;
    }
    50% {
      transform: scaleX(0.5);
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translateY(500px);
    }
  }
  .new-noti {
    font-size: 50px;
    position: fixed;
    right: 10px;
    top: 85px;
    z-index: 500;
    cursor: pointer;
    color: #20A0FF;
  }
  .new-noti:hover {
    color: #1D8CE0;
    font-size: 54px;
    right: 8px;
    top: 83px;
  }
  .new-noti:active {
    color: #007eb5;
  }
</style>
