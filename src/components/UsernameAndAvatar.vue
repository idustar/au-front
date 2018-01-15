/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div id="container">
      <user-card :user="user">
        <div id="item">
        <avatar :avatar="user.avatar" size="small"></avatar>
        <span id="name">&nbsp;{{ user.name }}</span>
        </div>
      </user-card>

  </div>
</template>

<script>
  import UserCard from 'COMPONENTS/UserCard.vue'
  import Avatar from 'COMPONENTS/Avatar.vue'
  export default {
    data () {
      return {
        user: {
          user_id: 0,
          name: 'DuStark',
          avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053975712&di=bb72d9e8c070e058803f1e8ab779c5e9&imgtype=0&src=http%3A%2F%2Fwww.hishop.com.cn%2Fuploads%2F150914%2F21678-150914112244436.jpg',
          club_id: 1,
          club_name: '同济某社团',
          title_id: 0,
          title: '社长',
          campus: '四平路校区',
          description: '大家好，我没有留下任何足迹。',
          phone_number: '13201928123'
        }
      }
    },
    components: {
      UserCard,
      Avatar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    width:100px;
    height: 25px;
    cursor: pointer;
  }
  #item {
    line-height: 25px;
    display: flex;
    flex-direction: row;
  }
  #name {
    color: #58B7FF;
  }
  #name:hover {
    color:#1D8CE0;
  }
</style>
