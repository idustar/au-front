/**
* Created by dustar on 2017/10/5.
*/

<template>
    <span>
      <i class="iconfont" :class="type2icon[filetype]?type2icon[filetype]:'icon-wenjian1'"></i>
    </span>
</template>

<script>
  export default {
    props: ['filetype'],
    data () {
      return {
        type2icon: {
          'zip': 'icon-yasuobao',
          'rar': 'icon-yasuobao',
          'iso': 'icon-yasuobao',
          '7z': 'icon-yasuobao',
          'txt': 'icon-txt1',
          'doc': 'icon-word',
          'docx': 'icon-word',
          'wps': 'icon-word',
          'xls': 'icon-excel',
          'xlsx': 'icon-excel',
          'ppt': 'icon-PPT',
          'pptx': 'icon-PPT',
          'mp4': 'icon-mp1',
          'mov': 'icon-movie',
          'avi': 'icon-avi',
          'flv': 'icon-movie',
          'rmvb': 'icon-movie',
          'exe': 'icon-exe',
          'gif': 'icon-gif1',
          'jpg': 'icon-jpg2',
          'png': 'icon-png1',
          'psd': 'icon-Adobe_Photoshop_log',
          'ai': 'icon-ai',
          'bmp': 'icon-haibao',
          'pdf': 'icon-filepdf',
          'mp3': 'icon-music',
          'wmv': 'icon-music'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .icon-yasuobao {
    color: #FF4949
  }
  .icon-txt1 {
    color: #13CE66
  }
  .icon-wenjian1 {
    color: #8492A6
  }
  .icon-word {
     color: #1D8CE0
  }
  .icon-excel {
    color: #00c12c
  }
  .icon-PPT {
    color: #ff8473
  }
  .icon-mp1 {
    color: #f768b8
  }
  .icon-movie {
    color: #ca34ff
  }
  .icon-avi {
    color: #d295ff
  }
  .icon-exe {
    color: #FF4949
  }
  .icon-gif1 {
    color: #008d92
  }
  .icon-jpg2 {
    color: #81d85b
  }
  .icon-png1 {
    color: #00b22b
  }
  .icon-Adobe_Photoshop_log {
    color: #0dad86
  }
  .icon-ai {
    color: #b7b90b
  }
  .icon-haibao {
    color: #ff8d46
  }
  .icon-filepdf {
    color: #6193ff
  }
  .icon-music {
    color: #ff7cd6
  }
  i {
    font-size: 30px;
    line-height: 50px;
  }



</style>
