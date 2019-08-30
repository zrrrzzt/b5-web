import Head from 'next/head'
import { name } from '../package.json'

export default ({ children }) => (
  <div className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8 user-scalable=no, width=device-width' />
      <link rel='icon' type='image/png' href='static/favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/png' href='static/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='static/favicon-16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='static/favicon-128.png' sizes='128x128' />
      <title>
        {name}
      </title>
    </Head>
    {children}
    <style jsx global>
      {` 
        body {
          background: #f2f2f2;
          color: black;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          padding: 0;
          height: 100%;
          text-align: center;
        }
        div.fullscreen.fullscreen-enabled {
          background-color: black !important;
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 3% 1fr 3%;
          grid-template-rows: auto 1fr auto;
        }
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (max-width: 800px) {
          .container {
            grid-template-columns: 3% 1fr 3%;
          }
      `}
    </style>
  </div>
)
