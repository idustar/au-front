/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div id="container">
    <user-card :user="user">
      <div slot="more" v-if="power >= 1">
        <user-card-manage :userid="user.user_id" :power="power"></user-card-manage>
      </div>
      <div id="item">
        <avatar :avatar="user.avatar" size="middle"></avatar>
        <span id="name">&nbsp;{{ user.name }} <title-tag :title="user.title"></title-tag></span>
      </div>
    </user-card>

  </div>
</template>

<script>
  import UserCard from 'COMPONENTS/UserCard.vue'
  import Avatar from 'COMPONENTS/Avatar.vue'
  import TitleTag from 'COMPONENTS/TitleTag.vue'
  import UserCardManage from 'COMPONENTS/UserCardManage.vue'
  export default {
    data () {
      return {
        power: 1,
        user: {
          user_id: 0,
          name: '哈哈哈哈',
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
          club_id: 1,
          club_name: '同济某社团',
          title_id: 0,
          title: '宣传部副部长',
          campus: '四平路校区',
          description: '大家好，我没有留下任何足迹。',
          phone_number: '13201928123'
        }
      }
    },
    components: {
      UserCard,
      Avatar,
      TitleTag,
      UserCardManage
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    overflow: hidden;
    padding: 10px 10px 10px 15px;
    width: 100%;
    height: 45px;
    cursor: pointer;
  }
  #container:hover {
    background: white;
  }
  #item {
    line-height: 45px;
    display: flex;
    font-size: 16px;
    flex-direction: row;
  }
  #name {
    color: #58B7FF;
  }

  #name:hover {
    color:#1D8CE0;
  }

</style>

