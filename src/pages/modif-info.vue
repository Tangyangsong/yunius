<template>
    <div class="modifPage">
        <page-head title="修改资料" backColor="rgb(62, 37, 58)" color="#ffffff" @click="navback()"></page-head>
        
        <div class="modif-header">
			<div class="mod-lfcon">
				<img class="img" :src="headerImg" />
				<div class="name">江湖松</div>
			</div>
			<div class="mod-btn">
				<button @click="loadImage">头像修改</button>
                <input type="file" accept="image/*" @change="onchangeImgFun" class="hiddenInput"/>
			</div>
		</div>
		<div class="modif-form">
			<div class="modif-label">
				<div class="mod-name">玩家昵称</div>
				<div class="mod-input">
					<div class="text">江湖松</div>
				</div>
			</div>
			<div class="modif-label">
				<div class="mod-name">旧的密码</div>
				<div class="mod-input">
					<input class="input" type="password" value="" placeholder="当前登录时的密码" />
				</div>
			</div>
			<div class="modif-label">
				<div class="mod-name">新的密码</div>
				<div class="mod-input">
					<input class="input" type="password" value="" placeholder="要修改新的登录密码" />
				</div>
			</div>
			<div class="modif-label">
				<div class="mod-name">确认密码</div>
				<div class="mod-input">
					<input class="input" type="password" value="" placeholder="要修改新的登录密码" />
				</div>
			</div>

		</div>
		<div class="modif-button">
			<button>保存修改</button>
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
    data() {
        return {
            headerImg:require('../assets/images/header.png')
        }
    },
    methods: {
        navback(){
            this.$router.go(-1);//返回上一层
        },
        loadImage() {
            this.$el.querySelector('.hiddenInput').click();
        },
        // 将头像显示
        onchangeImgFun (e) {
            var file = e.target.files[0]
            console.log(file)
            // 获取图片的大小，做大小限制有用
            let imgSize = file.size
            console.log(imgSize)
            var _this = this // this指向问题，所以在外面先定义
            // 比如上传头像限制5M大小，这里获取的大小单位是b
            if (imgSize <= 5000 * 1024) {
                // 合格
                _this.errorStr = ''
                console.log('大小合适')
                // 开始渲染选择的图片
                // 本地路径方法 1
                // this.imgStr = window.URL.createObjectURL(e.target.files[0])
                // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

                // base64方法 2
                var reader = new FileReader()
                reader.readAsDataURL(file) // 读出 base64
                reader.onloadend = function () {
                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                var dataURL = reader.result
                console.log(dataURL)
                _this.headerImg = dataURL
                // 下面逻辑处理
                }
            } else {
                this.$toastMessage({ message: "请上传低于5M图片!" });
                console.log('大小不合适')
            }
        },

        handleFile: function (e) {
            let $target = e.target || e.srcElement
            let file = $target.files[0]
            var reader = new FileReader()
            reader.onload = (data) => {
                let res = data.target || data.srcElement;
                console.log(res);
                this.headerImg = res.result
            }
            reader.readAsDataURL(file)
        },
    }
}
</script>
<style scoped>
.modifPage{
    height: 100vh;
    padding-top: 1rem;
    background-color: #F4F5F6;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
.modif-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem .5rem;
    background-color: #ffffff;
    border-bottom: 1px solid #E0E0E0;
}
.mod-lfcon {
    display: flex;
    align-items: center;
    width: 5rem;
}
.mod-lfcon .img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .1rem;
}

.mod-lfcon .name {
    flex: 1;
    margin-left: .2rem;
    font-size: .4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod-btn>button{
    color: #fff;
    background-color: #e64340;
    padding: .15rem .4rem;
    font-size: .35rem;
    border-radius: .1rem;
}
.modif-form {
    margin-top: .3rem;
    border-top: 1px solid #E0E0E0;
    background-color: #FFFFFF;
}
.modif-label {
    border-bottom: 1px solid #E0E0E0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .12rem 0;
    background-color: #FFFFFF;
}
.mod-name {
    width: 3rem;
    text-align: right;
    padding-right: .2rem;
}
.mod-input {
    flex: 1;
}
.mod-input .input{
    display: block;
    height: 100%;
    background: none;
    color: inherit;
    line-height: .5rem;
    padding: .2rem .3rem;
    font-size: .36rem;
}
.mod-input .text {
    padding: .2rem .3rem;
    font-size: .4rem;
    line-height: .5rem;
}
.modif-button {
    margin-top: .4rem;
    padding: 0 .4rem;
}
.modif-button button {
    width: 100%;
    margin: .2rem 0;
    color: #fff;
    background-color: #e64340;
    padding: .25rem .4rem;
    font-size: .35rem;
    border-radius: .1rem;
}
</style>

