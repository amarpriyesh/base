<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority';

const componentClass = cva("border p-1 text-base font-primary", {
  variants: {
    intent: {
      primary: ["bg-zinc-50", "border-zinc-200", "text-zinc-950", "hover:bg-zinc-100", "hover:border-zinc-300", "disabled:bg-zinc-300", "disabled:border-zinc-400"],
      outlined: ["bg-zinc-950", "border-zinc-800", "text-zinc-100", "hover:bg-zinc-900", "hover:border-zinc-700", "disabled:bg-zinc-700", "disabled:border-zinc-500", "disabled:text-zinc-400"],
      "text-only": ["text-zinc-50", "bg-transparent", "border-0", "hover:bg-zinc-900", "hover:border", "hover:border-zinc-700", "disabled:text-zinc-400"],
    },
    shape: {
      edged: ["rounded-2xl"],
      rounded: ["rounded-3xl"],
    },
  }
})

type ComponentProps = VariantProps<typeof componentClass>;

export interface Props {
  intent?: ComponentProps["intent"],
  shape?: "rounded" | "edged",
  is?: "button" | "a" | "NuxtLink"
}

withDefaults(defineProps<Props>(), {
  intent: "primary",
  shape: "edged",
  is: "button",
});

const emits = defineEmits<{
  (e: 'click'): void;
}>()

const onClick = () => {
  emits('click');
}
</script>

<template>
  <component :is="is" :class="componentClass({intent, shape})" @click="onClick">
    <slot/>
  </component>
</template>