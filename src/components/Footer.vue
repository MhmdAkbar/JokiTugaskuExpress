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
              <span class="sr-only">{{ social.name }}</span>
              <img
                v-if="social.name === 'WhatsApp'"
                src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
                alt="WhatsApp"
                class="w-6 h-6"
              />
              <img
                v-else-if="social.name === 'Instagram'"
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
                alt="Instagram"
                class="w-6 h-6"
              />
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
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
              alt="Email"
              class="w-6 h-6 mr-2"
            />
            <span>jokitugasmu.id@gmail.com</span>
          </div>
          <div class="mt-2 flex items-center">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
              alt="Telepon"
              class="w-6 h-6 mr-2"
            />
            <span>+62 812-3456-7890</span>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p>&copy;{{ new Date().getFullYear() }} Joki Tugasmu. Semua Hak Cipta Dilindungi.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <img
            v-for="(icon, index) in paymentIcons"
            :key="index"
            :src="icon.src"
            :alt="icon.alt"
            class="h-6 object-contain"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Untuk menggunakan <Icon> component, pastikan Anda telah menginstal dan mengkonfigurasi @iconify/vue.
// Contoh instalasi: npm install @iconify/vue
// Jika tidak menggunakan Icon component, saya sudah menyediakan alternatif gambar PNG/SVG dasar.

const quickLinks = ref(['Beranda', 'Layanan', 'Testimoni', 'FAQ', 'Tentang Kami']);
const customerService = ref([
  'Hubungi Kami',
  'Ketentuan Layanan',
  'Kebijakan Privasi',
  'Proses Kerja',
  'Jaminan Kualitas',
]);
// Untuk social media, saya ganti icon 'twitter' jadi 'whatsapp' karena lebih relevan
const socialLinks = ref([
  { name: 'Instagram', url: 'https://instagram.com/jokitugasmu' },
  { name: 'WhatsApp', url: 'https://wa.me/6281234567890' }, // Ganti dengan nomor WhatsApp Anda
  // Anda bisa tambahkan link Facebook jika ada
]);

// Contoh ikon pembayaran dalam bentuk URL gambar (Anda bisa mengganti dengan path lokal atau Iconify)
const paymentIcons = ref([
  { src: 'https://img.icons8.com/color/48/000000/visa.png', alt: 'Visa' },
  { src: 'https://img.icons8.com/color/48/000000/mastercard.png', alt: 'Mastercard' },
  { src: 'https://img.icons8.com/color/48/000000/ovo.png', alt: 'OVO' },
  { src: 'https://img.icons8.com/color/48/000000/gopay.png', alt: 'GoPay' },
  // Tambahkan ikon lain seperti Dana, LinkAja, dll. jika relevan
]);
</script>

<style scoped>
/* Anda bisa menambahkan gaya kustom di sini jika diperlukan */
/* Tailwind CSS v4 akan otomatis di-utilize */
</style>