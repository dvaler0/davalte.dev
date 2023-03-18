import './App.css'
import { ExperienceCard } from './components/ExperienceCard'
import { experience } from './services/experience'

function App () {
  return (
    <>

      <main className='block w-full max-w-6xl m-auto'>
        <section>
          <h1>Hey👋 I'm David Valero</h1>
        </section>

        <section>
          <h2 className='font-bold text-2xl mb-7'>Experience</h2>
          <section className='flex flex-col sm:flex-row gap-7 '>
            {
              experience.map(({ company, period, text }) => {
                return (
                  <ExperienceCard
                    key={company}
                    company={company}
                    period={period}
                    text={text}
                  />
                )
              })
            }
          </section>

        </section>

      </main>

    </>
  )
}

export default App
