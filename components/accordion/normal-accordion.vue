<script setup lang="ts">
const mode = useColorMode();

const isLight = computed((): boolean => mode.preference === "light");

console.log(mode.preference);

interface Item {
  label: string;
  icon: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  content: string;
}

const items: Item[] = [
  {
    label: "Getting Started",
    icon: "i-heroicons-information-circle",
    defaultOpen: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Installation",
    icon: "i-heroicons-arrow-down-tray",
    disabled: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Theming",
    icon: "i-heroicons-eye-dropper",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Layouts",
    icon: "i-heroicons-rectangle-group",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Components",
    icon: "i-heroicons-square-3-stack-3d",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "Utilities",
    icon: "i-heroicons-wrench-screwdriver",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<template>
  <UAccordion
    :items="items"
    :color="isLight ? 'green' : 'white'"
    class="acordion space-y-4"
    multiple
    variant="solid"
  />
</template>
