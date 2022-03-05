<template>
    <div class="robo-select">
      <select>
        <option v-for="option in options" :key="option.id">{{option}}</option>
      </select>

      <font-awesome-icon icon="sort-down" class="icon" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboSelect',

  props: {
    options: {
      type: Array,
      default: null
    },
  }

})
</script>

<style scoped>

  .robo-select, select {
    cursor: pointer;
  }

  .robo-select {
    display: flex;
    align-items: center;

    background-color: var(--input-bg);
    color: var(--input-text-color);
    border: var(--input-border-width) solid var(--input-border-color);
    cursor: pointer;

    position: relative;
  }

  select {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: bold;
    --webkit-appearance: none;
    appearance: none;
    border: 0;

    padding-left: var(--input-padding-g);
    padding-right: calc(var(--input-padding-g) + var(--select-tog-size));
    padding-top: var(--input-padding-v);
    padding-bottom: var(--input-padding-v);
  }

  .icon {
    position: absolute;
    right: calc(var(--input-padding-g) * 0.5);
    top: calc(50% - var(--select-tog-size) * 0.5);
    pointer-events: none;
  }

  /* select {
    border: 0;
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: bold;
    --webkit-appearance: none;
    appearance: none;
    cursor: pointer;

    background-color: var(--input-bg);
    color: var(--input-text-color);
    border: var(--input-border-width) solid var(--input-border-color);
    padding-left: var(--input-padding-g);
    padding-right: var(--input-padding-g);
    padding-top: var(--input-padding-v);
    padding-bottom: var(--input-padding-v);
  } */

</style>