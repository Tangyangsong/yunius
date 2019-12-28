<template>
  <div class="modal-backdrop">
     <div class="modal">
        <div class="modal-header" v-if="title">
          {{title}}
        </div>
        <div class="modal-body" v-if="content">
            {{content}}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn-close" @click="close" v-if="showCancle">{{cancleText?cancleText : '取消'}}</button>
            <button type="button" class="btn-confirm" @click="confirm">{{confirmText ? confirmText : '确定'}}</button>
        </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    // midal标题
    title:{
      type: String,
      default: '提示'
    },
    // modal内容
    content: {
      type: String,
      default: ''
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true
    },
    // 是否显示取消按钮
    showCancle: {
        type: Boolean,
        default: true
    },
    // 确认按钮文字
    confirmText: {
        type: String,
        default: '确认'
    },
    // 取消按钮文字
    cancleText: {
        type: String,
        default: '取消'
    }
  },
  data() {
    return {       
    }
  },
  methods: {
    // 关闭按钮事件
    close() {
        this.$emit('on-cancel');
    },
    // 确定按钮事件
    confirm() {
        this.$emit('on-confirm');
    }
  }
}
</script>
<style scoped>
.modal-backdrop { 
    position: fixed; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    background-color: rgba(0,0,0,.5); 
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    z-index: 99999999;
    
}
.modal { 
    background-color: #fff; 
    box-shadow: 2px 2px 20px 1px; 
    overflow-x:auto; 
    display: flex; 
    flex-direction: column;
    border-radius: 10px;
    width: 80%;
} 
.modal-header { 
    border-bottom: 1px solid #eee; 
    color: #313131; 
    justify-content: space-around;
    padding: .2rem;
    display: flex;
    font-size: .55rem; 
} 
.modal-footer { 
    border-top: 1px solid #eee; 
    padding: .2rem; 
    display: flex; 
    justify-content: space-around;
    align-items: center;
} 
.modal-body { 
    position: relative; 
    padding: .5rem .2rem;
    font-size: .45rem;
    text-align: center;
    color: #999;
}
.btn-close, .btn-confirm {    
    border-radius: 5px;
    border:none;
    cursor: pointer;
    font-size: .5rem;
    /* padding: 2px 8px; */
}
.btn-close {
    color: #313131;
    background-color: transparent;
}
.btn-confirm {
    color: #F9C410; 
    /* background-color: #2d8cf0; */
    background-color: transparent;
}


</style>