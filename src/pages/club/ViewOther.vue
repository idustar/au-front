/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="view">
  <div class="form-container">
    <div class="left">
      <div class="item-group">
      <div class="item">
        <el-tag type="primary" class="q">申请社团</el-tag>
        <club-name class="a" :name="form.club_name" :club_id="form.club_id"></club-name>
      </div>
        <div class="item">
          <el-tag type="success" class="q">申请类型</el-tag>
          <div class="a">其它类申请表</div>
        </div>
      </div>
      <div class="item-group">
      <div class="item">
        <el-tag type="danger" class="q">申请人</el-tag>
        <username-and-avatar class="a"></username-and-avatar>
      </div>
      <div class="item">
        <el-tag type="warning" class="q">申请表提交时间</el-tag>
        <div class="a">{{ form.created_at }}</div>
      </div>
      </div>
      <hr>
      <div class="item">
        <el-tag class="q">活动名称</el-tag> <div class="a">{{form.activity_name }}</div>
      </div>

    </div>
    <div class="right">
      <annexs :manage="false" :annexs="annexs"></annexs>
    </div>
  </div>
    <app-bottom></app-bottom>
  </div>

</template>

<script>
  import AppBottom from 'COMPONENTS/club/AppBottom'
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  import ClubName from 'COMPONENTS/ClubName'
  import Annexs from 'COMPONENTS/annexs/Annexs'
  export default {
    components: {
      Annexs,
      AppBottom,
      ClubName,
      UsernameAndAvatar
    },
    data () {
      return {
        form: {
          app_other_id: '',
          created_at: '2017年3月17日 22:15',
          club_id: 0,
          club_name: '魔鬼社团',
          user_id: 1,
          activity_name: '皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球皇家马德里看球'
        },
        annexs: [
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人.doc',
            file_type: 'zip'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人333333333333333331.doc',
            file_type: 'jpg'
          },
          {
            path: 'http://www.baidu.com',
            file_name: '我是中国人2.doc',
            file_type: 'mp4'
          }
        ]
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-container {
    display: flex;
    justify-content: space-between;
  }
  .left {
    width: 500px;

  }
  .btn {
    width: 500px;
  }
  .right {
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
  }
  .item-group {
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .q {
  }
  .a {
    margin-left: 10px;
    line-height: 30px;
    font-size: 14px;

  }
</style>
