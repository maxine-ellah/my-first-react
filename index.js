import React from 'react'
import { render } from 'react-dom'
import App from './components/app'

class HellosNumbers extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }


  render() {
    return (
      <div>
      <h1> hey {this.props.name} </h1>
      <h3> this is the count {this.state.count} </h3>
      </div>
    )
  }

}

render(<HellosNumbers name='HellosNumbers' />, document.querySelector('main'))
//onClick with setState incrementing this.props.count by 1
//some JSX with the state being used
console.log('welcome to my-first-react')
