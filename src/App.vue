<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body{
  font-family: "微软雅黑","Helvetica Neue",Helvetica,STHeiTi,sans-serif;
}
::-webkit-input-placeholder {
  color: #c1c1c1;
}
#app{
  min-height: 100vh;
  font-size: 14px;
}
#app [data-dpr="2"] {
  font-size: 28px;
}
#app [data-dpr="3"] {
  font-size: 42px;
}
</style>
