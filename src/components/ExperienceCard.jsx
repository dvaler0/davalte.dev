export function ExperienceCard ({ children, company, period, text }) {
  return (
    <article>
      <h2>{company}</h2>
      <span>{period}</span>
      <p>{text}</p>
    </article>
  )
}
