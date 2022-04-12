<template>
  <h2 :style="{ color: mediumcolor }"><slot /></h2>
</template>

<script>
import { mediumcolor } from "@/styles/app.module.scss";

export default {
  data() {
    return {
      mediumcolor,
    };
  },
};
</script>
