<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 p-4 font-sans antialiased">
    <div class="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm md:max-w-md w-full transform transition-all duration-300 hover:scale-[1.02] border border-gray-100">

      <div class="relative w-full h-48 bg-gradient-to-br from-amber-100 to-orange-200 flex items-end justify-center overflow-hidden">
        <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cuc2VwZXJhdG9yLmNvbS9pY29uL2RvZWNlY2F0ZXNzZW4iPjxwYXRoIGQ9Ik0wIDBjMjAgMCAyMCA0MCA0MCA0MFMwIDQwIDAgMHoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg=='); background-size: 20px 20px;"></div>
        
        <img src="https://i.imgur.com/example-person-no-bg.png" alt="Happy person" class="w-4/5 h-auto object-contain absolute bottom-0 z-10" style="max-height: 120%;">
      </div>

      <div class="p-6 md:p-8 lg:p-10">
        <div class="text-center mb-6">
          <div class="flex items-center justify-center mb-3">
            <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 0L32.25 17.5L50 25L32.25 32.5L25 50L17.75 32.5L0 25L17.75 17.5L25 0Z" fill="#E24A33"/>
            </svg>
            <span class="text-lg font-bold text-gray-800 ml-2">JOKI TUGASKU.ID</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-extrabold leading-tight text-gray-900 mb-1">
            Tugas Beres,<br>
            <span class="text-orange-600">Beban Lenyap!</span>
          </h1>
          <p class="text-sm md:text-base font-semibold text-gray-600">Joki Tugas Andalan Kita Semua</p>
        </div>

        <div class="space-y-3 mb-6">
          <div v-for="feature in features" :key="feature" class="flex items-start">
            <div class="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1">
              <svg class="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-sm md:text-base text-gray-700 font-medium">{{ feature }}</span>
          </div>
        </div>

        <button class="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 rounded-xl text-base shadow-md hover:shadow-lg transform hover:scale-[1.01] transition-all duration-200 ease-in-out mb-6">
          Hubungi Segera
        </button>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-4 border-gray-100">
          <div class="flex items-center justify-center sm:justify-start">
            <img src="https://i.imgur.com/8Q9Y1oM.png" alt="Phone Icon" class="h-5 w-5 mr-2 text-orange-500">
            <div>
              <p class="text-xs text-gray-500 font-medium">Kontak Kami</p>
              <a href="tel:+6285711151477" class="text-orange-600 font-bold text-sm tracking-wide">+62 857 111 514 77</a>
            </div>
          </div>
          <div class="flex items-center justify-center sm:justify-end">
            <img src="https://i.imgur.com/G3tG6tO.png" alt="Instagram Icon" class="h-5 w-5 mr-2 text-orange-500">
            <div>
              <p class="text-xs text-gray-500 font-medium">Follow Kami</p>
              <p class="text-orange-600 font-bold text-sm tracking-wide">@JokiTugasku_Express</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        'Cepat & Tepat',
        'Privasi Terjamin',
        'Pengerjaan Cepat',
        'Harga Hemat'
      ]
    }
  }
}
</script>

<style>
/* Import Poppins font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

/* Apply Poppins to all elements, or specific ones */
body, h1, p, span, button {
  font-family: 'Poppins', sans-serif;
}
</style>