<template>
    <div
        :class="classList"
    >
        <robo-progress v-if="loading || progress" :progress="progress" />

        <slot/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboCard',

  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    progress: {
      type: Number,
      default: null
    },
  },

  computed: {
    classList() {
      return {
        [`robo-card`]: true,
        [`robo-card--outlined`]: this.outlined,
        [`robo-card--disabled`]: this.disabled
      };
    }
  }

})
</script>

<style scoped>

    .robo-card {
        background-color: var(--color-card-background);
        color: var(--color-text);
        position: relative;
    }

    .robo-card--outlined {
        background-color: transparent;
        border: 1px solid var(--color-text)
    }

    .robo-card--disabled {
        pointer-events: none;
        filter: grayscale(1);
        opacity: 0.8;
    }

</style>