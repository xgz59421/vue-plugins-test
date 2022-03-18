<template>
  <div id="main"></div>
</template>

<script>
  const echarts = require('echarts')
  export default {
    data() {
      return {
        dataList: [
          ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          [35, 40, 33, 26, 30, 33, 30, 27, 35, 35, 45, 45],
          [70, 55, 59, 57, 55, 50, 45, 50, 52, 40, 60, 60],
          [65, 66, 67, 69, 70, 71, 75, 76, 68, 69, 70, 72],
          [34, 38, 32, 45, 46, 49, 36, 41, 46, 51, 66, 72],
        ],
        dataColor: ['#F26633', '#4992F8', '#49C1F8', '#AA85FC']
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let main = document.getElementById("main");
        let myechart = echarts.init(main);
        let option = {
          tooltip: {
            trigger: 'axis',
            // 是否显示提示框浮层
            showContent: false,
          },
          grid: {
            top: 38,
            bottom: 85,
            left: 40,
            right: 20,
          },
          legend: {
            icon: 'roundRect',
            itemWidth: 10,
            itemHeight: 3,
            itemGap: 18,
            bottom: 18,
          },
          dataset: { source: this.dataList },
          dimensions: ['个人','营业区','营业处', '营业部'],
          xAxis: {
            type: 'category',
            gridIndex: 0,
            boundaryGap: true,
            // 坐标轴轴线相关设置
            axisLine: { show: false },
            // 坐标轴刻度相关设置
            axisTick: {
              show: false,
            },
            triggerEvent: true,
            // data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            // 坐标轴刻度标签的相关设置
            axisLabel: {
              show: true,
              color: '#333333',
              fontSize: 10,
              interval: 0, //x轴数据显示全
              formatter: '{value}月',
              margin: 15
            },
            // 直线指示器
            axisPointer: { type: "line" },
          },
          yAxis: {
            type: 'value',
            minInterval: 25,
            axisLabel: {
              fontStyle: 10,
              color: '#999999',
              margin: 5,
              formatter: '{value}%',
            },
            gridIndex: 0
          },
          color: this.dataColor,
          series: [
            {name: '个人', type: 'line', seriesLayoutBy: 'row', smooth: true},
            {name: '营业区', type: 'line', seriesLayoutBy: 'row', smooth: true},
            {name: '营业处', type: 'line', seriesLayoutBy: 'row', smooth: true},
            {name: '营业部', type: 'line', seriesLayoutBy: 'row', smooth: true,
              emphasis: {
                label: {
                  show: true,
                  color: '#AA85FC',
                  fontStyle: 10,
                  fontWeight: "bold",
                  // formatter: '{c}%',
                },
                lineStyle: {
                  width: 1,
                },
                itemStyle: {
                  borderWidth: 1,
                }
              },
              // 标记的图形
              symbol: 'emptyCircle',
              showSymbol: false,
              showAllSymbol: true,
              itemStyle: {
                color: '#AA85FC',
              }
            }
          ]
        }
        myechart.setOption(option)
      }
    },
  }
</script>

<style scope>
  #main {
    width: 690px;
    height: 567px;
    margin: 0 auto;
    background: #F7F9FC;
    border-radius: 12px; 
  }
</style>