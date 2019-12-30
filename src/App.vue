<template>
  <div id="app">
    <!-- name="fade" mode="in-out" -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{

    }
  },
  created(){
    
  },
  methods: {
    
  }
}
</script>

<style>
@import '//at.alicdn.com/t/font_1565819_m1qyum5nkyo.css';
@import "./assets/css/style.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
