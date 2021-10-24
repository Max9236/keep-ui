<template>
  <div id="sidebarContainer" class="test test-5 container">
    <ul class="scrollbar">
      <li v-for="(item, index) in dataList" :key="index">
        <!-- 一级标题 -->
        <a 
          
          @mouseenter="isActive = index" 
          @mouseleave="isActive = -1"
          @click="isActiveTit = index"
          :href="item.href"
        >
          <span :class="[
            isActive === index ? 'active' : '', 
            isActiveTit === index ? 'activeTit' : ''
          ]">{{item.title}}</span>
        </a>
        <ul class="childrenUl">
          <!-- 二级子项 -->
          <li class="childrenItem" v-for="(items, indexs) in item.children" :key="indexs">{{items.title}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KeepUiIndex',
  props: {
    dataList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },

  data() {
    return {
      mouseover: '',
      isActive:-1,
      isActiveTit:-1
    };
  },

  mounted() {
    
  },

  methods: {
    handleMouseOver(index){
      this.isActive = index
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 20%;
  top: 0px;
  left: 0px;
  height: 100vh;
  overflow-y: auto;
  .childrenItem:hover {
    color: skyblue;
    cursor:pointer;
  }
}
a {
  display: inline-block;
  padding-bottom: 10px!important;
  .active {
    border-bottom: 3px solid skyblue;
  }
}

li {
  margin-bottom: 10px!important;
}



.activeTit {
  color: skyblue;
  font-weight: 600;
}

.childrenUl {
  padding-left: 15px;
}




.test-5::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .test-5::-webkit-scrollbar-thumb {
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
  .test-5::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
</style>