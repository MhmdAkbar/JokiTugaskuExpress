<template>
  <section
    id="faq"
    class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#B2CD9C] to-[#F0F2BD]"
  >
    <div class="max-w-5xl mx-auto">
      <h2 class="text-4xl font-extrabold text-center text-[#4B352A] mb-14 drop-shadow-md">
        Pertanyaan yang Sering Diajukan (FAQ)
      </h2>

      <div class="space-y-5">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-2xl bg-white/70 backdrop-blur-md shadow-lg overflow-hidden transition-transform hover:scale-[1.01]"
        >
          <button
            @click="toggleFAQ(index)"
            class="flex justify-between items-center w-full p-6 text-lg font-semibold text-left text-[#4B352A] hover:bg-white/80 focus:outline-none"
          >
            <span>{{ faq.question }}</span>
            <svg
              :class="{ 'rotate-180': openIndex === index }"
              class="w-6 h-6 text-[#4B352A] transform transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <transition name="fade-slide">
            <div
              v-show="openIndex === index"
              class="px-6 pb-6 text-[#4B352A] text-base transition duration-300 ease-in-out"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(null);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = ref([
  {
    question: 'Apa saja jenis tugas yang bisa dikerjakan?',
    answer:
      'Kami menerima berbagai jenis tugas mulai dari makalah, esai, presentasi (PPT), analisis data, coding proyek dasar (HTML, CSS, JS), desain sederhana (Canva), hingga tugas spesifik mata kuliah seperti Ekonomi, Bahasa Indonesia, Sejarah, dan lainnya. Silakan konsultasikan tugas Anda!',
  },
  {
    question: 'Bagaimana proses pemesanan jasa joki tugas?',
    answer:
      'Anda hanya perlu mengisi formulir pemesanan dengan detail tugas Anda, atau langsung chat admin kami. Setelah itu, kami akan memberikan estimasi harga dan waktu pengerjaan. Jika setuju, Anda bisa melakukan pembayaran DP, dan tugas akan langsung kami kerjakan.',
  },
  {
    question: 'Apakah kerahasiaan data klien terjamin?',
    answer:
      'Ya, kami sangat menjunjung tinggi kerahasiaan data pribadi dan detail tugas klien. Semua informasi yang Anda berikan akan dijaga kerahasiaannya dan tidak akan dibocorkan kepada pihak ketiga mana pun.',
  },
  {
    question: 'Berapa lama waktu pengerjaan tugas?',
    answer:
      'Waktu pengerjaan sangat bervariasi tergantung pada tingkat kesulitan, kompleksitas, dan panjang tugas. Kami akan memberikan estimasi waktu pengerjaan yang realistis saat Anda melakukan konsultasi. Kami juga menerima permintaan pengerjaan ekspres.',
  },
  {
    question: 'Bagaimana jika ada revisi setelah tugas selesai?',
    answer:
      'Kami menyediakan layanan revisi minor gratis untuk memastikan tugas sesuai dengan ekspektasi dan instruksi awal Anda. Jika revisi mayor dan ada penambahan instruksi baru, mungkin akan dikenakan biaya tambahan. Detail revisi bisa dibicarakan langsung dengan admin.',
  },
  {
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer:
      'Kami menerima pembayaran melalui transfer bank (BCA, Mandiri, BRI) dan e-wallet (OVO, GoPay, Dana). Detail lengkap akan diberikan setelah Anda menyetujui penawaran harga.',
  },
]);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
