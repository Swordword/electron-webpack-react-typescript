import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div>
      <button onClick={handleClick}>
        Hello world
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
