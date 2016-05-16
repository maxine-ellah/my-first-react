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
        <h3 onClick = {()=> this.setState({ count: this.state.count + 1 })}> this is the count {this.state.count} </h3>
      </div>
    )
  }

}



render(<div><HellosNumbers name='Max' />
            <HellosNumbers name='Xav' />
      </div>, document.querySelector('main'))

console.log('welcome to HellosNumbers')
