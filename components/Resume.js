import Summary from './Summary'
import Domain from './Domain'

export default ({ data }) => (
  <div>
    {data
    ? <Summary data={data} yDomainRange={[24, 120]} />
    : null}
    {data
    ? data.map(domain => <Domain data={domain} />)
    : null}
  </div>
)
