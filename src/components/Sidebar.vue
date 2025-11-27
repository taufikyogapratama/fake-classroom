<script setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  ArchiveRestore,
  Calendar,
  ChevronDown,
  ChevronRight,
  CircleUser,
  ClipboardList,
  GraduationCap,
  House,
  Settings,
} from "lucide-vue-next";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import SidebarMenuSub from "./ui/sidebar/SidebarMenuSub.vue";
import SidebarMenuSubItem from "./ui/sidebar/SidebarMenuSubItem.vue";
import SidebarMenuSubButton from "./ui/sidebar/SidebarMenuSubButton.vue";
import { useRoute } from "vue-router";

const pages = useRoute();
</script>

<template>
  <Sidebar class="mt-16">
    <SidebarHeader>
      <SidebarMenuButton size="lg" class="hover:bg-gray-200 rounded-3xl">
        <div>
          <CircleUser class="w-8 h-8 rounded-full" />
        </div>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">Taufik Yoga</span>
          <span class="truncate text-xs">taufikyoga333@gmail.com</span>
        </div>
      </SidebarMenuButton>
      <SidebarMenuButton
        size="lg"
        class="hover:bg-gray-200 rounded-3xl mt-4"
        :class="pages.name === 'Beranda' ? 'bg-blue-300 hover:bg-blue-200' : ''"
      >
        <router-link to="/" class="w-full flex items-center gap-2">
          <div class="rounded-full"><House class="w-6 h-6 ml-1" /></div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">Beranda</span>
          </div>
        </router-link>
      </SidebarMenuButton>
      <SidebarMenuButton
        size="lg"
        class="rounded-3xl -mt-1.5"
        :class="
          pages.name === 'Kalender'
            ? 'bg-blue-300 hover:bg-blue-200'
            : 'hover:bg-gray-200'
        "
        ><router-link to="/kalender" class="w-full flex items-center gap-2">
          <div class="rounded-full"><Calendar class="w-6 h-6 ml-1" /></div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">kalender</span>
          </div></router-link
        >
      </SidebarMenuButton>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup as-child>
        <Collapsible default-open class="group/collapsible">
          <SidebarGroupLabel as-child>
            <CollapsibleTrigger
              class="group/label w-full h-12 text-left text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground [&[data-state=open]>svg]:rotate-90"
            >
              <div>
                <!-- <CircleUser class="w-8 h-8 rounded-full" /> -->
                <GraduationCap class="w-6 h-6 ml-1" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight ml-2">
                <span class="truncate font-semibold">Terdaftar</span>
              </div>
              <ChevronRight
                class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
              />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                <!-- Menu items -->
                <router-link
                  to="/daftar-tugas"
                  class="rounded-3xl flex items-center gap-2 px-2 h-12"
                  :class="
                    pages.name === 'Daftar tugas'
                      ? 'bg-blue-300 hover:bg-blue-200'
                      : 'hover:bg-gray-200'
                  "
                >
                  <div class="rounded-full">
                    <ClipboardList class="w-6 h-6 ml-1" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">Daftar tugas</span>
                  </div>
                </router-link>
                <router-link
                  to="/pemrograman-web-praktik"
                  class="rounded-3xl flex items-center gap-2 px-2 h-12"
                  :class="
                    pages.name === 'PWP'
                      ? 'bg-blue-300 hover:bg-blue-200'
                      : 'hover:bg-gray-200'
                  "
                >
                  <div class="rounded-full">
                    <!-- <img src="" alt=""> -->
                    <div
                      class="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full"
                    >
                      P
                    </div>
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold"
                      >Pemrograman Web Praktik (IX)</span
                    >
                  </div>
                </router-link>
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarGroup>
      <router-link
        to="/kelas-arsip"
        class="rounded-3xl flex items-center gap-2 px-2 mx-2 h-12 mt-1"
        :class="
          pages.name === 'Kelas arsip'
            ? 'bg-blue-300 hover:bg-blue-200'
            : 'hover:bg-gray-200'
        "
      >
        <div class="rounded-full"><ArchiveRestore class="w-6 h-6 ml-1" /></div>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">Kelas yang diarsipkan</span>
        </div>
      </router-link>
      <router-link
        to="/setting"
        class="rounded-3xl flex items-center gap-2 px-2 mx-2 h-12 mt-1"
        :class="
          pages.name === 'Setting'
            ? 'bg-blue-300 hover:bg-blue-200'
            : 'hover:bg-gray-200'
        "
      >
        <div class="rounded-full"><Settings class="w-6 h-6 ml-1" /></div>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">Setelan</span>
        </div>
      </router-link>
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
  <SidebarInset class="mt-16">
    <router-view />
  </SidebarInset>
</template>
