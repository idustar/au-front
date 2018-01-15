/**
* Created by dustar on 2017/10/7.
*/

<template>
    <div class="AdminIndex">

      <div v-for="(group, key) in titles_filter" :key="key">
        <div class="left">
        {{ powerToDesc[key] }}
        </div>
        <div class="right">
        <el-tag
          class="tag"
          :type="keyToColor[key]"
          :key="title.title_id"
          v-for="(title, k) in group.options"
          closable
          :disable-transitions="false"
          @close="handleClose(key, k)">
          {{title.content}}
        </el-tag>
        <el-form :inline="true">
      <el-form-item>
        <el-input
          class="input-new-tag"
          v-model="group.input"
          ref="saveTagInput"
          size="small"
        >
        </el-input>
      </el-form-item>
        <el-form-item>

        <el-button class="button-new-tag" :disabled="group.input === ''"
                   size="mini" @click="handleInputConfirm(key)">+ 增加新的职位</el-button>
        </el-form-item>
        </el-form>
      </div>
      </div>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        powerToDesc: [
          '社团成员', '社团负责人', '社团联成员', '超级管理员'
        ],
        keyToColor: [
          'primary', 'success', 'danger', 'warning'
        ],
        titles: [
          {
            title_id: 3,
            content: '副社长',
            power: 0
          }, {
            title_id: 4,
            content: '宣传部部长',
            power: 0
          },
          {
            title_id: 0,
            content: '社长',
            power: 1
          },
          {
            title_id: 1,
            content: '社团联负责人',
            power: 2
          },
          {
            title_id: 2,
            content: '指导老师',
            power: 2
          },
          {
            title_id: 5,
            content: '超级管理员',
            power: 3
          }
        ],
        titles_filter: [],
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      }
    },
    mounted () {
      for (let i = 0; i < 4; i++) {
        this.titles_filter.push({
          input: '',
          v: false,
          label: this.powerToDesc[i],
          options: this.titles.filter((v) => v.power === i)
        })
      }
    },
    methods: {
      handleClose (key, k) {
        this.titles_filter[key].options.splice(k, 1)
      },
      handleInputConfirm (k) {
        let inputValue = this.titles_filter[k].input
        if (inputValue) {
          this.titles_filter[k].options.push({
            title_id: 1,
            content: inputValue,
            power: k
          })
        }
        this.titles_filter[k].input = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .AdminIndex {
    padding-left: 20px;
  }
  .tag {
    margin-left: 10px;
    margin-top: 4px;
  }
  .button-new-tag {
    margin-left: -10px;
    margin-top: -7px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 110px;
    margin-top: 2px;
    margin-left: 5px;
    vertical-align: bottom;
  }
  .el-form {
    display: inline;
  }
  .left {
    line-height: 30px;
    color:#5A5E66;
  }
</style>
