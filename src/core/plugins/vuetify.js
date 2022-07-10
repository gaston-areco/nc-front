import Vue from 'vue';
import Vuetify, {Ripple} from 'vuetify/lib';
import colors from '../constants/colors';
import '@mdi/font/css/materialdesignicons.css';
import * as directives from 'vuetify/es5/directives';
import svgIcons from '../constants/svgIcons';
import en from 'vuetify/src/locale/en.ts';
import es from 'vuetify/src/locale/es.ts';

const vueCompailer = require('vue/dist/vue.js');
const iconsComponents = generateComponentsForSvgs(svgIcons);

function generateComponentsForSvgs(svgIcons) {
  const svgCustomComponents = {};
  svgIcons.icons.forEach(icon => {
    svgCustomComponents[icon.name] = {
      component: vueCompailer.component(`${icon.name}`, {
        template: icon.svg(),
      })
    };
  });
  return svgCustomComponents;
}

Vue.use(Vuetify, {directives});

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: colors.customColors.primary,
        accent: '#9E9E9E',
      },
    },
    directives: {
      ripple: Ripple
    }
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
    values: iconsComponents
  },
  lang: {
    locales: {es, en},
    current: 'en',
  },
});
