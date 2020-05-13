<template>
  <div>
    <div style="color:green;font-size:20px">{{msg}}</div>
    <router-link :to="{path:'/test/people1'}">here</router-link>
    <hr>
    <div style="background-color:green;width:500px;height:400px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg:"Just for testing!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
