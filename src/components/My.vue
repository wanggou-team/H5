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
      <cell class="cellBtom" is-link link="/personalbank">
        <img slot="icon" class="iconImg" src="../assets/icon-name.png">
        <span slot="title" class="ftLeft">个人信息</span>
      </cell>
    </group>
    <group class="gropWrap">
      <cell class="cellBtom" is-link link='/history'>
        <img slot="icon" class="iconImg" src="../assets/my02.png">
        <span slot="title" class="ftLeft">历史订单</span>
      </cell>
    </group>
    <group class="gropWrap">
      <cell class="cellBtom" is-link link='/flower'>
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
  <div class="plcaeholderDiv"></div>
  <footerBar active="my"></footerBar>
</div>
</template>

<script>
  import { Flexbox, FlexboxItem, CellBox, Cell,Group,Tabbar, TabbarItem  } from 'vux'
  import footerBar from './TabbarFooter'
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
    TabbarItem,
    footerBar
  }
}
</script>

<style scoped>
.plcaeholderDiv{
  height:53px;
}
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
  min-height:3.33rem;
  padding-top: .21rem;
  background: #ef4f51;
  position: relative;
}
.flex-info{
  text-align: center;
  color:#ffffff;
  font-size: .4rem;
}
.cirle{
  position: absolute;
  box-sizing: border-box;
  left:0;
  right:0;
  bottom:-.93rem;
  margin:auto;
  width:2.4rem;
  height:2.4rem;
  padding:.13rem;
  background: #ffffff;
  z-index: 2;
}
.testRed{
  background: red; width:2.13rem; height:2.13rem;border-radius: 100%;
}
.list{
  margin-top:1.87rem;
}
.footerBg{
  position: absolute;
  bottom:-.55rem;
  width:100%;
  height:.56rem;
}
.iconImg{
  width:.4rem;
  height:.48rem;
  vertical-align: text-top;
  /* margin-left: .59rem; */
}
.ftLeft{
  margin-left: .24rem;
  font-size: .32rem;
}
</style>
<style>
  .bgGray .weui-cells{
    margin:0 0 .16rem 0;
  }
  .gropWrap .weui-cell{
    padding:.35rem .6rem;
  }
</style>
