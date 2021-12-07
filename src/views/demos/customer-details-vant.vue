
<template>
  <div class="container">
    <section class="head">
      <p class="name">转保客户详情</p>
      <p class="date">2020年11月</p>
    </section>
    <section class="title">
      <div class="title_first">机构</div>
      <div class="title_right" id="scroll_title">
        <div class="title_item" @click="sortAction(1)">
          <p class="title_text">
            当月应转<br>保客户数
          </p>
          <div class="title_triangle_up" v-show="sortType!=2"></div>
          <div class="title_triangle_down" v-show="sortType!=1"></div>
        </div>
        <div class="title_item" @click="sortAction(2)">
          <p class="title_text">
            当月转保<br>客户数
          </p>
          <div class="title_triangle_up" v-show="sortType!=4"></div>
          <div class="title_triangle_down" v-show="sortType!=3"></div>
        </div>
        <div class="title_item" @click="sortAction(3)">
          <p class="title_text">
            当月转保<br>保费(万)
          </p>
          <div class="title_triangle_up" v-show="sortType!=6"></div>
          <div class="title_triangle_down" v-show="sortType!=5"></div>
        </div>
        <div class="title_item" @click="sortAction(4)">
          <p class="title_text">
            当月转保<br>率
          </p>
          <div class="title_triangle_up" v-show="sortType!=8"></div>
          <div class="title_triangle_down" v-show="sortType!=7"></div>
        </div>
        <div class="title_item" @click="sortAction(5)">
          <p class="title_text">
            年度应转<br>保客户数
          </p>
          <div class="title_triangle_up" v-show="sortType!=10"></div>
          <div class="title_triangle_down" v-show="sortType!=9"></div>
        </div>
        <div class="title_item" @click="sortAction(6)">
          <p class="title_text">
            年度转保<br>客户数
          </p>
          <div class="title_triangle_up" v-show="sortType!=12"></div>
          <div class="title_triangle_down" v-show="sortType!=11"></div>
        </div>
        <div class="title_item" @click="sortAction(7)">
          <p class="title_text">
            年度转保<br>保费(万)
          </p>
          <div class="title_triangle_up" v-show="sortType!=14"></div>
          <div class="title_triangle_down" v-show="sortType!=13"></div>
        </div>
        <div class="title_item" @click="sortAction(8)">
          <p class="title_text">
            年度转保<br>率
          </p>
          <div class="title_triangle_up" v-show="sortType!=16"></div>
          <div class="title_triangle_down" v-show="sortType!=15"></div>
        </div>

      </div>
    </section>
    <section class="body">
      <div class="table_left">
        <!-- levelOne -->
        <div v-for="(itemOne, indexOne) in listLevelOne" :key="indexOne" class="table_left_level_one">
          <van-collapse v-model="activeLevelOne">
              <van-collapse-item :name="indexOne">
                <template #title>
                  <div class="table_left_level_one_box" @click="getTableListLevel2(indexOne)">
                    <p class="table_left_level_one_text" v-html="itemOne.name"></p>
                    <div class="triangle_white" :class="{triangle_active:activeLevelOne.includes(indexOne)}"></div>
                  </div>
                </template>
                <!-- levelTwo -->
                <div v-for="(item2, index2) in itemOne.listLevelTwo" :key="index2" class="table_left_level_two">
                  <van-collapse v-model="itemOne.activeLevelTwo">
                    <van-collapse-item :name="index2">
                      <template #title>
                        <div class="table_left_level_two_box" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">
                          <p class="table_left_level_two_text" v-html="item2.name"></p>
                          <div class="triangle_blue" :class="{triangle_active:itemOne.activeLevelTwo.includes(index2)}"></div>
                        </div>
                      </template>
                      <!-- levelThree -->
                      <div v-for="(item3, index3) in item2.listLevelThree" :key="index3" class="table_left_level_three">
                        <van-collapse v-model="item2.activeLevelThree">
                          <van-collapse-item :name="index3">
                            <template #title>
                              <div class="table_left_level_three_box" :class="{boderBottom:true}">
                                <p class="table_left_level_three_text" v-html="item3.name"></p>
                                <div class="triangle_blue" :class="{triangle_active:item2.activeLevelThree.includes(index3)}"></div>
                              </div>
                            </template>
                            <!-- levelFour -->
                            <div v-for="(item4, index4) in item3.listLevelFour" :key="index4" class="table_left_level_four">
                              <div class="table_left_level_four_box" :class="{boderBottom:true}">
                                <p class="table_left_level_four_text" v-html="item4.name"></p>
                              </div>
                            </div>
                            <!-- levelFour end-->
                          </van-collapse-item>
                        </van-collapse>
                      </div>
                      <!-- levelThree end-->
                    </van-collapse-item>
                  </van-collapse>
                </div>
                <!-- levelTwo end-->
              </van-collapse-item>
            </van-collapse>
        </div>
      </div>
      <div class="table_right" id="scroll_table">
        <!-- levelOne -->
        <div v-for="(itemOne, indexOne) in listLevelOne" :key="indexOne" class="table_right_level_one">
          <van-collapse v-model="activeLevelOne">
              <van-collapse-item :name="indexOne">
                <template #title>
                  <div class="table_right_title_box">
                    <div class="table_right_title_box_text">1000</div>
                    <div class="table_right_title_box_text">2000</div>
                    <div class="table_right_title_box_text">3000</div>
                    <div class="table_right_title_box_text">4000</div>
                    <div class="table_right_title_box_text">5000</div>
                    <div class="table_right_title_box_text">6000</div>
                    <div class="table_right_title_box_text">7000</div>
                    <div class="table_right_title_box_text borderRadius">8000</div>
                  </div>
                </template>
                <!-- levelTwo -->
                <div v-for="(item2, index2) in itemOne.listLevelTwo" :key="index2" class="table_right_level_two">
                  <van-collapse v-model="itemOne.activeLevelTwo">
                      <van-collapse-item :name="index2">
                        <template #title>
                          <div class="table_right_box">
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">100</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">200</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">300</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">400</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">500</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">600</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">700</div>
                            <div class="table_right_box_text" :class="{boderBottom:index2!=itemOne.listLevelTwo.length-1}">800</div>
                          </div>
                        </template>
                        <!-- levelThree -->
                        <div v-for="(item3, index3) in item2.listLevelThree" :key="index3" class="table_right_level_three">
                          <van-collapse v-model="item2.activeLevelThree">
                              <van-collapse-item :name="index3">
                                <template #title>
                                  <div class="table_right_box">
                                    <div class="table_right_box_text" :class="{boderBottom:true}">10</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">20</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">30</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">40</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">50</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">60</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">70</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">80</div>
                                  </div>
                                </template>
                                <!-- levelFour -->
                                <div v-for="(item4, index4) in item3.listLevelFour" :key="index4" class="table_right_level_four">
                                  <div class="table_right_box">
                                    <div class="table_right_box_text" :class="{boderBottom:true}">1</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">2</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">3</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">4</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">5</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">6</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">7</div>
                                    <div class="table_right_box_text" :class="{boderBottom:true}">8</div>
                                  </div>
                                </div>
                                <!-- levelFour end-->
                              </van-collapse-item>
                            </van-collapse>
                        </div>
                        <!-- levelThree end-->
                      </van-collapse-item>
                    </van-collapse>
                </div>
                <!-- levelTwo end-->
              </van-collapse-item>
            </van-collapse>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 需要加载vant
