<template>
  <div id="app">
    <DialogGroup/>
    <ButtonGroup/>
    <h1>keepUI </h1>
    <h3>keepUI ,一套基于 Vue 2.0 简约而不简单的webPC端组件库</h3>
    <InputGroup/>

    
    
  </div>
</template>

<script>
import InputGroup from './components/input';
import ButtonGroup from './components/button';
import DialogGroup from './components/dialog'

export default {
  components:{
    InputGroup,
    ButtonGroup,
    DialogGroup
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>


#app {
  padding: 0 30px;
  width: 60%;
  margin: 0 auto;
}
</style>
