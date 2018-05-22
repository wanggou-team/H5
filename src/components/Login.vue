<template>
  <div class="login">
    <h1 class="logo"></h1>
    <div>
      <group class="group">
        <x-input 
          class="input" 
          type="tel"  
          placeholder="输入手机号码" 
          is-type="china-mobile"
          ref="phone"
          required>
          <div slot="label" class="icon icon-phone"></div> 
        </x-input>
      </group>
      <group class="group">
        <x-input class="input"  placeholder="输入验证码" ref="code" required>
          <div slot="label" class="icon icon-password"></div>
          <div slot="right" class="code">
            <!--<span class="warning">（50）秒后再获取</span>-->
            <span class="muted" @click="getCode">获取验证码</span>
          </div>
        </x-input>
      </group>

      <x-button link='/personalbank'  class="submit"  @click="login" type="primary">登录</x-button>
    </div>
  </div>
</template>

<script>
  import { XInput, Group, XButton, Cell, CheckIcon } from 'vux';
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    components: {
      XInput,
      XButton,
      Group,
      CheckIcon,
      Cell,
    },
    data() {
      return {
        agree: true,
        msg: 'Welcome to Your Vue.js App',
        iconType: ''
      };
    },
    methods: {
      // 获取验证码
      getCode () {
        // 判断是否正确填写了手机号
        debugger
        this.$refs.phone.blur()
        if (this.$refs.phone.valid) {
          axios.post('/apis/front/code.htm').then(data => {
            console.log(data)
          })
        }
      },

      // 执行登录操作
      login(){}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    padding: 2.37rem 1.13rem 0;
    position: relative;
  }
  .logo{
    width: 2.05rem;
    margin: 0 auto 1.87rem;
    height: 3.33rem;
    background: url("../assets/logo.png") no-repeat;
    background-size: contain;
  }
  .icon{
    width: .6rem;
    height: .6rem;
    /* background: pink; */
  }
  .icon-phone{
    background: url('../assets/icon-phone-default.png') no-repeat;    
    background-size: contain;
  }
  
  .icon-password{
    background: url('../assets/icon-password-default.png') no-repeat;
    background-size: contain;
  }
 
  .input{
    height: 1.2rem;
    color: #ef4f51;
    box-sizing: border-box;
  }

  .submit{
    background-color: #ef4f51;
    height:1.17rem;
    margin-top: .99rem;
    border-radius: .13rem;
    font-size: .48rem;
  }

  .submit[disabled]{
    background-color: #aaa;
    color: #fff;
  }
  .submit [data-dpr="2"]{
    font-size: 36px;
  }
  .submit [data-dpr="3"]{
    font-size: 54px;
  }

  .code{
    border-left: 1px solid #adadad;
    width: 2.91rem;
    box-sizing: border-box;
    text-align: center;
  }

  .warning{
    color: #fdb43d;
  }

  .muted{
    color: #c1c1c1;
    font-size: .32rem;
  }
</style>

<style>
  .group .weui-cells{
    margin-top: 0;
  }
  .login .weui-input{
    padding-left: .48rem;
    height: .6rem;
    line-height: .6rem
  }

  .login .vux-no-group-title:before{
    border: none;
  }
  .login .vux-no-group-title{
    border-bottom:1px solid #adadad;
  }
</style>
