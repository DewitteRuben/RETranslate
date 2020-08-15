import './language.js'

export const languageMixin = function(superClass) {
    return class extends superClass {

        constructor() {
            super()
            this.language = window.lang
            this.selectedLanguage = ''

            this.loadedPriv = false
            this.loadedSec = false
            this.loadedTerms = false
            this.loadedReswarm = false

            this.locPriv = this.computeLocPriv(this.selectedLanguage, this.loadedPriv)
            this.locSec = this.computeLocSec(this.selectedLanguage, this.loadedSec)
            this.locTerms = this.computeLocTerms(this.selectedLanguage, this.loadedTerms)
            this.loc = this.computeLoc(this.selectedLanguage, this.loadedReswarm)
            this.selectedLanguage = window.languageReswarm.lang
            window.addEventListener('language-changed', () => this.updateLang())
            window.addEventListener('language-loaded', (args) => this.refreshLangFile(args.detail))
            this.updateLang()
        }

        updateLang() {
            // console.log('UPDATE LANG', window.languageReswarm.lang, window.language.lang)
            this.selectedLanguage = window.languageReswarm.lang
            this.locPriv = this.computeLocPriv(this.selectedLanguage, this.loadedPriv)
            this.locSec = this.computeLocSec(this.selectedLanguage, this.loadedSec)
            this.locTerms = this.computeLocTerms(this.selectedLanguage, this.loadedTerms)
            this.loc = this.computeLoc(this.selectedLanguage, this.loadedReswarm)
            return this.requestUpdate()
        }

        refreshLangFile(path) {
            this.updateLang()

            switch (path) {
            case '/locale-privacy':
                this.loadedPriv = true
                break
            case '/locale-security':
                this.loadedSec = true
                break
            case '/locale-terms':
                this.loadedTerms = true
                break
            case '/locale-reswarm':
                this.loadedReswarm = true
                break
            }
        }

        computeLocPriv() {
            return (key) => window.languagePrivacy[key] || key
        }

        computeLocSec() {
            return (key) => window.languageSecurity[key] || key
        }

        computeLocTerms() {
            return (key) => window.languageTerms[key] || key
        }

        computeLocReone() {
            return (key, ...args) => {
                var val = window.languageReone[key]
                return ((typeof val == 'function') ? val(...args) : val) || key
            }
        }

        computeLoc() {
            return (key, ...args) => {
                var val = window.languageReswarm[key]
                return ((typeof val == 'function') ? val(...args) : val) || key
            }
        }

        computeLocToast() {
            return (key, obj) => {
                var val = window.languageToast[key]
                return ((typeof val == 'function') ? val(obj) : val) || key
            }
        }
    }
}
