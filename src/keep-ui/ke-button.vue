<template>

  <button 
  :class="[
    rebound ? 'r-button' : 'd-button',
    `d-button--${type}`,
    { plain },
    { round },
    `${size}`,
    { circle }]"
  @click="handleClick"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>

  export default {
    name:'KeButton',
    props:{
      type:{
        type:String,
        default:'default'
      },
      size:{
        type:String,
        default:'default'
      },
      plain:{
        type:Boolean,
        default:false
      },
      rebound:{
        type:Boolean,
        default:false
      },
      round:{
        type:Boolean,
        default:false
      },
      circle:{
        type:Boolean,
        default:false
      },
    },
    methods: {
      handleClick(e){
        this.$emit('click',e)
      }
    }
    
  }
</script>

<style lang="scss" scoped>
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

.d-button {
  display: inline-block;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.d-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.d-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.d-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.d-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.d-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// 拟态
.d-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}

.d-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.d-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.d-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.d-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.d-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

// 朴素按钮

.d-button.plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.d-button--primary.plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.d-button--success.plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.d-button--info.plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.d-button--warning.plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.d-button--danger.plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round
.d-button.round {
  border-radius: 20px;
  padding: 12px 23px;
}
.r-button.round {
  border-radius: 20px;
  padding: 8px 23px;
}
// 圆形按钮
.r-button.circle,
.d-button.circle {
  border-radius: 50%;
  padding: 12px;
}
// 让图标和文字之间空开
.d-button [class*='fa-'] + span {
  margin-left: 5px;
}
// 禁用
.d-button.d-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}
.d-button.is-round .mask {
  border-radius: 20px;
}

.d-button.is-circle .mask {
  border-radius: 50%;
}
.d-button.is-disabled {
  cursor: no-drop;
}

/* 反馈风格 */
.r-button {
  text-align: center;
  font-weight: bold;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  text-shadow:1px 1px 1px #333;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.r-button.d-button--gray{
  color: #8c96a0;
  text-shadow:1px 1px 1px #fff;
  border:1px solid #dce1e6;
  box-shadow: 0 1px 2px #fff inset,0 -1px 0 #a8abae inset;
  background: -webkit-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: -moz-linear-gradient(top,#f2f3f7,#e4e8ec);
  background: linear-gradient(top,#f2f3f7,#e4e8ec);
  
}
.d-button--gray:hover{
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  /* 尺寸 */
  .d-button.mini {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>