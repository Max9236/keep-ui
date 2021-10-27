<template>
  <ke-layout-document>
    <template v-slot:left>
      <ke-sidebar :dataList="dataList" />
    </template>
    <template v-slot:right>
      <LayOut/>
    </template>
  </ke-layout-document>
</template>

<script>
import LayOut from './layout.vue'
import KeLayoutDocument from './keep-ui/layout/ke-layout-document.vue';
export default {
  components:{
    LayOut,
    KeLayoutDocument
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
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
