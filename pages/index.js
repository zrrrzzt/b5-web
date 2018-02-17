import { Component } from 'react'
import Layout from '../components/Layout'
import Item from '../components/Item'
import Resume from '../components/Resume'
const { getItems } = require('b5-johnson-120-ipip-neo-pi-r')
const { pack, unpack } = require('jcb64')
const calculateScore = require('b5-calculate-score')
const getResult = require('b5-result-text')
const qs = require('querystring')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: {},
      items: false,
      b64: false,
      scores: false,
      resume: false
    }
    this.setAnswer = this.setAnswer.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  async componentDidMount () {
    const query = qs.parse(window.location.search.replace('?', ''))
    if (query.result) {
      const b64 = query.result
      const answers = unpack(b64)
      const scores = calculateScore({answers: answers})
      const resume = getResult({scores: scores, lang: 'en'})
      this.setState({
        b64: b64,
        scores: scores,
        resume: resume
      })
    } else {
      this.setState({items: getItems('en', true)})
    }
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
    window.location = `?result=${b64}`
  }

  render () {
    return (
      <Layout>
        <div>
          <h1>Big Five Test</h1>
          {this.state.items !== false
          ? this.state.items.map(item => <Item data={item} answers={this.state.answers} setAnswer={this.setAnswer} />)
          : null}
          {this.state.items !== false
          ? <button onClick={this.doSubmit}>Submit</button>
          : null}
          {this.state.resume !== false
          ? <Resume data={this.state.resume} />
          : null}
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
      </Layout>
    )
  }
}
