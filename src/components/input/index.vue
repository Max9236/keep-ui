<template>
  <div>
    <h2>Input 输入框</h2>
    <h3>搜索框</h3>
    <!-- ke-search-box 组件 -->
    <ke-search-box/>
    <div class="btnShow" @click="handleShow">显示代码</div>
    <pre v-show="isShow"><code class='language-html' lang='html'>	&lt;ke-search-box 
      @list-click=&quot;handleListClick&quot;
      @focus=&quot;handleListFocus($event)&quot;
      @blur=&quot;handleListBlur($event)&quot;
      @search=&quot;handleListSearch($event)&quot; 
	/&gt;
</code></pre>
    <h3>Input Attributes</h3>
    <figure>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">name</th>
            <th style="text-align:left;">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">&nbsp;</td>
            <td style="text-align:left;">&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <h3>Input Events</h3>
    <figure>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">事件名称</th>
            <th style="text-align:left;">说明</th>
            <th style="text-align:left;">回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">blur</td>
            <td style="text-align:left;">在 Input 失去焦点时触发</td>
            <td style="text-align:left;">(event: Event)</td>
          </tr>
          <tr>
            <td style="text-align:left;">focus</td>
            <td style="text-align:left;">在 Input 获得焦点时触发</td>
            <td style="text-align:left;">(event: Event)</td>
          </tr>
          <tr>
            <td style="text-align:left;">search</td>
            <td style="text-align:left;">在 搜索按钮 被点击时触发</td>
            <td style="text-align:left;">(event: Event)</td>
          </tr>
          <tr>
            <td style="text-align:left;">list-click</td>
            <td style="text-align:left;">在 搜索历史的单项数据 被点击时触发</td>
            <td style="text-align:left;">(event: Event)</td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    handleShow(){
      this.isShow = !this.isShow
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/css/md.css');
.btnShow {
  margin-top: 10px;
  width: 30%;
  height: 30px;
  background-color: skyblue;
  border-radius: 5px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
</style>
