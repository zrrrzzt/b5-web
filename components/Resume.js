import Summary from './Summary'
import Domain from './Domain'

export default ({ data }) => (
  <div>
    {data
    ? <Summary data={data} />
    : null}
    {data
    ? data.map(domain => <Domain data={domain} />)
    : null}
  </div>
)
