import Head from 'next/head'
import { name } from '../package.json'

export default ({ children }) => (
  <>
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
  </>
)
