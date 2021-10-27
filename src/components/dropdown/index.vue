<template>
  <div>
    <h3 id="modalBox">#下拉框</h3>
    <CodeBlock :value="value">
      <ke-dropdown >
        <span class="el-dropdown-link">
          下拉菜单
        </span>
        <template v-slot:dropdown>
          <ke-dropdown-menu>
          <ke-dropdown-menu-item>孙悟空</ke-dropdown-menu-item>
          <ke-dropdown-menu-item>猪八戒</ke-dropdown-menu-item>
          <ke-dropdown-menu-item>沙和尚</ke-dropdown-menu-item>
          <ke-dropdown-menu-item>唐三藏</ke-dropdown-menu-item>
        </ke-dropdown-menu>
        </template>
      </ke-dropdown>
      <h5 style="width:100px"></h5>
       <ke-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          下拉菜单
        </span>
        <template v-slot:dropdown>
          <ke-dropdown-menu>
            <ke-dropdown-menu-item command="孙悟空">悟空</ke-dropdown-menu-item>
            <ke-dropdown-menu-item command="猪八戒">八戒</ke-dropdown-menu-item>
            <ke-dropdown-menu-item command="沙和尚">和尚</ke-dropdown-menu-item>
            <ke-dropdown-menu-item command="唐三藏" disabled>三藏</ke-dropdown-menu-item>
        </ke-dropdown-menu>
        </template>
      </ke-dropdown>
    </CodeBlock>
   
  </div>
</template>

<script>
export default {
  name: 'KeepUiIndex',

  data() {
    return {
      value: `\`\`\`html
        <template>      
          <ke-dropdown >
            <span class="el-dropdown-link">
              下拉菜单
            </span>
            <template v-slot:dropdown>
              <ke-dropdown-menu>
              <ke-dropdown-menu-item>孙悟空</ke-dropdown-menu-item>
              <ke-dropdown-menu-item>猪八戒</ke-dropdown-menu-item>
              <ke-dropdown-menu-item>沙和尚</ke-dropdown-menu-item>
              <ke-dropdown-menu-item>唐三藏</ke-dropdown-menu-item>
            </ke-dropdown-menu>
            </template>
          </ke-dropdown>
          <h5 style="width:100px"></h5>
            <ke-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  下拉菜单
                </span>
                <template v-slot:dropdown>
                  <ke-dropdown-menu>
                    <ke-dropdown-menu-item command="孙悟空">悟空</ke-dropdown-menu-item>
                    <ke-dropdown-menu-item command="猪八戒">八戒</ke-dropdown-menu-item>
                    <ke-dropdown-menu-item command="沙和尚">和尚</ke-dropdown-menu-item>
                    <ke-dropdown-menu-item command="唐三藏" disabled>三藏</ke-dropdown-menu-item>
                  </ke-dropdown-menu>
                </template>
              </ke-dropdown>
          </template>
          <script>
            export default {
               methods: {
                handleCommand(command) {
                    alert('click on item ' + command)
                }
              },
            }
          </srcipt>
          <style lang="scss" scoped>
            .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
            }
          </style>

       \n\`\`\`
       `,
    };
  },

  mounted() {
    
  },

  methods: {
     handleCommand(command) {
        alert('click on item ' + command)
     }
  },
};
</script>

<style lang="scss" scoped>
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>