import { Component } from 'react'
import Page from '../components/Page'
import Resume from '../components/Resume'
const { unpack } = require('jcb64')
const calculateScore = require('b5-calculate-score')
const getResult = require('b5-result-text')
const qs = require('querystring')

export default class Result extends Component {
  constructor (props) {
    super(props)
    this.state = {
      b64: false,
      scores: false,
      resume: false
    }
  }

  async componentDidMount () {
    const query = qs.parse(window.location.search.replace('?', ''))
    if (query.id) {
      const b64 = query.id
      const answers = unpack(b64)
      const scores = calculateScore({answers: answers})
      const resume = getResult({scores: scores, lang: 'en'})
      this.setState({
        b64: b64,
        scores: scores,
        resume: resume
      })
    }
  }

  render () {
    return (
      <Page>
        <h1>Big Five Result</h1>
        {this.state.resume !== false
        ? <Resume data={this.state.resume} />
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
