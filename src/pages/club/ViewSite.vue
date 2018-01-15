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
            <div class="a">活动场地类申请表</div>
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
        <div class="item">
          <el-tag class="q">活动时间</el-tag> <div class="a">{{form.activity_time }}</div>
        </div>
        <div class="item">
          <el-tag class="q">活动地点</el-tag> <div class="a">{{form.site_name }}</div>
        </div>
        <div class="item">

          <el-tag class="q">活动内容</el-tag>
          <div class="a"><el-button type="text" @click="dialogVisible = true">点击放大展示</el-button></div>




        </div>
        <div class="ahtml" v-html="form.activity_content">
          {{form.activity_content }}
        </div>
        <el-dialog
          title="活动内容"
          :visible.sync="dialogVisible"
          top="7vh"
          width="90%"
        >
          <div class="bhtml" v-html="form.activity_content">{{form.activity_content }}</div>
          <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关  闭</el-button>
          </span>
        </el-dialog>
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
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'

  export default {
    components: {
      ElButton,
      Annexs,
      AppBottom,
      ClubName,
      UsernameAndAvatar
    },
    data () {
      return {
        dialogVisible: false,
        form: {
          app_site_id: '',
          created_at: '2017年3月17日 22:15',
          club_id: 0,
          club_name: '魔鬼社团',
          user_id: 1,
          activity_name: '某活动',
          activity_content: '<h1>大字报</h1><p>hi</p><h1>大字报</h1><p>hi</p><h1>大字报</h1><p>hi</p><h1>大字报</h1><p>hi</p><h1>大字报</h1><p>hi</p>',
          activity_time: '2017年3月14日',
          site_name: '哈哈哈'
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
    width: 660px;

  }
  .right {
    width: 260px;
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
    overflow-x: hidden;
    overflow-y: hidden;

  }
  .ahtml {
    border: 0.5px #efefef solid;
    margin-bottom: 28px;
    width: 640px;
    padding: 10px;
    cursor: pointer;
  }
  .bhtml {
    height: calc(55vh);
    margin-top: -20px;
    margin-bottom: -20px;
    overflow: auto;
  }
</style>
