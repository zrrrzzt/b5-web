import { Component } from 'react'
import Page from '../components/Page'
import Item from '../components/Item'
const { getItems } = require('b5-johnson-120-ipip-neo-pi-r')
const { pack } = require('jcb64')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: {},
      items: false
    }
    this.setAnswer = this.setAnswer.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  async componentDidMount () {
    this.setState({items: getItems('en', true)})
  }

  setAnswer (e) {
    e.preventDefault()
    let answers = this.state.answers
    answers[e.target.dataset.qid] = {
      domain: e.target.dataset.domain,
      facet: e.target.dataset.facet,
      score: e.target.dataset.score
    }
    this.setState({answers: answers})
  }

  doSubmit (e) {
    const answers = this.state.answers
    let choices = Object.keys(answers).reduce((prev, current) => {
      const choice = answers[current]
      prev.push({
        domain: choice.domain,
        facet: choice.facet,
        score: choice.score
      })
      return prev
    }, [])
    const b64 = pack(choices)
    window.location = `/result?id=${b64}`
  }

  render () {
    return (
      <Page>
        <h1>Big Five Test</h1>
        {this.state.items !== false
        ? this.state.items.map(item => <Item data={item} answers={this.state.answers} setAnswer={this.setAnswer} key={item.id} />)
        : null}
        {this.state.items !== false
        ? <button onClick={this.doSubmit}>Submit</button>
        : null}
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
              width: 200px;
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
      </Page>
    )
  }
}
