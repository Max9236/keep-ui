<template>
  <div class="container">
    
    <h3 id="btnBox">#按钮</h3>
    <h3>#普通风格</h3>
    <!-- 组件及代码块 -->
    <CodeBlock :value="value01">
      <ke-button class="margin">默认</ke-button>
      <ke-button class="margin" type="primary">普通</ke-button>
      <ke-button class="margin" type="success">成功</ke-button>
      <ke-button class="margin" type="info">信息</ke-button>
      <ke-button class="margin" type="warning">警告</ke-button>
      <ke-button class="margin" type="danger">危险</ke-button>
    </CodeBlock>
    
    <h3>#朴素风格</h3>
    <!-- 组件及代码块 -->
     <CodeBlock :value="value02">
        <ke-button class="margin" type="primary" plain>点击</ke-button>
        <ke-button class="margin" type="success" plain>提交</ke-button>
        <ke-button class="margin" type="info" plain>搜索</ke-button>
        <ke-button class="margin" type="warning" plain>搜索</ke-button>
        <ke-button class="margin" type="danger" plain>搜索</ke-button>
    </CodeBlock>
  
    <h3>#反馈风格</h3>
    <CodeBlock :value="value03">
    <ke-button class="margin" type="gray" rebound round>搜索</ke-button>
    <ke-button class="margin" type="primary" rebound round>点击</ke-button>
    <ke-button class="margin" type="success" rebound round>提交</ke-button>
    <ke-button class="margin" type="info" rebound round>搜索</ke-button>
    <ke-button class="margin" type="warning" rebound round>搜索</ke-button>
    <ke-button class="margin" type="danger" rebound round>搜索</ke-button>
    <ke-button class="margin" type="primary" rebound>点击</ke-button>
    <ke-button class="margin" type="success" rebound>提交</ke-button>
    <ke-button class="margin" type="info" rebound>搜索</ke-button>
    <ke-button class="margin" type="warning" rebound>搜索</ke-button>
    <ke-button class="margin" type="danger" rebound>搜索</ke-button>
    </CodeBlock>
    
    <h3>#圆角风格</h3>
    <CodeBlock :value="value04">
      <ke-button class="margin" type="gray"  round>搜索</ke-button>
      <ke-button class="margin" type="primary"  round>点击</ke-button>
      <ke-button class="margin" type="success"  round>提交</ke-button>
      <ke-button class="margin" type="info"  round>搜索</ke-button>
      <ke-button class="margin" type="warning"  round>搜索</ke-button>
      <ke-button class="margin" type="danger"  round>搜索</ke-button>
    </CodeBlock>

    <h3>#圆形风格</h3>
    <ke-button class="margin" circle>搜</ke-button>
    <ke-button class="margin" type="primary"  circle>点</ke-button>
    <ke-button class="margin" type="success"  circle>提</ke-button>
    <ke-button class="margin" type="info"  circle>搜</ke-button>
    <ke-button class="margin" type="warning"  circle>搜</ke-button>
    <ke-button class="margin" type="danger"  circle>搜</ke-button>
    <h3>#mini按钮</h3>
    <ke-button class="margin" size="mini" >xx</ke-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(e){
        console.log(e,"被点击");
      }
    },
    data() {
      return {
        value01: `\`\`\`html        
          <ke-button class="margin">默认</ke-button>
          <ke-button class="margin" type="primary">普通</ke-button>
          <ke-button class="margin" type="success">成功</ke-button>
          <ke-button class="margin" type="info">信息</ke-button>
          <ke-button class="margin" type="warning">警告</ke-button>
          <ke-button class="margin" type="danger">危险</ke-button>\n\`\`\``,
        value02: `\`\`\`html        
          <ke-button class="margin" type="primary" plain>点击</ke-button>
          <ke-button class="margin" type="success" plain>提交</ke-button>
          <ke-button class="margin" type="info" plain>搜索</ke-button>
          <ke-button class="margin" type="warning" plain>搜索</ke-button>
          <ke-button class="margin" type="danger" plain>搜索</ke-button>\n\`\`\``,
        value03: `\`\`\`html        
          <ke-button class="margin" type="gray" rebound round>搜索</ke-button>
          <ke-button class="margin" type="primary" rebound round>点击</ke-button>
          <ke-button class="margin" type="success" rebound round>提交</ke-button>
          <ke-button class="margin" type="info" rebound round>搜索</ke-button>
          <ke-button class="margin" type="warning" rebound round>搜索</ke-button>
          <ke-button class="margin" type="danger" rebound round>搜索</ke-button>
          <ke-button class="margin" type="primary" rebound>点击</ke-button>
          <ke-button class="margin" type="success" rebound>提交</ke-button>
          <ke-button class="margin" type="info" rebound>搜索</ke-button>
          <ke-button class="margin" type="warning" rebound>搜索</ke-button>
          <ke-button class="margin" type="danger" rebound>搜索</ke-button>\n\`\`\``,
        value04: `\`\`\`html        
          <ke-button class="margin" type="gray"  round>搜索</ke-button>
          <ke-button class="margin" type="primary"  round>点击</ke-button>
          <ke-button class="margin" type="success"  round>提交</ke-button>
          <ke-button class="margin" type="info"  round>搜索</ke-button>
          <ke-button class="margin" type="warning"  round>搜索</ke-button>
          <ke-button class="margin" type="danger"  round>搜索</ke-button>\n\`\`\``
      }
    },
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 0;
}
.margin {
  margin: 0 10px;
}

</style>