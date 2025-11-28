import Beranda from "@/pages/Beranda.vue";
import DaftarTugas from "@/pages/DaftarTugas.vue";
import DaftarTugasBelum from "@/pages/DaftarTugasBelum.vue";
import DaftarTugasDitugaskan from "@/pages/DaftarTugasDitugaskan.vue";
import DaftarTugasSelesai from "@/pages/DaftarTugasSelesai.vue";
import Kalender from "@/pages/Kalender.vue";
import KelasArsip from "@/pages/KelasArsip.vue";
import PWP from "@/pages/PWP.vue";
import Setting from "@/pages/Setting.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Beranda",
    component: Beranda,
  },
  {
    path: "/kalender",
    name: "Kalender",
    component: Kalender,
  },
  {
    path: "/daftar-tugas",
    name: "Daftar tugas",
    component: DaftarTugas,
  },
  {
    path: "/pemrograman-web-praktik",
    name: "PWP",
    component: PWP,
  },
  {
    path: "/kelas-arsip",
    name: "Kelas arsip",
    component: KelasArsip,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
