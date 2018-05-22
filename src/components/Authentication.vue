<!-- 身份验证 -->
<template>
  <div>
      <div class="linediv"></div> 
      <group class="ftSize" gutter="0em">
        <x-input 
            class="ft-pa"
            :show-clear="false" 
            placeholder="请输入姓名"
            v-model="name">
            <div slot="label" class="lableWin"><span class="requireIc">*</span>姓名</div>
        </x-input>
        <x-input 
            class='ft-pa bgGray' 
            :show-clear="false" 
            placeholder="请填写正确的身份证号"
            v-model="idCode">
            <div slot="label" class="lableWin"><span class="requireIc">*</span>身份证号</div>
        </x-input>
        <x-input 
            class="ft-pa"
            :show-clear="false" 
            placeholder="请填写手机号"
            v-model="bankPhone">
             <div slot="label" class="lableWin"><span class="requireIc">*</span>手机号</div>
        </x-input>
      </group>
      <div class="padLeft">
        <check-icon class="auten" type="plain" :value.sync="checkAc">
            <span class="tipInfo">请确保您的礼品卡所属信息为本人，我已阅读并接受<router-link to="/" class="defaultColor">《活动协议》</router-link></span>                  
        </check-icon>
      </div>
      <x-button type="warn" class="AutenBtn" link="/bankcard">立即申请</x-button>



      <Alert v-model="show" class='statusAlert' button-text="返回" @on-show="onShow" @on-hide="onHide">
          <div class="container">
            <icon type="success"></icon>
            <icon type="warn"></icon>
             <div class="statusInfo">{{ alertInfo }}</div>
             <div class="smallStatusInfo">{{ alertSmallInfo }}</div>
          </div>
      </Alert>
  </div>
</template>

<script>
import {Group, Cell,XInput,CheckIcon,XButton,Alert,Icon} from 'vux'
export default {
  data () {
    return {
        name:'',
        idCode:'',
        bankPhone: '',
        checkAc: false,
        show:true,
        alertInfo:"申请成功", //'申请失败'
        alertSmallInfo:"等待放款，此过程需要20分钟" //'身份信息与购卡人不符合'
    };
  },

  computed: {},

  mounted() {},

  methods: {
    onShow() {
      
    },
    onHide() {

    }
  },
  components: {
      Group, Cell,XInput,CheckIcon,XButton,Alert,Icon
  },
  
}

</script>
<style scoped>
.linediv{
    width:100%;
    height:.37rem;
    background: #f5f5f5;
}
.bgGray{
    background: #f5f5f5;
}
.ft-pa{
    font-size:.32rem;
    padding: .48rem .59rem;
}
.lableWin{
    width:4.24rem;
    position:relative;
    padding-left:.24rem;
}
.requireIc{
    color:#ef4f51;
    position:absolute;
    top:-2px;
    left:0;
}
.padLeft{
  padding:.13rem .2rem
}
.tipInfo{
    font-size:.27rem;
    color:#c1c1c1;
}
.AutenBtn{
    width:90%;
    margin:1.47rem auto;
}


/* 弹窗 */
.statusInfo{
    color:#000;
    font-size: .48rem;
    padding: .39rem 0;
}
.smallStatusInfo{
    font-size: .4rem;
    color:#999;
}
</style>
<style>
.auten .weui-icon-circle, .auten .weui-icon-success-circle{
   font-size: .4rem; 
}
.auten .weui-icon-success-circle:before{
  color:#ef4f51 !important;
}
.container .weui-icon-success{
    font-size:1.33rem;
    color:#ef4f51;
}
.statusAlert .weui-dialog__btn_primary{
    color:#ef4f51;
}
.statusAlert .weui-icon-warn{
    font-size:1.33rem;
    color:#ef4f51;
}
</style>