<template>
  <div class="top">
    <router-link :to="{path:'/'}">
      <div class="title">  
          {{ title }}
        </div>
      </router-link>
    <div class="time">
      {{gettime}}
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      title : "品科小优智校校园安全管理平台",
      gettime: ''
    }
  },
  methods: {
    getTime(){
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      let ww = new Date().getDay();
      let week = "星期" + "日一二三四五六".charAt(ww);
      _this.gettime = yy+'-'+mm+'-'+dd+ ' ' +hh+':'+mf+':'+ss+' '+week;
    },
    currentTime(){
      setInterval(this.getTime,500)
    },
  },
  created() {
    this.currentTime();
  }
  }
</script>
<style scoped>
  .title {
    // border:1px solid red;
    text-align: center;
    color:#00e8ff;
    width:auto;
    display: inline-block;
    margin-top: 40px;
    font-size:20px
  }
  .time {
    position:absolute;
    right:0px;
    top:0px;
    z-index:100;
    color:#00e8ff;
    font-size:20px
  }

</style>
