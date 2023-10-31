import Body from "./components/body"
import useCurrency from "./hooks/useCurrency"

function App() {
  

  return (
    <>
    <div>
      <div>
      <Body label='From'></Body>
      </div>
      <div>
      <Body label='To'></Body>
      </div>
      <button>Convert</button>
    </div>
    
    </>
  )
}

export default App
