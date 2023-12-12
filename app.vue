<template>
  <div class="mt-10">
    <UContainer>
      <!-- Accordion -->
      <AccordionNormalAccordion />
      <AccordionCustomAccordion class="mt-10" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

colorMode.preference = "dark";
</script>
