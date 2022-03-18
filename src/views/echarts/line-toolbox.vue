<template>
  <div id="main"></div>
</template>

<script>
  const echarts = require('echarts')
  export default {
    name: '',
    data() {
      return {
        dataList: [
          ['姓名', 'data1', 'data2', 'data3', 'data4'],
          ['坂井泉水', 30, 83, 73, 55],
          ['葵司', 21, 43, 85, 93],
          ['麻生希', 16, 86, 65, 82],
          ['新垣结衣', 11, 72, 53, 39]
        ]
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
          dataset: {
            source: this.dataList
          },
          title: [{
              text: 'titlexxxxxx',
              x: 'left',
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
          // tooltip: {
          //   trigger: 'axis'
          // },
          legend: {},
          toolbox: {
            show: true,
            feature: {
              // dataZoom: {
              //   yAxisIndex: 'none'
              // },
              dataView: {
                readOnly: true,
                optionToContent: function (opt) {
                  console.log(opt);
                  var source = opt.dataset[0].source
                  let dataset = opt.dataset
                  var table = '<table border="1" style="width:100%;text-align:center"><tbody>'
                  for (let i = 0; i < source.length; i++) {
                    let array = source[i];
                    table += '<tr>'
                    for (let j = 0; j < array.length; j++) {
                      let item = array[j];
                      table += `<td style="color: #f00">${item}</td>`
                    }
                    table += '</tr>'
                  }
                  table += '</tbody></table>';
                  return table;
                }
              },
              magicType: {
                type: ['line', 'bar']
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: [{
            type: 'category',
            gridIndex: 0
          }],
          yAxis: [{
            gridIndex: 0
          }],
          dataZoom: [{
            type: 'slider',
            start: 0,
            end: 100
          }, {
            type: 'inside',
            start: 0,
            end: 100
          }],
          series: [{
              type: 'line',
              serierLayoutBy: 'row',
              smooth: true,
              symbol: 'none'
            },
            {
              type: 'line',
              serierLayoutBy: 'row',
              smooth: true,
              symbol: 'none'
            },
            {
              type: 'line',
              serierLayoutBy: 'row',
              smooth: true,
              symbol: 'none'
            },
            {
              type: 'line',
              serierLayoutBy: 'row',
              smooth: true,
              symbol: 'none'
            },
          ]
        };
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