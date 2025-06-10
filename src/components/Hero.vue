<template>
  <section id="hero" class="relative overflow-hidden min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-0 z-0 opacity-70"
         style="background: linear-gradient(135deg, #4B352A 0%, #CA7842 100%);"></div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
      <div class="text-center lg:text-left max-w-xl text-white">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
          Butuh Bantuan Tugas? <br class="hidden sm:inline"/> Serahkan Pada Ahlinya!
        </h1>
        <p class="text-lg sm:text-xl mb-8 opacity-90">
          Kami siap membantu menyelesaikan tugas kuliah, makalah, presentasi, bahkan coding dengan cepat dan terpercaya.
        </p>
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
          <a
            href="https://wa.me/6285711151477"
            target="_blank"
            class="px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Chat via WhatsApp
          </a>
          <a
            href="#product"
            class="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full shadow-lg hover:bg-white hover:text-[#4B352A] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
          >
            Lihat Layanan
          </a>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <a href="https://wa.me/6285311151477?text=Halo%20ka%20admin%20saya%20mau%20tanya-tanya%20soal%20tugas%20saya%20di%20JokiTugasku%20express%20dong">
          <img
            src="../assets/img/hero.png"
            alt="Jasa Joki Tugas"
            class="w-4/5 lg:w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
/* Additional custom styles if needed, though Tailwind handles most. */
/* You can add keyframe animations here for subtle effects if desired */
</style>