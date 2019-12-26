<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data(){
    return{
      imageUrl:'',
      loginnametxt:'',
      loginpwdtxt:'',
      codetxt:''
    }
  },
  created(){
  
  },
  methods: {
    
  }
}
</script>

<style>
@import '//at.alicdn.com/t/font_1565819_9g72bb0oget.css';
@import "./assets/css/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
