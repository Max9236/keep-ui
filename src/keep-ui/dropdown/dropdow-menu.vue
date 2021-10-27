<template>
  <div class="dropdown-menu">
    <div class="triangle"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KeDropdownMenu',
};
</script>

<style lang="scss" scoped>

.dropdown-menu {
  margin-top: 16px;
  min-width: 100px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 1px skyblue;
  z-index: 999999;
  background-color: white;
  padding: 10px 0;
  position: relative;
  .triangle {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 6px 10px 7px;
    border-color: transparent transparent skyblue transparent;
  }
  .triangle::before {
    position: absolute;
    content: '';
    top: 1px;
    left: -9px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7px 14px 9px;
    border-color: transparent transparent #ffffff transparent;
  }
}

</style>