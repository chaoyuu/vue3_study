<template>
  <h1>信息</h1>
  姓： <input type="text" v-model="person.firstName">
  名： <input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名： <input type="text" v-model="person.fullName">
</template>

<script>
import {  reactive,computed } from "vue";
export default {
  name: "Demo",
 
  props:['msg','school'],
  emits:['hello'],
  setup(){
     //数据
    let person = reactive({
      firstName:'张',
      lastName:'四'
     
    })
     //计算属性
     /* person.fullName = computed(() => {
         return person.firstName + '-' + person.lastName
     }) */
     //读写
     person.fullName = computed({
        get(){
          return person.firstName + '-' + person.lastName
        },
        set(value){
           const nameArr = value.split('-')
           person.firstName = nameArr[0]
           person.lastName = nameArr[1]

        }
     }) 
    return {
       person,
       
    }
  }
};
</script>

<style>
</style>
