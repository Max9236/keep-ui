<template>
  <div id="wrapper">
    <div class="wrapper-left">
      <slot name="left"></slot>
    </div>
    <div class="wrapper-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeLayoutDocument',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
 display: flex;
 height: 100vh;
 width: 100%;
 .wrapper-left {
   width: 250px;
   overflow-y: auto;
 }
 .wrapper-right {
   flex: 1;
   overflow-y: auto;
   margin-left: 30px;
 }
}

/* 滚动样式 */
.wrapper-left::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .wrapper-left::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  .wrapper-left::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }

/* 响应式 */
@media screen and (max-width: 1000px) {
  .wrapper {
   width: 90%;
   margin: 0 auto;
 } 
 .wrapper-left {
  display: none;
}
}
@media screen and (max-width: 800px) {
  .wrapper {
   width: 100%;
   margin: 0 auto;
 }
}
</style>