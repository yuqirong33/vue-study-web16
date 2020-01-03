
<template>
  <div>
    <h2 v-on="$listeners">child2</h2>
    <p>{{msg}}</p>
    <p>{{foo}}</p>
    <button @click="sendToChild1"></button>
    <p>{{$attrs.msg}}</p>
  </div>
</template>
<script>
export default {
  inject: ["foo"],
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    sendToChild1() {
      this.$parent.$emit("event-from-child2", "some msg from child2");
    }
  }
};
</script>