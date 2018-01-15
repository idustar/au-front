/**
* Created by dustar on 2017/10/3.
*/

<template>
    <div class="avatar">
      <img :src="avatar?avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507053924268&di=290204b2d188008cdd624d91897c3c45&imgtype=0&src=http%3A%2F%2Fcd.youlanw.com%2Fstatic%2Fimages%2Fman.jpg'" :class="size">
    </div>
</template>

<script>
  export default {
    props: [
      'avatar',
      'size'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    border: 1px white solid;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  .large {
    width: 60px;
    height: 60px;
  }

  .middle {
    width: 40px;
    height: 40px;
  }

  .small {
    width: 25px;
    height: 25px;
  }
</style>
