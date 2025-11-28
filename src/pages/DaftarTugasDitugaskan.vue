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
    <div>
      <img
        src="../assets/empty.svg"
        alt="image empty"
        class="w-80 mx-auto mt-10"
      />
      <p class="text-center font-semibold text-gray-600">
        Tidak ada apa pun di daftar tugas Anda saat ini
      </p>
      <p class="text-center font-semibold text-gray-600">
        Periksa kembali nanti untuk tugas baru
      </p>
    </div>
  </div>
</template>
