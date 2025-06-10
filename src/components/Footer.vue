<template>
  <footer class="bg-gray-950 text-gray-300 pt-12 pb-6" id="footer">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Joki Tugasmu</h3>
          <p class="mb-4">
            Solusi Cepat dan Tepat untuk Setiap Tugas Kuliahmu!
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(social, index) in socialLinks"
              :href="social.url"
              :key="index"
              class="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :icon="social.icon" class="w-6 h-6" />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a href="#" class="hover:text-white transition">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Layanan Pelanggan</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in customerService" :key="index">
              <a href="#" class="hover:text-white transition">{{ link }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
          <p class="mb-4">
            Dapatkan informasi terbaru dan penawaran khusus langsung ke inbox Anda!
          </p>
          <form class="flex">
            <input
              type="email"
              name="newsletter"
              id="newsletter"
              placeholder="Email Anda"
              class="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900 border border-gray-700 placeholder-gray-400 mr-0"
              required
            />
            <button
              type="submit"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
            >
              Daftar
            </button>
          </form>

          <div class="mt-4 flex items-center">
            <Icon icon="mdi:email" class="w-6 h-6 mr-2" />
            <span>jokitugasmu.id@gmail.com</span>
          </div>
          <div class="mt-2 flex items-center">
            <Icon icon="mdi:phone" class="w-6 h-6 mr-2" />
            <span>+62 812-3456-7890</span>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p>&copy;{{ new Date().getFullYear() }} Joki Tugasmu. Semua Hak Cipta Dilindungi.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <template v-for="(payment, index) in paymentMethods" :key="index">
            <Icon v-if="payment.icon" :icon="payment.icon" class="h-6 w-auto" />
            <img v-else :src="payment.src" :alt="payment.alt" class="h-6 w-auto object-contain" />
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
// Import komponen Icon dari Iconify
import { Icon } from '@iconify/vue';

const quickLinks = ref(['Beranda', 'Layanan', 'Testimoni', 'FAQ', 'Tentang Kami']);
const customerService = ref([
  'Hubungi Kami',
  'Ketentuan Layanan',
  'Kebijakan Privasi',
  'Proses Kerja',
  'Jaminan Kualitas',
]);

const socialLinks = ref([
  { name: 'Instagram', url: 'https://instagram.com/jokitugasmu', icon: 'mdi:instagram' },
  { name: 'WhatsApp', url: 'https://wa.me/6281234567890', icon: 'mdi:whatsapp' },
]);

const paymentMethods = ref([
  { name: 'BCA', icon: 'ri:bank-card-fill' }, // Icon generik untuk kartu bank, bisa diganti jika ada ikon spesifik BCA
  { name: 'BSI', icon: 'ri:bank-card-fill' }, // Icon generik untuk kartu bank, bisa diganti jika ada ikon spesifik BSI
  { name: 'BRI', icon: 'ri:bank-card-fill' }, // Icon generik untuk kartu bank, bisa diganti jika ada ikon spesifik BRI
  { name: 'Mandiri', icon: 'ri:bank-card-fill' }, // Icon generik untuk kartu bank, bisa diganti jika ada ikon spesifik Mandiri
  { name: 'DANA', icon: 'tabler:brand-dana' },
  { name: 'ShopeePay', icon: 'simple-icons:shopeepay' },
  { name: 'OVO', icon: 'simple-icons:ovo' },
  // Jika Iconify tidak memiliki ikon spesifik untuk bank, Anda bisa menggunakan src gambar:
  // { name: 'BCA', src: 'URL_GAMBAR_BCA_ANDA.png', alt: 'BCA' },
  // { name: 'BSI', src: 'URL_GAMBAR_BSI_ANDA.png', alt: 'BSI' },
  // { name: 'BRI', src: 'URL_GAMBAR_BRI_ANDA.png', alt: 'BRI' },
  // { name: 'Mandiri', src: 'URL_GAMBAR_MANDIRI_ANDA.png', alt: 'Mandiri' },
]);
</script>

<style scoped>
/* Anda bisa menambahkan gaya kustom di sini jika diperlukan */
/* Tailwind CSS v4 akan otomatis di-utilize */
</style>