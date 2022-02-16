<template>
    <component 
      :is="href ? 'a' : 'button'"
      :href="href"
      :disabled="disableCompute"
      :class="classList"
      :target="external() ? '_blank' : null"
      :rel="external() ? 'noopener' : null"
    >

      <span class="robo-btn--part" v-if="$slots.default">
        <robo-loader v-if="loading" />
        <slot />
      </span>

      <span class="robo-btn--part" v-if="right">{{right}}</span>

    </component>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoboButton',

  props: {
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'ok', 'alarm', 'na'].indexOf(value) !== -1;
      }
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: String,
      default: null,
      validator: function (value) {
        return ['disabled', 'success', 'error'].indexOf(value) !== -1;
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal',
      validator: function (value) {
        return ['small', 'normal', 'big'].indexOf(value) !== -1;
      }
    },
    right: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    classList() {
      return {
        [`robo-btn`]: true,
        [`robo-btn--${this.type}`]: true,
        [`robo-btn--outlined`]: this.outlined,
        [`robo-btn--disabled-${this.disabled}`]: this.disabled,
        [`robo-container--full`]: this.block,
        [`robo-btn--size-${this.size}`]: this.size,
      };
    },
    disableCompute(){
      if(this.disabled || this.loading) {
        return true
      } else {
        return null
      }
    }
  },

  methods: {
    external() {
      
      if( this.href ) {
        let parser = document.createElement('a')
        parser.href = this.href
        if (  parser.host !== window.location.host ) {
          return true
        }
      }
    }
  }

  // components: {
  //   RoboLoading: () => import('RoboLoading')
  // }

})
</script>

