<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    function myref(value,delay) {
		let timer
      // console.log('--myRef', value);
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef提取数据,给${value}`);
            track(); //追踪value的值
            return value;
          },
          set(newValue) {
            console.log(`有人从myRef数据改了${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }
    // let keyWord = ref("hello");//内置ref
    let keyWord = myref("hello"); //内置ref
    return { keyWord };
  },
};
</script>

