# keep-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## keepUI 

keepUI ,一套基于 Vue 2.0 简约而不简单的webPC端组件库



## 引入方式：按需引入

1. **将src/keep-ui的文件引入到自己的项目中**

2. **在main.js中进行如下引入：**

```js
import keSearchBox from './keep-ui/ke-search-box.vue'
...
//注册成全局组件，即可开始使用
Vue.component("ke-search-box",keSearchBox)
...
```


##  Input 输入框

### 搜索框  `ke-search-box`

```html
	<ke-search-box 
      @list-click="handleListClick"
      @focus="handleListFocus($event)"
      @blur="handleListBlur($event)"
      @search="handleListSearch($event)" 
	/>
```

### Input Attributes

| name | 说明 |
| :--- | :--- |
|      |      |

### Input Events

| 事件名称 | 说明                    | 回调参数                  |
| :------- | :---------------------- | :------------------------ |
| blur     | 在 Input 失去焦点时触发 | (event: Event)            |
| focus    | 在 Input 获得焦点时触发 | (event: Event)            |
| search   | 在 搜索按钮 被点击时触发 | (event: Event) |
| list-click   | 在 搜索历史的单项数据 被点击时触发 | (event: Event) |


