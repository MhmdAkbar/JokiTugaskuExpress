<template>
  <section
    id="product"
    class="py-20 scroll-mt-20 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 z-0 opacity-70"
      style="background: linear-gradient(135deg, #4B352A 0%, #CA7842 100%);"
    >
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#4B352A" fill-opacity="0.1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,213.3C672,160,768,224,864,240C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <path fill="#CA7842" fill-opacity="0.05" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,149.3C672,160,768,224,864,240C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <header class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 leading-tight">
          Layanan Joki Tugas <br class="md:hidden"> Express Mu
        </h2>
        <p class="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Pilihan layanan akademik terbaik yang siap membantu kamu menyelesaikan tugas dengan cepat dan rapi.
        </p>
      </header>

      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          v-for="service in services"
          :key="service.id"
          class="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2
                 bg-white backdrop-blur-md border border-white/20 overflow-hidden group cursor-pointer"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[#CA7842]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

          <figure class="flex justify-center mb-6 relative z-10">
            <Icon
              :icon="service.icon"
              class="h-24 w-24 text-[#CA7842] drop-shadow-lg filter group-hover:drop-shadow-xl transition-all duration-300"
            />
          </figure>

          <h3 class="text-2xl font-bold text-gray-900 mb-3 text-center relative z-10">
            {{ service.name }}
          </h3>
          <p class="text-base text-gray-700 text-center mb-6 relative z-10">
            {{ service.description }}
          </p>

          <footer class="flex justify-between items-center relative z-10">
            <span v-if="!service.upcoming" class="text-gray-900 font-extrabold text-lg tracking-wide">
              {{ formatHarga(service.price) }}
            </span>
             <span v-else class="text-gray-900 font-bold text-lg tracking-wide">
              Segera Hadir!
            </span>

            <button
              v-if="!service.upcoming"
              @click="openOrderModal(service)"
              class="text-base bg-[#CA7842] text-white px-6 py-3 rounded-xl font-semibold
                     hover:bg-[#e08953] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Pesan Sekarang
            </button>
          </footer>

          <div
            v-if="service.upcoming"
            class="absolute top-5 right-5 bg-[#4B352A] text-xs text-white font-bold px-3 py-1.5 rounded-full select-none shadow-md
                   transform rotate-6 group-hover:rotate-0 transition-transform duration-300"
          >
            Segera Hadir!
          </div>
        </li>
      </ul>
    </div>

    <div v-if="showOrderModal" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full relative">
        <button
          @click="closeOrderModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Pesan Layanan: {{ selectedService.name }}
        </h3>

        <form @submit.prevent="sendWhatsAppOrder">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nama Anda:</label>
            <input
              type="text"
              id="name"
              v-model="orderForm.customerName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div class="mb-6">
            <label for="taskDetail" class="block text-gray-700 text-sm font-bold mb-2">Detail Singkat Tugas:</label>
            <textarea
              id="taskDetail"
              v-model="orderForm.taskDetail"
              rows="4"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Contoh: Tugas makalah Biologi tentang fotosintesis, deadline besok jam 5 sore."
              required
            ></textarea>
          </div>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              @click="closeOrderModal"
              class="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
            >
              Batal
            </button>
            <button
              type="submit"
              class="bg-[#CA7842] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e08953] transition-colors duration-300"
            >
              Kirim Pesanan ke WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'; // Import ref dan reactive
import { Icon } from '@iconify/vue';

const services = [
  {
    id: 1,
    name: 'Tugas Makalah & Essay',
    description: 'Pengerjaan makalah, esai ilmiah, resume artikel, dan lainnya secara profesional.',
    price: 30000,
    icon: 'ph:notepad-fill'
  },
  {
    id: 2,
    name: 'Presentasi PowerPoint',
    description: 'Slide presentasi yang menarik, informatif, dan siap disajikan.',
    price: 25000,
    icon: 'carbon:presentation-file'
  },
  {
    id: 3,
    name: 'Tugas Coding / Pemrograman',
    description: 'Penyelesaian tugas Java, Python, C++, hingga pengembangan web.',
    icon: 'mdi:code-braces',
    upcoming: true
  },
  {
    id: 4,
    name: 'Joki Kuis / Ujian Online',
    description: 'Bantuan pengerjaan soal kuis atau ujian daring (dengan jadwal & persetujuan).',
    price: 75000,
    icon: 'fluent:quiz-new-24-filled'
  },
  {
    id: 5,
    name: 'Pembuatan Laporan Praktikum',
    description: 'Laporan lengkap praktikum biologi, kimia, fisika, teknik, dll.',
    price: 40000,
    icon: 'mdi:microscope',
    upcoming: true
  },
  {
    id: 6,
    name: 'Desain Infografis / Canva',
    description: 'Konten visual menarik untuk tugas desain, promosi, dan presentasi yang memukau.',
    price: 20000,
    icon: 'mdi:palette'
  }
];

const whatsappNumber = '6285711151477';

// State untuk Modal
const showOrderModal = ref(false);
const selectedService = ref({}); // Untuk menyimpan layanan yang dipilih saat modal dibuka
const orderForm = reactive({ // Menggunakan reactive untuk form input
  customerName: '',
  taskDetail: ''
});

function formatHarga(value) {
  return `Mulai dari ${new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value).replace(',00', ',-')}`;
}

// Fungsi untuk membuka modal
function openOrderModal(service) {
  selectedService.value = service;
  showOrderModal.value = true;
  // Reset form setiap kali modal dibuka
  orderForm.customerName = '';
  orderForm.taskDetail = '';
}

// Fungsi untuk menutup modal
function closeOrderModal() {
  showOrderModal.value = false;
}

// Fungsi untuk mengirim pesan WhatsApp setelah form diisi
function sendWhatsAppOrder() {
  const { customerName, taskDetail } = orderForm;
  const serviceName = selectedService.value.name;

  let message = `Halo Joki Tugas Express Mu!\n\n`;
  message += `Saya *${customerName}* tertarik untuk memesan layanan *${serviceName}*.\n`;
  message += `Berikut detail singkat tugas saya:\n"${taskDetail}"\n\n`;
  message += `Mohon informasinya lebih lanjut ya, terima kasih!`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank'); // Buka di tab baru
  closeOrderModal(); // Tutup modal setelah pesan dikirim
}
</script>

<style scoped>
/* Tidak ada perubahan pada bagian <style scoped> */
</style>