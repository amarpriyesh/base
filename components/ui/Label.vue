<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority';

const componentClass = cva("border p-2 text-base font-primary", {
  variants: {
    intent: {
      special: '',
      white: '',
      black: '',
    },
  }
})

type ComponentProps = VariantProps<typeof componentClass>;

export interface Props {
  intent?: ComponentProps["intent"],
}

withDefaults(defineProps<Props>(), {
  intent: 'black',
});
</script>

<template>
  <span :class="componentClass({intent})">
    <slot/>
  </span>
</template>