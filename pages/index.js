import Nav from '../components/nav'
import VisualWave from '../components/visualwave'
import BottomSection from '../components/bottomSection'

export default function IndexPage() {
  return (
    <div className="h-screen bg-yellow-400">
      <div className="py-0"> 
        <VisualWave />
      </div>
      <div className="py-0"> 
        <BottomSection />
      </div>
    </div>
  )
}
