<!-- 个人信息- 银行卡绑定页面 -->
<template>
  <div class=personBank>
    <div class="linediv"></div> 
    <group gutter="0em">
        <!-- is-type="china-mobile" -->
      <x-input  
      class="ftinitl"
      name="mobile"
      :required="false"
      :show-clear="false" 
      text-align="right"
      placeholder="请输入手机号码" 
      keyboard="number" 
      >
      <span slot="label" class="lableStyle">手机号码</span>
      </x-input>
    </group>
    <div class="linediv"></div>
    <div class="bankwrap">
        <div class="smallwrap">
            <div class="titleinfo">绑定银行卡</div>
            <div class="cardWrap">
                <!-- 无银行卡 -->
                <div class="bgBank" v-if='false'>
                    <span>未绑定银行卡</span>
                </div>
                <!-- 有绑定 -->
                <div class="badingcards bgColor">
                    <div class="bankTitle">
                        <img class="bdingImg" src="../assets/bank01.png" alt="">
                        <span class="bankName">招商银行</span>
                        <span class="phone">手机尾号 (6082)</span>
                    </div>
                    <div class="bankNumber">****  ****  ****  0928</div>
                </div>
            </div>
            <router-link to="/authentication"><div class="gobing">去绑定</div></router-link> 
        </div>
    </div>
    <div class="linediv"></div>
    <group class="gropWrap" gutter="0em">
      <cell class="cellBtom" is-link link="/about">
        <span slot="title" class="ftLeft">关于我们</span>
      </cell>
    </group>
    <div class="linediv"></div>
    <x-button type="warn" class="outBtn">退出登录</x-button>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  data () {
    return {
    };
  },
  mounted(){},
  methods: {},
  components: {
      XInput, 
      Group,
      Cell,
      XButton
  },
}

</script>
<style scoped>
.linediv{
    width:100%;
    height: .27rem;
    background: #eeeeee;
}
.ftinitl{
    font-size: .32rem
}
.lableStyle{
    padding:.32rem
}
.bankwrap{
    width:100%;
    height:5.35rem;
    border-bottom:1px solid #adadad;
}
.smallwrap{
    width:90%;
    margin:auto;
}
.titleinfo{
    font-size:.4rem;
    width:2.53rem;
    text-align:center;
    border-left:.13rem solid #ff818a;
    margin:.4rem 0;
}
.cardWrap{
    width:100%;
    border-bottom:1px solid #adadad;
    padding-top:.16rem
}
.bgBank{
    width:90%;
    margin:0 auto;
    height:2.67rem;
    background:url('../assets/per01.png') no-repeat 0 .21rem; 
    background-size:contain;
    color:#aaaaaa;
    font-size:.4rem;
    display:flex;
    justify-content:center;
    align-items:center
}
.gobing{
    width:100%;
    padding:.41rem 0;
    color:#ef4f51;
    text-align:center;
}
.outBtn{
    width:90%;
    margin:1.69rem auto 0;
}
.ftLeft{
    font-size: .32rem
}
/* 有绑定 */
.badingcards{
    width:90%;
    margin:0 auto;
    height:2.67rem;
    border-radius: .27rem .27rem 0 0;
}
.bgColor{
    background:#e25863;
}
.bankTitle{
    width:100%;
    margin:0  auto;
    color:#ffffff;
    box-sizing:border-box;
    padding:.31rem .43rem;
}
.bdingImg{
    width:1.07rem;
    height:1.07rem;
    vertical-align:middle;
}
.bankName{
    font-size:.4rem;
    vertical-align:middle;
    padding-left:.13rem;
}
.phone{
    font-size:.32rem;
    vertical-align:middle;
    padding-left:1.61rem;
}
.bankNumber{
    font-size:.53rem;
    color:#ffffff;
    text-align:center;
}
</style>
<style>

</style>
