import VueI18n from 'vue-i18n'
import Vue from 'vue'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import i18n_zh from './i18n_zh'
import i18n_en from './i18n_en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'cn',
  messages: {
    cn: {
      hello: '哈喽',
      ...i18n_zh,
      ...zhLocale // 或者用 Object.assign(i18n_en, zhLocale)
    },
    en: {
      hello: 'hi there!',
      ...i18n_en,
      ...enLocale // 或者用 Object.assign(i18n_zh, enLocale)
    }
  }
})
// console.log('i18n', i18n);
export default i18n