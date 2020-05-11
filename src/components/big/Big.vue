<template>
  <div class="big">
    <div class="big left">
      <div class="all-arrival-rate">
        <div style="margin-top:8px;letter-spacing:5px;font-size:15px;">
          <b>全校到达率</b>
        </div>
        <div style="letter-spacing:1px;font-size:10px;">
          本周最高到达率0%
          本周最低到达率0%
        </div>
        <data-show-line></data-show-line>
      </div>
      <div class="today-arrival-proportion">
        <div style="margin-top:8px;letter-spacing:5px;font-size:15px;"><b>当日到校情况占比</b></div>
          <data-show-ring></data-show-ring>
      </div>
      <div class="grade-arrival-rate">
        <div style="margin-top:8px;letter-spacing:5px;font-size:15px;"><b>各年级到达率</b>
        <div style="letter-spacing:1px;font-size:10px;">
          本周最高到达率0%
          本周最低到达率0%
        </div>
        </div>
          <data-show-bar></data-show-bar>
      </div>
    </div>
    <div class="big center">
      <div class="all-arrival-num">
        <div style="font-size:35px;color:#00e8ff;margin-top:40px;">到校人数</div>
        <div style="font-size:40px;color:#00e8ff;margin-top:30px">0</div>
      </div>
      <div class="center-one">
        <div class="all-school-num">
          <div style="font-size:15px;color:#00e8ff;margin-top:10px;">全校人数</div>
          <div style="font-size:15px;color:#00e8ff;margin-top:10px">0</div>
        </div>
        <div class="late-students-num">
          <div style="font-size:15px;color:#00e8ff;margin-top:10px;">迟到人数</div>
          <div style="font-size:15px;color:#00e8ff;margin-top:10px">0</div>
        </div>
      </div>
      <div class="center-two">
        <div class="leave-request-num">
          <div style="font-size:15px;color:#00e8ff;margin-top:10px;">请假人数</div>
          <div style="font-size:15px;color:#00e8ff;margin-top:10px">0</div>
        </div>
        <div class="not-arrival-num">
          <div style="font-size:15px;color:#00e8ff;margin-top:10px;">未到人数</div>
          <div style="font-size:15px;color:#00e8ff;margin-top:10px">0</div>
        </div>
      </div>
      <div class="not-arrival-show">
        <div style="margin-top:8px;letter-spacing:5px;font-size:15px;"><b>未到学生展示</b></div>
        <slider-show :slides="students"></slider-show>
      </div>
    </div>
    <div class="big right">
      <div class="leave-request-show">
        <div style="margin-top:10px;letter-spacing:5px;font-size:20px;"><b>请假学生展示</b></div>
        <div style="margin-top:140px">暂无数据</div>
      </div>
      <div class="late-students-show">
        <div style="margin-top:10px;letter-spacing:5px;font-size:20px;"><b>迟到学生展示</b></div>
        <div style="margin-top:140px">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderShow from '../../components/SliderShow.vue'
import DataShowLine from '../../components/datashow/datashowline.vue'
import DataShowBar from '../../components/datashow/datashowbar.vue'
import DataShowRing from '../../components/datashow/datashowring.vue'
export default {
  name: 'Big',
  components: {
    SliderShow,
    DataShowLine,
    DataShowBar,
    DataShowRing,
  },
  data () {
    return {
      msg: 'big',
      students:[
        {
          name: '张一山',
          grade: '高中一年级',
          class: '1班',
          src: require('../../assets/student1.jpg'),
        },
        {
          name: '李小路',
          grade: '初中二年级',
          class: '31班',
          src: require('../../assets/student2.jpg'),
        },
        {
          name: '赵长青',
          grade: '高中三年级',
          class: '8班',
          src: require('../../assets/student3.jpg'),
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .big {
    // font-size:24px;
    // color:yellow;
  }
  .left {
  // border:1px solid red;
  font-size:15px;
  width: 30%;
  height: auto;
  float:left;
  margin-left:2%;
}
.center {
  // border:1px solid red;
  font-size:15px;
  width: 30%;
  height: auto;
  float:left;
  margin-left:2%;
}
.right {
  // border:1px solid red;
  font-size:15px;
  width: 30%;
  height: auto;
  float:left;
  margin-left:2%;
}
.all-arrival-rate {
  // border:1px solid red;
  font-size:15px;
  width: 90%;
  height: 180px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
  color:#deeffc;
}
.today-arrival-proportion {
  // border:1px solid red;
  font-size:15px;
  width: 90%;
  height: 180px;
  margin-top:20%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
  color:#deeffc;
}
.grade-arrival-rate {
  // border:1px solid red;
  font-size:15px;
  width: 90%;
  height: 180px;
  margin-top:20%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
  color:#deeffc;
}
.all-arrival-num {
  // border:1px solid red;
  // font-size:15px;
  width: 90%;
  height: 180px;
  margin-top:2%;
  margin-left:5%;
  // padding:12%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
}
.center-one {
  // border:1px solid red;
  font-size:15px;
  width: 90%;
  height: 90px;
  margin-top:18%;
  margin-left:5%;
}
.all-school-num {
  // border:1px solid red;
  font-size:15px;
  float:left;
  width: 40%;
  height: 65px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.late-students-num {
  // border:1px solid red;
  font-size:15px;
  float:left;
  width: 40%;
  height: 65px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.center-two {
  // border:1px solid red;
  font-size:15px;
  width: 90%;
  height: 90px;
  margin-top:15%;
  margin-left:5%;
}
.leave-request-num {
  // border:1px solid red;
  font-size:15px;
  float:left;
  width: 40%;
  height: 65px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.not-arrival-num {
  // border:1px solid red;
  font-size:15px;
  float:left;
  width: 40%;
  height: 65px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/numberbp.png") no-repeat center;
  background-size:cover;
}
.not-arrival-show {
  // border:1px solid red;
  font-size:15px;
  color:#deeffc;
  width: 90%;
  height: 180px;
  margin-top:6%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
}
.leave-request-show {
  // border:1px solid red;
  font-size:15px;
  color:#deeffc;
  width: 90%;
  height: 230px;
  margin-top:2%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
}
.late-students-show {
  // border:1px solid red;
  font-size:15px;
  color:#deeffc;
  width: 90%;
  height: 230px;
  margin-top:40%;
  margin-left:5%;
  background:url("../../assets/bgshow2.png") no-repeat center;
  background-size:cover;
  overflow:hidden;
}
</style>
