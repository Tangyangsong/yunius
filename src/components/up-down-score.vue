<template>
	<div class="downModel" v-if="showScore">
		<div class="scoreModel" :class="showScore?'showScore':''">
			<div class="uni-score">
				<div class="uni-score-title">
					<div class="lftitl"><span>￥上分、下分</span></div>
					<i class="iconfont iconguanbi" @click="hideScore()"></i>
				</div>
				<div class="uni-score-content">
					<div class="uni-score-content-info">
						<img class="uni-score-content-info-image" src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=55e775fc36dbb6fd215be5263924aba6/4b90f603738da9773d2f472cbf51f8198618e3b1.jpg"/>
						<div class="uni-score-content-info-box">
							<div class="">1315</div>
							<div class="jifen">您剩余的积分0</div>
						</div>
					</div>
					<div class="uni-score-content-from">
						<div class="uni-score-content-from-label">
							<div class="label-text">申请积分</div>
							<input class="label-input" type="number" @input="inputValve" maxlength="10" placeholder="请输入上下分的值" />
						</div>
						<div class="uni-score-content-from-label">
							<div class="label-text">申请留言</div>
							<input class="label-input" type="text" @input="inputTextarea" placeholder="请输入您的留言" />
						</div>
					</div>
				</div>
				<div class="uni-score-btn">
					<!-- <mu-button class="butn" color="primary" @click="loginSubmit()"> 账号密码登录 </mu-button> -->
					<button class="score-button" @click="upScore()">上分</button>
					<button class="score-button" @click="lowerScore()">下分</button>
				</div>
			</div>
		</div>
		<div class="modelBack" :class="showScore?'showScore':''"></div>
	</div>
</template>
<script>
export default {
	props: {
		showScore:{
			type: Boolean,
      		default: false
		}
	},
    data() {
        return{

        }
    },
    methods: {
        //关闭弹出层
        hideScore(type) {
            this.$emit('scoreclick', type);
            // this.$refs[type].close()
        },
        //上下分数
        inputValve(e) {
            console.log(e.detail.value);
        },
        //上下分留言
        inputTextarea(e) {
            console.log(e.detail.value);
        },
        //上分
        upScore() {
            console.log('上分');
        },
        //下分
        lowerScore() {
            console.log('下分');
        }
    }
    
}
</script>

<style>
/* 底部上下分 */
.downModel{
	position: fixed;
    top: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    overflow: hidden;
}
.modelBack{
	position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: rgba(0, 0, 0, .4);
    opacity: 0;
	transition: all .3s;
}
.modelBack.showScore{
	opacity: 1;
}
.scoreModel{
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -100;
	background: #FFFFFF;
	transition: all .3s;
	opacity: 0;
	transform: scale(0);
	overflow: hidden;
}
.scoreModel.showScore{
	z-index: 100;
	opacity: 1;
	transform: scale(1);
}
.uni-score {
	background: #fff;
	padding: 0.1rem 0.2rem;
}

.uni-score-title {
	padding: 0.1rem 0;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
}

.uni-score-title .lftitl>span{
	font-size: .45rem;
	font-weight: bold;
}
.uni-score-title .iconfont{
	font-size: 0.6rem;
	color: #999;
}

.uni-score-content {
	display: flex;
	flex-wrap: wrap;
}

.uni-score-content-info {
	padding: 0.1rem 0;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	border-top: 1px solid #E0E0E0;
	border-bottom: 1px solid #E0E0E0;
	width: 100%;
}

.uni-score-content-info-image {
	width: 1.5rem;
	height: 1.5rem;
	border-radius: .1rem;
}

.uni-score-content-info-box {
	flex: 1;
	margin-left: 0.3rem;
}
.uni-score-content-info-box .jifen{
	font-size: .35rem;
}
.uni-score-content-from {
	width: 100%;
}

.uni-score-content-from-label {
	position: relative;
	display: flex;
	align-items: center;
	margin: .2rem 0;
}

.uni-score-content-from-label .label-text {
	text-align: right;
	box-sizing: border-box;
	width: 2rem;
	padding-right: 0.4rem;
	font-size: 0.4rem;
}

.uni-score-content-from-label .label-input {
	flex: 1;
	font-size: .4rem;
}

.uni-score-btn {
	padding: .4rem;
	display: flex;
	justify-content: space-between;
	align-self: center;
}
.uni-score-btn .score-button {
	width: 40%;
	font-size: .4rem;
	padding: .2rem 0;
	border-radius: 0.1rem;
	color: #FFFFFF;
}
.uni-score-btn .score-button:first-child{
	background-color: #e64340;
}
.uni-score-btn .score-button:last-child{
	background-color: #4caf50;
}
</style>
