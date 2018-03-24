import Summary from './Summary'
import Domain from './Domain'

export default ({ data, width }) => (
  <div>
    {data
      ? <Summary data={data} yDomainRange={[24, 120]} chartWidth={width} />
      : null}
    {data
      ? data.map((domain, index) => <Domain data={domain} key={index} chartWidth={width} />)
      : null}
  </div>
)
