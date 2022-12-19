import { createApp } from 'vue'
import App from './App.vue'


import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// export default {
//     components: { VueperSlides, VueperSlide },
//     ...
//   }

createApp(App).use(Antd).mount('#app')
