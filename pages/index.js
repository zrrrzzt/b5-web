import { Component } from 'react'
import Layout from '../components/Layout'
const qs = require('querystring')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
  }

  async componentDidMount () {
    const query = qs.parse(window.location.search.replace('?', ''))
    this.setState({query: query})
  }

  addOne () {
    const number = this.state.number
    const newNumber = number + 1
    this.setState({number: newNumber})
  }

  subtractOne () {
    const number = this.state.number
    const newNumber = number - 1
    this.setState({number: newNumber})
  }

  render () {
    return (
      <Layout>
        <div>
          <h1>Big Five Test</h1>
          <h2>{this.state.number}</h2>
          <button onClick={this.subtractOne}>Subtract 1</button>
          <button onClick={this.addOne}>Add 1</button>
        </div>
        <style jsx>
          {`
            h2 {
              color: red;
              font-size: 48px;
              text-align: center;
            }
            a, a:visited {
              color: white;
            }
            button {
              background-color: white;
              border-radius: 2px;
              color: black;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              width: 150px;
              margin: 10px;
              cursor: pointer;
            }
            button:focus {
              outline:0;
            }
            
            button:active {
              outline: 0;
            }
          `}
        </style>
      </Layout>
    )
  }
}
