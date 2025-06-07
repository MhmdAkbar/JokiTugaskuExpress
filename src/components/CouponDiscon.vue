<template>
  <section class="max-w-md mx-auto p-6 bg-amber-50 rounded-lg shadow-md text-center select-none">
    <h2 class="text-2xl font-bold text-amber-900 mb-2">🎉 Kupon Diskon Spesial Hari Ini!</h2>

    <p class="mb-4 text-gray-700">
      Gunakan kode kupon berikut sebelum waktu habis:
    </p>

    <div
      v-if="isValid"
      class="inline-block px-6 py-3 bg-pink-600 text-white font-mono text-lg font-bold rounded-lg shadow-lg cursor-pointer animate-pulse hover:scale-105 transition-transform select-text"
      @click="copyCode"
      :title="'Klik untuk salin kode kupon ' + kuponAktif.code"
    >
      {{ kuponAktif.code }}
    </div>

    <p v-else class="text-red-600 font-semibold">
      Maaf, kupon hari ini sudah expired.
    </p>

    <p class="mt-4 text-gray-700 min-h-[1.5rem]">
      {{ message }}
    </p>

    <div v-if="isValid" class="mt-6 text-gray-700">
      <p><strong>Diskon:</strong> {{ kuponAktif.diskon }}%</p>
      <p><strong>Waktu tersisa:</strong> {{ timer.hours }}h {{ timer.minutes }}m {{ timer.seconds }}s</p>
    </div>

    <div class="mt-6">
      <input
        v-model="inputKode"
        type="text"
        placeholder="Masukkan kode kupon"
        class="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs text-center"
        :disabled="!isValid || kuponDigunakan"
      />

      <template v-if="!kuponDigunakan">
        <button
          @click="cekKupon"
          class="mt-3 px-5 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="!inputKode || !isValid"
        >
          Gunakan Kupon
        </button>
      </template>

      <template v-else>
        <a
          :href="linkWA"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-block px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Pesan Sekarang via WhatsApp
        </a>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'

const kuponAktif = {
  code: 'DISKON50',
  tanggal: new Date().toISOString().slice(0, 10),
  diskon: 50
}

const inputKode = ref('')
const message = ref('')
const isValid = ref(true)
const kuponDigunakan = ref(false)
const timer = reactive({ hours: 0, minutes: 0, seconds: 0 })

function cekKupon() {
  if (!isValid.value) {
    message.value = 'Kupon sudah tidak berlaku.'
    return
  }
  if (inputKode.value.trim().toUpperCase() === kuponAktif.code) {
    message.value = `Berhasil! Kamu mendapat diskon ${kuponAktif.diskon}%.`
    kuponDigunakan.value = true
  } else {
    message.value = 'Kode kupon tidak valid.'
  }
}

function updateTimer() {
  const now = new Date()
  const endOfDay = new Date()
  endOfDay.setHours(23, 59, 59, 999)
  const diff = endOfDay - now
  if (diff <= 0) {
    isValid.value = false
    clearInterval(timerInterval)
    timer.hours = 0
    timer.minutes = 0
    timer.seconds = 0
    message.value = 'Kupon sudah expired.'
    return
  }
  timer.hours = Math.floor(diff / 1000 / 3600)
  timer.minutes = Math.floor((diff / 1000 % 3600) / 60)
  timer.seconds = Math.floor((diff / 1000) % 60)
}

function copyCode() {
  navigator.clipboard.writeText(kuponAktif.code)
  message.value = 'Kode kupon disalin ke clipboard!'
}

const waNumber = '6281234567890' // Ganti nomor WhatsApp kamu
const waBaseUrl = 'https://wa.me/'

const linkWA = computed(() => {
  const pesan = `Halo, saya ingin pesan layanan dengan kupon *${kuponAktif.code}* dan mendapatkan diskon ${kuponAktif.diskon}%. Mohon bantuannya ya!`
  return `${waBaseUrl}${waNumber}?text=${encodeURIComponent(pesan)}`
})

onMounted(() => {
  const today = new Date().toISOString().slice(0, 10)
  if (today !== kuponAktif.tanggal) {
    isValid.value = false
    message.value = 'Kupon sudah expired.'
  }
  updateTimer()
  timerInterval = setInterval(updateTimer, 1000)
})

let timerInterval = null
onBeforeUnmount(() => {
  clearInterval(timerInterval)
})
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
