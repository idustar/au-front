/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="form-container">
    <div class="left">
      <el-form ref="form" :model="form" label-position="top" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.activity_name">
          </el-input>
        </el-form-item>
        <el-form-item label="活动时间">
            <el-date-picker
              v-model="form.activity_time"
              type="datetimerange"
              placeholder="选择活动开始时间和结束时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="活动地点">
          <el-select v-model="form.site_id" filterable placeholder="活动地点">
            <el-option
              v-for="site in sites"
              :key="site.id"
              :label="site.name"
              :value="site.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动内容">
          <quill-editor v-model="form.activity_content"
                        ref="myQuillEditor"
                        class="editor"
                        :options="editorOption">
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn">提  交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <annexs :manage="true" :annexs="annexs"></annexs>
    </div>

  </div>

</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  import Annexs from 'COMPONENTS/annexs/Annexs'
  export default {
    components: {
      Annexs,
      quillEditor
    },
    data () {
      return {
        form: {
          activity_name: '某活动',
          activity_content: '<h1>大字报</h1>',
          activity_time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
          site_id: null
        },
        sites: [
          {
            id: 0,
            name: '嘉定校区F楼307'
          },
          {
            id: 1,
            name: '嘉定校区F楼444'
          },
          {
            id: 2,
            name: '嘉定校区同心楼308'
          },
          {
            id: 3,
            name: '嘉定校区图书馆'
          }
        ],
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
    width: 600px;
  }
  .btn {
    width: 600px;
  }
  .right {
    width: 310px;
    border-radius: 10px;
    overflow: hidden;
  }
</style>
