<template>
<div>
  <div class="header">
      <div class="homeTitle">
          <img class="headerIcon" src="../assets/home01.png" alt="">
          <span class="titleName">回购首页</span>
      </div>
      <img class="maxWin bgheader" src="../assets/home02.png" alt="">
      <div class="headerCard">
          <router-link to='login'><img class="maxWin cardImg" src="../assets/home03.png" alt=""></router-link>  
      </div>

      <div class="marqueeWrap">
        <flexbox>
            <flexbox-item :span="3"><img class="marImg" src="../assets/home04.png" alt=""></flexbox-item>
            <flexbox-item>
                <marquee class="setTop">
                    <marquee-item 
                        v-for="i in 5" 
                        :key="i" 
                        class="align-middle">
                        <group gutter="0" class="cellMar">
                            <Cell is-link>
                                <div class="cellConteint" slot="title">123123123123123123123123123123123123123123123123123123123123123123123123123</div>
                                <div class="marTime">2019-1</div>
                            </Cell>
                        </group>
                        
                    </marquee-item>
                </marquee>
            </flexbox-item>
        </flexbox>
      </div>

      <div class="linediv"></div>  
  </div>

  <!-- 回购教程 -->

    <div class="buy-back-Wrap">
        <div class="backTitle">
            回购教程
        </div>
        <ul>
            <li class="buy_list">
                <div class="floweList">
                    <i>1</i>
                </div>
                <span class="bud-info">登录花木范商城进行花券获取，<router-link class='goBuy' to='/login'>点击申请</router-link></span>
            </li>
            <li class="buy_list">
                <div class="floweList">
                    <i>2</i>
                </div>
                <span class="bud-info">认证审核通过后，获取花券序列号，点击激活</span>
            </li>
            <li class="buy_list">
                <div class="floweList">
                    <i>3</i>
                </div>
                <span class="bud-info">激活后回到该界面点击上方窗口，输入序列号</span>
            </li>
            <li class="buy_list noborder">
                <div class="floweList">
                    <i>4</i>
                </div>
                <span class="bud-info">资金到账，等待十天后商城付款</span>
            </li>
        </ul>
    </div>
    <!-- 占位 -->
    <div class="plcaeholderDiv"></div>
    <footerBar active='home'></footerBar>
</div>
</template>
<script type="text/ecmascript-6">
import { Flexbox, FlexboxItem,Marquee, MarqueeItem,Group,Cell} from 'vux'
import footerBar from './TabbarFooter'
    export default {
        data () {
            return {}
        },
        created () {
        },
        mounted () {
        },
        methods: {
        },
        components: {
            Flexbox,
            FlexboxItem,
            Marquee, 
            MarqueeItem,
            Group,
            Cell,
            footerBar
        }
    }
</script>

<style scoped>
.plcaeholderDiv{
    height:53px;
}
li{
    list-style: none;
}
.header{
    width:100%;
    position: relative;
}
.maxWin{
    width:100%;    
}
.bgheader{
}
.headerIcon{
    width:.64rem;
    height:.56rem;
    vertical-align: middle;
}
.titleName{
    font-size: .48rem;
    font-weight: bold;
    color:#ffffff;
    padding-left: .16rem;
    vertical-align: middle;
}
.homeTitle{
    position: absolute;
    left:.63rem;
    top:.51rem;
}
.headerCard{
    position: relative;
    left:0;
    right:0;
    margin:auto;
    top:0;
    margin-top:-4.27rem; 
}
.marqueeWrap{
    width:90%;
    margin: auto;
    padding-bottom: .27rem;
}
.marImg{
    width:2rem;
    height:.77rem;
}
.setTop{
    margin-top:-.19rem;
}
.cellConteint{
    font-size:.35rem;
    width: 4.6rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.marTime{
    font-size:.32rem;
}
.align-middle{
    /* height: .35rem; */
    line-height: normal;
    padding:.08rem 0;
}
.linediv{
    width:100%;
    height: .27rem;
    background: #eeeeee;
}
.buy-back-Wrap{
    padding-left:.63rem;
}
.backTitle{
    font-size: .4rem;
    font-weight: bold;
    color:#ff5a57;
    padding-top:.53rem;
}
.buy_list{
    margin-left:.97rem;
    position:relative;
    border-bottom:1px solid #ef4f51;
    padding:.47rem 0;
}
.noborder{
    border:0;
}
.floweList{
    position:absolute;
    left:-.97rem;
    width:.77rem;
    height: .67rem;
    line-height:.67rem;
    background: url('../assets/home05.png') no-repeat;
    background-size: 100%;
    display:inline-block;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    text-align:center;
    color:#ffffff;
    vertical-align: middle;
    
}
.bud-info{
    vertical-align:middle;
    font-size:.35rem;
    color:#666666;
    padding-left:.2rem;
    display:inline-block;
    box-sizing:border-box;
    padding-right:.13rem;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.goBuy{
    color:#ff5a57;
    border-bottom:1px solid #ff5a57;
}
</style>
<style>
.marqueeWrap .weui-cell{
    padding:10px 0;
}
.cellMar .weui-cells:before{
    border:0;
}
.cellMar .weui-cells:after{
    border:0;
}
</style>
