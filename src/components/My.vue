<template>
<div class="bgGray">
  <div class="wrapBg">
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-info">李娜</div></flexbox-item>
      <flexbox-item><div class="flex-info">188****5678</div></flexbox-item>
    </flexbox>
    <div class="cirle">
      <flexbox>
        <flexbox-item>
          <div class="testRed"></div>
        </flexbox-item>
      </flexbox>
    </div>
    <img class="footerBg" src="../assets/my-bg.png"/>
  </div>
  <div class="list">
    <group class="gropWrap">
      <cell class="cellBtom" is-link>
        <img slot="icon" class="iconImg" src="../assets/icon-name.png">
        <span slot="title" class="ftLeft">个人信息</span>
      </cell>
    </group>
    <group class="gropWrap">
      <cell class="cellBtom" is-link>
        <img slot="icon" class="iconImg" src="../assets/my02.png">
        <span slot="title" class="ftLeft">历史订单</span>
      </cell>
    </group>
    <group class="gropWrap">
      <cell class="cellBtom" is-link>
        <img slot="icon" class="iconImg" src="../assets/my03.png">
        <span slot="title" class="ftLeft">花券传送门</span>
      </cell>
    </group>
    <group class="gropWrap">
      <cell class="cellBtom" is-link>
        <img slot="icon" class="iconImg" src="../assets/my04.png">
        <span slot="title" class="ftLeft">消息记录</span>
      </cell>
    </group>
  </div>
  <tabbar @on-index-change="tabarChange">
    <tabbar-item>
      <img slot="icon" src="../assets/home-default.png">

      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item selected>
      <img slot="icon" src="../assets/my-default.png">
      <img slot="icon-active" src="../assets/my.png" alt="">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
  import { Flexbox, FlexboxItem, CellBox, Cell,Group,Tabbar, TabbarItem  } from 'vux'
export default {
  name: 'my',
  data() {
    return {

    };
  },
  methods: {
    tabarChange(value) {
      console.log(value)
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    CellBox,
    Cell,
    Group,
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
.bgGray{
    position: absolute;
    background: #f5f5f5;
    top:0;
    bottom:0;
    width:100%;
    height: 100%;
    overflow: hidden;
  }
.wrapBg{
  min-height:250px;
  padding-top: 16px;
  background: #ef4f51;
  position: relative;
}
.flex-info{
  text-align: center;
  color:#ffffff;
  font-size: 30px;
}
.cirle{
  position: absolute;
  box-sizing: border-box;
  left:0;
  right:0;
  bottom:-70px;
  margin:auto;
  width:180px;
  height:180px;
  padding:10px;
  background: #ffffff;
  z-index: 2;
}
.testRed{
  background: red; width:160px; height:160px;border-radius: 100%;
}
.list{
  margin-top:140px;
}
.footerBg{
  position: absolute;
  bottom:-41px;
  width:100%;
  height:42px;
}
.iconImg{
  width:30px;
  height:36px;
  margin-left: 44px;
}
.ftLeft{
  margin-left: 18px;
}
</style>
<style>
  .bgGray .weui-cells{
    margin:0 0 12px 0;
  }
  .bgGray .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color:#ef4f51
  }
</style>
