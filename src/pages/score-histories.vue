<template>
    <div class="scorePage">
        <page-head title="上下分记录" backColor="rgb(62, 37, 58)" color="#ffffff" @click="navback()"></page-head>
        <scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div class="score-taber">
                <!-- <div class="taber-tr">
                    <div class="tab-td">类型</div>
                    <div class="tab-td">申请积分</div>
                    <div class="tab-td">时间</div>
                    <div class="tab-td">状态</div>
                </div>
                <div class="taber-tr">
                    <div class="tab-td green">
                        <span>上分</span>
                    </div>
                    <div class="tab-td">1000</div>
                    <div class="tab-td">2019-12-14 18:30</div>
                    <div class="tab-td"><span>等待审核</span></div>
                </div> -->
                <div class="taber-tr" v-for="(item,index) in listdata" :key="index">
                    <div class="tab-td green">
                        <span>{{item.drop}}</span>
                    </div>
                    <div class="tab-td">{{item.portfolio}}</div>
                    <div class="tab-td">{{item.date}}</div>
                    <div class="tab-td"><span>{{item.state}}</span></div>
                </div>
            </div>
        </scroll>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import pageHead from '@/components/page-head.vue'
import scroll from '@/components/scroll.vue'
export default {
    components: {
        pageHead,
        scroll
    },
    data() {
        return {
            scoreData:[],
            counter: 1, //当前页
            num: 30, // 一页显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            listdata: [], // 
            scrollData: {
                noFlag: false //暂无更多数据显示
            }
        }
    },
    mounted(){
        this.getList();
    },
    methods: {
        navback(){
            this.$router.go(-1);//返回上一层
        },
        //下拉刷新
        onRefresh(done) {
            console.log(done);
            this.getList();
            done(); // call done
        },
        getList() {
            var response = []
            for(let i = 0; i < 30; i++) {
                response.push({
                    date: "2017-06-1"+i,
                    portfolio: "1.5195"+i,
                    drop: i+"+.00 %" ,
                    state: '等待审核'
                })
            }
            this.listdata = response.slice(0, this.num);
            console.log(this.listdata)
        },
        onInfinites(done) {
            
            let vm = this;
            done() // call done
            
        },

        onInfinite(done) {
            console.log(this.listdata.length);
            let vm = this;
            vm.counter++;
            let end = vm.pageEnd = vm.num * vm.counter;
            // let i = this.pageStart = this.pageEnd - this.num;
            let more = vm.$el.querySelector('.load-more')

            for(let i = 0; i < 30; i++) {
                vm.listdata.push({
                    date: "2017-06-1"+i,
                    portfolio: "1.5195"+i,
                    drop: i+"+.00 %" ,
                    state: '审核通过'
                })
            }
            more.style.display = 'none'; //隐藏加载条

            // console.log(end);
            // console.log(i);
            // console.log(more);
            // console.log(i > 30)
            // for(i; i < end; i++) {
            //     if(i >= 30) {
            //         console.log(1111111111);
            //         more.style.display = 'none'; //隐藏加载条
            //         //走完数据调用方法
            //         this.scrollData.noFlag = true;
            //         break;
            //     } else {
            //         console.log(222222222);
            //         this.listdata.push({
            //             date: "2017-06-1"+i,
            //             portfolio: "1.5195"+i,
            //             drop: i+"+.00 %" ,
            //             state: '审核通过'
            //         })
            //         more.style.display = 'none'; //隐藏加载条
            //     }
            // }

            //done();
            console.log(done);
        }
    }
}
</script>
<style scoped>
    .scorePage{
        height: 100vh;
        padding-top: 1rem;
        background-color: #FFFFFF;
        overflow: hidden;
    }
    .score-taber{
        border-top: 1px solid #e0e0e0;
    }
    .taber-tr{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
    .taber-tr .tab-td{
        flex: 1;
        text-align: center;
        padding: .2rem 0;
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        font-size: .35rem;
    }
    .taber-tr .tab-td span{
        font-weight: bold;
        font-size: .35rem;
    }
    .taber-tr .green{
        color: #08BB08;
    }
    .taber-tr .red{
        color: #f75549;
    }
    .taber-tr .tab-td:nth-child(3n){
        width: 4rem;
        flex: initial;
    }
    .taber-tr .tab-td:last-child{
        border-right:none;
    }

</style>
