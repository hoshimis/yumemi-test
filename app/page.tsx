import { NextPage } from 'next'
import PrefectureGroup from './components/prefecture/PrefectureGroup'
import PopulationChart from './components/population/PopulationChart'

const Home: NextPage = () => {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <PrefectureGroup />
      <PopulationChart />
    </main>
  )
}

export default Home
