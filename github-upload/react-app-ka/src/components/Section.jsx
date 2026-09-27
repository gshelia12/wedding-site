export default function Section({ id, kicker, title, children, label, titleClass = '' }) {
  return (
    <section id={id} className="section" data-screen-label={label}>
      <div className="wrap">
        <div className="kicker">{kicker}</div>
        <h2 className={'h2 ' + titleClass}>{title}</h2>
        {children}
      </div>
    </section>
  )
}
