<template>
  <div id="app">
    <router-view />
    <input type="text" placeholder="账号" v-model="loginnametxt">
    <input type="text" placeholder="密码" v-model="loginpwdtxt">
    <input type="text" placeholder="验证码" v-model="codetxt">
    <img :src="imageUrl" alt="">
    <div @click="loginSubmit()">登录</div>
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
    this.getImageUrl()
  },
  methods: {
    //获取验证码
			getImageUrl(){
				let date = new Date().getTime();
				this.imageUrl = 'http://39.99.243.197:801/cppc3/web/api/getVerificationCode?t=' + date;
			},
    loginSubmit(){
      let params = {
					loginnametxt:this.loginnametxt,
					loginpwdtxt:this.loginpwdtxt,
					codetxt:this.codetxt,
					roomcodetxt:'vd041545'//'ow914147' this.roomCode
        }
      this.$ajax.post("/loginweb", params, function(){
        window.console.log('success');
      }, function(){
        window.console.log('error');
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
