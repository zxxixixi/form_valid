import { createApp } from 'vue'
import App from './App.vue'
import formValid from './lib/form_valid'

createApp(App).use(formValid).mount('#app')
