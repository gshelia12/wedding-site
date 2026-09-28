import { useEffect, useRef, useState } from 'react'

const SRC = import.meta.env.BASE_URL + 'spring.mp3'

// Background music: nothing downloads until first play. Starts on the guest's first tap
// anywhere (browsers block sound before a gesture); the note button toggles it after that.
export function useMusic() {
  const audio = useRef(null)
  const off = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const a = new Audio(SRC)
    a.loop = true; a.preload = 'none'; a.volume = 0.7
    a.addEventListener('play', () => setPlaying(true))
    a.addEventListener('pause', () => setPlaying(false))
    audio.current = a
    const first = () => { remove(); if (!off.current && a.paused) a.play().catch(() => {}) }
    const remove = () => { document.removeEventListener('pointerdown', first, true); document.removeEventListener('keydown', first, true) }
    document.addEventListener('pointerdown', first, true)
    document.addEventListener('keydown', first, true)
    return () => { remove(); a.pause() }
  }, [])

  const toggle = () => {
    const a = audio.current; if (!a) return
    if (a.paused) { off.current = false; a.play().catch(() => {}) } else { off.current = true; a.pause() }
  }
  return { playing, toggle }
}
