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
        <path fill="#4B352A" fill-opacity="0.1" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,213.3C672,213,768,171,864,176C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
                 bg-white/15 backdrop-blur-lg border border-white/20 overflow-hidden group cursor-pointer"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[#CA7842]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

          <figure class="flex justify-center mb-6 relative z-10">
            <img
              :src="getImageUrl(service.image)"
              :alt="service.name"
              class="h-24 w-24 object-contain drop-shadow-lg filter group-hover:drop-shadow-xl transition-all duration-300"
              loading="lazy"
            />
          </figure>

          <h3 class="text-2xl font-bold text-white mb-3 text-center relative z-10">
            {{ service.name }}
          </h3>
          <p class="text-base text-white/80 text-center mb-6 relative z-10">
            {{ service.description }}
          </p>

          <footer class="flex justify-between items-center relative z-10">
            <span class="text-white font-extrabold text-lg tracking-wide">
              {{ formatHarga(service.price) }}
            </span>

            <a
              v-if="!service.upcoming"
              :href="`https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.name)}.`"
              target="_blank"
              rel="noopener noreferrer"
              class="text-base bg-[#CA7842] text-white px-6 py-3 rounded-xl font-semibold
                     hover:bg-[#e08953] transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Pesan Sekarang
            </a>
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
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: 'Tugas Makalah & Essay',
    description: 'Pengerjaan makalah, esai ilmiah, resume artikel, dan lainnya secara profesional.',
    price: 30000,
    image: 'essay.svg'
  },
  {
    id: 2,
    name: 'Presentasi PowerPoint',
    description: 'Slide presentasi yang menarik, informatif, dan siap disajikan.',
    price: 25000,
    image: 'presentation.svg'
  },
  {
    id: 3,
    name: 'Tugas Coding / Pemrograman',
    description: 'Penyelesaian tugas Java, Python, C++, hingga pengembangan web.',
    price: 50000,
    image: 'coding.svg'
  },
  {
    id: 4,
    name: 'Joki Kuis / Ujian Online',
    description: 'Bantuan pengerjaan soal kuis atau ujian daring (dengan jadwal & persetujuan).',
    price: 75000,
    image: 'exam.svg'
  },
  {
    id: 5,
    name: 'Pembuatan Laporan Praktikum',
    description: 'Laporan lengkap praktikum biologi, kimia, fisika, teknik, dll.',
    price: 40000,
    image: 'lab.svg',
    upcoming: true
  },
  {
    id: 6,
    name: 'Desain Infografis / Canva',
    description: 'Konten visual menarik untuk tugas desain, promosi, dan presentasi yang memukau.',
    price: 20000,
    image: 'canva.svg'
  }
];

function getImageUrl(filename) {
  // Pastikan path ke aset gambar sudah benar sesuai struktur proyek Anda
  return new URL(`../assets/${filename}`, import.meta.url).href;
}

function formatHarga(value) {
  return `Mulai dari ${new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value).replace(',00', ',-')}`;
}
</script>

<style scoped>
/* Anda bisa menambahkan gaya kustom di sini jika diperlukan,
   misalnya untuk animasi atau responsivitas yang lebih kompleks. */
</style>