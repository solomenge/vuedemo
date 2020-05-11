<template>
  <div id="app">
  <top></top>
  <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/layouts/Top.vue'
// import Welcome from './components/Welcome.vue'
export default {
  name: 'App',
  components: {
      Top,
      // Welcome
    }
}

</script>

<style lang="less">
  *{margin: 0px;padding: 0px;border: 0px}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    //background-color: #f5f4f4;
    background:url("./assets/backgroundimg.png") fixed no-repeat;
    background-size:100%
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
