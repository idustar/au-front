/**
* Created by dustar on 2017/10/7.
*/

<template>
  <el-form :inline="true">
    <el-form-item>
      <el-select v-model="currentTitle"
                 filterable placeholder="请选择或输入搜索职位" class="up-select">
        <el-option-group
          v-for="group in titles_filter"
          :key="group.label"
          :label="group.label"
          :disabled="group.disabled"
        >
          <el-option
            v-for="title in group.options"
            :key="title.title_id"
            :label="title.content"
            :value="title.title_id"
          >
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">确认修改</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  import ElFormItem from '../../../node_modules/element-ui/packages/form/src/form-item'
  export default {
    components: {
      ElFormItem
    },
    data () {
      return {
        dialogVisible: false,
        powerToDesc: [
          '社团成员', '社团负责人', '社团联成员', '超级管理员'
        ],
        power: 4,
        currentTitle: '',
        titles_filter: [],
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
        ]
      }
    },
    mounted () {
      for (let i = 0; i < 4; i++) {
        this.titles_filter.push({
          label: this.powerToDesc[i],
          disabled: i >= this.power && this.power !== 3,
          options: this.titles.filter((v) => v.power === i)
        })
      }
    },
    methods: {
      handleClose (done) {
        this.dialogVisible = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hi {
    padding: 0;
  }
  .d {
    z-index: 800;
  }
</style>
