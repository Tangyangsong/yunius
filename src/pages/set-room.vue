<template>
	<view class="roomPage">
		<view class="fieldset">
			<view class="title">请输入房间号码</view>
			<block v-for="(item,index) in inputList" :key="index">
				<input class="room-input" v-model="item.val" @input="nextFocus($event,index)" type="number" maxlength="1" />
			</block>
		</view>
		<button class="room-btn" type="warn" @tap="getinto">进入房间</button>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
			}
		},
		methods: {
			nextFocus(el,index){
				//console.log(el)
				console.log(index)
				//this.inputList[index].val = el.detail.value;
				//console.log(this.inputList[index].val)
				// if(index==5){
				// 	uni.hideKeyboard()//收起键盘
				// }
			},
			getinto() {
				let rest = '';
				this.inputList.forEach((item)=>{
					if(!item.val){
						this.$api.msg('请填写完整的房间号',3000);
						return
					}else{
						rest += item.val;
					}
				})
				if(rest.length===6){
					this.getroom(rest);
				}
				
			},
			getroom(room){
				//console.log(room);
				let _this = this;
				if(room){
					uni.setStorage({
					    key: 'room',
					    data: room,
					    success: function () {
							_this.getroomCode(room);//给房间号赋值
							_this.inputList.forEach((item)=>{
								item.val = '';
							})
					        uni.navigateTo({
					        	url: '/pages/login/login'
					        });
					    }
					});
				}
			},
			
			...mapMutations(['getroomCode'])
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #3E253A;
	}
	.roomPage{
		padding: 200upx 40upx 0;
		.fieldset{
			text-align: center;
			padding: 100upx 40upx;
			border: 1upx solid rgba(255,253,17,.55);
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			margin-bottom: 100upx;
			.title{
				font-size: 30upx;
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%, -50%);
				padding: 0 20px;
				background-color: #3E253A;
				color: rgba(255,253,17,.55);
			}
			.room-input{
				background-color: #FFFFFF;
				border-radius: 10upx;
				width: 80upx;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
			}
		}
		.room-btn{
			font-size: 30upx;
		}
	}
</style>
