<template>
    <div class="gamePage" :style="[{backgroundImage: 'url('+backImage+')'},{backgroundSize:'100% 100%'}]">
        <!-- 头部 -->
		<div class="game-header" :style="{backgroundImage: 'url('+headerImage+')'}" @touchstart="hideDrawer">
			<div class="head-top">
				<div class="head-top-left">
                    <i class="iconfont iconfanhui" @click="backPage()"></i>
					<div class="balance">余额 <span>0</span> </div>
				</div>
				<div class="head-top-right">在线31人</div>
			</div>
			<div class="head-info">
				<div class="info-con-top">
					<div class="info-left">
						<img class="info-img" :src="require('../assets/images/game_1.png')" />
						<div class="info-text">
							<div class="name">北京赛车</div>
							<div class="periods">742640 期结果</div>
						</div>
					</div>
					<div class="info-right">
						<div class="right-one">
							<div class="periods"><span>742642</span>期</div>
							<div class="text">距封盘</div>
						</div>
						<div class="right-two">05:08</div>
						<div class="right-three">
                            <i class="iconfont iconshipin"></i>
						</div>
					</div>
				</div>
				<div class="info-con-botm">
					<div class="botm-left">
						<div class="botm-con draw_code_10">
							<div class="draw_code_no dn-1">1</div>
							<div class="draw_code_no dn-2">2</div>
							<div class="draw_code_no dn-3">3</div>
							<div class="draw_code_no dn-4">4</div>
							<div class="draw_code_no dn-5">5</div>
							<div class="draw_code_no dn-6">6</div>
							<div class="draw_code_no dn-7">7</div>
							<div class="draw_code_no dn-8">8</div>
							<div class="draw_code_no dn-9">9</div>
							<div class="draw_code_no dn-10">10</div>
						</div>
						<div class="botm-con draw_code_10"></div>
					</div>
					<div class="botm-right">
						<div class="rest">冠亞和</div>
						<div class="add-info">
							<span class="heise">18</span>
							<span class="red">大</span>
							<span class="red">双</span>
						</div>
                        <i class="iconfont" @click="toggleHist()" :class="showhist?'iconshangjiantou':'iconxiajiantou'"></i>
					</div>
				</div>
                <!-- 弹出开奖记录 -->
				<div class="head-history" :class="showhist?'showhist':''">
					<div class="history-content" >
						<div class="hist-list">
							<div class="hist-item">
								<div class="periods">742745</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742746</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742747</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742748</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742749</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
                            <div class="hist-item">
								<div class="periods">742745</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742746</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742747</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742748</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
							<div class="hist-item">
								<div class="periods">742749</div>
								<div class="number">
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-1">1</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-2">2</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-3">3</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-4">4</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-5">5</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-6">6</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-7">7</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-8">8</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-9">9</div></div>
									<div class="nmi-tem draw_code_10"><div class="draw_code_no dn-10">10</div></div>
								</div>
								<div class="result"><span>9</span> <span class="bule">小</span> <span class="bule">单</span></div>
							</div>
						</div>
					</div>
					<div class="hist-top-tab">
						<div class="periods">期数</div>
						<div class="number">
							<div class="nmi-tem">一</div>
							<div class="nmi-tem">二</div>
							<div class="nmi-tem">三</div>
							<div class="nmi-tem">四</div>
							<div class="nmi-tem">五</div>
							<div class="nmi-tem">六</div>
							<div class="nmi-tem">七</div>
							<div class="nmi-tem">八</div>
							<div class="nmi-tem">九</div>
							<div class="nmi-tem">十</div>
						</div>
						<div class="result">冠亚和</div>
					</div>
				</div>
			</div>
		</div>
        <div class="game-content game-hall">
            <scroller :on-refresh="refresh"  ref="myscroller" refreshText="加载更多">
               <!-- :on-infinite="infinite" -->
                <div class="row" v-for="(row,index) in msgList" :key="index" :id="'msg'+row.id">
					<!-- 别人的消息 -->
					<div v-if="row.type=='system'">
						<div class="other">
							<!-- 左-头像 -->
							<div class="left">
								<img src="../assets/images/header.png" />
							</div>
							<!-- 右-用户名称-时间-消息 -->
							<div class="right">
								<div class="username">
									<div class="name">{{row.username}}</div> <div class="time">{{row.time}}</div>
								</div>
								<!-- 文字消息 -->
								<div class="bubble">
									<div v-html="row.content"></div>
								</div>
							</div>
						</div>
					</div>
					<!-- 我的的消息 -->
					<div v-if="row.type=='user'">
						<div class="my">
							<!-- 左-消息 -->
							<div class="left">
								<div class="username">
									<div class="name">{{row.username}}</div> <div class="time">{{row.time}}</div>
								</div>
								<!-- 文字消息 -->
								<div class="bubble">
									<div v-html="row.content"></div>
								</div>
							</div>
							<!-- 右-头像 -->
							<div class="right">
								<img src="../assets/images/header.png" />
							</div>
						</div>
					</div>
				</div>
                <div id="loves">65465</div>
            </scroller>
        </div>
        <div class="foot-box">

        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
