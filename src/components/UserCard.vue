/**
* Created by dustar on 2017/7/12.
*/

<template>
  <div class="user-card" v-popover:popover1>
    <slot>
      Error
    </slot>
    <el-popover
      ref="popover1"
      placement="left-start"
      :visible-arrow="false"
      width="180"
      trigger="hover">
      <div class="card">
        <div class="info-panel">
          <div class="more">
            <slot name="more"></slot>
          </div>
          <i class="message iconfont icon-xinxi1" @click="$router.push({name:'send',query:{to:user.user_id}})"></i>
          <div class="my-avatar">
            <img :src="user.avatar">
          </div>
          <div class="my-name">
            {{user.name ? user.name : '无姓名'}}
              <span class="my-per" v-if="user.club_id!==0">
                <title-tag :title="user.title"></title-tag>
              </span>
          </div>
          <div class="my-desc">
            {{user.description}}
          </div>
        </div>
        <div class="right-panel">

            <div class="campus">
              <div class="que"><i class="iconfont icon-zhusu"></i> 校区</div>
              <div class="ans">{{user.campus}}</div>
            </div>
          <div class="club">
            <div class="que"><i class="iconfont icon-chengyuan"></i> 社团</div>
            <div class="ans">{{user.club_name}}</div>
          </div>
          <div class="phone">
            <div class="que"><i class="iconfont icon-shouji"></i> 手机号</div>
            <div class="ans">{{user.phone_number}}</div>
          </div>

        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
  import TitleTag from 'COMPONENTS/TitleTag.vue'
  export default {
    components: {
      TitleTag
    },
    props: ['user'],
    data () {
      return {
        permissions: ['创建者', '管理员', '普通用户']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    box-shadow: 4px 4px 25px rgba(0,0,0,0.5);
    margin-left: -11px;
    /*margin-right: 30px;*/
    margin-top: -10px;
    margin-bottom: -10px;
    height: 200px;
    width: 350px;
    border-bottom: 10px solid #58B7FF;
    display: flex;
    flex-direction: row;
  }



  .info-panel {
    width: 200px;
    height: 100%;
    background: #475669;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .my-avatar img {
    width: 90px;
    height: 90px;
    margin-top:18px;
    border: white solid 0.5px;
    border-radius: 100%;
  }

  .my-name {
    font-size: 18px;
    line-height: 24px;
    height: 25px;
    margin-top: 7px;
    color: white;
  }

  .my-desc {
    overflow-y: hidden;
    padding-top: 5px;
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    /*margin-top: 10px;*/
    color: #99A9BF;
    padding-left: 20px;
    padding-right: 20px;
  }

  .my-per {
    font-size: 14px;
    margin-left: 5px;
  }


  .right-panel {
    background: #8492A6;
    width: 150px;
    padding: 10px;
  }

  .que {
    user-select: none;
    cursor: default;
    padding: 1px;
    font-size: 16px;
    color: #D3DCE6;
    padding-left: 5px;
  }
  .ans {
    padding: 0 0 10px 29px;
    font-size: 14px;
    color: #F9FAFC;
  }
  .el-button {
    float: right;
  }
  .mult {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .message{
    top: 40px;
    right: 15px;
    position: absolute;
    cursor: pointer;
    color: #C0CCDA;
    font-size: 40px;
    line-height: 50px;
  }
  .more {
    position: absolute;
    top: 40px;
    left:3px;
  }
  .message:hover {
    color: #ffffff;
  }
</style>
