<template>
  <div>
    <div class="welcome"> {{welcome}} </div>
    <router-link :to="{path:'/big'}">
    <button class="button big"> {{big}} </button>
    </router-link>
    <router-link :to="{path:'/small'}">
    <button class="button small"> {{small}} </button>
    </router-link>
    <router-link :to="{path:'/listshow'}">
    <button class="button listshow"> {{listshow}} </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      welcome: 'Welcome',
      big:'Big',
      small:'Small',
      listshow: 'ListShow'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome {
    text-align: center;
    color: red;
    margin-top: 150px;
    font-size:80px
  }
  .button {
  margin-top: 150px;
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  width:150px;
  cursor: pointer;
  text-align: center;   
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
