<script setup lang="ts">
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import { ContactRound, EllipsisVertical, FolderClosed } from "lucide-vue-next";
</script>
<template>
  <div
    class="flex justify-center md:justify-normal gap-5 md:mx-6 md:gap-10 flex-wrap mt-3"
  >
    <div class="w-80 rounded-xl border border-gray-300">
      <header
        class="bg-gray-500 rounded-t-xl h-24 flex flex-col justify-center px-4 relative"
      >
        <router-link
          to="/pemrograman-web-praktik"
          class="text-2xl text-white text-nowrap overflow-hidden hover:underline"
          >Pemrograman Web Praktik (IX)</router-link
        >
        <p class="text-white text-nowrap overflow-hidden hover:underline">
          Jhon Doe
        </p>
        <!-- <img src="" alt=""> -->
        <div
          class="w-18 h-18 bg-green-500 rounded-full absolute right-5 -bottom-9"
        ></div>
      </header>
      <main class="h-20"></main>
      <footer
        class="flex justify-end gap-2 px-3 h-16 items-center rounded-b-xl border-t border-gray-300"
      >
        <button class="p-2 rounded-full hover:bg-gray-200">
          <contact-round />
        </button>
        <button class="p-2 rounded-full hover:bg-gray-200">
          <folder-closed />
        </button>
        <Popover>
          <PopoverTrigger as-child>
            <button class="p-2 rounded-full hover:bg-gray-200">
              <ellipsis-vertical />
            </button>
          </PopoverTrigger>
          <PopoverContent class="w-auto px-0 py-2">
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Batalkan pendaftaran</router-link
            >
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Laporkan penyalahgunaan</router-link
            >
          </PopoverContent>
        </Popover>
      </footer>
    </div>
  </div>
</template>
