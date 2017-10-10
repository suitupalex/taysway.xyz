import {
  Container,
  Grid,
} from 'semantic-ui-react'
import Letter from '../letter'
import React from 'react'
import _ from 'lodash'
import debug from 'debug'

const error = debug('taysway:error')
const log = debug('taysway:log')

const A = 65
const ALPHABET_SIZE = 26

class App extends React.Component {
  error = error
  log = log
  state = {
    title: 'TaySway.xyz',
  }

  renderLetter = ({
    author,
    definition,
  }, index) => {
    const letter = String.fromCharCode(index + A)

    return (
      <Letter
        author={author}
        definition={definition}
        key={letter}
        letter={letter}
      />
    )
  }

  render() {
    const {state} = this
    const letters = _.fill(new Array(ALPHABET_SIZE), {
      author: '@suitupalex',
      definition: 'Reputation',
    })

    document.title = state.title

    return (
      <Container>
        <br/>
        <Grid relaxed stackable columns={3}>
          {letters.map(this.renderLetter)}
        </Grid>
      </Container>
    )
  }
}

export default App
