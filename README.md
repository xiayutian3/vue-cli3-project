# sport-h5

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### i18n
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

切换语言函数
    langFun () {

      // this._i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en'
      localStorage.setItem('locale', this.$i18n.locale)
      console.log(localStorage.getItem('locale'))
      console.log(this.$i18n.locale, this._i18n.locale)
      document.documentElement.setAttribute('lang', this._i18n.locale)
      console.log(window.navigator.language.slice(0, 2))
      console.log(window.navigator.language)
      console.log(1, window.navigator)

    }