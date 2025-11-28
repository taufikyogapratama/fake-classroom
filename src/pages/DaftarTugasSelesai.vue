<script setup lang="ts"></script>

<template>
  <div>
    <div class="mt-5 w-full md:w-96 px-5">
      <select class="h-10 border px-3 w-full">
        <option value="Semua kelas">Semua kelas</option>
        <option value="pemrograman web praktik">
          Pemrograman Web Praktik (IX)
        </option>
      </select>
    </div>
    <div class="mt-5 w-full md:w-[600px] px-5">
      <select class="h-10 px-3 w-full">
        <option>Tak ada batas waktu</option>
      </select>
      <select class="h-10 px-3 w-full">
        <option>Selesai lebih awal</option>
      </select>
      <select class="h-10 px-3 w-full">
        <option>Minggu ini</option>
      </select>
      <select class="h-10 px-3 w-full">
        <option>Minggu lalu</option>
      </select>
      <select class="h-10 px-3 w-full">
        <option>Lebih awal</option>
      </select>
    </div>
  </div>
</template>
