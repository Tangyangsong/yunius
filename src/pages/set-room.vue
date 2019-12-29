<template>
	<div class="roomPage">
		<page-head title="加入房间" color="#f9c410" :leftIcon="false"  @click="navback()"></page-head>
		<div class="fieldset">
			<div class="title" >请输入房间号码</div>
			<div v-for="(item,index) in inputList" :key="index">
				<!-- @input="nextFocus($event,index)" -->
				<input class="room-input" v-model="item.val" @keyup="nextFocus($event,index)" type="text" maxlength="1"  @keydown="changeValue(index)" />
			</div>
		</div>
		<button class="room-btn"  @click="getinto()">进入房间</button>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';
	import pageHead from '@/components/page-head.vue'
	export default {
		components: {
			pageHead
		},
		data() {
			return {
				inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
			}
		},
		methods: {
			nextFocus(el,index){
				// window.console.log(el)
				// window.console.log(index)
				var dom = document.getElementsByClassName("room-input"),
                    currInput = dom[index],
                    nextInput = dom[index + 1],
                    lastInput = dom[index - 1];
                /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
                if (el.keyCode != 8) {
                    if (index < (this.inputList.length - 1)) {
                        nextInput.focus();
                    } else {
                        currInput.blur();
                    }
                }else{
                    if (index !=0) {
                        lastInput.focus();
                    }
                }
			},
			getinto() {
				let rest = '';
				this.inputList.forEach((item)=>{
					//window.console.log(item)
					if(!item.val){
						this.$toastMessage({message: '请填写完整的房间号'})
						return
					}else{
						rest += item.val;
					}
				})
				// window.console.log(rest.length)
				if(rest.length===8){
					this.getroom(rest);
				}
			},
			getroom(room){
				//console.log(room);
				let _this = this;
				if(room){
					window.localStorage.setItem('room', JSON.stringify(room));
					_this.getroomCode(room);//给房间号赋值
					_this.inputList.forEach((item)=>{
						item.val = '';
					})
					this.$router.push({path:'/login'})
				}
			},
			changeValue(index){
				// console.log(index);
				this.inputList[index].val = "";
			},
			
			...mapMutations(['getroomCode'])
		}
	}
</script>

<style scoped>
.roomPage{
	height: 100vh;
	overflow-x: hidden;
   overflow-y: scroll;
   -webkit-overflow-scrolling: touch;
	background-color: #3E253A;
	padding: 4rem .8rem 0;
}
.fieldset{
	text-align: center;
    padding: 2rem .5rem;
	border: 1px solid rgba(255,253,17,.55);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin-bottom: 1rem;
}
.fieldset .title{
	font-size: .4rem;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 0 1em;
	background-color: #3E253A;
	color: rgba(255,253,17,.55);
}
.fieldset .room-input{
	background-color: #FFFFFF;
	border-radius: 5px;
	width: 0.8rem;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	font-size: .35rem;
}
.room-btn{
	color: #FFFFFF;
	font-size: 0.4rem;
	width: 100%;
	padding: .2rem 0;
	border-radius: 0.1rem;
	background-color: #e64340;
}
</style>
