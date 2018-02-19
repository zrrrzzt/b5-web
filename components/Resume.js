import Domain from './Domain'

export default ({ data }) => (
  <div>
    {data
    ? data.map(domain => <Domain data={domain} />)
    : null}
  </div>
)
