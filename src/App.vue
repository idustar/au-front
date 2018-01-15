<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  html, body, #app {
    height: 100vh;
    min-width: 100%;
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: all .8s;
  }

  #quill-container {
    height: 200px !important;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
    transform: scale(0.5);

  }
  .router-fade2-enter-active {
    animation: bounce-in-page2 .5s;
  }
  .router-fade2-leave-active {
    animation: bounce-in-page-reverse2 .5s;
  }
  @keyframes bounce-in-page2 {
    0% {
      opacity: 0;
      transform: translateY(-500px);

    }
    100% {
    }
  }
  @keyframes bounce-in-page-reverse2 {
    0% {
    }
    100% {
      opacity: 0;
      transform: translateY(-500px);
    }
  }
</style>
