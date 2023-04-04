import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from '@/hooks/useStore'

function App() {
  const { fromLanguage, setFromLanguage } = useStore()
  return (
    <div className="App">
      <h1>Google Translate</h1>
    </div>
  )
}

export default App
