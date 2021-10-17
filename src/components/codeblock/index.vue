<template>
 <div class="block">
  <div class="block-show">
    <slot></slot>
  </div>
  <div class="btnShow" @click="isShow = !isShow">显示代码</div>
  <transition name="run">
    <mavon-editor
    v-show="isShow"
    v-model="value"
    defaultOpen="preview"
    :toolbarsFlag="false"
    :subfield="false"
    :boxShadow="false"
    />
  </transition>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default:''
      }
    },
    data() {
      return {
        isShow:false

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>