//@flow
import * as React from 'react'
import { hot } from 'react-hot-loader'

import './App.css'

type Props = {}
type State = {}

class App extends React.Component<Props, State> {
  render(): React.Node {
    return (
      <div className="App">
        React Starter With Stuff
        <p>Check readme to find more about project. Start with `App.js`</p>
      </div>
    )
  }
}

export default hot(module)(App) // eslint-disable-line no-undef
