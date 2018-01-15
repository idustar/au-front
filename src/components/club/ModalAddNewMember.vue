/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div>
  <el-dialog
    title="邀请新成员"
    :visible.sync="dialogVisible"
    width="400px"
    @open="reOpen()"
    :modal="true"
    :modal-append-to-body="false"
    >


    <div v-if="step === 0" style="text-align: center">
      <el-form>
      <el-form-item>
      <span>请为被邀请者选择社团： </span>

      <el-select v-model="currentClub"
                 :disabled="power<2"
                 @change="chooseClub()"
                 filterable placeholder="请选择或输入搜索社团" class="up-select">
        <el-option-group
          v-for="group in clubs"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="club in group.options"
            :key="club.club_id"
            :label="club.name"
            :value="club.club_id"
          >
          </el-option>
        </el-option-group>
      </el-select>
      </el-form-item>
      <el-form-item>
      <span>请为被邀请者设置职位： </span>
      <el-select v-model="currentTitle"
                 :disabled="currentClub === ''"
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
      </el-form>
    </div>
    <div v-else>
      <div>请将以下链接发送给您要邀请的对象：</div>
      <div class="link">{{source_link}}<span class="code">{{invite_code}}</span></div>

    </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{ step === 0 ? '取消邀请' : '完成邀请' }} </el-button>
        <el-button type="primary" @click="handleInvite()" :disabled="currentTitle === ''" v-if="step === 0">生成邀请链接</el-button>
      </span>
    </el-dialog>
    <el-button type="text"  @click="dialogVisible = true"><i class="iconfont icon-tianjiayonghu"></i> 邀请新成员</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        source_link: 'http://www.baidu.com',
        invite_code: 'nndjjfjjf',
        step: 0,
        canChooseClub: false,
        power: 2,
        club_id: 3,
        dialogVisible: false,
        currentTitle: null,
        currentClub: null,
        powerToDesc: [
          '社团成员', '社团负责人', '社团联成员', '超级管理员'
        ],
        titles_filter: [],
        clubs: [
          {
            label: '社团联',
            options: [{
              club_id: -1,
              name: '同济大学社团联合会'
            }]
          }, {
            label: '社团',
            options: [
              {
                club_id: 0,
                name: '星空演艺社'
              },
              {
                club_id: 1,
                name: '同济乒乓球协会'
              },
              {
                club_id: 2,
                name: '同济看球者联盟'
              },
              {
                club_id: 3,
                name: '同济大学足球协会'
              },
              {
                club_id: 4,
                name: '同济大学棒球爱好者协会'
              }
            ]
          }
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
        ]
      }
    },
    mounted () {
      for (let i = 0; i < 4; i++) {
        this.titles_filter.push({
          label: this.powerToDesc[i],
          disabled: false,
          options: this.titles.filter((v) => v.power === i)
        })
      }
    },
    methods: {
      reOpen () {
        this.step = 0
        this.currentTitle = ''
        this.currentClub = this.power > 1 ? '' : this.club_id
        this.chooseClub()
      },
      chooseClub () {
        if (this.currentClub !== -1 && this.power === 1) {
          this.titles_filter[0].disabled = false
          this.titles_filter[1].disabled = true
          this.titles_filter[2].disabled = true
          this.titles_filter[3].disabled = true
        } else if (this.currentClub !== -1 && this.power > 1) {
          this.titles_filter[0].disabled = false
          this.titles_filter[1].disabled = false
          this.titles_filter[2].disabled = true
          this.titles_filter[3].disabled = true
        } else {
          this.titles_filter[0].disabled = true
          this.titles_filter[1].disabled = true
          this.titles_filter[2].disabled = false
          this.titles_filter[3].disabled = true
          if (this.power > 2) {
            this.titles_filter[3].disabled = false
          }
        }
      },
      handleInvite (done) {
        this.step = 1
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .link {
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    color: #8492A6;
  }
  .code {
    font-size: 24px;
    color: #20A0FF;
  }
  .up-select {
  }

</style>
