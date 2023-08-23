//引入到不再是Vue构造函数，引入到是一个名为createApp的工厂函数
// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'

// //创建应用实例对象
// const app = createApp(App)

// app.mount('#app')


console.log('&&&&',Vue);
const vm = new Vue({
    render :h => h(App)
})
vm.$mount('#app')
 

