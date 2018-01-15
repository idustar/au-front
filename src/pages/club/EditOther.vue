/**
* Created by dustar on 2017/10/6.
*/

<template>
    <div class="form-container">
      <div class="left">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input v-model="form.activity_name">
              <template slot="prepend">活动名称</template>
            </el-input>
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
  import Annexs from 'COMPONENTS/annexs/Annexs'
  export default {
    components: {
      Annexs
    },
    data () {
      return {
        form: {
          activity_name: ''
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
</style>
