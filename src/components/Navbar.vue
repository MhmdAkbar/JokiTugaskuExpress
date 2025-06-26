<template>
  <header
    id="home"
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div class="flex items-center justify-between">
        <a href="#hero" class="flex items-center pl-2 sm:pl-0"> 
          <img
            src="../assets/img/Logo(1).png"
            alt="JokiTugas.ID Logo"
            class="h-16 sm:h-20 lg:h-24 w-auto"
          />
        </a>

        <nav
          class="hidden md:flex items-center space-x-8 lg:space-x-12"
          aria-label="Main navigation"
        >
          <ul class="flex items-center space-x-6 lg:space-x-8 text-lg font-medium text-gray-700">
            <li v-for="item in navItems" :key="item.id">
              <a
                :href="item.link"
                class="hover:text-blue-600 transition-colors duration-200 ease-in-out relative group"
              >
                {{ item.name }}
                <span
                  class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                ></span>
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/6285813468275?text=Halo%20ka%20admin%20saya%20mau%20tanya-tanya%20soal%20tugas%20saya%20di%20JokiTugasku%20express%20dong"
            class="px-6 py-2 bg-[#4B352A] text-white rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Hubungi Kami
          </a>
        </nav>

        <div class="flex items-center md:hidden gap-4">
          
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            aria-label="Toggle mobile menu"
          >
            <Icon icon="mdi:menu" class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>

    <Transition name="slide-fade">
      <nav
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4"
        aria-label="Mobile navigation"
      >
        <ul class="flex flex-col items-center space-y-4 text-lg font-medium text-gray-800">
          <li v-for="item in navItems" :key="item.id">
            <a
              :href="item.link"
              @click="isMobileMenuOpen = false"
              class="block hover:text-blue-600 transition-colors duration-200 py-2 px-4 rounded-md"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const navItems = [
  // Link "Beranda" sekarang secara eksplisit mengarah ke ID "hero" yang ada di header ini.
  { id: 1, name: 'Beranda', link: '#hero' }, 
  { id: 2, name: 'Layanan', link: '#product' },
  { id: 3, name: 'Keunggulan', link: '#keunggulan' },
  { id: 4, name: 'Testimoni', link: '#testimoni' },
  { id: 5, name: 'FAQ', link: '#faq' },
  { id: 6, name: 'Kontak', link: '#footer' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Transisi untuk menu mobile */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>