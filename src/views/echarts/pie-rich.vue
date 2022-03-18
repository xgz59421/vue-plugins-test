<template>
  <div id="main"></div>
</template>

<script>
  const echarts = require('echarts')
  export default {
    data() {
      return {
        habitAnalysisData : [
          ['product', '个人', '营业部', '营业处', '营业区'],
          ['微门户', 15, 92.1, 85.7, 83.1],
          ['网店管理', 41.1, 30.4, 65.1, 53.3],
          ['业绩管理', 24.1, 67.2, 79.5, 86.4],
          ['直销客户', 55.2, 67.1, 69.2, 72.4],
          ['微信投保', 55.2, 67.1, 69.2, 72.4]
        ],
        habitColors: ['#AA85FC', '#5ADFC1', '#4992F8', '#FF7A4A', '#F2C333']
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        var _this = this;
        // 标题
        var textStyle = {
          fontSize: 12,
          color: '#333333'
        }
        var titlePosition = ['center', '8.5%', 'center', '78.5%'];
        var titleArray = [];
        // 主体
        var centerArray = [
          ['50%', '35%'],
          ['14%', '73%'],
          ['50%', '73%'],
          ['86%', '73%']
        ];
        var seriesArray = [];
        for (let i = 0; i < 4; i++) {
          titleArray.push({
            text: _this.habitAnalysisData[0][i + 1],
            textStyle: textStyle,
            top: i == 0 ? '8%' : '55%',
            left: titlePosition[i],
          });
          seriesArray.push({
            type: 'pie',
            radius: i == 0 ? '32%' : '20%',
            color: _this.habitColors,
            // 是否顺时针
            clockwise: false,
            startAngle: 100,
            center: centerArray[i],
            encode: {
              itemName: 'product',
              value: _this.habitAnalysisData[0][i + 1]
            },
            label: {
              show: i == 0 ? true : false,
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
          title: titleArray,
          legend: {
            backgroundColor: '#F0F3FA',
            borderRadius: 24,
            icon: 'circle',
            itemWidth: 6,
            itemHeight: 6,
            textStyle: {
              fontSize: 12,
              color: '#333'
            },
            bottom: 20,
          },
          // tooltip: {},
          dataset: {
            source: this.habitAnalysisData
          },
          series: seriesArray
        };

        let main = document.getElementById("main")
        let myechart = echarts.init(main)
        myechart.setOption(option);
        // 旋转
        window.addEventListener('resize', function () {
          myechart.resize();
        });
        // 取消高亮选中事件
        myechart.getZr().on('click', function (params) {
          var dataLen = option.series.length;
          var pieLen = _this.habitAnalysisData.length - 1; //(有一行是标题)
          for (let i = 0; i < dataLen; i++) {
            for (let j = 0; j < pieLen; j++) {
              myechart.dispatchAction({
                type: 'downplay',
                seriesIndex: i,
                dataIndex: j
              });
            }
          }
        });
        // 高亮选中事件
        myechart.on('click', function (params) {
          var dataLen = option.series.length;
          for (let i = 0; i < dataLen; i++) {
            myechart.dispatchAction({
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

<style scope>
  #main {
    width: 690px;
    height: 908px;
    height: 800px;
    margin: 0 auto 98px;
    background: #F7F9FC;
    border-radius: 12px;
  }
</style>