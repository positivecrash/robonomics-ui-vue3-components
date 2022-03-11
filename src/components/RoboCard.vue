<template>
    <div
        :class="classList"
    >
        <robo-progress v-if="loading || progress" :progress="progress" />

        <img v-if="imgSrc" :src="imgSrc" class="robo-card-image" aria-hidden="true"/>

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
    imgSrc: {
      type: String,
      default: null
    },
    imgPosition: {
      type: String,
      default: null
    }
  },

  computed: {
    classList() {
      return {
        [`robo-card`]: true,
        [`robo-card--solid`]: !this.outlined,
        [`robo-card--outlined`]: this.outlined,
        [`robo-card--disabled`]: this.disabled,
        [`robo-card-image--${this.imgPosition}`]: this.imgSrc && this.imgPosition,
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
        padding: var(--card-padding);
    }

    .robo-card--outlined {
        --color-card-background: var(--color-body);
        --card-border-color: var(--color-text);
        border: 1px solid var(--card-border-color)
    }

    .robo-card .robo-progress {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    .robo-card-image {
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      bottom: 0;
      right: 0;
      z-index: 0;
      pointer-events: none;
    }

    .robo-card-image--right-botom .robo-card-image {
      bottom: 0;
      right: 0;
    }

    .robo-card-image--right-top .robo-card-image {
      top: 0;
      right: 0;
    }

    .robo-card-image--left-top .robo-card-image {
      top: 0;
      left: 0;
    }

    .robo-card-image--left-bottom .robo-card-image {
      left: 0;
      bottom: 0;
    }

</style>

<style>
  .robo-card--disabled .robo-card-image, .robo-card--disabled .robo-card-section
    {
        pointer-events: none;
        filter: grayscale(1);
        opacity: 0.8;
    }

</style>