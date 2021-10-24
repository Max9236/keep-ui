<template>
  <div id="app">
    <SideBar :dataList="dataList" />
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
import SideBar from "./components/sidebar";
export default {
  components: {
    InputGroup,
    ButtonGroup,
    DialogGroup,
    SideBar,
  },
  data() {
    return {
      dataList: [
        {
          title: "模态框",
          href: "#modalBox",
          children: [
            {
              title: "普通模态",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "模态框",
          href: "#modalBox",
          children: [
            {
              title: "普通模态",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "模态框",
          href: "#modalBox",
          children: [
            {
              title: "普通模态",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "模态框",
          href: "#modalBox",
          children: [
            {
              title: "普通模态",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
        {
          title: "按钮",
          href: "#btnBox",
          children: [
            {
              title: "普通风格",
            },
            {
              title: "朴素风格",
            },
            {
              title: "反馈风格",
            },
            {
              title: "API",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSearch(e) {
      console.log(e);
    },
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
