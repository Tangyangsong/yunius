<template>
  <div id="app">
    <!-- name="fade" mode="in-out" -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
import * as serve from "@/serve/service"
export default {
  name: 'app',
  data(){
    return{

    }
  },
  created(){
    this.$websocket.dispatch('WEBSOCKET_INIT',"ws:" + serve.WEBSOCK_URL);
  },
  methods: {
    
  },
  mounted: function () {
		document.addEventListener('visibilitychange', function() {
      // 页面变为不可见时触发 
      if (document.visibilityState == 'hidden') {
        // document.title = '离开';
        window.console.log('离开')
      } 
      // 页面变为可见时触发
      if (document.visibilityState == 'visible') {
        // document.title = '回来';
        window.console.log('回来')
      } 
		});
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
