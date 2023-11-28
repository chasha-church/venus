import "./App.css"
import { Welcome } from "./components/Welcome"

function App() {
  return (
    <div className="App">
      <Welcome welcomeText={`Храм в честь иконы Божьей Матери "Неупиваемая Чаша".`} />
    </div>
  )
}

export default App
