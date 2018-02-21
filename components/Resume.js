import Summary from './Summary'
import Domain from './Domain'

export default ({ data, width }) => (
  <div>
    {data
    ? <Summary data={data} width={width} yDomainRange={[24, 120]} />
    : null}
    {data
    ? data.map(domain => <Domain data={domain} width={width} />)
    : null}
  </div>
)
