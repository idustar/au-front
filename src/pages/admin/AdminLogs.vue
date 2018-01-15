/**
* Created by dustar on 2017/10/7.
*/

<template>

  <div class="AdminIndex">
    <el-table
      :data="logs"
      style="width: 100%"
      max-height="350">
      <el-table-column
        prop="log_id"
        label="编号"
        sortable
        width="80">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        sortable
        width="100"
        :filters="types"
        :filter-method="filterType"
        filter-placement="bottom-end">
        <template scope="scope">
          <el-tag
            :type="colors[scope.row.type]"
            close-transition>{{typesa[scope.row.type]}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="created_at"
        sortable
        label="时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="content"
        sortable
        show-overflow-tooltip
        label="内容"
        width="620">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    components: {
    },
    methods: {
      filterType (value, row) {
        return row.type === value
      }
    },
    data () {
      return {
        goto: 0,
        visible0: false,
        typesa: ['注册登录', '资料修改', '申请提交', '申请审批', '社团管理', '人员管理'],
        colors: ['primary', 'danger', 'warning', 'success', 'info', 'primary'],
        types: [
          {
            text: '注册登录',
            value: 0
          }, {
            text: '资料修改',
            value: 1
          }, {
            text: '申请提交',
            value: 2
          }, {
            text: '申请审批',
            value: 3
          }, {
            text: '社团管理',
            value: 4
          }, {
            text: '人员管理',
            value: 5
          }
        ],
        logs: [{
          log_id: 0,
          type: 0,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 1,
          type: 1,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 2,
          type: 1,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 3,
          type: 3,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 5,
          type: 4,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 4,
          type: 5,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 7,
          type: 1,
          content: '注册成功',
          created_at: '2017年12月4日'
        }, {
          log_id: 8,
          type: 4,
          content: '注册成功',
          created_at: '2017年12月4日'
        }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

