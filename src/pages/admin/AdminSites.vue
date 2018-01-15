/**
* Created by dustar on 2017/10/7.
*/

<template>
  <div class="AdminIndex">

      <div class="left">
        活动场地
      </div>
      <div class="right">
        <el-tag
          class="tag"
          type="success"
          :key="site.id"
          v-for="(site, k) in sites"
          closable
          :disable-transitions="false"
          @close="handleClose(0, k)">
          {{site.name}}
        </el-tag>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              class="input-new-tag"
              v-model="inp[0]"
              ref="saveTagInput"
              size="small"
            >
            </el-input>
          </el-form-item>
          <el-form-item>

            <el-button class="button-new-tag" :disabled="inp[0] === ''"
                       size="mini" @click="handleInputConfirm(0)">+ 增加新的活动场地</el-button>
          </el-form-item>
        </el-form>
    </div>




    <div class="left">
      海报张贴场地
    </div>
    <div class="right">
      <el-tag
        class="tag"
        type="primary"
        :key="site.id"
        v-for="(site, k) in post_sites"
        closable
        :disable-transitions="false"
        @close="handleClose(1, k)">
        {{site.name}}
      </el-tag>
      <el-form :inline="true">
        <el-form-item>
          <el-input
            class="input-new-tag"
            v-model="inp[1]"
            ref="saveTagInput"
            size="small"
          >
          </el-input>
        </el-form-item>
        <el-form-item>

          <el-button class="button-new-tag" :disabled="inp[1] === ''"
                     size="mini" @click="handleInputConfirm(1)">+ 增加新的海报张贴场地</el-button>
        </el-form-item>
      </el-form>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
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
        post_sites: [
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
        inp: ['', '']
      }
    },
    mounted () {
    },
    methods: {
      handleClose (i, k) {
        if (i === 0) {
          this.sites.splice(k, 1)
        } else {
          this.post_sites.splice(k, 1)
        }
      },
      handleInputConfirm (k) {
        let inputValue = this.inp[k]
        if (inputValue && k === 0) {
          this.sites.push({
            id: 1,
            name: inputValue
          })
        }
        this.inp[k] = ''
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
