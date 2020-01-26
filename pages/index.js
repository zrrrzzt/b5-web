import { useState } from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import Item from '../components/Item'
import Intro from '../components/Intro'
const { getItems, getInfo } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')
const { pack } = require('jcb64')
const { languages } = getInfo()

const Index = props => {
  const [answers, setAnswers] = useState({})
  const [items, setItems] = useState(false)
  const [intro, setIntro] = useState(false)
  const [nowShowing, setNowShowing] = useState(false)
  const [language, setLanguage] = useState('en')

  const startTest = () => {
    const items = getItems(language, true)
    items.reverse()
    setItems(items)
    setNowShowing(0)
    setIntro(true)
  }

  const setAnswer = event => {
    event.preventDefault()
    const thisAnswers = answers
    const nextShowing = parseInt(event.target.dataset.num, 10)
    if (nextShowing > nowShowing) {
      setNowShowing(nextShowing)
    }

    thisAnswers[event.target.dataset.qid] = {
      domain: event.target.dataset.domain,
      facet: event.target.dataset.facet,
      score: event.target.dataset.score
    }
    setAnswers(thisAnswers)
  }

  const handleSubmit = event => {
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

  return (
    <>
      <Head>
        <title>Big five webapp</title>
      </Head>
      <Page>
        <div>
          <h1>Big Five Test</h1>
          <div>
            {intro === false
              ? <Intro selectedLanguage={language} languages={languages} setLanguage={setLanguage} startTest={startTest} />
              : null}
            {items !== false && nowShowing === items.length
              ? <button onClick={handleSubmit}>Submit</button>
              : null}
            {items !== false
              ? items.map(item => parseInt(item.num, 10) <= nowShowing + 1 ? <Item data={item} answers={answers} setAnswer={setAnswer} key={item.id} /> : null)
              : null}
          </div>
        </div>
      </Page>
    </>
  )
}

export default Index
