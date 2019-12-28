<template>
    <div class="userPage">
        <page-head title="个人中心" backColor="rgb(62, 37, 58)" color="#ffffff" @click="navback()"></page-head>
        <div class="info-header">
			<img class="info-img" src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=55e775fc36dbb6fd215be5263924aba6/4b90f603738da9773d2f472cbf51f8198618e3b1.jpg"/>
			<div class="info-con">
				<div class="info-tlite">{{userInfo.nickname}}</div>
				<div class="info-text">房间ID：{{userInfo.roomnumber}}</div>
			</div>
		</div>
        <div class="user-content">
			<div class="user-con-item">
				<div class="user-con-item-tl">当前积分</div>
				<div class="user-con-item-tx">{{userInfo.money}}</div>
			</div>
			<div class="user-con-item">
				<div class="user-con-item-tl">今日输赢</div>
				<div class="user-con-item-tx">{{userInfo.todaymoney}}</div>
			</div>
		</div>
        <div class="user-list">
            <div class="user-item" @click="goPage('/modif-info')">
                <div class="user-item__icon">
                    <i class="iconfont iconbianji"></i>
                </div>
                <div class="user-item__content">
                    <div class="tlite">修改用户资料</div>
                </div>
                <div class="user-item__extra">
                    <i class="iconfont iconjiantou"></i>
                </div>
            </div>
            <div class="user-item" @click="goPage('/score-histories')">
                <div class="user-item__icon">
                    <i class="iconfont iconjiahao"></i>
                </div>
                <div class="user-item__content">
                    <div class="tlite">上下分记录</div>
                </div>
                <div class="user-item__extra">
                    <i class="iconfont iconjiantou"></i>
                </div>
            </div>
            <div class="user-item">
                <div class="user-item__icon">
                    <i class="iconfont iconbianzu"></i>
                </div>
                <div class="user-item__content">
                    <div class="tlite">开彩结算记录</div>
                </div>
                <div class="user-item__extra">
                    <i class="iconfont iconjiantou"></i>
                </div>
            </div>
            <div class="user-item">
                <div class="user-item__icon">
                    <i class="iconfont icontuikuanshouhou"></i>
                </div>
                <div class="user-item__content">
                    <div class="tlite">申请反水</div>
                </div>
                <div class="user-item__extra">
                    <i class="iconfont iconjiantou"></i>
                </div>
            </div>
            <div class="user-item hide-arrow">
                <div class="user-item__icon">
                    <i class="iconfont iconkeyboard_icon"></i>
                </div>
                <div class="user-item__content">
                    <div class="tlite">键盘声音</div>
                </div>
                <div class="user-item__extra">
                    <tys-switch v-model="switchChecked"></tys-switch>
                </div>
            </div>

        </div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
import pageHead from '@/components/page-head.vue'
import tysSwitch from '@/plugins/tys-switch/tys-switch.vue'
export default {
    components: {
        pageHead,
        tysSwitch
    },
    computed: {
        ...mapState(['userInfo','keyboardSound'])
    },
    watch: {
        'switchChecked': function(newVal){//监听开关键盘
            this.$store.state.keyboardSound =  newVal;
        }
    },
    data() {
        return {
            switchChecked:false
        }
    },
    created(){
        this.switchChecked = this.keyboardSound;//设置键盘开关
    },
    methods:{
        navback(){
            this.$router.go(-1);//返回上一层
        },
        //开关键盘声音
        switchChange(e) {
            this.$store.state.keyboardSound = e.value;
        },
        goPage(url) {
            this.$router.push({path:url})
        }
    }
    
}
</script>
<style scoped>
    .userPage{
        height: 100vh;
        padding-top: 1rem;
        background-color: #F4F5F6;
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .info-header {
		padding: .4rem;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
    }
    .info-header .info-img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: .1rem;
    }
    .info-header .info-con {
		flex: 1;
		margin-left: .3rem;
	}
	.info-header .info-con .info-tlite {
		font-size: .4rem;
		font-weight: bold;
	}
	.info-header .info-con .info-text {
		color: #999999;
		font-size: .35rem;
		margin-top: .1rem;
	}
	.user-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: .2rem;
		position: relative;
	}
	.user-content:before {
		content: "";
		position: absolute;
		top: 30%;
		left: 50%;
		width: 1px;
		height: 40%;
		background-color: #999999;
	}
	.user-con-item {
		text-align: center;
	}
	.user-con-item-tl {
		color: #999999;
    }
    .user-list{
        background-color: #FFFFFF;
    }
    .user-list::before{
        position: absolute;
        z-index: 10;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #e5e5e5;
    }
    .user-item{
        padding: 0.3rem 0.4rem;
        width: 100%;
        font-size: .4rem;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .user-item::after{
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 0;
        left: .4rem;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #e5e5e5;
    }
    .user-item:active{
        background-color: #EEEEEE;
    }
    .user-item.hide-arrow:active{
        background-color: transparent;
    }
    .user-item__icon{
        margin-right: .2rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .user-item__icon .iconfont{
        font-size: .6rem;
        color: #f75549;
        line-height: 1;
    }
    .user-item__content{
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #3b4144;
    }
    .user-item__content .tlite{
        font-size: .4rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: inherit;
        line-height: 1.5;
        overflow: hidden;
    }
    .user-item__extra{
        width: 25%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .user-item__extra .iconfont{
        font-size: .4rem;
        color: #999999;
        line-height: 1;
    }
</style>