export default {
  data() {
    return {
      agentcode: '',
      sortType: 0,
      // titleList: ['当月应转<br>保客户数','当月转保<br>客户数','当月转保<br>保费(万)','当月转保<br>率','年度应转<br>保客户数','年度转保<br>客户数','年度转保<br>保费(万)','年度转保<br>率'],
      listLevelOne: [
        {name:'北京'},
        {name:'内蒙'},
        {
          name:'山东', 
          listLevelTwo:[
            {
              name:'潍坊',
              listLevelThree:[
                {
                  name: '张三四区',
                  listLevelFour:[
                    {
                      name: '张三处'
                    },
                    {
                      name: '李四处'
                    },
                    {
                      name: '王五处'
                    },
                  ]
                },
                {
                  name: '王二小区'
                },
                {
                  name: '张三五区'
                },
              ],
              activeLevelThree: [],
            },
            {
              name:'济南二部'
            },
            {
              name:'济南三部'
            },
            {
              name:'济南四部'
            }
          ],
          activeLevelTwo: [],
        },
        {name:'河北'},
        {name:'上海'}
        ],
      activeLevelOne: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.uclogin();
      this.tableSwipe('scroll_title', 'scroll_table');
    })
  },
  methods: {
    uclogin(){
      // let uctoken = login(window.location.href);// token 不存在则 跳转到登录页面,登录成功后获取 openid和业务员工号agentcode
      // if (uctoken) {
      //     this.agentcode = getCookie("uc_employeeno");
      // } else {
      //   console.log('no uctoken');
      // }
    },
    //表格测滑
    tableSwipe(scroll_title, scroll_table){
      var scroll_title = document.getElementById(scroll_title);
      var scroll_table = document.getElementById(scroll_table);
      scroll_table.onscroll = function () {
        scroll_title.scrollLeft = this.scrollLeft;
      }
    },
    //排序
    sortAction(index){
      switch (index) {
        case 1:
          if (this.sortType == 1) {
            this.sortType = 2;
          } else {
            this.sortType = 1;
          }
          break;
        case 2:
          if (this.sortType == 3) {
            this.sortType = 4;
          } else {
            this.sortType = 3;
          }
          break;
        case 3:
          if (this.sortType == 5) {
            this.sortType = 6;
          } else {
            this.sortType = 5;
          }
          break;
        case 4:
          if (this.sortType == 7) {
            this.sortType = 8;
          } else {
            this.sortType = 7;
          }
          break;
        case 5:
          if (this.sortType == 9) {
            this.sortType = 10;
          } else {
            this.sortType = 9;
          }
          break;
        case 6:
          if (this.sortType == 11) {
            this.sortType = 12;
          } else {
            this.sortType = 11;
          }
          break;
        case 7:
          if (this.sortType == 13) {
            this.sortType = 14;
          } else {
            this.sortType = 13;
          }
          break;
        case 8:
          if (this.sortType == 15) {
            this.sortType = 16;
          } else {
            this.sortType = 15;
          }
          break;
      
        default:
          break;
      }
    },
    getTableListLevel2(index){
      console.log('getTableListLevel2:',index);
    }
  },
}
</script>

