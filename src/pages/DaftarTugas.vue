<script setup lang="ts">
import DaftarTugasDitugaskan from "./DaftarTugasDitugaskan.vue";
import DaftarTugasBelum from "./DaftarTugasBelum.vue";
import DaftarTugasSelesai from "./DaftarTugasSelesai.vue";
import { ref } from "vue";
const content = ref("ditugaskan");
</script>
<template>
  <div>
    <div
      class="navigation flex h-12 items-center justify-center md:justify-normal md:px-8"
    >
      <div
        class="ditugaskan hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'ditugaskan')"
        :class="
          content === 'ditugaskan'
            ? 'border-b-4 border-blue-400 text-blue-400'
            : ''
        "
      >
        Ditugaskan
      </div>
      <div
        class="belumDiserahkan hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'belum diserahkan')"
        :class="
          content === 'belum diserahkan'
            ? 'border-b-4 border-blue-400 text-blue-400'
            : ''
        "
      >
        Belum diserahkan
      </div>
      <div
        class="selesai hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'selesai')"
        :class="
          content === 'selesai'
            ? 'border-b-4 border-blue-400 text-blue-400'
            : ''
        "
      >
        Selesai
      </div>
    </div>
    <DaftarTugasDitugaskan v-if="content === 'ditugaskan'" />
    <DaftarTugasBelum v-if="content === 'belum diserahkan'" />
    <DaftarTugasSelesai v-if="content === 'selesai'" />
  </div>
</template>
