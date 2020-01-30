import Link from 'next/link'

export default () => (
  <nav>
    <ul className='left'>
      <li>
        <Link href='/'>
          <a>
            <img style={{ width: '32px' }} src='/static/favicon-32x32.png' />
          </a>
        </Link>
      </li>
      <li><span className='app-name'>Big Five Test</span></li>
    </ul>
    <ul className='right'>
      <li>
        <Link href='/result'>
          <a>Result</a>
        </Link>
      </li>
      <li>
        <Link href='/compare'>
          <a>Compare</a>
        </Link>
      </li>
    </ul>
  </nav>
)
