<template>
    <!-- <component
        :is="tagTitle"
        :class="classList"
    >
        <slot/>
    </component> -->

    <div
        :class="classList"
    >
        <slot/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboCardTitle',

  props: {
    size: {
      type: Number,
      default: 1,
      validator(value) {
        // The value must match one of these strings
        return ['1', '2', '3'].includes(value)
      }
    },
  },

  computed: {
    classList() {
      return {
        [`robo-card-title`]: true,
        [`robo-card-title--${this.size}`]: true
      };
    },
    // tagTitle() {
    //   return 'h' + this.size
    // }
  }

})
</script>

<style scoped>
  .robo-card-title {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .robo-card-title--1 {
    font-size: calc(var(--font-size) * 1.5);
  }

  .robo-card-title--2 {
    font-size: calc(var(--font-size) * 1.2);
  }
</style>