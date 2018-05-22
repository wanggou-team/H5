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
  import axios from 'axios'
  export default {
    data () {
      return {}
    },
    created () {

    },
    mounted () {
      this.getOrder(1)
    },

    methods: {
      getOrder (page) {
        axios.post('/apis/front/loanOrder/page.htm', {
          params: {
            page: page,
            pageSize: 10
          }
        })
      }
    },
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
    padding-left: 1.09rem;
  }
  .history-list{
    border-left: 1px solid #ef4f51;
    list-style: none;
  }
  .history-list li{
    width: 7.87rem;
    position: relative;
    padding: .67rem .53rem .61rem .48rem;
  }
  .history-list .time{
    color: #aaa;
    font-size: .32rem;
    display: block;
    
  }
  .history-list li:before{
    content: '';
    display: block;
    position: absolute;
    width: .56rem;
    height:.56rem;
    background-color: red;
    top: .67rem;
    left: 0;
    border-radius: 100%;
    transform: translateX(-50%);
  }
  .history-list .card{
    border-radius:.13rem;
    margin-top: .21rem;
    box-shadow: 1px 5px 5px rgba(50,50,50, .1), -1px 5px 5px rgba(50,50,50, .1);
  }

  .history-list .header{
    font-size: .35rem;
    color: #fff;
    border-radius: .13rem .13rem 0 0;
    background-color: #ff8f90;
    padding: .19rem .4rem;
  }
  .history-list .header .title{
    width: 2rem;
    font-weight: normal;
  }

  .history-list .header .code{
    text-align: right;
  }

  .history-list .main{
    background-color: #fff;
    border-radius: .13rem;
    padding: .47rem .53rem;
    align-items: center;
  }
  .history-list .price{
    color: #aaa;
    width: 50%;
  }
  .price-text{
    color: #ff771d;
    font-size: .64rem;
    font-weight: bold;
    vertical-align: sub;
    padding-right: .2rem;
  }
  .desc{
    color: #666;
    font-size: .4rem;
    text-align: right;
  }
</style>
