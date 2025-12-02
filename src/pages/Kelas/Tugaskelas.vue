<script setup lang="ts">
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import { ClipboardList, EllipsisVertical, Pencil } from "lucide-vue-next";
</script>

<template>
  <div class="px-3.5 mt-4">
    <div class="max-w-[800px] mx-auto pt-3">
      <div class="text-center md:text-end">
        <div class="p-2 bg-blue-300 rounded-3xl mb-3 inline-block">
          <div class="flex gap-3 items-center">
            <Pencil class="w-3" />
            <p class="text-xs">Pengumuman baru</p>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-between mb-5 bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-2xl"
      >
        <div class="flex gap-5 text-nowrap overflow-hidden">
          <div class="bg-blue-500 inline-block p-2 rounded-full">
            <ClipboardList class="text-white" />
          </div>
          <div>
            <p>Jhon Doe memposting tugas baru: Tugas III: DOM Manipulation</p>
            <p class="text-sm">Tenggat: 25 Nov 2025</p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger as-child>
            <button class="p-2 rounded-full hover:bg-gray-200">
              <EllipsisVertical />
            </button>
          </PopoverTrigger>
          <PopoverContent class="w-auto px-0 py-2">
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Salin link</router-link
            >
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Laporkan penyalahgunaan</router-link
            >
          </PopoverContent>
        </Popover>
      </div>

      <div
        class="flex items-center justify-between mb-5 bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-2xl"
      >
        <div class="flex gap-5 text-nowrap overflow-hidden">
          <div class="bg-blue-500 inline-block p-2 rounded-full">
            <ClipboardList class="text-white" />
          </div>
          <div>
            <p>Jhon Doe memposting tugas baru: Tugas II: DOM Selection</p>
            <p class="text-sm">Tenggat: 15 Nov 2025</p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger as-child>
            <button class="p-2 rounded-full hover:bg-gray-200">
              <EllipsisVertical />
            </button>
          </PopoverTrigger>
          <PopoverContent class="w-auto px-0 py-2">
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Salin link</router-link
            >
            <router-link class="block hover:bg-gray-200 p-2" to="#"
              >Laporkan penyalahgunaan</router-link
            >
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </div>
</template>
