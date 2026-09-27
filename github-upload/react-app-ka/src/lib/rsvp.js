import { RSVP_ENDPOINT } from '../config.js'

// Apps Script web apps don't return CORS headers, so we send as text/plain in no-cors mode.
// The response is opaque; a network error is the only failure we can detect.
export async function submitRsvp({ name, attending, bus, lang }) {
  await fetch(RSVP_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ name, attending, bus, lang, submittedAt: new Date().toISOString() }),
  })
}
