import { createApp } from 'vue'
import store from './store'
import router from './router'
import './index.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

import { Carousel, Slide } from "vue-carousel";


createApp(App)
  .use(store)
  .use(router)
  .use(library)
  .mount('#app')
