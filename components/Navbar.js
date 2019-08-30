import Link from 'next/link'

export default ({ username = false }) => (
  <nav>
    <ul className='left'>
      <li>
        <Link prefetch href='/'>
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
    <style jsx>{`
      img {
        width: 32px;
      }
      nav {
        grid-area: header;
        display: flex;
        justify-content: space-between;
        background: black;
        color: white;
        margin-bottom: 20px;
        height: 60px;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
      }
      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
        display: flex;
      }
      ul.left {
        justify-content: flex-start;
      }
      ul.right {
        justify-content: flex-end;
      }
      li {
        font-size: large;
        margin: 10px;
        align-self: center;
      }
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: white;
      }
      a:hover {
        color: #6AC4AE;
        text-decoration: underline;
      }
      @media screen and (max-width: 400px) {
        .app-name {
          display: none;
        }
    `}
    </style>
  </nav>
)
