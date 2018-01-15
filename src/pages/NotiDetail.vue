/**
* Created by dustar on 2017/10/5.
*/

<template>
    <div class="page">
      <div id="header">
        <div id="header-left">
          <div class="header-left-item" v-if="noti.send_by_me">我发给&nbsp;&nbsp;&nbsp;</div>
          <username-and-avatar v-if="noti.type!==0" id="avatar"></username-and-avatar>
          <el-tooltip class="item" effect="dark" :content="receivers_name_str" placement="top" v-if="noti.send_by_me && noti.receiver_count > 1">
            <div class="header-left-item" >等 <span class="receivers">{{noti.receiver_count}}</span> 人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div class="header-left-item">{{ noti.created_at }}</div>
        </el-tooltip>
        </div>
        <div class="type" v-if="noti.type===0"><i class="iconfont icon-shezhi"></i> 系统消息</div>
        <div class="type" v-else-if="noti.type===1"><i class="iconfont icon-jingbao"></i> 公共通知</div>
        <div class="type" v-else></div>
      </div>
        <div id="title">
          <el-tooltip class="item" effect="dark" :content="noti.title" placement="top">
            <div id="title-text">{{ noti.title }}</div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="含附件" placement="right">
            <i @click="this.location.href='#annexs'" id="annex-icon" v-if="annexs" class="iconfont icon-fujian-tianchong"></i>
          </el-tooltip>
        </div>

      <div id="container">
        <div id="content" v-html="noti.content">
          {{ noti.content }}
        </div>
        <annexs :manage="false" :annexs="annexs" v-if="annexs"></annexs>
      </div>

      <div id="footer">
        <el-input
          v-if="!noti.send_by_me"
          type="textarea"
          autosize
          placeholder="快速回复，请输入内容"
          icon="edit"
          resize="none"
          autofocus
          v-model="fast_reply_text"
          class="footer-left"
        >
        </el-input>
        <el-button-group>
          <el-button type="primary" size="small"  v-if="!noti.send_by_me">
            <el-tooltip class="item" effect="dark" content="点击快速回复" placement="top">
              <i class="iconfont icon-xiaoxi"></i>
            </el-tooltip>
          </el-button>
          <el-button type="primary" size="small"><i class="iconfont icon-icon_delete"></i> 删除</el-button>
          <el-button type="primary" size="small" v-if="!noti.send_by_me" @click="$router.push('/send?to='+noti.sender_id)">
            <i class="iconfont icon-daohang"></i> 回复</el-button>
          <el-button type="primary" size="small" v-else @click="$router.push('/send?to='+noti.first_receiver_id)">
            <i class="iconfont icon-daohang"></i> 再发一条</el-button>
        </el-button-group>

      </div>
    </div>
</template>

<script>
  import Annexs from 'COMPONENTS/annexs/Annexs'
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  export default {
    components: {
      UsernameAndAvatar,
      Annexs
    },
    data () {
      return {
        fast_reply_text: '',
        noti: {
          send_by_me: true,
          receiver_count: 2,
          first_receiver_id: 1,
          receivers_name: ['王昌龄', '孔乙己', '毛景涛', '黄金档'],
          sender_name: '王昌龄',
          notification_id: 0,
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
          sender_id: 2,
          type: 1,
          title: '我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你我为何还咬着你',
          content1: '<p>hi</p>',
          content: '<p><code>flex-basis</code>属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为<code>auto</code>，即项目的本来大小。</p><p>它可以设为跟<code>width</code>或<code>height</code>属性一样的值（比如350px），则项目将占据固定空间。</p><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><h3>4.5 flex属性</h3><p>如果所有项目的<code>flex-grow</code>属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的<code>flex-grow</code>属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3>4.3 flex-shrink属性</h3><p><code>flex-shrink</code>属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p>',
          created_at: '2017年3月16日 17:38',
          state: 0
        },
        annexs: [
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人.doc',
            file_type: 'doc'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人.doc',
            file_type: 'jpg'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人.doc',
            file_type: 'mp4'
          }
        ]
      }
    },
    computed: {
      receivers_name_str () {
        return this.noti.receivers_name.join('、')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 150px);
    overflow: hidden;
  }
  #header {
    flex-shrink: 0;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 25px;
  }
  .type, .type>i{
    font-size: 20px;
    color: #D3DCE6;
  }
  #avatar {
    margin-right: 20px;
  }
  #header-left {
    display: flex;
  }
  .header-left-item {
    color: #D3DCE6;
    font-size: 14px;
  }
  #title {
    flex-shrink: 0;
    padding-left: 20px;
    font-size: 30px;
    color: #99A9BF;
    line-height: 60px;
    font-weight: 800;
    height: 60px;
    overflow: hidden;
    background: #F9FAFC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #title:hover {
    color: #324057;
    background: #EFF2F7;
    cursor: text;
  }
  #title-text {

  }
  #annex-icon {
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  .receivers {
    text-decoration: underline;
    color: #324057;
    cursor: pointer;
  }
  #container {
    height: calc(100vh - 240px);
    color: #1F2D3D;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #content {
    margin: 20px;
  }
  #footer {
    border-radius: 5px;
    background: #20A0FF;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-left {
    width: 415px;
  }

</style>
