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
        padding: calc(var(--space) * 2);
    }

</style>