import React from 'react'
import debug from 'debug'

const error = debug('taysway:error')
const log = debug('taysway:log')

class App extends React.Component {
  error = error
  log = log
  state = {
    lyrics: 'Casually cruel in the name of being honest...',
  }

  render() {
    const {state} = this

    return (
      <div>
        {state.lyrics}
      </div>
    )
  }
}

export default App
