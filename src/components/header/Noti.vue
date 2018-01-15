/**
* Created by dustar on 2017/10/3.
*/

<template>
    <div class="Noti">
      <el-popover
        ref="popovermessage"
        placement="bottom-end"
        width="380"
        trigger="hover"
        v-model="visible">
        <div id="message-items" @click="visible=false">
          <noti-card v-for="noti in notis" :item="noti" :key="noti.notification_id" type="out"></noti-card>
          <not-found v-if="count === 0">
            所有通知好像都被你读光了耶~
          </not-found>
          <div id="enter" @click="$router.push('/notification/0')"><i class="iconfont icon-xiafan"></i> 进入通知箱</div>
        </div>

      </el-popover>
      <div class="noti-button" v-popover:popovermessage>
        <i class="iconfont" :class="count?'icon-fankui-tianchong':'icon-fankui'"></i>
        <el-badge :value="count" class="item">
        </el-badge>
      </div>
    </div>
</template>

<script>
  import NotFound from 'COMPONENTS/NotFound.vue'
  import NotiCard from 'COMPONENTS/noti/NotiCard.vue'
  import ElBadge from '../../../node_modules/element-ui/packages/badge/src/main'
  export default {
    data () {
      return {
        visible: false,
        count: 4,
        notis: [
          {
            sender_name: '王昌龄',
            notification_id: 10,
            avatar: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4137574537,1797912673&fm=173&s=52353DC010E0651FC0153C030300B09A&w=218&h=146&img.JPG',
            sender_id: 2,
            type: 0,
            title: '我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你',
            content: '你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 1
          },
          {
            sender_name: '王昌龄',
            notification_id: 11,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            sender_id: 2,
            type: 1,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 1
          },
          {
            sender_name: '王昌龄',
            notification_id: 13,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            sender_id: 2,
            type: 2,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 1
          },
          {
            sender_name: '王昌龄',
            notification_id: 18,
            sender_id: 2,
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            type: 3,
            title: '我为何还咬着你',
            content: '你让我沉醉。',
            created_at: '2017年3月16日 17:38',
            state: 1
          }
        ]
      }
    },
    components: {ElBadge, NotiCard, NotFound},
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .noti-button {
    color: #ffffff;
    cursor: pointer;
    height: 72px;
    padding-left: 20px;
    padding-right: 10px;
    width: 37px;
    overflow: hidden;
  }
  .noti-button:hover {
    color: #e4e4e4;
    background: #20A0FF;
  }
  i {
    font-size: 24px;
  }
  .item {
    margin-left: -20px;
    margin-top: -30px;
  }
  #message-items {
    margin: -10px;
  }
  #enter {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: #99A9BF;
    cursor: pointer;
    text-align: center;
    padding-bottom: 5px;

  }
  #enter:hover {
    background: #F9FAFC;
    color: #58B7FF;
  }
  #enter:active {
    background: #e5fcfc;
    color: #37b9ff;
  }
</style>
