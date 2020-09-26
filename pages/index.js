import { useState } from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import Intro from '../components/Intro'
const { getInfo } = require('@alheimsins/b5-johnson-120-ipip-neo-pi-r')

const Index = props => {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <Head>
        <title>Big five webapp</title>
      </Head>
      <Page>
        <h1>Big Five Test</h1>
        <Intro info={getInfo()} language={language} setLanguage={setLanguage} />
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
    </>
  )
}

export default Index
