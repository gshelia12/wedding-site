// Georgia is UTC+4 year-round. 17 Oct 2026 17:00–23:59 local.
const CAL = { start: '20261017T130000Z', end: '20261017T195900Z', location: 'Tsinandali Estate, Kakheti, Georgia' }

export function googleCalendarUrl({ calTitle, calDesc }) {
  const p = new URLSearchParams({ action: 'TEMPLATE', text: calTitle, dates: `${CAL.start}/${CAL.end}`, details: calDesc, location: CAL.location })
  return 'https://calendar.google.com/calendar/render?' + p.toString()
}

export function icsDataUrl({ calTitle, calDesc }) {
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Sopo & Giorgi//Wedding//EN', 'BEGIN:VEVENT', 'UID:sopo-giorgi-20261017@wedding', `DTSTAMP:${CAL.start}`, `DTSTART:${CAL.start}`, `DTEND:${CAL.end}`, `SUMMARY:${calTitle}`, `DESCRIPTION:${calDesc}`, `LOCATION:${CAL.location}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics)
}
