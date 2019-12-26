<template>
	<div class="loginPage" :style="[{backgroundImage: 'url('+backImage+')'},{backgroundSize:'100% 100%'}]">
		<page-head :title="title" @click="navback()"></page-head>
		<div class="logo-form">
			<div class="logo-lable">
				<div class="logo-name">账 号</div>
				<input class="logo-input" v-model="loginnametxt" type="text" />
			</div>
			<div class="logo-lable">
				<div class="logo-name">密 码</div>
				<input class="logo-input" v-model="loginpwdtxt" password type="text" />
			</div>
			<div class="logo-lable verify-code">
				<div class="logo-name">验证码</div>
				<input class="logo-input" type="number" v-model="codetxt" />
				<image @click="getImageUrl()" class="code-image" :src="imageUrl"></image>
			</div>
			<div class="logo-tishi">
				<!-- <switch style="transform:scale(0.7)" color="#f9c410" :checked="automaticLogon" @change="switchChange" /> -->
				
				记住帐户和密码，下次快速登陆.
			</div>
			<div class="logo-button">
				<button class="butn" type="warn" @click="loginSubmit()" :loading="loading">账号密码登录</button>
			</div>
			<div class="logo-button">
				<button class="butn" type="green" @click="goregister()">注册新的账号</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex';
	import serve from '@/serve/service.js';
	export default {
		computed: {
			...mapState(['backImage'])
		},
		data() {
			return {
				title:'qwe1',
				imageUrl:'',
				loginnametxt:'',
				codetxt:'',
				loginpwdtxt:'',
				automaticLogon:true,
				loading:false
			}
		},
		onLoad() {
			this.getloginInfo();
		},
		methods: {
			navback(){
				this.$router.push({path:'/set-room'})
			},
			//获取历史账号密码
			getloginInfo(){
				//let _this = this;
				// uni.getStorage({
				//     key: 'loginInfo',
				//     success: function (res) {
				// 		_this.loginnametxt = res.data.loginnametxt;
				// 		_this.loginpwdtxt = res.data.loginpwdtxt;
				//     }
				// });
				this.getImageUrl();
			},
			//获取验证码
			getImageUrl(){
				let date = new Date().getTime();
				// let params = {
				// 	t:new Date().getTime()
				// }
				// let data = await this.$api.json('/getVerificationCode',params);
				
				this.imageUrl = serve.HTTP_HOST + serve.AJAX_URL + '/getVerificationCode?t=' + date;
			},
			switchChange(e) {
				this.automaticLogon = e.detail.value;
			},
			async loginSubmit(e){
				if(!this.loginnametxt){
					this.$api.msg('请输入登录名');
					return;
				}
				if(!this.loginpwdtxt){
					this.$api.msg('请输入密码');
					return;
				}
				if(!this.codetxt){
					this.$api.msg('请输入验证码');
					return;
				}
				this.loading = true;
				let params = {
					loginnametxt:this.loginnametxt,
					loginpwdtxt:this.loginpwdtxt,
					codetxt:this.codetxt,
					roomcodetxt:'vd041545'//'ow914147' this.roomCode
				}
				try{
					let data = await this.$api.json('/loginweb',params,'post');
					if(data.state){
						let _this = this;
						_this.getUserinfo();//获取个人信息
						let loginInfo = {
							loginnametxt:_this.loginnametxt,
							loginpwdtxt:_this.loginpwdtxt,
						}
						if(_this.automaticLogon){
							//记住账号密码
							uni.setStorage({
								key: 'loginInfo',
								data: loginInfo,
								success: function (res) {
									
								}
							});
						}else{
							//删除账号密码
							uni.removeStorage({
								key: 'loginInfo'
							})
						}
						uni.reLaunch({
							url: '/pages/index/index'
						});
					}else{
						this.$api.msg(data.message,5000);
						this.getImageUrl();//更新验证码
					}
					
				}catch(e){
					//TODO handle the exception
				}
				this.loading = false;
			},
			
			async getUserinfo () {
				let data = await this.$api.json('/getuserinfo',{},);
				let userInfo = data.ob;
				console.log(userInfo)
				let _this = this;
				uni.setStorage({
				    key: 'userInfo',
					data: userInfo,
				    success: function (res) {
						_this.login(userInfo);//改变登录状态
				    }
				});
			},
			//跳转注册
			goregister() {
				uni.reLaunch({
					url: '/pages/register/register'
				});
			},
			...mapMutations(['login']),
			...mapActions(['setUserInfo'])
		}
	}
</script>

<style lang="scss">
	.loginPage{
		height: 100vh;
		overflow: hidden;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
		.logo-form{
			padding: 200upx 100upx 0;
			.logo-lable{
				position: relative;
				padding-left:130upx;
				padding-right: 20upx;
				background-color: rgba(125,119,119,.2);
				margin: 20upx 0;
				.logo-name{
					position: absolute;
					top: 50%;
					transform: translate(0, -50%);
					left: 0;
					width: 100upx;
					text-align: right;
					color: rgba(248, 196, 21, .7);
				}
				.logo-input{
					font-size: 28upx;
					padding:20upx 0;
					width: 100%;
					border-radius: 4px;
					color: #fbfafd;
				}
				&.verify-code{
					width: calc(100% - 400upx);
				}
				.code-image{
					position: absolute;
					right: -250upx;
					transform: translate(0, -50%);
					top: 50%;
					width: 200upx;
					height: 75upx;
				}
			}
			.logo-tishi{
				margin: 30upx 0 10upx;
				color: #FFFFFF;
			}
			.logo-button{
				margin-bottom: 20upx;
				.butn{
					font-size: 30upx;
				}
			}
		}
	}
</style>
