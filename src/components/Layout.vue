<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import SidebarProvider from "./ui/sidebar/SidebarProvider.vue";
import { ChevronRight } from "lucide-vue-next";
import { useRoute } from "vue-router";

const pages = useRoute();
</script>

<template>
  <SidebarProvider>
    <Navbar>
      <!-- <template v-slot:child> -->
      <template #child>
        <router-link
          v-if="pages.name === 'Beranda'"
          to="/"
          class="flex items-center gap-2"
        >
          <img src="../assets/logo.svg" alt="logo" class="w-7" />
          <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
        </router-link>

        <div
          v-if="pages.name === 'Daftar tugas'"
          class="flex items-center gap-2"
        >
          <router-link to="/" class="items-center gap-2 hidden md:flex">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
          </router-link>
          <ChevronRight class="w-8 h-8 pt-2 hidden md:block" />
          <h3 class="text-xl mt-1">Daftar tugas</h3>
        </div>

        <div v-if="pages.name === 'Kalender'" class="flex items-center gap-2">
          <router-link to="/" class="items-center gap-2 hidden md:flex">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
          </router-link>
          <ChevronRight class="w-8 h-8 pt-2 hidden md:block" />
          <h3 class="text-xl mt-1">Kalender</h3>
        </div>

        <div v-if="pages.name === 'PWP'" class="flex items-center gap-2">
          <router-link to="/" class="items-center gap-2 hidden md:flex">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
          </router-link>
          <ChevronRight class="w-8 h-8 pt-2 hidden md:block" />
          <h3 class="text-xl mt-1">Pemrograman Web Praktik (IX)</h3>
        </div>

        <div
          v-if="pages.name === 'Kelas arsip'"
          class="flex items-center gap-2"
        >
          <router-link to="/" class="items-center gap-2 hidden md:flex">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
          </router-link>
          <ChevronRight class="w-8 h-8 pt-2 hidden md:block" />
          <h3 class="text-xl mt-1">Kelas yang diarsipkan</h3>
        </div>

        <div v-if="pages.name === 'Setting'" class="flex items-center gap-2">
          <router-link to="/" class="items-center gap-2 hidden md:flex">
            <img src="../assets/logo.svg" alt="logo" class="w-7" />
            <h1 class="text-2xl hover:text-blue-500">Classroom</h1>
          </router-link>
          <ChevronRight class="w-8 h-8 pt-2 hidden md:block" />
          <h3 class="text-xl mt-1">Setelan</h3>
        </div>
      </template>
    </Navbar>

    <Sidebar />
    <!-- <router-view /> -->
  </SidebarProvider>
</template>

<style scoped></style>
