/**
* Created by dustar on 2017/10/4.
*/

<template>
    <div id="panel">
      <div id="header">
        当前社团入驻 <el-badge class="mark" :value="users.length" /> 人
      </div>
      <div id="container">
      <club-member v-for="user in users" :key="user.user_id"></club-member>
      </div>
      <div id="footer">
        <modal-add-new-member v-if="power > 0"></modal-add-new-member>
        <el-button type="text" v-if=""@click="sendToAll()"><i class="iconfont icon-xinxi"></i> 群发消息</el-button>
      </div>
    </div>
</template>

<script>
  import ClubMember from 'COMPONENTS/club/ClubMember.vue'
  import ModalAddNewMember from 'COMPONENTS/club/ModalAddNewMember.vue'
  export default {
    components: {
      ClubMember,
      ModalAddNewMember
    },
    data () {
      return {
        power: 1,
        club_id: 0,
        dialogVisible: false,
        users: [
          {
            user_id: 0,
            name: 'DuStark',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            title: '社长'
          },
          {
            user_id: 1,
            name: 'DuStark',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            title: '副社长'
          },
          {
            user_id: 2,
            name: 'DuStark',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            title: '副社长'
          },
          {
            user_id: 3,
            name: 'DuStark',
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
            title: '社员'
          }
        ]
      }
    },
    methods: {
      sendToAll () {
        this.$router.push({ name: 'send', query: { to: this.users.map(e => e.user_id).join(',') } })
        // this.$router.push('/send?to=' +
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #panel {

  }
  #header {
    padding: 15px 10px 10px 20px;
    font-size: 14px;
    color: #324057;
  }
  .mark {
    padding-top: 5px;
  }
  #container {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 260px);
  }
  #footer {
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
</style>
