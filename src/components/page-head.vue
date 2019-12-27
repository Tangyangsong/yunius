<template name="page-head">
    <div class="login-head">
        <div class="head-title">
            <div class="head-left" @click="_onClick()" v-if="leftIcon">
                <i class="iconfont iconfanhui"></i>
            </div>
            {{title}}
        </div>
    </div>

</template>
<script>
	export default {
		name: "page-head",
		props: {
            leftIcon:{
                type:Boolean,
                default: true
            },
			title: {
				type: String,
				default: ""
            },
            color: {
				type: String,
				default: "rgba(255, 253, 17, 0.55)"
			},
		},
		data(){
			return {
				
			}
		},
		methods: {
			_onClick() {
				this.$emit('click')
			}
		}
	}
</script>
<style scoped>
.login-head {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.login-head .head-title {
  display: block;
  text-align: center;
  padding: 0 1rem;
  font-size: .5rem;
  height: 1rem;
  line-height: 1rem;
  color: #bebebe;
  box-sizing: border-box;
  position: relative;
  color: #f9c410;
}
.login-head .head-title .head-left {
  position: absolute;
  left: 0.25rem;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.login-head .head-title .head-left > i {
  font-size: 0.5rem;
  color: #ffffff;
}
</style>

