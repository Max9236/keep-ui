<template>
  <div class="container"
      @mouseover="handlemouseover01"
      @mouseout="handlemouseout01"
      @click="handleClikShow"
     >
    <!-- 标题 -->
    <div>
      <slot></slot>
    </div>
    
    <!-- 下拉项目 -->
    <transition name="fade">
      <div v-show="isShow"
      class="dropdown-menu"
        @mouseover="handlemouseover02"
        @mouseout="handlemouseout02"
        >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'KeDropdown',
  props: {
    trigger: {
      type:String,
      default:'hover'
    }
  },
  provide: function () {
    return {
      getMap: this.handleClikEvent
    }
  },
  data() {
    return {
      isShow:false,
      timer:null
    };
  },

  methods: {
    handleClikShow() {
      if(this.trigger === 'click'){
        this.isShow = !this.isShow;
      }
    },
    handlemouseover01(){
      if(this.trigger === 'hover'){
        clearTimeout(this.timer);
        this.isShow = true
      }
      
    },
    handlemouseout01(){
      if(this.trigger === 'hover'){
        this.timer = window.setTimeout(() => {
          this.isShow = false
        },200)
      }
    },
    handlemouseover02(){
      if(this.trigger === 'hover'){
        clearTimeout(this.timer);
      }
    },
    handlemouseout02(){
      if(this.trigger === 'hover'){
        this.isShow = false
      }
    },

    handleClikEvent(value){
      this.$emit('command', value);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.dropdown-menu {
  position:absolute;
  left: -10px;
  cursor:pointer
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>