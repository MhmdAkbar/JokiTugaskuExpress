<template>
  <section
    id="keunggulan"
    class="py-20 bg-gradient-to-br from-[#CA7842]/90 to-[#4B352A]/95 text-white relative overflow-hidden"
  >
    <!-- Background dekoratif -->
    <div class="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

    <div class="relative z-10 container mx-auto px-4">
      <header class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-3">Kenapa Memilih Kami?</h2>
        <p class="max-w-2xl mx-auto text-base text-white/80">
          Alasan kenapa banyak pelajar mempercayakan tugas mereka kepada kami.
        </p>
      </header>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Motion
          v-for="(item, index) in keunggulan"
          :key="index"
          tag="div"
          class="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/10 transition duration-300 text-center"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: index * 0.2, duration: 0.6, easing: 'ease-out' }"
        >
          <Motion
            tag="div"
            class="mb-4 text-white"
            :animate="{ scale: [1, 1.2, 1] }"
            :transition="{ duration: 2, repeat: Infinity, easing: 'ease-in-out' }"
          >
            <Icon :icon="item.icon" class="w-10 h-10 mx-auto" />
          </Motion>
          <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-white/80">{{ item.description }}</p>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Motion } from '@motionone/vue'
import { Icon } from '@iconify/vue'

const keunggulan = ref([
  {
    title: 'Tepat Waktu',
    description: 'Pengerjaan tugas selalu selesai sesuai deadline yang disepakati.',
    icon: 'fa6-solid:clock'
  },
  {
    title: 'Privasi Terjaga',
    description: 'Identitas dan data pribadi kamu dijamin aman & rahasia.',
    icon: 'fa6-solid:user-shield'
  },
  {
    title: 'Harga Terjangkau',
    description: 'Layanan berkualitas dengan harga yang ramah di kantong pelajar.',
    icon: 'fa6-solid:tags'
  },
  {
    title: 'Gratis Revisi',
    description: 'Kami siap melakukan revisi jika ada hal yang kurang sesuai.',
    icon: 'fa6-solid:pen-to-square'
  }
])
</script>
