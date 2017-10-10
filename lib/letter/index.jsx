import './style.scss'
import {
  Grid,
  Header,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'
import debug from 'debug'

const BACKGROUND = [
  'https://static.independent.co.uk',
  's3fs-public',
  'thumbnails',
  'image',
  '2016/01/29',
  '11',
  'Taylor-Swift-revenge-nerds.jpg',
].join('/')

const error = debug('taysway:error:letter')
const log = debug('taysway:letter')

class Letter extends React.Component {
  error = error
  log = log
  state = {
    author: this.props.author,
    definition: this.props.definition,
    letter: this.props.letter,
  }

  static propTypes = {
    author: PropTypes.string,
    definition: PropTypes.string,
    letter: PropTypes.string,
  }

  render() {
    const {state} = this
    const {
      letter,
    } = state

    return (
      <Grid.Column
        className='letter'
      >
        <Header
          className='character'
          style={{
            background: `url('${BACKGROUND}')`,
          }}
          textAlign='center'
        >{letter}</Header>
      </Grid.Column>
    )
  }
}

export default Letter
