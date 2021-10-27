<template>
  <div :class="disabled ? 'dropdown-menu-item-disabled ':'dropdown-menu-item' ">
    <span  @click="handleClick">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KeDropdownMenuItem',
  inject: ['getMap'],
  props: {
    command: {
      type: String,
      default:null
    },
    disabled: {
      type: Boolean,
      default:false
    }
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    handleClick(){
      if(!this.disabled){
        this.getMap(this.command);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu-item {
  text-align: center;
  color: rgb(88, 88, 88);
  font-size: 14px;
}

.dropdown-menu-item-disabled {
  text-align: center;
  color: rgb(161, 160, 160);
  font-size: 14px;
  cursor:default
  
}

.dropdown-menu-item:hover {
  background-color: skyblue;
  color: white;
}
</style>