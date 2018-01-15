/**
* Created by dustar on 2017/10/6.
*/

<template>
  <div class="form-container">
    <div class="left">
      <div class="item-group">
        <div class="item">
          <el-tag type="primary" class="q">申请社团</el-tag>
          <club-name class="a" :name="form.club_name" :club_id="form.club_id"></club-name>
        </div>
        <div class="item">
          <el-tag type="success" class="q">申请类型</el-tag>
          <div class="a">预算申报表</div>
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
        <el-tag class="q">标题</el-tag> <div class="a">{{form.title }}</div>
      </div>
      <div class="item">
        <el-tag type="success" class="q">活动总预算</el-tag> <div class="a">{{form.total_budget }} 元</div>
      </div>

      <div v-for="(value, key) in form.activities" :key="key" class="activity">
        <div class="activity-header">
          <div class="activity-name">活动 {{ key+1 }} {{ value.name }} </div>
        </div>
        <div class="activity-form">
          <div class="activity-left">
            <div class="item">
              <el-tag type="danger" class="q">活动名</el-tag>
              <div class="a">{{value.name}}</div>
            </div>
            <div class="item">
              <el-tag type="warning" class="q">活动时间</el-tag>
              <div class="a">{{value.time}}</div>
            </div>
            <div class="item">
              <el-tag type="primary" class="q">活动场地</el-tag>
              <div class="a">{{value.site_id}}</div>
            </div>
          </div>
          <div class="activity-right">

            <el-table
              :data="value.cost_details"
              :summary-method="getSummaries"
              show-summary
              style="width: 100%">
              <el-table-column
                prop="material_name"
                label="物料名称"
                sortable
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column
                prop="unit_price"
                sortable
                label="单价/元">
              </el-table-column>
              <el-table-column
                prop="quantity"
                sortable
                label="数值">
              </el-table-column>
              <el-table-column
                prop="total_price"
                sortable
                label="总价/元">
              </el-table-column>
            </el-table>

          </div>
        </div>
      </div>



      <div class="activity">
        <div class="activity-header">
          <div class="activity-name">汇总表</div>
        </div>
        <div class="activity-form">
            <el-table
              :data="form.activities"
              :summary-method="getSummaries"
              show-summary
              style="width: 100%">
              <el-table-column
                prop="name"
                label="活动名"
                sortable
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column
                prop="time"
                label="活动时间"
                sortable
              >
              </el-table-column>
              <el-table-column
                prop="site_name"
                label="活动地点"
                sortable
              >
              </el-table-column>
              <el-table-column
                prop="material_count"
                sortable
                label="物材数">
              </el-table-column>
              <el-table-column
                prop="price_count"
                sortable
                label="总价">
              </el-table-column>
            </el-table>

        </div>
      </div>
      <br>


    </div>
    <div class="right">
      <annexs :manage="false" :annexs="annexs"></annexs>
    </div>
    <app-bottom></app-bottom>

  </div>

</template>

<script>
  import Annexs from 'COMPONENTS/annexs/Annexs'
  import AppBottom from 'COMPONENTS/club/AppBottom'
  import UsernameAndAvatar from 'COMPONENTS/UsernameAndAvatar'
  import ClubName from 'COMPONENTS/ClubName'
  export default {
    components: {
      Annexs,
      AppBottom,
      ClubName,
      UsernameAndAvatar

    },
    data () {
      return {
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        form: {
          club_name: '嘻嘻嘻',
          created_at: '2011年3月11日',
          title: '某活动',
          total_budget: 700,
          activities: [
            {
              name: '艾滋病宣传的基础的就发蒋劲夫v的长城电脑吃大餐v',
              time: '2017年3月',
              site_id: 2,
              cost_details: [
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                },
                {
                  material_name: '王宝山1',
                  unit_price: 170,
                  quantity: 30,
                  total_price: 300
                },
                {
                  material_name: '王宝山3',
                  unit_price: 110,
                  quantity: 30,
                  total_price: 320
                },
                {
                  material_name: '王宝山5',
                  unit_price: 170,
                  quantity: 30,
                  total_price: 350
                }
              ]
            },
            {
              name: '艾滋病宣传',
              time: '2017年3月',
              site_id: 2,
              cost_details: [
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                },
                {
                  material_name: '王宝山',
                  unit_price: 100,
                  quantity: 30,
                  total_price: 300
                }
              ]
            }
          ]
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
            file_name: '我是中国人你服不服',
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
    created () {
      this.calcTotal()
    },
    methods: {
      calcTotal () {
        let sum = 0
        this.form.activities.forEach(e => {
          sum = 0
          e.cost_details.forEach(ee => {
            sum += ee.total_price
          })
          e['material_count'] = e.cost_details.length
          e['price_count'] = sum
        })
      },
      getSummaries (param) {
        const { columns, data } = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总量'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
          } else {
            sums[index] = 'N/A'
          }
        })
        return sums
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
    width: 700px;
    font-size: 16px;
  }
  .activity-form {
    display: flex;
  }
  .right {
    width: 220px;
    border-radius: 10px;
    overflow: hidden;
  }
  .activity-name {
    color: #20A0FF;
    font-size: 18px;
    line-height: 40px;
  }
  .activity-input {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .activity-left {
    width: 210px;
    margin-right: 20px;
  }
  .activity-right {
    width: 470px;
  }
  .material {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .material-name-input {
    width: 165px;
  }
  .material-input {
    width: 95px;
  }
  .material-last-input {
    width: 125px;
  }
  .activity {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .add-m-btn {
    margin-top: 5px;
  }
  .activity-header {
    display: flex;
    justify-content: space-between;
  }
  .item-group {
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
    margin-top: 3px;
    margin-bottom: 10px;
  }
  .q {
  }
  .a {
    margin-left: 10px;
    line-height: 30px;
    font-size: 15px;

  }
</style>
