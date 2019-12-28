<template>
	<div class="loginPage" :style="[{backgroundImage: 'url('+backImage+')'},{backgroundSize:'100% 100%'}]">
		<page-head title="qwe1" color="#f9c410" @click="navback()"></page-head>
		<div class="logo-form">
			<div class="logo-lable">
				<div class="logo-name">账 号</div>
				<input class="logo-input" v-model="loginnametxt" type="text" />
			</div>
			<div class="logo-lable">
				<div class="logo-name">密 码</div>
				<input class="logo-input" v-model="loginpwdtxt" type="password" />
			</div>
			<div class="logo-lable verify-code">
				<div class="logo-name">验证码</div>
				<input class="logo-input" type="number" v-model="codetxt" />
				<img @click="getImageUrl()" class="code-image" :src="imageUrl" />
			</div>
			<div class="logo-tishi">
				<!-- <mu-switch class="isswitch" v-model="automaticLogon"></mu-switch> -->
				<tys-switch class="isswitch" v-model="automaticLogon"></tys-switch>
				记住帐户和密码，下次快速登陆.
			</div>
			<div class="logo-button">
				<button class="butn logbtn" @click="loginSubmit()"> 账号密码登录 </button>
			</div>
			<div class="logo-button">
				<button class="butn regbtn" @click="goregister()">注册新的账号</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import pageHead from '@/components/page-head.vue'
	import tysSwitch from '@/plugins/tys-switch/tys-switch.vue'
	import * as serve from "@/serve/service"
	export default {
		components: {
			pageHead,
			tysSwitch
		},
		computed: {
			...mapState(['backImage','roomCode'])
		},
		data() {
			return {
				title: "qwe1",
				imageUrl: "",
				loginnametxt: "",
				codetxt: "",
				loginpwdtxt: "",
				automaticLogon: true,
				loading: false
			}
		},
		created() {
			this.getloginInfo();
		},
		methods: {
			navback(){
				this.$router.push({path:'/set-room'})
			},
			//获取历史账号密码
			getloginInfo(){
				let _this = this;
				if(window.localStorage.getItem('loginInfo')){
					let loginInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
					_this.loginnametxt = loginInfo.loginnametxt;
					_this.loginpwdtxt = loginInfo.loginpwdtxt;
				}
				this.getImageUrl();//获取验证码
			},
			//获取验证码
			getImageUrl(){
				let date = new Date().getTime();
				this.imageUrl = serve.HTTP_HOST + serve.AJAX_URL + '/getVerificationCode?t=' + date;
			},
			switchChange(e) {
				this.automaticLogon = e.detail.value;
			},
			//登录
			loginSubmit(){
				if(this.loginnametxt == ''){
					this.$toastMessage({message: '请输入账号'})
					return;
				}
				if(this.loginpwdtxt == ''){
					this.$toastMessage({message: '请输入密码'})
					return;
				}
				if(this.codetxt == ''){
					this.$toastMessage({message: '请输入验证码'})
					return;
				}
				let params = {
					loginnametxt:this.loginnametxt,
					loginpwdtxt:this.loginpwdtxt,
					codetxt:this.codetxt,
					roomcodetxt:this.roomCode//'vd041545' this.roomCode
				}
				let _this = this;
				_this.$ajax.post("/loginweb", params, function(res){
					if(res.state){
						let loginInfo = {
							loginnametxt:_this.loginnametxt,
							loginpwdtxt:_this.loginpwdtxt,
						}
						if(_this.automaticLogon){
							//记住账号密码
							window.localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
							_this.getUserinfo();//获取个人信息
						}else{
							window.localStorage.removeItem("loginInfo");
						}
					}else {
						_this.$toastMessage({message:res.message})
						_this.getImageUrl()
					}
				}, function(err){
					window.console.log('error'+err);
				});
			},
			//获取个人信息
			getUserinfo () {
				let _this = this;
				_this.$ajax.post("/getuserinfo", {}, function(res){
					// window.console.log(res);
					if(res.state){
						let userInfo = res.ob;
						_this.setUserInfo(userInfo);//改变登录状态
						_this.$router.push({path:'/index'})
					}
				}, function(err){
					window.console.log('error'+err);
				});
			},
			//跳转注册
			goregister() {
				this.$router.push({path:'/register'})
			},
			...mapMutations(['setUserInfo'])
		}
	}
</script>

<style scoped>
.loginPage {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.logo-form {
  padding: 4rem 1rem 0;
}
.logo-lable {
  position: relative;
  padding-left: 2.2rem;
  padding-right: 0.2rem;
  background-color: rgba(125, 119, 119, 0.2);
  margin: .2rem 0;
}
.logo-tishi {
  margin: .3rem 0 .2rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 0.35rem;
}
.logo-tishi .isswitch {
  margin-right: 10px;
}
.logo-button { 
  margin-bottom: .25rem;
}
.logo-button .butn {
  font-size: 0.4rem;
  width: 100%;
  padding: .5rem 0;
  border-radius: 0.1rem;
	color: #fff;
	padding: .2rem .4rem;
	border-radius: .1rem;
}
.logo-button .butn.logbtn{
    background-color: #F9C410;
}
.logo-button .butn.regbtn{
	background-color: #e64340;
}
.logo-name {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  width: 2rem;
  text-align: right;
  color: rgba(248, 196, 21, 0.7);
}
.logo-input {
  font-size: 0.4rem;
  padding: 0.2rem 0;
  width: 100%;
  border-radius: 4px;
  color: #fbfafd;
  background-color: transparent;
}
.logo-lable.verify-code {
  width: calc(100% - 2.8rem);
}
.code-image {
  position: absolute;
  right: -2.8rem;
  transform: translate(0, -50%);
  top: 50%;
  width: 2.5rem;
  height: 100%;
}
</style>
