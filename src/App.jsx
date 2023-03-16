import './App.css'
import { ExperienceCard } from './components/ExperienceCard'
import { experience } from './services/experience'

function App () {
  return (
    <>

      <main>
        <section>
          <h1>Hey👋 I'm David Valero</h1>
        </section>

        <section>
          <h2>Experience</h2>
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

      </main>

    </>
  )
}

export default App
