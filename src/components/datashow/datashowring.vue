<template>
  <div>
    <div id="myChartRing" style="width:500px;height:150px;"></div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
  name: 'myChartRing',
  props: {
    
  },
  data () {
    return {
      msg: 'This is datahowring!',
    }
  },
  computed: {
    
  },
  methods: {
    drawLine () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('myChartRing'))
    myChart.setOption({
        tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{a} <br/>{b}: {c},{d}%",
            color:'#000', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"#4CD0DD",
            }
        },
        legend: {  //图例
            orient: 'vertical',  //图例的布局，竖直    horizontal为水平
            x: 'right',//图例显示在右边
            data:['到校人数','未到人数','请假人数',],
            textStyle:{    //图例文字的样式
                color:'#4CD0DD',  //文字颜色
                fontSize:12    //文字大小
            }
        },
        series: [
            {
                name:'当日到校情况占比',
                type:'pie', //环形图的type和饼图相同
                radius: ['50%', '70%'],//饼图的半径，第一个为内半径，第二个为外半径
                avoidLabelOverlap: false,
                color:['#4CD0DD','#3488db','#f9387f',],
                label: {
                    normal: {  //正常的样式
                        formatter: "{b}:\n{c}(人),{d}%",
                        show: true,
                        position: 'left'
                    },
                    emphasis: { //选中时候的样式
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },  //提示文字
                labelLine: {
                    normal: {
                        show: true
                    }
                },
                data:[
                    {value:335, name:'到校人数'},
                    {value:310, name:'未到人数'},
                    {value:234, name:'请假人数'},
                ]
            }
        ]
    })
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
