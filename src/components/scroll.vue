<template>
  <div
    class="yo-scroll"
    :class="{
      down: state === 0,
      up: state == 1,
      refresh: state === 2,
      touch: touching
    }"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <section
      class="inner"
      :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }"
    >
      <header class="pull-refresh">
        <slot name="pull-refresh">
          <span class="down-tip">下拉更新...</span>
          <span class="up-tip">松开刷新数据...</span>
          <span class="refresh-tip">加载中……</span>
        </slot>
      </header>
      <slot> </slot>
      <footer class="load-more">
        <slot name="load-more">
          <!-- <span v-show="downFlag === false">上拉加载更多...</span> -->
          <!-- <span v-if="loadMoreTip">加载中...</span> -->
        </slot>
      </footer>
      <!-- <div class="nullData" v-show="dataList.noFlag">暂无更多数据</div> -->
    </section>
  </div>
</template>
<script>
export default {
  naem: "demo",
  props: {
    offset: {
      type: Number,
      default: 100 //默认高度
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    dataList: {
      default: false,
      required: false
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startX: 0, //触摸目标在页面中的x坐标
      startY: 0, //触摸目标在页面中的y坐标
      touching: false,
      infiniteLoading: false,
      downFlag: false, //用来显示是否加载
      loadMoreTip: false //数据加载中
    };
  },
  methods: {
    touchStart(e) {
      //当手指触摸屏幕时触发
      this.startX = e.targetTouches[0].pageX;
      this.startY = e.targetTouches[0].pageY;
      this.startScroll = this.$el.scrollTop || 0;
      this.touching = true;
      // this.dataList.noFlag = false; //有更多数据，所以该提示不显示
      this.$el.querySelector(".load-more").style.display = "block"; //上拉加载更多显示
    },
    touchMove(e) {
      //当手指在屏幕上滑动的时候连续地触发
      if (!this.enableRefresh || this.dataList.noFlag || !this.touching) {
        return;
      }
      //给下拉做回弹效果
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if (diff > 0) e.preventDefault();
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);
      if (this.state === 2) {
        // in refreshing
        return;
      }
      if (this.top >= this.offset) {
        this.state = 1;
      } else {
        this.state = 0;
      }
      let more = this.$el.querySelector(".load-more");
      if (!this.top && this.state === 0) {
        //没有到顶部
        more.style.display = "block";
      } else {
        more.style.display = "none";
      }
    },
    touchEnd(e) {
      //当手指从屏幕上离开的时候触发
      // if(!this.enableRefresh) {
      //     return
      // }
      this.touching = false;
      if (this.state === 2) {
        // 在刷新中
        this.state = 2;
        this.top = this.offset;
        return;
      }
      if (this.top >= this.offset) {
        //刷新
        this.refresh();
      } else {
        // 取消刷新
        this.state = 0;
        this.top = 0;
      }
      //用于判断滑动是否在原地
      // ---------- 开始 --------------
      let endX = e.changedTouches[0].pageX,
        endY = e.changedTouches[0].pageY,
        dy = this.startY - endY,
        dx = endX - this.startX;
      //如果滑动距离太短
      if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        window.console.log("滑动距离太短");
        return;
      }
      // ---------- 结束 --------------

      if (!this.enableInfinite || this.infiniteLoading) {
        return;
      }
      let outerHeight = this.$el.clientHeight,
        innerHeight = this.$el.querySelector(".inner").clientHeight,
        scrollTop = this.$el.scrollTop,
        ptrHeight = this.onRefresh
          ? this.$el.querySelector(".pull-refresh").clientHeight
          : 0,
        bottom = innerHeight - outerHeight - scrollTop - ptrHeight;
      if (bottom <= this.offset && this.state === 0) {
        this.downFlag = true;
        this.infinite(); //加载
      } else {
        this.$el.querySelector(".load-more").style.display = "none";
        this.downFlag = false;
      }
    },
    refresh() {
      this.state = 2;
      this.top = this.offset;
      setTimeout(() => {
        this.onRefresh(this.refreshDone);
      }, 1500);
    },
    refreshDone() {
      this.state = 0;
      this.top = 0;
    },
    infinite() {
      this.state == 2;
      this.infiniteLoading = true;
      let _this = this;
      setTimeout(() => {
        // this.loadMoreTip = true ;
        _this.onInfinite(_this.infiniteDone);
      }, 1500);
    },
    infiniteDone() {
      this.infiniteLoading = false;
    }
  }
};
</script>
<style scoped>
.yo-scroll {
  font-size: .4rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 100;
  height: auto;
  -webkit-overflow-scrolling: touch;
}
.inner {
  position: absolute;
  top: -1rem;
  left: 0;
  width: 100%;
  height: auto;
  transition-duration: 300ms;
}
/* 下拉刷新 */
.pull-refresh {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
/* 上拉加载更多 */
.load-more {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: none;
}
/* 没有更多数据 */
.nullData {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.down-tip,
.refresh-tip,
.up-tip {
  /*隐藏提示语*/
  display: none;
}
.yo-scroll.touch .inner {
  transition-duration: 0;
}
.yo-scroll.down .down-tip {
  display: block;
}
.yo-scroll.up .up-tip {
  display: block;
}
.yo-scroll.refresh .refresh-tip {
  display: block;
}
</style>
