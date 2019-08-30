import { Component } from 'react'
import Page from '../components/Page'
import Item from '../components/Item'
import Intro from '../components/Intro'
const { getItems, getInfo } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')
const { pack } = require('jcb64')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: {},
      items: false,
      intro: false,
      language: 'en'
    }
    this.setLanguage = this.setLanguage.bind(this)
    this.startTest = this.startTest.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.handleDoSubmit = this.handleDoSubmit.bind(this)
  }

  startTest () {
    const language = this.state.language
    const items = getItems(language, true)
    items.reverse()
    this.setState({ items: items, nowShowing: 0, intro: true })
  }

  setLanguage (e) {
    e.preventDefault()
    const language = e.target.dataset.language
    this.setState({ language: language })
  }

  setAnswer (e) {
    e.preventDefault()
    const answers = this.state.answers
    let nowShowing = this.state.nowShowing
    const nextShowing = parseInt(e.target.dataset.num, 10)
    if (nextShowing > nowShowing) {
      nowShowing = nextShowing
    }
    answers[e.target.dataset.qid] = {
      domain: e.target.dataset.domain,
      facet: e.target.dataset.facet,
      score: e.target.dataset.score
    }
    this.setState({
      answers: answers,
      nowShowing: nowShowing
    })
  }

  handleDoSubmit (e) {
    const answers = this.state.answers
    const language = this.state.language
    const choices = Object.keys(answers).reduce((prev, current) => {
      const choice = answers[current]
      prev.push({
        domain: choice.domain,
        facet: choice.facet,
        score: choice.score
      })
      return prev
    }, [])
    const result = {
      language: language,
      answers: choices
    }
    const b64 = pack(result)
    window.location = `/result?id=${b64}`
  }

  render () {
    return (
      <Page>
        <h1>Big Five Test</h1>
        {this.state.intro === false
          ? <Intro selectedLanguage={this.state.language} info={getInfo()} setLanguage={this.setLanguage} startTest={this.startTest} />
          : null}
        {this.state.items !== false && this.state.nowShowing === this.state.items.length
          ? <button onClick={this.handleDoSubmit}>Submit</button>
          : null}
        {this.state.items !== false
          ? this.state.items.map(item => parseInt(item.num, 10) <= this.state.nowShowing + 1 ? <Item data={item} answers={this.state.answers} setAnswer={this.setAnswer} key={item.id} /> : null)
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
