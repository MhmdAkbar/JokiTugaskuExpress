<template>
  <section class="hero-section py-16 md:py-24 bg-gradient-to-br from-white via-white to-gray-50">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="hero-card bg-white rounded-lg shadow-xl p-8 md:p-12 lg:flex lg:items-center lg:justify-between lg:space-x-12">
        <div class="flex-1 text-center lg:text-left mb-10 lg:mb-0">
          <div class="mb-6">
            <img src="/path/to/your/jokitugasku_logo.svg" alt="JokiTugasku.ID Logo" class="h-16 mx-auto lg:mx-0">
          </div>

          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Tugas Beres, <br class="hidden sm:inline"> Beban Lenyap!
          </h1>

          <p class="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
            Joki Tugas Andalan Kita Semua
          </p>

          <ul class="space-y-4 mb-10 text-lg">
            <li class="flex items-center justify-center lg:justify-start text-gray-800">
              <Icon icon="ph:check-circle-fill" class="h-6 w-6 text-[#CA7842] mr-3 flex-shrink-0" />
              <span>Cepat & Tepat</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start text-gray-800">
              <Icon icon="ph:check-circle-fill" class="h-6 w-6 text-[#CA7842] mr-3 flex-shrink-0" />
              <span>Privasi Terjamin</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start text-gray-800">
              <Icon icon="ph:check-circle-fill" class="h-6 w-6 text-[#CA7842] mr-3 flex-shrink-0" />
              <span>Pengerjaan Cepat</span>
            </li>
            <li class="flex items-center justify-center lg:justify-start text-gray-800">
              <Icon icon="ph:check-circle-fill" class="h-6 w-6 text-[#CA7842] mr-3 flex-shrink-0" />
              <span>Harga Hemat</span>
            </li>
          </ul>

          <button
            @click="scrollToProduct"
            class="inline-block bg-[#4B352A] hover:bg-[#6a4f3e] text-white font-bold py-3 px-8 rounded-xl
                   transition-all duration-300 transform hover:scale-105 shadow-lg text-xl"
          >
            Hubungi Segera
          </button>
        </div>

        <div class="flex-1 flex justify-center lg:justify-end">
          <img src="/path/to/your/optimized_hero_image.webp" alt="Ilustrasi mahasiswa senang" class="max-w-full h-auto rounded-lg shadow-md lg:max-h-[500px] object-cover">
          </div>
      </div>

      <div class="mt-12 flex flex-wrap gap-6 justify-center text-gray-700">
        <div class="flex items-center">
          <Icon icon="ph:phone-fill" class="h-6 w-6 text-[#CA7842] mr-2" />
          <span class="font-semibold">Kontak Kami:</span> +62 857 111 514 77
        </div>
        <a href="https://instagram.com/JokiTugasKu_Express" target="_blank" rel="noopener noreferrer" class="flex items-center hover:text-[#CA7842] transition-colors">
          <Icon icon="mdi:instagram" class="h-6 w-6 text-[#CA7842] mr-2" />
          <span class="font-semibold">Follow Kami:</span> @JokiTugasKu_Express
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
// Anda mungkin perlu menambahkan ref dan fungsi-fungsi lain jika Anda ingin menggunakan modal atau scroll
// import { ref } from 'vue';

// const showModal = ref(false); // Jika ingin memunculkan modal
// const selectedServiceName = ref(''); // Jika ingin memunculkan modal

function scrollToProduct() {
  // Fungsi untuk scroll ke bagian layanan Anda
  const productSection = document.getElementById('product');
  if (productSection) {
    productSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Jika Anda memutuskan untuk menggunakan modal untuk "Hubungi Segera",
// maka fungsi openModal dan sendWhatsAppMessage dari jawaban sebelumnya akan relevan di sini.
// Contoh:
// function openModal(serviceName) {
//   selectedServiceName.value = serviceName;
//   showModal.value = true;
//   // Reset form setiap kali modal dibuka
//   // form.value.nama = '';
//   // form.value.detailTugas = '';
// }
// function sendWhatsAppMessage() { /* ... */ }
</script>

<style scoped>
/* Tidak ada perubahan pada bagian <style scoped> */
</style>