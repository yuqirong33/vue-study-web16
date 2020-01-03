<template>
  <div>
    <h2>组件通信</h2>
    <Child1 msg="你妈喊你吃饭了" @some-event="onSomeEvent"></Child1>
    <Child2 msg="你妈说你再不听话就把你关到小黑屋" @click="onClick"></Child2>
    <button @click="goHome">回家吃饭</button>
  </div>
</template>
<script>
import Child1 from "@/components/communication/Child1.vue";
import Child2 from "@/components/communication/Child2.vue";
export default {
  provide() {
    return {
      foo: "fooooooooooo"
    };
  },
  components: {
    Child1,
    Child2
  },
  methods: {
    onClick() {
      alert("来自老爹的回调函数处理", this);
    },
    goHome() {
      this.$children[0].eat();
    },
    onSomeEvent(msg) {
      alert("Communition:" + msg);
    }
  }
};
</script>