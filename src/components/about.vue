<template>
  <div class="about">
    <figure class="logo">
      <figure>
        <img src="../assets/logo2.png" alt="">
        <figcaption class="desc">旺购 V 4.5.1 <br/>金华晨皓信息技术有限公司</figcaption>
      </figure>
    </figure>

    <div class="contact">
      <a href="" class="phone">电话客服</a>
      <a href="" class="online">在线客服</a>
    </div>

    <p class="company">金华晨皓信息技术有限公司</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    created () {

    },
    mounted () {
    },

    methods: {},
  }
</script>

<style scoped>
  .about{
    background-color: #f5f5f5;
    text-align: center;
    color: #c8c8cb;
    min-height: 100vh;
    padding-top: 116px;
    box-sizing: border-box;
  }
  .logo img{
    width: 174px;
    height:174px;
    padding-bottom: 15px;
  }
  .logo .desc{
    line-height: 46px;
  }
  .contact{
    padding-top: 140px;
  }
  .contact a{
    width: 470px;
    padding: 18px 0;
    margin-bottom: 18px;
    display: inline-block;
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    color: #1a181a;
    font-size: 24px;
    box-shadow: 0 5px 0 rgba(50,50,50,.1);
    background-color: #fbf9fb;
  }

  .contact a:before{
    content: "";
    display: inline-block;
    width: 40px;
    height:40px;
    background-color: red;
    vertical-align: middle;
    margin-right: 15px;
  }

  .company{
    position: absolute;
    left: 0;
    bottom: 75px;
    width: 100%;
    text-align: center;
    font-size: 24px;
  }
</style>
