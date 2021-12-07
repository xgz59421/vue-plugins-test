<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
const echarts = require('echarts')
import  './china.js'
export default {
  methods: {
    drawMap(){
      var itemStyle = {
          normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
      };
      var option = {
          tooltip: {},
          title: {
              text: '应用访问热力图',
              left:0,
              top:20
          },
          visualMap: {
            min: 0,
            max: 1500,
            // inRange:{                             //定义 在选中范围中 的视觉元素
            //   color: ['grey', 'blue'],
            // },
            left: '0',
            top: 'bottom',
            text: ['高', '低'],
            textStyle: {//文本样式
              fontWeight: "bold"
            },
            calculable: false,  //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
            itemWidth:10,   //图形的宽度，即长条的宽度。
            itemHeight:70, //图形的高度，即长条的高度。
            show:true,   //是否显示
            hoverLink:false,  //鼠标悬浮, 显示数据
            // formatter: function (value) { //标签的格式化工具。               //标签的格式化工具。
            //   return 'aaaa' + value;                   // 范围标签显示内容。
            // }
          },
          selectedMode: 'single',
          series: [
            {
              type: 'map',
              mapType: 'china',
              itemStyle: itemStyle,
              showLegendSymbol: true,
              label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
              },
              data: [
                    { 
                      name: '北京',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '天津',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '上海',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '重庆',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '河北',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '安徽',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '新疆',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '浙江',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '江西',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '山西',
                      value: Math.round(Math.random() * 1000)
                    },
                    //   {name: '内蒙古',value: 891},
                    {
                      name: '吉林',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '福建',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '广东',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '西藏',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '四川',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '宁夏',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '香港',
                      value: Math.round(Math.random() * 1000)
                    },
                    {
                      name: '澳门',
                      value: Math.round(Math.random() * 1000)
                    }
                  ]
            
            },
          ]
      };
      var map = document.getElementById("map");
      var myechart = echarts.init(map);
      myechart.setOption(option);
      console.log('itemStyle:', itemStyle);
      console.log('option:', option);
    }
  },
  mounted() {
    this.drawMap()
  },
}
</script>

<style scope>
  #map{
    width: 375px;
    height: 500px;
    background-color: #ccc;
    margin: 0 auto;
  }
</style>