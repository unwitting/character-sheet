<template>
  <li>{{ name }} ({{ modifier }})</li>
</template>

<script>
export default {
  name: "Skill",
  props: {
    name: String,
    proficient: Boolean,
    modifier: Number,
  },
};
</script>

<style module></style>
