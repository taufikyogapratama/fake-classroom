<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import { getLocalTimeZone, today } from "@internationalized/date";
import { Calendar } from "@/components/ui/calendar";
import { ref, type Ref } from "vue";

const date = ref(today(getLocalTimeZone())) as Ref<DateValue>;
const defaultPlaceholder = today(getLocalTimeZone());
</script>

<template>
  <div>
    <div class="flex justify-center md:justify-normal md:px-5 mt-5 mb-5">
      <select class="min-w-80 h-10 border">
        <option value="Semua kelas">Semua kelas</option>
        <option value="pemrograman web praktik">
          Pemrograman Web Praktik (IX)
        </option>
      </select>
    </div>
    <div>
      <Calendar
        v-model="date"
        :default-placeholder="defaultPlaceholder"
        weekday-format="short"
        class="shadow-sm **:data-[slot=calendar-cell-trigger]:size-12!"
      ></Calendar>
    </div>
  </div>
</template>
