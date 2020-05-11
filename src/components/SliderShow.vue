<template>
  <div>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
      <div class="slide-img">
        <!-- <transition name="slide-trans"> -->
        <img :src="slides[nowIndex].src" style="width:80px;height:100px;float:left;margin-top:20px;margin-left:30px">
        <!-- </transition> -->
        <!-- <transition name="slide-trans-old"> -->
        <!-- <img v-if="!isShow" :src="slides[nowIndex].src" style="width:50px"> -->
        <!-- </transition> -->
      </div>
      <ul class="slide-info" style="float:left;margin-top:40px;margin-left:10px;list-style: none;text-align: left;">
        <li >
          姓名：{{slides[nowIndex].name}}
        </li>
        <li >
          年级：{{slides[nowIndex].grade}}
        </li>
        <li >
          班级：{{slides[nowIndex].class}}
        </li>
      </ul>
    </div>
    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
      <div class="slide-img">
        <img :src="slides[secondInedx].src" style="width:80px;height:100px;float:left;margin-top:20px;margin-left:30px;">
      </div>
      <ul class="slide-info" style="float:left;margin-top:40px;margin-left:10px;list-style: none;text-align: left;">
        <li >
          姓名：{{slides[secondInedx].name}}
        </li>
        <li >
          年级：{{slides[secondInedx].grade}}
        </li>
        <li >
          班级：{{slides[secondInedx].class}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'SliderShow',
  props: {
    slides: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      msg: 'This is slidershow!',
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    },
    secondInedx(){
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto(index) {
      this.isShow = false
      setTimeout(
        () => {
          this.isShow = true
          this.nowIndex = index
        }, 
        10
      )
    },
    runInv() {
      this.invId = setInterval(
        () => {
          this.goto(this.nextIndex)
        },
        2000
      )
    },
    clearInv() {
      clearInterval(this.invId)
    }
  },
  mounted() {
    this.runInv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .slide-trans-enter-active {
   transition: all .5s;
 }
 .slide-trans-enter {
   transform: translateX(100%);
 }
 .slide-trans-old-leave {
   transform: translateX(-100%);
 }
 .slide-trans-old-leave-active {
   transition: all .5s;
 } */
 .slide-show{
   /* width:400px;
   height:200px; */
   /* overflow: hidden; */
 }
</style>
