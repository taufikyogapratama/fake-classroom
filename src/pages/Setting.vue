<script setup lang="ts">
import Switch from "@/components/Switch.vue";
import { CircleUser } from "lucide-vue-next";
</script>

<template>
  <div>
    <div class="w-full max-w-[800px] mx-auto md:mt-10 border-2 rounded p-6">
      <h3 class="text-3xl">Profil</h3>
      <p class="my-2">Gambar profil</p>
      <div class="inline-block p-2 hover:bg-blue-100 rounded-4xl">
        <div class="flex items-center gap-2">
          <CircleUser class="w-7 h-7" />
          <router-link to="#" class="text-blue-600">Ubah</router-link>
        </div>
      </div>
      <p>Setelan akun</p>
      <p>
        Mengubah sandi dan opsi keamanan, serta mengakses layanan Google
        lainnya.
        <router-link to="#" class="text-blue-600">Kelola</router-link>
      </p>
      <p class="mt-5">Ganti nama</p>
      <p>
        Untuk mengganti nama Anda, buka
        <router-link to="#" class="text-blue-600">setelan akun</router-link>
      </p>
    </div>
    <div>
      <div class="w-full max-w-[800px] mx-auto mt-8 border-2 rounded p-6 mb-10">
        <h3 class="text-3xl">Notifikasi</h3>
        <p class="mt-5 text-2xl">Email</p>
        <p>
          Setelan ini berlaku untuk notifikasi yang diterima melalui email
          <router-link to="#" class="text-blue-600"
            >Pelajari lebih lanjut</router-link
          >
        </p>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Izinkan notifikasi email</p>
          <Switch />
        </div>
        <br />
        <h4 class="text-xl">Komentar</h4>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Komentar di postingan Anda</p>
          <Switch />
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Komentar yang menyebutkan Anda</p>
          <Switch />
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Komentar pribadi di tugas</p>
          <Switch />
        </div>
        <br />
        <h4 class="text-xl">Kelas tempat Anda terdaftar</h4>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Tugas dan postingan lainnya dari pengajar</p>
          <Switch />
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">
            Tugas yang dikembalikan dan nilai dari pengajar Anda
          </p>
          <Switch />
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">
            Undangan untuk mengikuti kelas sebagai siswa
          </p>
          <Switch />
        </div>
        <div class="flex justify-between items-center mt-3">
          <p class="font-semibold">Pengingat batas waktu untuk tugas Anda</p>
          <Switch />
        </div>
      </div>
    </div>
  </div>
</template>