<style lang="less" scoped>
.container{
  background-color: #fff;
  box-sizing: border-box;
  .head{
    padding: 0 0.35rem 0 0.3rem;
    height: 1.01rem;
    line-height: 1.01rem;
    font-family: 'PingFang SC';
    color: #5485D9;
    .name{
      font-size: 0.32rem;
      font-weight: bold;
      float: left;
      position: relative;
      &::before{
        content: '';
        width: 0.08rem;
        height: 0.32rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -0.3rem;
        background: #5485D9;
      }
    }
    .date{
      font-size: 0.28rem;
      font-weight: 400;
      float: right;
    }
    &::after{
      content: '';
      display: block;
      clear: both;
    }
  }
  .title{
    height: 0.68rem;
    line-height: 0.68rem;
    font-size: 0.24rem;
    font-family: 'PingFang SC';
    font-weight: 500;
    color: #565656;
    margin-left: 0.3rem;
    .title_first{
      float: left;
      text-align: center;
      width: 1.92rem;
      background: #F5F6F8;
      border-radius: 0.06rem 0rem 0rem 0.06rem;
    }
    .title_right{
      height: 0.68rem;
      float: left;
      width: 5.28rem;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      font-size: 0;
      .title_item{
        display: inline-block;
        width: 1.58rem;
        height: 0.68rem;
        background: #F5F6F8;
        margin-left: 0.08rem;
        font-family: 'PingFang SC';
        font-size: 0.24rem;
        font-weight: 500;
        color: #565656;
        position: relative;
        .title_text{
          width: 0.96rem;
          line-height: 0.3rem;
          text-align: center;
          margin: 0.08rem 0 0 0.21rem;
        }
        .title_triangle_up{
          border-style: solid;
          border-width: 0 0.06rem 0.08rem 0.06rem;
          border-color: transparent transparent #ACAEBC transparent;
          position: absolute;
          top: 0.24rem;
          right: 0.22rem;
        }
        .title_triangle_down{
          border-style: solid;
          border-width: 0.08rem 0.06rem 0 0.06rem;
          border-color: #ACAEBC transparent transparent transparent;
          position: absolute;
          top: 0.36rem;
          right: 0.22rem;
        }
      }
    }
  }
  .body{
    position: fixed;
    overflow: scroll;
    top: 1.69rem;
    left: 0;
    right: 0;
    bottom: 0;
    .table_left{
      float: left;
      width: 1.92rem;
      margin-left: 0.3rem;
      .table_left_level_one{
        .table_left_level_one_box{
          width: 1.92rem;
          height: 0.62rem;
          line-height: 0.62rem;
          background: #5485D9;
          border-radius: 0.06rem 0rem 0rem 0.06rem;
          margin-top: 0.08rem;
          position: relative;
          .table_left_level_one_text{
            font-size: 0.28rem;
            font-family: 'PingFang SC';
            font-weight: 500;
            color: #FFFFFF;
            position: absolute;
            left: 0.4rem;
          }
        }
        .table_left_level_two{
          .table_left_level_two_box{
            width: 1.53rem;
            margin-left: 0.39rem;
            height: 0.78rem;
            line-height: 0.78rem;
            background: #FFFFFF;
            position: relative;
            .table_left_level_two_text{
              font-size: 0.24rem;
              font-family: 'PingFang SC';
              font-weight: 500;
              color: #5485D9;
              position: absolute;
              left: 0.19rem;
            }
          }
          .table_left_level_three{
            .table_left_level_three_box{
              width: 1.33rem;
              margin-left: 0.59rem;
              height: 0.78rem;
              line-height: 0.78rem;
              background: #FFFFFF;
              position: relative;
              .table_left_level_three_text{
                font-size: 0.24rem;
                font-family: 'PingFang SC';
                font-weight: 500;
                color: #5485D9;
                position: absolute;
                left: 0.19rem;
              }
            }
            .table_left_level_four{
              .table_left_level_four_box{
                width: 0.95rem;
                margin-left: 0.97rem;
                height: 0.78rem;
                line-height: 0.78rem;
                background: #FFFFFF;
                position: relative;
                .table_left_level_four_text{
                  font-size: 0.24rem;
                  font-family: 'PingFang SC';
                  font-weight: 500;
                  color: #5485D9;
                  position: absolute;
                  left: 0.01rem;
                }
              }
            }
          }
        }
      }
    }
    .table_right{
      float: left;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      width: 5.28rem;
      .table_right_level_one{
        width: 13.28rem;
        margin-top: 0.08rem;
        .table_right_title_box{
          .table_right_title_box_text{
            display: inline-block;
            background: #F5F6F8;
            width: 1.66rem;
            height: 0.62rem;
            line-height: 0.62rem;
            text-align: center;
            font-size: 0.26rem;
            font-family: 'PingFang SC';
            font-weight: 400;
            color: #565656;
          }
          .borderRadius{
            border-radius: 0 0.06rem 0.06rem 0; 
          }
        }
        .table_right_box{
          .table_right_box_text{
            display: inline-block;
            background: #FFFFFF;
            width: 1.66rem;
            height: 0.78rem;
            line-height: 0.78rem;
            text-align: center;
            font-size: 0.26rem;
            font-family: 'PingFang SC';
            font-weight: 400;
            color: #565656;
          }
        }
      }
    }
    // 下划线
    .boderBottom{
      border-bottom: 1px solid #EFEFEF;
    }
    // 白色三角
    .triangle_white{
      border-style: solid;
      border-width: 0.08rem 0.06rem 0 0.06rem;
      border-color: #ffffff transparent transparent transparent;
      position: absolute;
      top: 0.27rem;
      left: 0.2rem;
      transition: all 0.3s ;
    }
    // 蓝色三角
    .triangle_blue{
      border-style: solid;
      border-width: 0.08rem 0.06rem 0 0.06rem;
      border-color: #5485D9 transparent transparent transparent;
      position: absolute;
      top: 0.35rem;
      left: 0;
      transition: all 0.3s ;
    }
    // 激活三角
    .triangle_active{
      transform: rotate(180deg);
    }
  }
}

</style>
<style scoped>

  .container >>> .van-cell {
    padding: 0;
    font-size: 0;
    line-height: 0;
  }
  .container >>> .van-collapse-item__title--expanded::after {
    visibility: hidden;
  }
  .container >>> .van-collapse-item__content {
    padding: 0;
    font-size: 0;
  }
  .container >>> .van-cell__right-icon {
    display: none;
  }
  .container >>> .van-hairline--top-bottom::after {
    border-width: 0;
  }
</style>