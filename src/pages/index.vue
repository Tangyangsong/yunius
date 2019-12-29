<template>
    <div class="homePage" :style="[{backgroundImage: 'url('+backImage+')'},{backgroundSize:'100% 100%'}]">
        <div class="player-header">
			<div class="header-info">
				<img class="info-img" src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=55e775fc36dbb6fd215be5263924aba6/4b90f603738da9773d2f472cbf51f8198618e3b1.jpg" />
				<div class="info-con">
					<div class="inf-title">
						<span class="tl">{{userInfo.id}}</span>
						<span class="tx">(房间 {{userInfo.roomnumber}})</span>
					</div>
					<div class="inf-botm">
						<div class="bm-lf">{{userInfo.nickname}}</div>
						<div class="bm-rg" @click="scoreModel()">
							<i class="iconfont iconweixin"></i><i class="inte">积分{{userInfo.money}}</i>
						</div>
					</div>
				</div>
			</div>
			<div class="header-notice">
				<i class="iconfont iconzhaobiaogonggao"></i>
                <marquee id="affiche" align="left" behavior="scroll" direction="left" loop="-1" scrollamount="10" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">
这是一个完整的例子{{gameconfig.gonggao}}
</marquee>
			</div>
		</div>
        <!-- 中间内容 -->
        <div class="player-content" >
			<div class="player-body">
				<router-link class="play-item" v-for="(item,index) in gameconfig.gamelist" :key="index" :to="'/game-room?id='+item.id">
					<img :src="require('../assets/images/game_'+item.gtid+'.png')" />
					<div class="pl-title">{{item.name}}</div>
				</router-link>
			</div>
		</div>

        <div class="footer">
			<div class="foot-item" @click="scoreModel()">
				<div class="iconfont iconjurassic_start"></div>
				<div class="">上下分</div>
			</div>
			<div class="foot-item" @click="goPage('/contact-us')">
				<div class="iconfont iconIMliaotian-duihua"></div>
				<div class="">联系客服</div>
			</div>
			<div class="foot-item" @click="goPage('/user-info')">
				<div class="iconfont icongerenzhongxin"></div>
				<div class="">个人中心</div>
			</div>
			<div class="foot-item" @click="outlogin()">
				<i class="iconfont iconexit"></i>
				<div class="">退出登录</div>
			</div>
		</div>
		<!-- 退出提示 -->
		<modal title="" :content='modalContent' @on-cancel="close" @on-confirm='confirm' v-show='showModal'></modal>
		<!-- 上下分 -->
		<up-down-score :showScore="showScore"  @scoreclick="hideScore"></up-down-score>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import upDownScore from '@/components/up-down-score.vue'
export default {
	components: {
		upDownScore
	},
    computed: {
        ...mapState(['backImage','hasLogin','roomCode','userInfo','gameconfig'])
    },
    data() {
        return {
            gettimer:null, //定时器名称
            socketOpen: false,//socket是否开启
            socketMsgQueue:['1','2'],
			modalContent: "确定退出登录?",
      		showModal: false,
			showScore:false
        }
    },
    created(){
        this.getconfig();
    },
    methods: {
        //获取config
        getconfig(){
            let _this = this;
            _this.$ajax.post("/getconfig", {}, function(res){
                if(res.state){
                    _this.$store.state.gameconfig = res.ob;
                    window.console.log(_this.gameconfig);
                    // if(_this.gettimer){
                    //     clearInterval(_this.gettimer);//关闭定时器
                    //     _this.gettimer = setInterval(_this.gettime, 6000);//开启定时器
                    // }else{
                    //     _this.gettimer = setInterval(_this.gettime, 6000);//开启定时器
                    // }
                }else {
					_this.logout();
                	_this.$router.push({path:'/login'});
                }
            }, function(err){
                window.console.log('error'+err);
            });
        },
		//退出按钮
		outlogin(){
			this.showModal = true;
		},
		confirm() {
			this.showModal = false;
			this.logouts();
		},
		close(){
			this.showModal = false;
		},
        //退出登录
        logouts(){
            let _this = this
            // eslint-disable-next-line no-unused-vars
            _this.$ajax.post("/logout", {}, function(res){
                // if(_this.gettimer){
                //     clearInterval(_this.gettimer);//关闭定时器
                // }
                _this.logout();
                _this.$router.push({path:'/login'})
            }, function(err){
                window.console.log('error'+err);
            });
        },
		//显示上下分
		scoreModel(){
			this.showScore = !this.showScore;
		},
		hideScore(){
			this.showScore = false;
		},
        goPage(url) {
            this.$router.push({path:url})
        },
        ...mapMutations(['logout','getroomCode'])
    }
}
</script>
<style scoped>
    .homePage {
		height: 100vh;
		overflow: hidden;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
    }
    .player-header {
		height: 2.8rem;
		box-sizing: border-box;
		background-color: #212121;
		color: #FFFFFF;
	}
	.player-content {
		height: calc(100vh - 4.3rem);
        /* background-color: #3e253a; */
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .header-info {
		height: 2rem;
		background-color: #3e253a;
		padding: 0 .5rem;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
    }
    .header-info .info-img {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: .1rem;
	}
	.header-info .info-con {
		flex: 1;
        margin-left: .2rem;
        text-align: left;
	}
	.header-info .info-con .inf-title {
		overflow: hidden;
	}
	.header-info .info-con .inf-title .tl {
		font-size: 0.4rem;
	}
	.header-info .info-con .inf-title .tx {
		font-size: .3rem;
		margin-left: .2rem;
    }
    .header-info .info-con .inf-botm {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header-info .info-con .inf-botm .bm-rg .inte {
		margin-left: .2rem;
	}
	.header-info .info-con .inf-botm .bm-rg .iconfont{
		font-size: .4rem;
		line-height: 1;
    }
    
	.header-notice {
		padding: 0 .5rem;
		position: relative;
		height: .8rem;
		overflow: hidden;
        background-color: #212121;
        display: flex;
        align-items: center;
    }
    .header-notice .iconfont{
        font-size: .4rem;
	}
	.header-notice marquee{
		width: 100%;
		font-size: .3rem;
	}
    .player-body {
		padding: .2rem 0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}

	.player-body .play-item {
		width: 33.3333333333%;
		text-align: center;
		color: #FFFFFF;
		box-sizing: border-box;
		padding: .2rem 0;
	}

	.player-body .play-item .pl-title {
		font-weight: bold;
		text-shadow: -1px 2px 10px #000;
		font-size: .35rem;
	}

	.player-body .play-item img {
		width: 2rem;
		height: 2rem;
	}
    
    /* 底部样式 */
	.footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1.5rem;
		background: #3e253a;
		background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#3f394f), to(rgba(34, 17, 87, 1)));
	}

	.foot-item {
		flex: 1;
		text-align: center;
		color: #FFFFFF;
    }
    .foot-item .iconfont{
        font-size: .66rem;
        line-height: .4rem;
        position: relative;
        top: .05rem;
        display: inline-block;
    }
	.foot-item:active {
		opacity: 0.6;
	}
</style>