/**
* Created by dustar on 2017/10/4.
*/

<template>
  <div class="nf">
    <img :src="Img404">
      <div class="b-text">
        <slot>
          这里空空如也，去别处找找吧~
        </slot>
      </div>
  </div>
</template>

<script>
  import Img404 from '@/assets/images/404.png'
  export default {
    data () {
      return {
        Img404
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nf {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    margin-top: 20px;
    width: 300px;
  }
  .b-text {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #D3DCE6;
  }
</style>
