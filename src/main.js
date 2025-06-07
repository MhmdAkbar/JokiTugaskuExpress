import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from "@iconify/vue"

// HAPUS import MotionPlugin karena sudah gak ada export-nya di @motionone/vue

const app = createApp(App)

app.component('Icon', Icon)

// HAPUS app.use(MotionPlugin) karena sudah gak perlu dan malah bikin error

app.mount('#app')
