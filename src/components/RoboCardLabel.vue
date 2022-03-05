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
  name: 'RoboCardLabel',

  computed: {
    classList() {
      return {
        [`robo-card-label`]: true
      };
    }
  }

})
</script>

<style scoped>
  .robo-card .robo-card-label {
    position: absolute;
    left: calc(var(--space) * (-1));
    top: calc(var(--card-label-height) * 0.5 * (-1));
    height: var(--card-label-height);
    font-size: calc(var(--font-size) * 0.7);
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }

  .robo-card:not(.robo-card--outlined) .robo-card-label {
    background-color: var(--color-text);
    color: var(--color-card-background)
  }

  .robo-card--outlined .robo-card-label {
    border: 1px solid var(--color-text)
  }
</style>