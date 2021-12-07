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
          title: {
            text: "柱状图"
          },
          xAxis: {
            data: ["衬衫", "裤子", "外套", "鞋子", "背包"]
          },
          yAxis: {},
          series: [{
              type: "bar",
              data: [100, 88, 15, 3, 23]
            },
            {
              type: "line",
              data: [100, 88, 15, 3, 23]
            },
          ]
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