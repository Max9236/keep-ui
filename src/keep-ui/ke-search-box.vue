<template>
  <div>
    <div class="container">
      <input @focus="handleFocus($event)" v-model="inputVal" @blur="handleBlur($event)"/>
      <button @click="handleSeach($event)">搜索</button>
      <div  :class="{ show: isSee}" class="box" v-show="isShow">
        <div  v-for="(item, index) of dataList" :key="index"  @mousedown="handleClick($event)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        count: 0,
        isShow:false,
        inputVal:'',
        dataList:[],
        isSee:false
      }
    },
    methods: {
      handleFocus(e){
        if(this.dataList.length === 0) return
        this.isShow = true;
        this.$emit('focus',e);
      },
      handleBlur(e){
        this.isShow = false;
        this.$emit('blur',e);
      },
      handleClick(e){
        this.inputVal = e.toElement.innerText;
        this.$emit("list-click",{e,newsVal:this.inputVal});
      },
      handleSeach(e){
        let newsVal = this.inputVal.trim();
        if(!(this.inputVal === '')){//非空值再继续  
            // 判断有无重复值
          if(!(this.isRepeat(this.dataList, newsVal ))){
            this.dataList.push(newsVal);
            console.log(this.dataList);
          }
          this.inputVal = ''
        }
        this.$emit('search',{e, newsVal});
      },
      isRepeat(arr, item) {
        //  some返回一个布尔值，相对于 || 有一个真则为真
        //  every()相当于&&，找到第一个错的就直接返回false，不再往下找
        return arr.some((items) => {
          return items === item
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  
}
.container button{
  width: 20%;
  border:1px solid #ccc;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.container input {
  width: 80%;
  height: 35px;
  box-sizing: border-box;
  background:none;  
  outline:none;  
  border:1px solid #ccc;
  border-right: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius:  0;
}
.box {
  border: 1px solid rgba(223, 224, 224, 0.8);
  border-top: none;
  width: 100%;
}
.box > div:hover {
  background-color: rgba(241, 241, 241,.5);
}
</style>