<template>
  <h1>信息</h1>
  <h2 >姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
   <button @click="test">测试触发一下Demo组件</button>

</template>

<script>
import {  reactive } from "vue";
export default {
  name: "Demo",
  props:['msg','school'],
  emits:['hello'],
  setup(props,context){
    // console.log('---setup ---',props);
    // console.log('---setup ---',context);
    console.log('---setup ---',context.emit);
    // console.log('---setup ---',context.attrs);
    console.log('---setup ---',context.slots);


    //数据
    let person = reactive({
      name:'张三',
      age:18
    })
    function test(){
	context.emit('hello',666)
    }
    return {
       person,
       test
    }
  }
};
</script>

<style>
</style>
