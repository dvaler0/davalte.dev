export function ExperienceCard ({ company, period, text }) {
  return (
    <article className='flex flex-col p-12 bg-white text-black rounded-lg border border-gray-200 shadow-md shadow-gray-100'>
      <h2 className='font-bold text-2xl'>{company}</h2>
      <span>{period}</span>
      <p>{text}</p>
    </article>
  )
}
