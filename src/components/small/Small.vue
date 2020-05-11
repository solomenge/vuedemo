<template>
<div class="small">
  <div class="number">
    <div class="today-school-leave-num">
      <div style="margin-top:20px">今日离校人数</div>
      <div style="margin-top:30px">0</div>
    </div>
    <div class="today-students-arriving-num">
      <div style="margin-top:20px">今日到校人数</div>
      <div style="margin-top:30px">0</div>
    </div>
    <div class="today-leave-requests-num">
      <div style="margin-top:20px">今日请假人数</div>
      <div style="margin-top:30px">0</div>
    </div>
    <div class="oldday-not-return-num">
      <div style="margin-top:20px">往日请假未回人数</div>
      <div style="margin-top:30px">0</div>
    </div>
  </div>
  <div class="show">
    <div class="left-show">
      <div class="today-school-leave-show">
        <div style="margin:20px;letter-spacing:3px"><b>今日离校学生展示</b></div>
        <div style="margin-top:120px">暂无数据</div>
      </div>
      <div class="today-students-arriving-show">
        <div style="margin-top:20px;letter-spacing:3px"><b>今日到校学生展示</b></div>
        <div style="margin-top:120px">暂无数据</div>
      </div>
    </div>
    <div class="leave-requests-show">
        <div style="margin:20px;letter-spacing:5px"><b>请假学生展示</b></div>
        <div style="margin-top:180px">暂无数据</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Small',
  data () {
    return {
      msg: 'small'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.small {
    font-size:24px;
    color:yellow;
  }
.number {
  // border:1px solid red;
  font-size:15px;
  width: 100%;
  float:left;
}
.today-school-leave-num {
  width: 20%;
  height: 100px;
  color:#00e8ff;
  float:left;
  margin:2.5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.today-students-arriving-num {
  width: 20%;
  height: 100px;
  color:#00e8ff;
  float:left;
  margin:2.5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.today-leave-requests-num {
  width: 20%;
  height: 100px;
  color:#00e8ff;
  float:left;
  margin:2.5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.oldday-not-return-num {
  width: 20%;
  height: 100px;
  color:#00e8ff;
  float:left;
  margin:2.5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}

.left-show {
  font-size:15px;
  // border:1px solid red;
  width: 40%;
  float:left;
}
.today-school-leave-show {
  // border:1px solid blue;
  height: 180px;
  width: 850px;
  color:#deeffc;
  margin-top:80px;
  margin-left:55px;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
}
.today-students-arriving-show {
  height: 180px;
  width: 850px;
  color:#deeffc;
  margin-top:100px;
  margin-left:55px;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover
}
.leave-requests-show {
  height: 280px;
  width: 850px;
  color:#deeffc;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  font-size:15px;
  width: 40%;
  float:left;
  margin-top:75px;
  margin-left:240px;
}
</style>
