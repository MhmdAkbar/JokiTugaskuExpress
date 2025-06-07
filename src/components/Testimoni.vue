<template>
  <section
    id="testimoni"
    class="py-20 px-6 bg-gradient-to-br from-[#B2CD9C] to-[#F0F2BD] min-h-screen"
  >
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-4xl font-extrabold text-center text-[#2E3A29] drop-shadow-sm mb-16"
      >
        Apa Kata Klien Kami?
      </h2>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-white/80 backdrop-blur-sm border border-[#B2CD9C] p-6 rounded-2xl shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
        >
          <div class="mb-3">
            <p class="text-lg font-bold text-[#4B352A]">
              {{ testimonial.initial }} - {{ testimonial.major }}
            </p>
            <p class="text-sm text-[#6C8B3C] mt-1">
              {{ testimonial.task }}
            </p>
          </div>

          <p class="text-gray-700 italic text-base mb-4 flex-grow">
            "{{ testimonial.message }}"
          </p>

          <div>
            <div class="flex mb-3">
              <span
                v-for="star in 5"
                :key="star"
                class="text-xl"
                :class="star <= testimonial.rating ? 'text-yellow-500' : 'text-gray-300'"
              >
                ★
              </span>
            </div>
            <div
              class="flex justify-between text-sm text-gray-500 border-t pt-2"
            >
              <span>📅 {{ testimonial.date }}</span>
              <span>⏱️ {{ testimonial.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    initial: 'A.S.',
    major: 'Manajemen Ekonomi',
    task: 'Makalah Analisis Ekonomi Mikro',
    message:
      'Makalah saya jadi sangat rapi dan argumentasinya kuat berkat bantuan tim ini. Materinya kompleks, tapi mereka bisa menyederhanakan dengan baik. Nilai A saya aman!',
    rating: 5,
    date: '12 Mei 2025',
    duration: '5 hari',
  },
  {
    initial: 'B.P.',
    major: 'Akuntansi',
    task: 'PPT Presentasi Kebijakan Fiskal',
    message:
      'Desain PPT-nya profesional banget, grafik dan data tersaji dengan jelas. Presentasi saya jadi lebih menarik dan mudah dipahami dosen. Sangat membantu saat waktu mepet.',
    rating: 4,
    date: '28 April 2025',
    duration: '3 hari',
  },
  {
    initial: 'C.R.',
    major: 'Sastra Indonesia',
    task: 'Analisis Puisi Modern Bahasa Indonesia',
    message:
      'Analisis puisi yang detail dan mendalam. Mereka memahami betul konteks dan gaya bahasa. Sangat puas dengan hasilnya, melebihi ekspektasi saya.',
    rating: 5,
    date: '01 April 2025',
    duration: '4 hari',
  },
  {
    initial: 'D.W.',
    major: 'Pendidikan Sejarah',
    task: 'Esai Sejarah Revolusi Industri',
    message:
      'Penulisan esai sejarah yang komprehensif dengan sumber-sumber terpercaya. Argumennya terstruktur dan logis. Tugas sejarah yang sering bikin pusing jadi beres dengan cepat.',
    rating: 5,
    date: '19 Maret 2025',
    duration: '6 hari',
  },
  {
    initial: 'E.K.',
    major: 'Desain Komunikasi Visual',
    task: 'Desain Poster Event dengan Canva',
    message:
      'Desain poster event saya jadi keren banget, sesuai tema dan instruksi. Mereka jago pakai Canva dan hasilnya estetik. Sangat direkomendasikan untuk tugas desain!',
    rating: 4,
    date: '05 Maret 2025',
    duration: '2 hari',
  },
  {
    initial: 'F.M.',
    major: 'Teknik Informatika',
    task: 'Proyek Mini Web HTML, CSS, JavaScript',
    message:
      'Codingan rapi, berfungsi dengan baik, dan hasilnya responsif. Mereka bantu banget debugging dan kasih penjelasan juga. Proyek web saya jadi lebih mudah dikerjakan.',
    rating: 5,
    date: '20 Februari 2025',
    duration: '7 hari',
  },
]);
</script>

<style scoped>
/* Tambahkan efek lembut atau animasi ringan jika perlu */
</style>
