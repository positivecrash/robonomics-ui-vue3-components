<template>
    <div
        :class="classList"
    >
        <slot/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboCardSection',

  computed: {
    classList() {
      return {
        [`robo-card-section`]: true,
      };
    }
  }

})
</script>

<style scoped>

    .robo-card-section {
      position: relative;
      z-index: 1;
    }

    .robo-card-section:not(:last-child) {
        padding-bottom: var(--card-padding);
    }

    .robo-card-label + .robo-card-section {
        padding-top: calc(var(--card-padding) * 0.8);
    }

    .robo-card--outlined .robo-card-section:not(:last-child) {
      border-bottom: 1px solid var(--card-border-color);
      margin-bottom: var(--card-padding);
    }

</style>