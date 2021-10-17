<template>
  <div id="app">
    <h1>keepUI</h1>
    <h3>#keepUI ,一套基于 Vue 2.0 简约而不简单的webPC端组件库</h3>
    <DialogGroup />
    <ButtonGroup />
    <InputGroup />
  </div>
</template>

<script>
import InputGroup from "./components/input";
import ButtonGroup from "./components/button";
import DialogGroup from "./components/dialog";

export default {
  components: {
    InputGroup,
    ButtonGroup,
    DialogGroup,
  },
  data() {
    return {
      value:`\`\`\`html        
      <ke-button class="margin">默认</ke-button>
      <ke-button class="margin" type="primary">普通</ke-button>
      <ke-button class="margin" type="success">成功</ke-button>
      <ke-button class="margin" type="info">信息</ke-button>
      <ke-button class="margin" type="warning">警告</ke-button>
      <ke-button class="margin" type="danger">危险</ke-button>\`\`\``,
    };
  },
};
</script>

<style>
#app {
  padding: 0 30px;
  width: 60%;
  margin: 0 auto;
}
</style>
