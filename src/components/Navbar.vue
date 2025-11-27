<script setup lang="ts">
import { Menu, Plus } from "lucide-vue-next";
import PopoverTrigger from "./ui/popover/PopoverTrigger.vue";
// import Button from "./ui/button/Button.vue";
import Popover from "./ui/popover/Popover.vue";
import PopoverContent from "./ui/popover/PopoverContent.vue";
import { useSidebar } from "./ui/sidebar/utils";

const { toggleSidebar } = useSidebar();
const props = defineProps({
  child: String,
});
</script>

<template>
  <div class="fixed w-full">
    <nav class="h-16 bg-gray-50 flex justify-between items-center px-4">
      <div class="kiri flex items-center gap-1 md:gap-3.5">
        <button
          class="p-2 rounded-full hover:bg-gray-200"
          @click="toggleSidebar"
        >
          <Menu class="w-6 h-6 rounded-full" />
        </button>

        <!-- <div v-html="props.child">
          {{ props.child }}
          <router-link to="#" class="flex items-center gap-2">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl">Classroom</h1>
          </router-link>
        </div> -->
        <slot name="child"></slot>
      </div>
      <div class="kanan">
        <Popover>
          <PopoverTrigger as-child>
            <button class="p-2 rounded-full hover:bg-gray-200">
              <Plus class="w-6 h-6 rounded-full" />
            </button>
          </PopoverTrigger>
          <PopoverContent class="w-auto px-0 py-2">
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Gabung ke kelas</router-link
            >
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Buat kelas</router-link
            >
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  </div>
</template>
