<template>
  <div class="history">
    <ul class="history-list">
      <li v-for="i in 5">
        <time class="time">2018-04-03</time>

        <div class="card">
          <header class="header flex">
            <h3 class="title">订单编号</h3>
            <span class="code flex1">000000000000000000</span>
          </header>

          <div class="main flex">
            <div class="price">
              <span class="price-text">1200</span>元
            </div>

            <div class="desc flex1">到账金额</div>
          </div>
        </div>
      </li>
    </ul>
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
  .flex{
    display: flex;
  }
  .flex1{
    flex: 1;
  }
  .history{
    padding-left: 82px;
  }
  .history-list{
    border-left: 1px solid #ef4f51;
    list-style: none;
  }
  .history-list li{
    width: 590px;
    padding: 50px 40px 46px 36px;
  }
  .history-list .time{
    color: #aaa;
    font-size: 24px;
    line-height: 38px;
    display: block;
    position: relative;
  }
  .history-list .time:before{
    content: '';
    display: block;
    position: absolute;
    width: 42px;
    height:42px;
    background-color: red;
    top: 0;
    left: -56px;
    border-radius: 100%;
  }
  .history-list .card{
    border-radius:10px;
    margin-top: 16px;
    box-shadow: 1px 5px 5px rgba(50,50,50, .1), -1px 5px 5px rgba(50,50,50, .1);
  }

  .history-list .header{
    font-size: 26px;
    color: #fff;
    border-radius: 10px 10px 0 0;
    background-color: #ff8f90;
    padding: 14px 30px;
  }
  .history-list .header .title{
    width: 150px;
    font-weight: normal;
  }

  .history-list .header .code{
    text-align: right;
  }

  .history-list .main{
    background-color: #fff;
    border-radius: 10px;
    padding: 35px 40px;
    align-items: center;
  }
  .history-list .price{
    color: #aaa;
    width: 50%;
  }
  .price-text{
    color: #ff771d;
    font-size: 48px;
    font-weight: bold;
    vertical-align: sub;
    padding-right: 15px;
  }
  .desc{
    color: #666;
    font-size: 30px;
    text-align: right;
  }
</style>
