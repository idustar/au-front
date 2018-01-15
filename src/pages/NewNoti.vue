/**
* Created by dustar on 2017/10/5.
*/

<template>
  <div class="page">
    <div id="header">
      <div id="header-left">
        <div class="header-left-item" v-if="!noti.is_public">发给&nbsp;</div>
        <el-form>
          <el-form-item style="margin-bottom: 0px">
            <el-select
              v-model="noti.receivers_id"
              multiple
              filterable
              default-first-option
              placeholder="请输入或选择发送对象"
              no-match-text="找不到该用户名。"
              no-data-text="加载错误，请稍后再试。"
              class="select-receiver"
              v-if="!noti.is_public"
            >
              <el-option
                v-for="user in users"
                :key="user.user_id"
                :label="user.name"
                :value="user.user_id">
                <span style="float: left">{{ user.name }}</span>
                <span class="float-right">{{ user.club_name }} - {{ user.title_name }}</span>
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>

      </div>
      <div class="type" v-if="power > 1" :class="noti.is_public?'icon-active':''" @click="noti.is_public = !noti.is_public">
        <i v-if="noti.is_public" class="iconfont icon-xuanze-danxuan" ></i>
        <i v-else class="iconfont icon-xuanze-moren"></i>
          群发通知
      </div>
    </div>
    <div id="title">
        <input class="title-input"
               v-model="noti.title"
               placeholder="请输入标题"
        >

      <el-tooltip class="item" effect="dark" content="含附件" placement="right">
        <i id="annex-icon" v-if="annexs" class="iconfont icon-fujian-tianchong"></i>
      </el-tooltip>
    </div>

    <div id="container">
      <quill-editor v-model="noti.content"
                    ref="myQuillEditor"
                    class="editor"
                    :options="editorOption">
      </quill-editor>
    </div>


    <div id="footer">
      <el-popover
        ref="popoverclear"
        placement="top"
        width="160"
        v-model="visibleClear">
        <p>您确定要清空您所输入的所有内容吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visibleClear = false">取消</el-button>
          <el-button type="primary" size="mini" @click="visibleClear = false;noti.content=''">确定</el-button>
        </div>
      </el-popover>
      <el-popover
        ref="popoverannexs"
        placement="top"
        width="400"
        v-model="visibleAnnexs">
        <annexs :manage="true" :annexs="annexs" id="annexs-popover"></annexs>

      </el-popover>
      <el-button-group>
        <el-button type="primary" size="small">
          <i class="iconfont icon-wancheng"></i> 确认发送
        </el-button>
        <el-button type="primary" size="small" v-popover:popoverclear><i class="iconfont icon-icon_delete"></i> 清空内容</el-button>
        <el-button type="primary" size="small" v-popover:popoverannexs>
          <i class="iconfont icon-lianjie"></i> <span v-if="annexs.length === 0">添加</span>附件
          <span v-if="annexs.length > 0">({{annexs.length}})</span>
        </el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import ContentForm from 'COMPONENTS/form/ContentForm'
  import Annexs from 'COMPONENTS/annexs/Annexs'
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  export default {
    components: {
      UsernameAndAvatar,
      Annexs,
      ContentForm,
      quillEditor
    },
    created () {
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    data () {
      return {
        power: 2,
        visibleAnnexs: false,
        visibleClear: false,
        inputTitleVisible: false,
        users: [
          {
            user_id: 1,
            name: '许琨',
            club_name: '上海上港同济球迷会',
            title_name: '社长'
          }, {
            user_id: 2,
            name: '许申花',
            club_name: '同济羽毛球协会',
            title_name: '副社长'
          }, {
            user_id: 3,
            name: '许国安',
            club_name: '甜品社',
            title_name: '宣传部部长'
          }, {
            user_id: 4,
            name: '黄什么哲',
            club_name: '社团联',
            title_name: '管理员'
          }, {
            user_id: 0,
            name: '尤什么什么什么什么',
            club_name: '社团联',
            title_name: '管理员'
          }, {
            user_id: 5,
            name: '北看台分子',
            club_name: '社团联',
            title_name: '指导老师'
          }
        ],
        noti: {
          is_public: false,
          receivers_id: [],
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
        ],
        editorOption: {
          placeholder: '请在此输入正文'
        }
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      fetchData () {
        if (this.$route.query.to) {
          this.noti.receivers_id = ('' + (this.$route.query.to)).split(',').map(e => parseInt(e))
        }
        if (this.$route.query.all && this.$route.query.all === 'true') {
          this.noti.is_public = true
        }
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
    line-height: 40px;
    padding-bottom: 2px;
  }
  .type{
    font-size: 20px;
    color: #D3DCE6;
    cursor: pointer;
  }
  .type > i{
    font-size: 20px;
  }
  .icon-active {
    color: #8492a6;
  }
  #header-left {
    display: flex;
  }
  .header-left-item {
    color: #D3DCE6;
    font-size: 14px;
  }
  .select-receiver {
    width: 380px;
  }
  #title {
    flex-shrink: 0;
    font-size: 30px;
    line-height: 60px;
    font-weight: 800;
    height: 60px;
    overflow: hidden;
    background: #F9FAFC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    color: #99A9BF;
  }
  #title:hover {
    background: #EFF2F7;
  }
  .title-input {
    line-height: 30px;
    background: transparent;
    border: transparent;
    width: 540px;
    outline: none;
    color: #99A9BF;
    padding-right: 10px;
  }
  #annex-icon {
    font-size: 30px;
    margin-right: 10px;
    cursor: pointer;
  }
  #container {
    height: calc(100vh - 250px);
    color: #1F2D3D;
    overflow: auto;
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
  .float-right {
    float: right;
    color: #8492a6;
    font-size: 13px;
    padding-right: 25px;
  }
  .editor {
    height: calc( 100% - 66px ) ;
  }

</style>
