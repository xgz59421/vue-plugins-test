<template>
  <div>
    <section class="topbg">
      <h2>团队使用报告</h2>
      <p>过去12个月月均数据分析</p>
    </section>
    <section class="container">
      <div class="searchbg">
        <input type="text" placeholder="请输入工号查询使用报告">
        <button>搜索</button>
      </div>
      <div class="databg">
        <section class="namebg">
          <div class="name">艾华夏</div>
        </section>
        <h2 class="title">访问量全国排名</h2>
        <section class="nationalRank">
          <table>
            <tr>
              <th></th>
              <th>个人</th>
              <th>营业处</th>
              <th>营业部</th>
              <th>营业区</th>
            </tr>
            <tr>
              <td>当月</td>
              <td>11%</td>
              <td>12%</td>
              <td>13%</td>
              <td>14%</td>
            </tr>
            <tr>
              <td>近一年</td>
              <td>12%</td>
              <td>13%</td>
              <td>14%</td>
              <td>15%</td>
            </tr>
          </table>
        </section>
        <h2 class="title">访问量排名走势</h2>
        <section class="rankTrend">
        </section>
        <h2 class="title">使用习惯分析</h2>
        <section class="habitAnalysis">
        </section>
      </div>
    </section>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  data() {
    return {
      // 使用习惯分析的数据
      habitAnalysisData: [],
      // 使用习惯分析的饼图颜色
      habitColors: ['#AA85FC', '#5ADFC1', '#4992F8', '#FF7A4A' ,'#F2C333'],
    }
  },
  mounted() {
    this.fninit();
    setTimeout(() => {
      this.rankTrend();
      this.habitAnalysis();
    }, 100);
  },
  methods: {
    fninit(){
      this.habitAnalysisData = [
        ['product', '个人', '营业部', '营业处', '营业区'],
        ['微门户', 15, 92.1, 85.7, 83.1],
        ['网店管理', 41.1, 30.4, 65.1, 53.3],
        ['业绩管理', 24.1, 67.2, 79.5, 86.4],
        ['直销客户', 55.2, 67.1, 69.2, 72.4],
        ['微信投保', 55.2, 67.1, 69.2, 72.4]
      ]
    },
    // 排名走势
    rankTrend(){
      var option = {
        tooltip: {
          trigger: 'axis',
          // 是否显示提示框浮层
          showContent : false,
        },
        legend: {
          icon:'roundRect',
          itemWidth: 10,
          itemHeight: 3,
          itemGap: 18,
          bottom: 18,
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          // 坐标轴轴线相关设置
          axisLine: {
            show: false 
          },
          // 坐标轴刻度相关设置
          axisTick: {
            show: false ,
          },
          triggerEvent: true,
          data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            show: true,
            color: '#333333',
            fontSize: 10,
            interval: 0,  //x轴数据显示全
            formatter: '{value}月',
            margin: 15
          },
          axisPointer: {
            // 直线指示器
            type: "line"
          },
        },
        yAxis: {
          type: 'value',
          minInterval: 25,
          axisLabel: {
            fontStyle : 10,
            color: '#999999',
            margin: 5,
            formatter: '{value}%',
          }
        },
        grid: {
          top: 38,
          bottom: 85,
          left: 40,
          right: 20,
        },
        series: [
          {
            name: '个人',
            type: 'line',
            data: [35,40,33,26,30,33,30,27,35,35,45,45],
            lineStyle: {
                width: 1,
                color: '#F26633',
            },
            emphasis: {
              label: {
                show: true,
                color: '#F26633',
                fontStyle : 10,
                fontWeight: "bold",
                formatter: '{c}%',
              },
              lineStyle: {
                width: 1,
              },
              itemStyle:{
                 borderWidth : 1,
              }
            },
            // 标记的图形
            symbol:'emptyCircle',
            showSymbol: false,
            showAllSymbol: true,
            itemStyle:{
              color:'#F26633',
            }
          },
          {
            name: '营业区',
            type: 'line',
            data: [70,55,59,57,55,50,45,50,52,40,60,60],
            lineStyle: {
                width: 1,
                color: '#4992F8',
            },
            emphasis: {
              label: {
                show: true,
                color: '#4992F8',
                fontStyle : 10,
                fontWeight: "bold",
                formatter: '{c}%',
              },
              lineStyle: {
                width: 1,
              },
              itemStyle:{
                 borderWidth : 1,
              }
            },
            // 标记的图形
            symbol:'emptyCircle',
            showSymbol: false,
            showAllSymbol: true,
            itemStyle:{
              color:'#4992F8',
            }
          },
          {
            name: '营业处',
            type: 'line',
            data: [65,66,67,69,70,71,75,76,68,69,70,72],
            lineStyle: {
                width: 1,
                color: '#49C1F8',
            },
            emphasis: {
              label: {
                show: true,
                color: '#49C1F8',
                fontStyle : 10,
                fontWeight: "bold",
                formatter: '{c}%',
              },
              lineStyle: {
                width: 1,
              },
              itemStyle:{
                 borderWidth : 1,
              }
            },
            // 标记的图形
            symbol:'emptyCircle',
            showSymbol: false,
            showAllSymbol: true,
            itemStyle:{
              color:'#49C1F8',
            }
          },
          {
            name: '营业部',
            type: 'line',
            data: [34,38,32,45,46,49,36,41,46,51,66,72],
            lineStyle: {
                width: 1,
                color: '#AA85FC',
            },
            emphasis: {
              label: {
                show: true,
                color: '#AA85FC',
                fontStyle : 10,
                fontWeight: "AA85FC",
                formatter: '{c}%',
              },
              lineStyle: {
                width: 1,
              },
              itemStyle:{
                 borderWidth : 1,
              }
            },
            // 标记的图形
            symbol:'emptyCircle',
            showSymbol: false,
            showAllSymbol: true,
            itemStyle:{
              color:'#AA85FC',
            }
          }
        ]
      };
      var node = document.getElementsByClassName("rankTrend")[0];
      echarts.init(node).dispose(); 
      var echart_lines = echarts.init(node);
      echart_lines.setOption(option);
      
      // echart_line.getZr().on('click', function (params) {
      //   console.log(params);
      //   console.log(params.target);
      //   if (params.target=='ECPolyline') {
          
      //   }else if (params.target == 'TSpan') {
          
      //   }
      // });
      
      window.addEventListener('resize', function () {
        echart_lines.resize();
      });
    },
    // 使用习惯分析
    habitAnalysis(){
      var _this = this;
      // 标题
      var textStyle = {fontSize: 12, color: '#333333'}
      var titlePosition = ['center', '8.5%', 'center', '78.5%'];
      var titleArray = [];
      // 主体
      var centerArray = [['50%', '35%'],['14%', '73%'],['50%', '73%'],['86%', '73%']];
      var seriesArray = [];
      for (let i = 0; i < 4; i++) {
        titleArray.push({
          text: _this.habitAnalysisData[0][i+1], 
          textStyle: textStyle, 
          top: i==0 ? '8%': '55%',
          left: titlePosition[i],
        });
        seriesArray.push({
          type: 'pie',
          radius: i==0 ? '32%': '20%',
          color: _this.habitColors,
          // 是否顺时针
          clockwise: false, 
          startAngle :100,
          center: centerArray[i],
          encode: {
            itemName: 'product',
            value: _this.habitAnalysisData[0][i+1]
          },
          label:{
            show: i==0 ? true: false,
            // formatter: '{d}%',
            // 标签的对齐方式
            alignTo: 'labelLine',
            // verticalAlign: 'bottom',
            formatter: function (params) {
              return `{circle|●}` + ` {textColor|${params.percent}%}`
              // return `{circle|}` + ` {textColor|${params.percent}%}`
            },
            // 富文本
            rich: {
              circle: {
                color: 'inherit',
                fontSize: 14,
              },
              // circle: {
              //   height: 7,
              //   width: 7,
              //   borderRadius: 15,
              //   backgroundColor: 'inherit', // 圆点颜色和饼图块状颜色一致
              // },
              textColor: {
                color: 'inherit',
              },
            }
          },
        });    
      }
      var option = {
          title:titleArray,
          legend: {
            backgroundColor:'#F0F3FA',
            borderRadius:24,
            icon:'circle',
            itemWidth: 6,
            itemHeight: 6,
            textStyle:{ fontSize: 12, color: '#333' },
            bottom: 20,
          },
          // tooltip: {},
          dataset: {source: this.habitAnalysisData},
          series: seriesArray
      };
      var node = document.getElementsByClassName("habitAnalysis")[0];
      echarts.init(node).dispose(); 
      // init
      var echart_pies = echarts.init(node);
      echart_pies.setOption(option);
      // 旋转
      window.addEventListener('resize', function () {
        echart_pies.resize();
      });
      // 取消高亮选中事件
      echart_pies.getZr().on('click', function (params) {
        var dataLen = option.series.length;
        var pieLen = _this.habitAnalysisData.length - 1;//(有一行是标题)
        for (let i = 0; i < dataLen; i++) {
          for (let j = 0; j < pieLen; j++) {
            echart_pies.dispatchAction({
              type: 'downplay',
              seriesIndex: i,
              dataIndex: j
            });
          }
        }
      });
      // 高亮选中事件
      echart_pies.on('click', function (params) {
        var dataLen = option.series.length;
        for (let i = 0; i < dataLen; i++) {
          echart_pies.dispatchAction({
            type: 'highlight',
            seriesIndex: i,
            dataIndex: params.dataIndex
          });
        }
      });
    }
  },
}
</script>
<style lang="less" scoped>
  .topbg{
    width: 100%;
    height: 466px;
    background: url(../../assets/img/bg_blue.png) no-repeat;
    background-size: 100% 466px;
    h2{
      height: 60px;
      line-height: 60px;
      font-size: 44px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      padding-top: 30px;
      position: relative;
      &::before, &::after{
        content: '//';
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        display: inline-block;
        position: absolute;
      }
      &::before{
        left: 200px;
      }
      &::after{
        right: 200px;
      }
    }
    p{
      opacity: 0.8;
      font-size: 28px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      padding: 10px 0;
    }
  }
  .container{
    width: 100%;
    height: calc(100vh - 217px);
    background: #FFFFFF;
    border-radius: 44px 44px 0px 0px;
    margin-top: -289px;
    padding-top: 40px;
    .searchbg{
      width: 670px;
      height: 70px;
      margin: 0 auto;
      background: #F8F8F8;
      border-radius: 35px;
      position: relative;
      input{
        width: 450px;
        height: 60px;
        margin-top: 5px;
        margin-left: 33px;
        padding-left: 50px;
        background: url(../../assets/img/icon_magnifier.png) no-repeat;
        background-size: 32px;
        background-position:0 50%;
        &::-webkit-input-placeholder{
          opacity: 0.6;
          font-size: 28px;
          color: #999999;
          letter-spacing: 0;
          text-align: justify;
          line-height: 60px;
        }
      }
      button{
        width: 80px;
        height: 50px;
        background: #0090FF;
        border-radius: 25px;
        font-size: 24px;
        color: #FFFFFF;
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .databg{
      width: 100%;
      background: #FFFFFF;
      // 客户姓名
      .namebg{
        width: 100%;
        height: 60px;
        padding: 51px 0 35px 30px;
        border-bottom: 10px solid #F7F9FC;
        font-size: 44px;
        color: #333333;
        letter-spacing: 0;
        text-align: justify;
        position: relative;
        &::after{
          content: '客户经理';
          width: 150px;
          height: 45px;
          background: #FF9A43;
          border-radius: 22.5px;
          position:absolute;
          top:50%;
          left: 185px;
          transform: translateY(-50%);
          font-size: 28px;
          color: #FFFFFF;
          letter-spacing: 0;
          text-align: center;
          line-height: 40px;
        }
      }
      // 标题
      .title{
        height: 122px;
        line-height: 122px;
        font-size: 36px;
        position: relative;
        padding-left: 50px;
        margin-top: 4px;
        color: #333333;
        letter-spacing: 0;
        &::before{
          content: '';
          width: 6px;
          height: 30px;
          background: #4992F8;
          border-radius: 3px;
          position: absolute;
          top: 53%;
          transform: translateY(-50%);
          left: 30px;
        }
        span{
          font-size: 32px;
          color: #4992F8;
        }
      }
      // 全国排名
      .nationalRank{
        width: 690px;
        height: 202px;
        margin: 0 auto;
        background: url(../../assets/img/bg_lightblue.png) no-repeat;  
        background-size: 690px auto;
        table{
          width: 660px;
          margin-left: 30px;
          table-layout:fixed;
          th, tr td:first-child{
            opacity: 0.6;
            font-size: 26px;
            color: #333333;
            letter-spacing: 0;
            text-align: left;
            line-height: 64px;
            font-weight: normal;
          }
          td{
            font-size: 30px;
            color: #333333;
            letter-spacing: 0;
            text-align: left;
            line-height: 64px;
          }
        }
      }
      // 排名走势
      .rankTrend{
        width: 690px;
        height: 567px;
        margin: 0 auto;
        background: #F7F9FC;
        border-radius: 12px;    
      }
      // 使用习惯分析
      .habitAnalysis{
        width: 690px;
        height: 908px;
        height: 800px;
        margin: 0 auto 98px;
        background: #F7F9FC;
        border-radius: 12px;
      }
    }

  }
 
</style>