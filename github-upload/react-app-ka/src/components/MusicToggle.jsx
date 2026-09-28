import { useMusic } from '../hooks/useMusic.js'
import { useT } from '../i18n/LanguageContext.jsx'

export default function MusicToggle() {
  const t = useT()
  const { playing, toggle } = useMusic()
  const label = playing ? t.music.pause : t.music.play
  return (
    <button type="button" className={'music-toggle' + (playing ? ' is-playing' : '')} onClick={toggle} aria-label={label} title={label} aria-pressed={playing}>
      <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M212.92,25.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V70.25l112-28v99.83A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.69ZM52,224a20,20,0,1,1,20-20A20,20,0,0,1,52,224Zm128-32a20,20,0,1,1,20-20A20,20,0,0,1,180,192Z"/></svg>
    </button>
  )
}
