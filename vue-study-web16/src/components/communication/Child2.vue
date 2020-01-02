
<template>
  <div>
    <h2>child2</h2>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick() {}
  }
};
</script>