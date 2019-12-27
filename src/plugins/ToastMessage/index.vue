<template>
  <div class="toastMessageBox" v-show="show">{{message}}</div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: 'toastMessage',
  data () {
    return {
      message: '',
      show: false
    }
  }
}
</script>

<style scoped>
.toastMessageBox{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: .4rem;
  font-size: .4rem;
  border-radius: .1rem;
  text-align: center;
}
</style>