import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Change 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
