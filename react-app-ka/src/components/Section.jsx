export default function Section({ id, kicker, title, children, label }) {
  return (
    <section id={id} className="section" data-screen-label={label}>
      <div className="wrap">
        <div className="kicker">{kicker}</div>
        <h2 className="h2">{title}</h2>
        {children}
      </div>
    </section>
  )
}
