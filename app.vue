<template>
  <div class="mt-5">
    <UContainer>
      <!-- Accordion -->
      <AccordionNormalAccordion />
      <AccordionCustomAccordion class="mt-5" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

colorMode.preference = "dark";
</script>
