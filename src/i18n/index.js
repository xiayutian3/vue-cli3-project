import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

let browserLang = navigator.language.substr(0, 2)
let localLang = localStorage.getItem("_lang")
if (localLang) {
  browserLang = localLang
}
export const i18n = new VueI18n({
  locale: browserLang,
  fallbackLocale: browserLang,
  messages: {},
  sync: false
});
_import(browserLang)
const loadedLanguages = [];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}
export function loadLanguageAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }
  return _import(lang)
}

function _import(lang) {
  return import(
    /* webpackChunkName: "[request]" */
    `@/i18n/${lang}/index.json`
  ).then(messages => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}