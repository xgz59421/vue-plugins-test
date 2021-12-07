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
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }
        myechart.setOption(option);
      }
    },
  }
</script>

<style scope>
  #main{
      height: 500px;
    }
</style>