<style scoped>
  .robo-btn {
    --border: var(--color-blue);
    --background: var(--color-blue);
    --color: #fff;

    --border-hover: #000;
    --background-hover: #000;
    --color-hover: #fff;

    --border-2: var(--color-blue);
    --background-2: transparent;
    --color-2: var(--color-blue);

    --border-2-hover: #000;
    --background-2-hover: transparent;
    --color-2-hover: #000;

    --padding-top: var(--space);
    --padding-bottom: calc(var(--space) * 2);
    --text-size: var(--font-size);

    appearance: none;
    text-decoration: none;
    cursor: pointer;
    border: 0;

    font-family: var(--font-family);
    font-size: var(--text-size);
    font-weight: bold;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .robo-btn--part {
    display: inline-block;
    padding: var(--padding-top) var(--padding-bottom);
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) all;
  }

  .robo-container--full .robo-btn--part {
    display: block;
  }

  /* Colors code */
  .robo-btn .robo-btn--part:nth-child(2n+1) {
    border: 1px solid var(--border);
    background-color: var(--background);
    color: var(--color);
  }

  .robo-btn:hover .robo-btn--part:nth-child(2n+1) {
    background-color: var(--background-hover);
    border-color: var(--border-hover);
    color: var(--color-hover);
  }

  .robo-btn .robo-btn--part:nth-child(2n) {
    border: 1px solid var(--border-2);
    background-color: var(--background-2);
    color: var(--color-2);
  }

  .robo-btn:hover .robo-btn--part:nth-child(2n) {
    background-color: var(--background-2-hover);
    border-color: var(--border-2-hover);
    color: var(--color-2-hover);
  }
  /* end of Colors code */

  /* Outlined */
  .robo-btn.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-blue);
    --background: transparent;
    --color: var(--color-blue);

    --border-hover: #000;
    --background-hover: transparent;
    --color-hover: #000;
  }

  .robo-btn.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-blue);
    --background-2: var(--color-blue);
    --color-2: #fff;

    --border-2-hover: #000;
    --background-2-hover: #000;
    --color-2-hover: #fff;
  }
  /* end of Outlined */


  /* Ok */
  .robo-btn.robo-btn--ok .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-green);
    --background: var(--color-green);
  }

  .robo-btn.robo-btn--ok .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-green);
    --color-2: var(--color-green);
  }

  .robo-btn.robo-btn--ok.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-green);
    --background: transparent;
    --color: var(--color-green);
  }

  .robo-btn.robo-btn--ok.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-green);
    --background-2: var(--color-green);
    --color-2: #fff;
  }
  /* end of Ok */

  /* Alarm */
  .robo-btn.robo-btn--alarm .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-red);
    --background: var(--color-red);
  }

  .robo-btn.robo-btn--alarm .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-red);
    --color-2: var(--color-red);
  }

  .robo-btn.robo-btn--alarm.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-red);
    --background: transparent;
    --color: var(--color-red);
  }

  .robo-btn.robo-btn--alarm.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-red);
    --background-2: var(--color-red);
    --color-2: #fff;
  }
  /* end of Alarm */

  /* Na */
  .robo-btn.robo-btn--na .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-gray);
    --background: var(--color-gray);
  }

  .robo-btn.robo-btn--na .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-gray);
    --color-2: var(--color-gray);
  }

  .robo-btn.robo-btn--na.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-gray);
    --background: transparent;
    --color: var(--color-gray);
  }

  .robo-btn.robo-btn--na.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-gray);
    --background-2: var(--color-gray);
    --color-2: #fff;
  }
  /* end of Na */


  /* Disabled */
  .robo-btn[disabled] {
    cursor: not-allowed;
  }

  .robo-btn[disabled] .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-gray);
    --background: var(--color-gray);
    --color: #fff;
    --border-hover: var(--color-gray);
    --background-hover: var(--color-gray);
    --color-hover: #fff;
  }

  .robo-btn[disabled] .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-gray);
    --background-2: transparent;
    --color-2: var(--color-gray);
    --border-2-hover: var(--color-gray);
    --background-2-hover: transparent;
    --color-2-hover: var(--color-gray);
  }

  .robo-btn[disabled].robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-gray);
    --background: transparent;
    --color: var(--color-gray);
    --border-hover: var(--color-gray);
    --background-hover: transparent;
    --color-hover: var(--color-gray);
  }

  .robo-btn[disabled].robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-gray);
    --background-2: var(--color-gray);
    --color-2: #fff;
    --border-2-hover: var(--color-gray);
    --background-2-hover: var(--color-gray);
    --color-2-hover: #fff;
  }

  .robo-btn.robo-btn--disabled-success .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-green);
    --background: var(--color-green);
    --color: #fff;
    --border-hover: var(--color-green);
    --background-hover: var(--color-green);
    --color-hover: #fff;
  }

  .robo-btn.robo-btn--disabled-success .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-green);
    --background-2: transparent;
    --color-2: var(--color-green);
    --border-2-hover: var(--color-green);
    --background-2-hover: transparent;
    --color-2-hover: var(--color-green);
  }

  .robo-btn.robo-btn--disabled-success.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-green);
    --background: transparent;
    --color: var(--color-green);
    --border-hover: var(--color-green);
    --background-hover: transparent;
    --color-hover: var(--color-green);
  }

  .robo-btn.robo-btn--disabled-success.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-green);
    --background-2: var(--color-green);
    --color-2: #fff;
    --border-2-hover: var(--color-green);
    --background-2-hover: var(--color-green);
    --color-2-hover: #fff;
  }

  .robo-btn.robo-btn--disabled-error .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-red);
    --background: var(--color-red);
    --color: #fff;
    --border-hover: var(--color-red);
    --background-hover: var(--color-red);
    --color-hover: #fff;
  }

  .robo-btn.robo-btn--disabled-error .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-red);
    --background-2: transparent;
    --color-2: var(--color-red);
    --border-2-hover: var(--color-red);
    --background-2-hover: transparent;
    --color-2-hover: var(--color-red);
  }

  .robo-btn.robo-btn--disabled-error.robo-btn--outlined .robo-btn--part:nth-child(2n+1) {
    --border: var(--color-red);
    --background: transparent;
    --color: var(--color-red);
    --border-hover: var(--color-red);
    --background-hover: transparent;
    --color-hover: var(--color-red);
  }

  .robo-btn.robo-btn--disabled-error.robo-btn--outlined .robo-btn--part:nth-child(2n) {
    --border-2: var(--color-red);
    --background-2: var(--color-red);
    --color-2: #fff;
    --border-2-hover: var(--color-red);
    --background-2-hover: var(--color-red);
    --color-2-hover: #fff;
  }
  /* end of Disabled */

  /* Sizes */
  .robo-btn.robo-btn--size-small {
    --padding-top: calc(var(--space) * 0.5);
    --padding-bottom: var(--space);
    --text-size: calc(var(--font-size) * 0.7);
  }
  .robo-btn.robo-btn--size-big {
    --padding-top: calc(var(--space) * 2);
    --padding-bottom: calc(var(--space) * 4);
    --text-size: calc(var(--font-size) * 1.3);
  }
  /* end of Sizes */
</style>

<style>
/* Loaders */
  .robo-btn .robo-loader {
    margin-right: var(--space);
  }

  .robo-btn .robo-loader--stroke {
    stroke: var(--color) !important
  }

  .robo-btn .robo-loader--fill {
    fill: var(--color) !important
  }
  /* end of Loaders */
</style>