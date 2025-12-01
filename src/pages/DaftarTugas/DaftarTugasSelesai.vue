<script setup lang="ts">
import Accordion from "@/components/Accordion.vue";
</script>

<template>
  <div>
    <div class="mt-5 w-full md:w-96 px-5">
      <select class="h-10 border px-3 w-full">
        <option value="Semua kelas">Semua kelas</option>
        <option value="pemrograman web praktik">
          Pemrograman Web Praktik (IX)
        </option>
      </select>
    </div>
    <div class="mt-5 w-full md:w-[600px] px-6 md:px-5">
      <Accordion />
    </div>
  </div>
</template>
