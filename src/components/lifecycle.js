import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      a: this.props.a,
    }
    this.changeState = this.changeState.bind(this)
  }

  componentWillMount = () => {
    console.log('component will mount')
  }

  componentDidMount = () => {
    //Used for API calls
    console.log('component Did Mount')
  }

  shouldComponentUpdate = () => {
    console.log('should component update')
    return true
  }

  componentWillUpdate = () => {
    console.log('component will update')
  }
  componentDidUpdate = () => {
    console.log('component Did update')
  }
  changeState = (e) => {
    /*
    this.setState((prevState) => ({
      a: prevState.a + e,
    }))
    */
    this.setState((prev) => ({ a: prev.a + e }))
  }
  render() {
    console.log('render')
    return (
      <div>
        LifeCycleDemo
        <button onClick={() => this.changeState(20)}>Change State</button>
        <h1>{this.state.a}</h1>
      </div>
    )
  }
}

export default LifeCycleDemo
