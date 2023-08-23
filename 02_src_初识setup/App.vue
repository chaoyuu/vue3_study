<template>
  <h1>我是app</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别{{ sex }}</h2>
  <h2>a的值是{{ a }}</h2>


  <button @click="sayHello">说话(vue3)</button>
  <br />
  <button @click="sayWelcome">说话(vue2)</button>
  <br />
  <br />
  <button @click="test1">测试vue2里的vue3的数据</button>
  <br />
  <br />
  <button @click="test2">测试vue3的setup中里的vue3的数据</button>
</template>

<script>
// import  {h} from 'vue'
export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("我是大王");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    },
  },
  //此处测试
  async setup() {
    let name = "yuyu";
    let age = 18;
    let a   =200;

    //方法

    function sayHello() {
      alert(`我叫${name}, 我${age}岁了,你好啊!`);
    }
    function test2() {
      console.log(this.sex);
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sayWelcome);
    }
    // 返回一个对象 （常用）
    return {
      name,
      age,
      sayHello,
      test2,
      a
    };
    // return ()=>  h('h1','yuyu')
  },
};
</script>

<style>
</style>
