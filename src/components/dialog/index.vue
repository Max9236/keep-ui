<template>
  <div>
    <h3 id="modalBox">#模态框</h3>
    <CodeBlock :value="value">
      <ke-button class="margin" type="primary" @click="visible=true" round>点击弹出模态框</ke-button>
      <ke-dialog :visible.sync="visible">
      <template v-slot:title>
        <h3>#温馨提示</h3>
      </template>
      <!-- 模态框内容 -->
      <h3>#今天是个好日子！</h3>
      <h3>#今天是个好日子！</h3>
      <h3>#今天是个好日子！</h3>
      <h3>#今天是个好日子！</h3>
      <h3>#今天是个好日子！</h3>
      <template v-slot:footer>
        <ke-button class="margin" type="primary" @click="visible=false" round>确定</ke-button>
        <ke-button class="margin" @click="visible=false" round>关闭</ke-button>
      </template>
    </ke-dialog>
    </CodeBlock>  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible:false,
        value: `\`\`\`html
        <template>      
        <ke-button class="margin" type="primary" @click="visible=true" round>点击弹出模态框</ke-button>
          <ke-dialog :visible.sync="visible">
          <template v-slot:title>
            <h3>#温馨提示</h3>
          </template>
          <!-- 模态框内容 -->
          <h3>#今天是个好日子！</h3>
          <h3>#今天是个好日子！</h3>
          <h3>#今天是个好日子！</h3>
          <h3>#今天是个好日子！</h3>
          <h3>#今天是个好日子！</h3>
          <template v-slot:footer>
            <ke-button class="margin" type="primary" @click="visible=false" round>确定</ke-button>
            <ke-button class="margin" @click="visible=false" round>关闭</ke-button>
          </template>
       </ke-dialog>
       </template>
      <script>
        export default {
          data() {
            return {
              visible:false
            }
          }
        }

       \n\`\`\`
       `,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>