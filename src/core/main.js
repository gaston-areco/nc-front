import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../store';
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate';
import mixin from './mixins/index';
import VueTheMask from 'vue-the-mask';
import {getToken} from '@/helpers/authentication';
import {configHttpClient} from '@/plugins/http-client';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueTheMask);
Vue.mixin(mixin);

getToken().then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app');
});
configHttpClient();
