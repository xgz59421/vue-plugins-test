<template>
  <div id="main"></div>
</template>

<script>
  const echarts = require('echarts')
  export default {
    name: '',
    data() {
      return {}
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let main = document.getElementById("main");
        let myechart = echarts.init(main);
        let option = {
          title: [{
              text: 'titlexxxxxx',
              x: 'center',
              top: '10',
              textStyle: {
                color: '#049783'
              }
            },
            {
              text: 'yyy',
              x: '20',
              y: 'center'
            }
          ],
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            },
            formatter: function (params) {
              for (let i = 0; i < params.length; i++) {
                return 'xxx:' + params[i].name + '--yyy:' + params[i].data
              }
            }
          },
          dataZoom: [{
              type: 'slider',
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              start: 0,
              end: 100
            }
          ],
          series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            color: '#1690d8'
          }]
        }
        myechart.setOption(option);
      }
    },
  }
</script>

<style scope>
  #main {
    height: 500px;
  }
</style>