<template>
	<div class="loginPage" :style="[{backgroundImage: 'url('+backImage+')'},{backgroundSize:'100% 100%'}]">
		<page-head title="qwe1" @click="navback()"></page-head>
        <div class="logo-form">
            <div class="logo-lable">
				<div class="logo-name">游戏昵称</div>
				<input class="logo-input" v-model="nicknametxt" type="text" />
			</div>
			<div class="logo-lable">
				<div class="logo-name">账 号</div>
				<input class="logo-input" v-model="loginnametxt" type="text" />
			</div>
			<div class="logo-lable">
				<div class="logo-name">密 码</div>
				<input class="logo-input" v-model="loginpwdtxt" type="password" />
			</div>
            <div class="logo-lable">
				<div class="logo-name">确认密码</div>
				<input class="logo-input" v-model="loginpwdtxts" type="password" />
			</div>
			<div class="logo-lable verify-code">
				<div class="logo-name">验证码</div>
				<input class="logo-input" type="number" v-model="codetxt" />
				<img @click="getImageUrl()" class="code-image" :src="imageUrl" />
			</div>
			<div class="logo-button">
				<mu-button class="butn" color="primary" @click="registerSubmit()">立即注册</mu-button>
			</div>
			<div class="logo-button">
				<mu-button class="butn" color="warning" @click="navback()">返回登录</mu-button>
			</div>
		</div>
        <modal title="" :content='modalContent' :showCancle='false' @on-confirm='confirm' v-show='showModal'>
        </modal>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	import pageHead from '@/components/page-head.vue'
	import * as serve from "@/serve/service"
	export default {
		components: {
			pageHead
		},
		computed: {
			...mapState(['backImage','roomCode'])
		},
		data() {
			return {
				title: "qwe1",
                imageUrl: "",
                nicknametxt:'',
				loginnametxt: "",
                loginpwdtxt: "",
                loginpwdtxts: "",
				codetxt: "",
                modalContent: '注册成功',
                showModal: false,
			}
		},
		created() {
			this.getImageUrl();
		},
		methods: {
			navback(){
                this.$router.go(-1)
            },
            //确认注册
            confirm(){
                this.showModal = false;
                this.$router.push({path:'/login'})
            },
			//获取验证码
			getImageUrl(){
				let date = new Date().getTime();
				this.imageUrl = serve.HTTP_HOST + serve.AJAX_URL + '/getVerificationCode?t=' + date;
			},
			//注册
			registerSubmit(){
                if(this.nicknametxt == ''){
					this.$toastMessage({message: '请输入游戏昵称'})
					return;
				}
				if(this.loginnametxt == ''){
					this.$toastMessage({message: '请输入账号'})
					return;
				}
				if(this.loginpwdtxt == ''){
					this.$toastMessage({message: '请输入密码'})
					return;
                }
                if(this.loginpwdtxt !== this.loginpwdtxts){
					this.$toastMessage({message: '两次密码不一致'})
					return;
				}
				if(this.codetxt == ''){
					this.$toastMessage({message: '请输入验证码'})
					return;
                }
				let params = {
                    nicknametxt:this.nicknametxt,
					loginnametxt:this.loginnametxt,
					loginpwdtxt:this.loginpwdtxt,
					codetxt:this.codetxt,
					roomcodetxt:this.roomCode//'vd041545' this.roomCode
				}
				let _this = this;
				_this.$ajax.post("/register", params, function(res){
					if(res.state){
                        _this.showModal = true;//注册成功
					}else {
						_this.$toastMessage({message:res.message})
						_this.getImageUrl()
					}
				}, function(err){
					window.console.log('error'+err);
				});
			}
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
  font-size: 0.4rem;
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
