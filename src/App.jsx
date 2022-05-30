import './App.css'
import openModal from './components/openModal'

function App() {
  
  const handleOpenModal = () => {
    openModal();
  }

  return (
    <div className="App">
     <button onClick={handleOpenModal}>Abrir modal</button>
    </div>
  )
}

export default App
