<script setup lang="ts">
import { CircleUser } from "lucide-vue-next";
</script>

<template>
  <div class="max-w-[800px] mx-auto pt-3">
    <h3 class="text-3xl mt-7 px-5 mb-3">Pengajar</h3>
    <hr class="my-3" />
    <div class="flex items-center gap-2 px-5">
      <CircleUser class="w-7 h-7" />
      <p class="text-sm">Jhon Doe</p>
    </div>
    <hr class="my-3" />
    <div class="mt-7 px-5 mb-3 flex justify-between">
      <h3 class="text-3xl">Teman sekelas</h3>
      <p>2 siswa</p>
    </div>
    <hr class="my-3" />
    <div class="flex items-center gap-2 px-5 mb-3">
      <CircleUser class="w-7 h-7" />
      <p class="text-sm">Windah</p>
    </div>
    <div class="flex items-center gap-2 px-5 mb-3">
      <CircleUser class="w-7 h-7" />
      <p class="text-sm">Agnes</p>
    </div>
  </div>
</template>
