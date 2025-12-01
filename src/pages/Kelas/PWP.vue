<script setup lang="ts">
import Forum from "./Forum.vue";
import Tugaskelas from "./Tugaskelas.vue";
import Orang from "./Orang.vue";
import { ref } from "vue";

const content = ref("forum");
</script>
<template>
  <div>
    <div
      class="navigation flex h-12 items-center justify-center md:justify-normal md:px-8"
    >
      <div
        class="forum hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'forum')"
        :class="
          content === 'forum' ? 'border-b-4 border-blue-400 text-blue-400' : ''
        "
      >
        Forum
      </div>
      <div
        class="tugaskelas hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'tugaskelas')"
        :class="
          content === 'tugaskelas'
            ? 'border-b-4 border-blue-400 text-blue-400'
            : ''
        "
      >
        Tugas kelas
      </div>
      <div
        class="orang hover:bg-gray-200 h-full flex items-center px-4 cursor-pointer"
        @click="() => (content = 'orang')"
        :class="
          content === 'orang' ? 'border-b-4 border-blue-400 text-blue-400' : ''
        "
      >
        Orang
      </div>
    </div>
    <Forum v-if="content === 'forum'" />
    <Tugaskelas v-if="content === 'tugaskelas'" />
    <Orang v-if="content === 'orang'" />
  </div>
</template>
