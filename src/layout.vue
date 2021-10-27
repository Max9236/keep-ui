<template>
  <div class="container">
    <div class="container-main">
      <h1>keepUI</h1>
      <h3>#keepUI ,一套基于 Vue 2.0 简约而不简单的webPC端组件库</h3>
      <LayoutGroup/>
      <Dropdown/>
      <DialogGroup />
      <ButtonGroup />
      <InputGroup />
    </div>
  </div>
</template>

<script>
import InputGroup from "./components/input";
import ButtonGroup from "./components/button";
import DialogGroup from "./components/dialog";
import Dropdown from "./components/dropdown";
import LayoutGroup from "./components/layout";
export default {
  components: {
    InputGroup,
    ButtonGroup,
    DialogGroup,
    Dropdown,
    LayoutGroup
  },
  data() {
    return {
      
    };
  },
  methods: {
    handleSearch(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-left {
  width: 100px;
  background-color: red;
  height: 100px;
  .container-left-end {
    height: 100%;
    background-color: skyblue;
  }
}
.container-main {
  width: 90%;
}
</style>
