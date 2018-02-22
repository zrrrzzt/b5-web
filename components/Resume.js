import Summary from './Summary'
import Domain from './Domain'

export default ({ data }) => (
  <div>
    {data
    ? <Summary data={data} yDomainRange={[24, 120]} />
    : null}
    {data
    ? data.map((domain, index) => <Domain data={domain} key={index} />)
    : null}
  </div>
)
