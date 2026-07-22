import { createApp } from 'vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiGithubLine , RiMenu3Line , RiCloseLine , RiKey2Line , RiArrowRightLine } from "oh-vue-icons/icons";
import App from './App.vue'
import './index.css'

addIcons(RiGithubLine , RiMenu3Line , RiCloseLine , RiKey2Line , RiArrowRightLine)
const app = createApp(App)
app.component("v-icon" , OhVueIcon)
app.mount("#app")
