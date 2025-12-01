<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClipboardList } from "lucide-vue-next";
</script>

<template>
  <Accordion type="single" collapsible class="w-full" default-value="item-1">
    <AccordionItem value="item-1">
      <AccordionTrigger>Tak ada batas waktu</AccordionTrigger>
      <AccordionContent> </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Selesai lebih awal</AccordionTrigger>
      <AccordionContent> </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Minggu ini</AccordionTrigger>
      <AccordionContent> </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Minggu lalu</AccordionTrigger>
      <AccordionContent> </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger>Lebih awal</AccordionTrigger>
      <AccordionContent>
        <div class="flex items-center justify-between mb-3">
          <div class="flex gap-5">
            <div class="bg-blue-500 inline-block p-2 rounded-full">
              <ClipboardList class="text-white" />
            </div>
            <div>
              <p>Tugas III: DOM Manipulation</p>
              <p class="text-sm">Pemrograman Web Praktik (IX)</p>
            </div>
          </div>
          <div class="text-right">
            <p>Diserahkan</p>
          </div>
        </div>
        <hr />
        <div class="flex items-center justify-between">
          <div class="flex gap-5">
            <div class="bg-blue-500 inline-block p-2 rounded-full">
              <ClipboardList class="text-white" />
            </div>
            <div>
              <p>Tugas II: DOM Selection</p>
              <p class="text-sm">Pemrograman Web Praktik (IX)</p>
            </div>
          </div>
          <div class="text-right">
            <p>Diserahkan</p>
            <p>Selesai terlambat</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
