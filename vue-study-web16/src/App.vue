<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Notice :title="title" :message="message"/> -->
    <!-- <SlotsCha></SlotsCha> -->
    <communication></communication>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Notice from "./components/Notice.vue";
// import SlotsCha from "./components/slots/index";
import Communication from "./components/communication/index";

export default {
  name: "app",
  components: {
    // HelloWorld
    // Notice,
    // SlotsCha,
    Communication
  },
  data() {
    return {
      title: "我是标题",
      message: "我是message"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
