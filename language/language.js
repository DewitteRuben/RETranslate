import '../router/router.js'
import { EventTarget } from "event-target-shim";
/* global window.router must exist */

class Language extends EventTarget {
    constructor() {
        super()
        // ReacctWeb
        window.languagePrivacy = {}
        window.languageSecurity = {}
        window.languageTerms = {}
        window.languageReswarm = {}
        window.languageError = {}

        // App Toast
        window.languageToast = {}
        // this.supportedLanguages = ['en', 'de', 'es', 'zh']

        this.loadedLangFiles = []
        this.langPaths = ['/locale-reswarm'] // "/locale-privacy", "/locale-security", "/locale-terms"

        this.langPaths.forEach(path => this.loadLangFile(path))
        var _eval = eval
        fetch('/locale-reswarm')
            .then(res => res.text())
            .then(res => _eval(res))
    }

    switchLanguage(lang) {

        var results = []
        var oldLang = window.language && window.language.lang

        this.loadedLangFiles.forEach(url => {
            results.push(fetch(url + '-' + lang).then(res => res.text()))
        })

        Promise.all(results)
            .then(res => {
                window.language.lang = lang
                var _eval = eval
                res.forEach(l => _eval(l))
                // console.warn('GOT NEW LANGUAGE FILE' ,lang, res)
                // window.router.readCookie()
                if (oldLang != lang) {
                    window.dispatchEvent(new CustomEvent('language-changed'))
                    window.router.setRouteLanguage(lang)
                }
            })
        // .catch(err => console.error('Error during language request', err))
    }

    loadLangFile(path) {
        if (!this.loadedLangFiles.includes(path)) {
            let suff = window.language.lang ? '-' + window.language.lang : ''            
            return fetch(path + suff)
                .then(res => res.text())
                .then(res => {
                    var _eval = eval
                    _eval(res)
                    window.router.readCookie()
                    window.dispatchEvent(new CustomEvent('language-loaded', { detail: path }))
                    this.loadedLangFiles.push(path)
                })
        } else return Promise.resolve()
    }
}
// window.Language = Language // see https://www.npmjs.com/package/polymer-webpack-loader#shimming
window.lang = new Language()
