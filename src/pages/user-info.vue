<template>
    <div class="userPage">
        <page-head title="个人中心" @click="navback()"></page-head>
        <div class="info-header">
			<img class="info-img" src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=55e775fc36dbb6fd215be5263924aba6/4b90f603738da9773d2f472cbf51f8198618e3b1.jpg"/>
			<div class="info-con">
				<div class="info-tlite">{{userInfo.nickname}}</div>
				<div class="info-text">房间ID：{{userInfo.roomnumber}}</div>
			</div>
		</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import pageHead from '@/components/page-head.vue'
export default {
    components: {
        pageHead
    },
    computed: {
        ...mapState(['userInfo','keyboardSound'])
    },
    created(){
        
    },
    methods:{
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