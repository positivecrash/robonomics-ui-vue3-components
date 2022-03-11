<template>
    <div class="robo-select">
      <select :name="name">
        <option v-for="(option,index) in options" :key="index" :value="index">{{option}}</option>
      </select>

      <font-awesome-icon icon="sort-down" class="icon" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboSelect',

  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: null,
      required: true
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
    display: block;
    width: 100%;

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

</style>