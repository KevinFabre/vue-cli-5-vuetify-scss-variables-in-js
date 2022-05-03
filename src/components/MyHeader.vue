<template>
  <h2 :style="{ color: mediumcolor }"><slot /></h2>
</template>

<script>
import style from "@/styles/app.module.scss";

export default {
  data() {
    return {
      mediumcolor: style.mediumcolor,
    };
  },
};
</script>
