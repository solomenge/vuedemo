<template>
  <div>
    <div id="myChartBar" style="width:500px;height:170px;"></div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
  name: 'DataShowLine',
  props: {
    
  },
  data () {
    return {
      msg: 'This is datahowline!',
    }
  },
  computed: {
    
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChartBar'))
        // 绘制图表
        myChart.setOption({
            title: { text: '' },
            // tooltip: {},//根据鼠标位置显示具体信息
            color:['#28F2A8'],
            xAxis: [
                      {
                          type: 'category',
                          data: ['高中一年级','初中一年级','数学组'],
                          boundaryGap: true, //坐标轴两端空白策略
                          axisLabel: {
                              interval: 0,
                              textStyle: {
                                  color: '#00e8ff'
                              },
                          // lineHeight: 24
                      },
                      axisLine: { // 坐标轴线
                      lineStyle: {
                          color: '#00e8ff'
                      },
                  },
                  axisTick: {  //刻度线
                      show: true,
                      lineStyle: {
                          color: 'rgba(85,85,85,0.4)'
                      }
                  },　
                  axisPointer: {
                      type: 'shadow'
                  },                
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '到达率',
                  scale:false,
                  min: 0,
                  max: 100,
                  interval: 20,
                  nameTextStyle: {
                      color: '#00e8ff',
                  },
                  axisLabel: {
                      formatter: '{value}',
                      textStyle: {
                          color: '#00e8ff'
                      },
                  },
                  axisLine: {
                      lineStyle: {
                          color: '#00e8ff'
                      }
                  },
                  axisTick: {
                      show: true,
                      lineStyle: {
                          color: '#00e8ff'
                      }
                  },
                  splitLine:{ //去除网格线
                      show: true,
                      lineStyle: {
                          color: ['rgba(85,85,85,0.4)']
                      }
                  },   
              },
              {
                  type: 'value',
                  axisLine: {
                      show: false,
                      lineStyle: {
                          color: '#00e8ff'
                      }
                  }, 
              },
          ],
          series: [
              {
                  name: '到达率',
                  type : 'bar',
                  label : {
                    show: true,//是否显示具体数据
                    position: 'top',
                    color: '#00e8ff',
                  },
                  itemStyle: {
                      normal: {
                          lineStyle: {
                              width:2, //调整 线条的宽度 
                              color : '#28F2A8' //线条颜色 - 绿色
                          }
                      }
                  },
                  // showSymbol: false,
                  // smooth: true, //折线平滑度
                  barWidth : '20%',
                  data: [68,23,45],
              },
          ]
        });
    }
  },
  mounted() {
    this.drawLine();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart {
  /* border:1px solid red; */
}
</style>
