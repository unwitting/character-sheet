<template>
  <li>{{ name }}: {{ score }} ({{ modifier }})</li>
</template>

<script>
export default {
  name: "Ability",
  props: {
    name: String,
    score: Number,
    modifier: Number,
  },
};
</script>

<style module></style>
