import { createContext, useContext, useEffect, useState } from 'react'
import { LANGUAGES, DEFAULT_LANG } from './index.js'

const KEY = 'wedding-lang'
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem(KEY)
    return saved && LANGUAGES[saved] ? saved : DEFAULT_LANG
  })
  useEffect(() => {
    localStorage.setItem(KEY, lang)
    document.documentElement.lang = lang
  }, [lang])
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: LANGUAGES[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const { lang, setLang } = useContext(LanguageContext)
  return { lang, setLang }
}

export function useT() {
  return useContext(LanguageContext).t
}
