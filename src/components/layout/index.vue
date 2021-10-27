<template>
  <div>
    <h3 id="modalBox">#布局</h3>
    <CodeBlock :value="value">
     <ke-layout-document class="border">
        <template v-slot:left>
          <ke-sidebar :dataList="dataList" />
        </template>
        <template v-slot:right>
          <div class="main">
            <h2>两栏布局，适合开发文档官网</h2>
          </div>
        </template>
      </ke-layout-document>
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
          <ke-layout-document class="border">
            <template v-slot:left>
              <ke-sidebar :dataList="dataList" />
            </template>
            <template v-slot:right>
              <div class="main">
                <h2>两栏布局，适合开发文档官网</h2>
              </div>
            </template>
          </ke-layout-document>
        </template>
      <script>
        export default {
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
        }
      <style lang="scss" scoped>
        .border {
          box-shadow: 1px 1px 3px 2px skyblue;
          border-radius: 5px;
        }
        .main {
          width: 100%;
          height: 100%;
          background-color: skyblue;
        }
      </style>
       \n\`\`\`
       `,
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
    },
  }
</script>

<style lang="scss" scoped>
.border {
  box-shadow: 1px 1px 3px 2px skyblue;
  border-radius: 5px;
}
.main {
  width: 100%;
  height: 100%;
  background-color: skyblue;
}
</style>