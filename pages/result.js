import { Component } from 'react'
import Page from '../components/Page'
import Resume from '../components/Resume'
const { unpack } = require('jcb64')
const calculateScore = require('b5-calculate-score')
const getResult = require('b5-result-text')
const { getInfo } = require('b5-result-text')
const qs = require('querystring')

export default class Result extends Component {
  constructor (props) {
    super(props)
    this.state = {
      b64: false,
      scores: false,
      resume: false,
      results: false,
      language: 'en',
      viewLanguage: 'en',
      chartWidth: 600
    }
    this.translateResume = this.translateResume.bind(this)
    this.getWidth = this.getWidth.bind(this)
  }

  async componentDidMount () {
    const query = qs.parse(window.location.search.replace('?', ''))
    if (query.id) {
      const b64 = query.id
      const results = unpack(b64)
      const scores = calculateScore({answers: results.answers})
      const info = getInfo()
      let language = this.state.language
      if (info.languages.includes(results.language)) {
        language = results.language
      }
      const resume = getResult({scores: scores, lang: language})
      this.setState({
        b64: b64,
        scores: scores,
        resume: resume,
        language: results.language,
        viewLanguage: language,
        results: results
      })
      setTimeout(() => {
        this.getWidth()
      }, 500)
      window.addEventListener('resize', this.getWidth.bind(this))
    }
  }

  getWidth () {
    const width = window.innerWidth - 100
    this.setState({chartWidth: width >= 500 ? width : 500})
  }

  translateResume (e) {
    e.preventDefault()
    const language = e.target.dataset.language
    const scores = this.state.scores
    const resume = getResult({scores: scores, lang: language})
    this.setState({
      resume: resume,
      viewLanguage: language
    })
  }

  render () {
    return (
      <Page>
        <h1>Big Five Result</h1>
        {getInfo().languages.map((lang, index) => <button data-language={lang} onClick={this.translateResume} className={lang === this.state.viewLanguage ? 'isActive' : ''} key={index}>{lang}</button>)}
        {this.state.resume !== false
        ? <Resume data={this.state.resume} width={this.state.chartWidth} />
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
            .isActive {
              background: yellow;
            }
          `}
        </style>
      </Page>
    )
  }
}
