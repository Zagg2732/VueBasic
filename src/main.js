import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "./mixins"
import store from "./store";



const app = createApp(App)
app.use(router)
app.mixin(mixins);
app.mount('#app')
app.directive('focus', { //v-focus 를 만듦
    mounted(el) {
        el.focus()
    }
})
app.use(store)