// import myScroll from "@/components/scroll.vue";
export default {
    components: {
        // myScroll
    },
    computed: {
        ...mapState(['backImage'])
    },
    data() {
        return {
            headerImage:require('../assets/images/game-room-header.png'),
            showhist:false,//开奖记录
            listdata:[],
            noDate:false,//这是一个判断是否加载的开关
            isHistoryLoading:false,//避免重复加载
            msgList:[],
        }
    },
    created(){
        this.getMsgList();
    },
    methods: {
        backPage(){
            this.$router.go(-1);//返回上一层
        },
        //隐藏显示开奖记录
        toggleHist() {
            this.showhist = !this.showhist;
        },
        hideDrawer(){
            
        },
        //加载初始页面消息
        getMsgList(){
            let list = [
                {type:"user",id:1,content:"欢迎进入HM-chat聊天室",time:"12:56",username:"张三"},
                {type:"system",id:2,content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。",time:"14:56",username:"李四"},
                {type:"system",id:3,content:"<p>★★★★★★封盘★★★★★★</p><p>━━━第742688期━━━</p><p>★请核对以下竞猜记录★</p><p>竞猜总额 0</p><p>★★不在核对清单上为无效★★</p>",time:"12:56",username:"张三"},
                {type:"user",id:4,content:"欢迎进入HM-chat聊天室",time:"12:56",username:"张三"},
                {type:"system",id:5,content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。",time:"14:56",username:"李四"},
                {type:"system",id:6,content:"<p>★★★★★★封盘★★★★★★</p><p>━━━第742688期━━━</p><p>★请核对以下竞猜记录★</p><p>竞猜总额 0</p><p>★★不在核对清单上为无效★★</p>",time:"12:56",username:"张三"},
                {type:"user",id:7,content:"欢迎进入HM-chat聊天室",time:"12:56",username:"张三"},
                {type:"system",id:8,content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。",time:"14:56",username:"李四"},
                {type:"system",id:9,content:"<p>★★★★★★封盘★★★★★★</p><p>━━━第742688期━━━</p><p>★请核对以下竞猜记录★</p><p>竞猜总额 0</p><p>★★不在核对清单上为无效★★</p>",time:"12:56",username:"张三"},
                {type:"user",id:10,content:"欢迎进入HM-chat聊天室",time:"12:56",username:"张三"},
           ]
            this.msgList = list;
            // 滚动到底部
            this.$nextTick(function() {
                let _this = this;
                setTimeout(()=>{
                    _this.$refs.myscroller.scrollTo(0, 9999, true);
                },100)
            });
            
        }, 
        //触发滑动到顶部(加载历史信息记录)
        refresh(){
            if(this.isHistoryLoading){
				return ;
			}
            this.isHistoryLoading = true;//参数作为进入请求标识，防止重复请求
            let Viewid = this.msgList[0].id;//记住第一个信息ID
            setTimeout(()=>{
                let list = [
                    {type:"user",id:1,time:"12:56",username:"大黑哥",content:"111为什么温度会相差那么大？"},
                    {type:"system",id:2,time:"12:57",username:"售后客服008",content:"222这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"},
                    {type:"user",id:3,time:"12:59",username:"售后客服008",content:"333参数作为进入请求标识，防止重复请求"},
                    {type:"system",id:4,time:"13:05",username:"大黑哥",content:"444记住第一个信息记住第一个信息"},
                    {type:"user",id:5,time:"12:56",username:"大黑哥",content:"555为什么温度会相差那么大？"},
                    {type:"system",id:6,time:"12:57",username:"售后客服008",content:"666这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"},
                    {type:"user",id:7,time:"12:59",username:"售后客服008",content:"777参数作为进入请求标识，防止重复请求"},
                    {type:"system",id:8,time:"13:05",username:"大黑哥",content:"888记住第一个信息记住第一个信息"},
                ]
                // 获取消息中的图片,并处理显示尺寸
                for(let i=0;i<list.length;i++){
                    list[i].id = Math.floor(Math.random()*1000+1);
                    this.msgList.unshift(list[i]);
                    // console.log(this.msgList)
                }
                //这段代码很重要，不然每次加载历史数据都会跳到顶部
                this.$nextTick(function() {
                    let  scrollToView = 'msg'+Viewid;//跳转上次的第一行信息位置
                    let container = document.getElementById(scrollToView).offsetTop;
                    let _this = this;
                    setTimeout(()=>{
                        _this.$refs.myscroller.finishPullToRefresh();//停止下拉刷新
                        _this.$refs.myscroller.scrollTo(0, container, true);
                    },100)
                    
                });
                this.isHistoryLoading = false;
            },1000)
            // this.page=1;//重置页数刷新每次页数都是第一页
            // this.noDate=false;//重置数据判断
            // setTimeout(function(){
            //     this.getList();
            //     this.$refs.myscroller.finishPullToRefresh();//停止下拉刷新
            // }.bind(this),1700)
        },
        //滚动到底部-未执行
        infinite(done){
            if(this.noDate){
                this.$refs.myscroller.finishInfinite(true);//停止无限加载
            }else{
                setTimeout(() => {
                    this.page++;//下拉一次页数+1
                    this.getList();
                    done();//进行下一次加载操作
                }, 1500);
            }
        }
    }
}
</script>
<style scoped>
.gamePage{
    height: 100vh;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    display: flex;
    flex-direction:column;
    padding-bottom: 1rem;
}
.game-header{
    box-sizing: border-box;
    background-size: 100% auto;
    background-repeat: no-repeat;
    color: #FFFFFF;
    /* height: 2rem; */
    position: relative;
}
.game-content{
    flex: 1;
    position: relative;
    color: #FFFFFF;
    overflow: hidden;
}

.head-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .25rem .25rem 0;
}
.head-top-left{
    display: flex;
    align-items: center;
}
.head-top-left .iconfont{
    font-size: .5rem;
}
.head-top-left .balance{
    margin-left: .2rem;
    font-size: .35rem;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
.head-top-left .balance span{
    font-size: .35rem;
    margin-left: .2rem;
    color: #e64340;
}
.head-top-right{
    font-size: .35rem;
    color: #FFFFFF;
}
.head-info{
    padding: .1rem .2rem;
}
.info-con-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.info-left{
    display: flex;
    align-items: center;
}
.info-left .info-img{
    width: .8rem;
    height: .8rem;
}
.info-left .info-text{
    margin-left: .2rem;
}
.info-left .info-text .name{
    line-height: 1.2;
    font-size: .35rem;
    color: rgba(255, 253, 17, 0.55);
}
.info-left .info-text .periods{
    line-height: 1.2;
    font-size: .35rem;
}
.info-right{
    display: flex;
    align-items: center;
}
.info-right .right-one{
    text-align: right;
}
.info-right .right-one .periods{
    line-height: 1.2;
    font-size: .35rem;
}
.info-right .right-one .periods span{
    line-height: 1.2;
    font-size: .35rem;
    color: rgba(255, 253, 17, 0.55);
}
.info-right .right-one .text{
    line-height: 1.2;
    font-size: .35rem;
}
.info-right .right-two{
    margin: 0 .2rem;
    line-height: 1.2;
    font-size: .5rem;
}
.info-right .right-three .iconfont{
    font-size: .7rem
}
.info-con-botm{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .2rem;
}
.botm-left{}
.botm-left .botm-con{
    display: flex;
    align-items: center;
}
.botm-left .botm-con .draw_code_no{
    margin: 0 1px;
}
.botm-right{
    display: flex;
    align-items: center;
}
.botm-right .iconfont{
    font-size: .5rem;
}
.botm-right .rest{
    color: #FFFFFF;
    font-size: .35rem;
}
.botm-right .add-info{
    margin:0 .15rem;
    border-radius: .15rem;
    padding: .07rem .15rem;
    background-color: #FFFFFF;
    line-height: 1.2;
    font-size: .3rem;
    color: #000000;
}
.botm-right .add-info .heise{
    color: #000000;
    line-height: 1.2;
    margin: 0 1px;
}
.botm-right .add-info .red{
    margin: 0 .1rem;
    line-height: 1.2;
    color: #e64340;
}

.head-history{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: -99;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    opacity: 0;
    padding-top: 1rem;
    transition: all .3s;
    transform: scale(0);
}
.head-history.showhist{
    z-index: 99;
    opacity: 1;
    transform: scale(1);
}
.hist-list{
    position: relative;
}
.hist-list .hist-item{
    width: 100%;
    display: flex;
    align-items: center;
}
.hist-list .hist-item .periods{
    width: 2rem;
    text-align: center;
    font-size: .35rem;
}
.hist-list .hist-item .number{
    flex: 1;
    display: flex;
}
.hist-list .hist-item .number .nmi-tem{
    flex: 1;
}
.hist-list .hist-item .number .nmi-tem.draw_code_10 .draw_code_no{
    border-radius: .1rem;
}
.hist-list .hist-item .result{
    width: 2rem;
    text-align: center;
    font-size: .35rem;
}
.hist-list .hist-item .result span{
    margin: 0 .1rem;
}
.hist-list .hist-item .result span.bule{
    color: #0072E3;
}

.hist-list .hist-item:nth-child(2n+1){
    background-color: #F4F5F6;
}
                            
.history-content{
    width: 100%;
    background-color: #FFFFFF;
    height: 2rem;
    color: #333333;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.hist-top-tab{
    position: absolute;
    top: 0;
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #3e253a;
    font-size: .35rem;
}
.hist-top-tab .periods{
    width: 2rem;
    text-align: center;
}
.hist-top-tab .number{
    flex: 1;
    display: flex;
}
.hist-top-tab .number .nmi-tem{
    flex: 1;
    text-align: center;
}
.result{
    width: 2rem;
    text-align: center;
}

</style>