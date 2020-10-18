import Summary from './Summary'
import Domain from './Domain'

const Resume = ({ data, width }) => (
  <div>
    {data
      ? <Summary data={data} yDomainRange={[24, 120]} chartWidth={width} />
      : null}
    {data
      ? data.map((domain, index) => <Domain data={domain} key={index} chartWidth={width} />)
      : null}
  </div>
)

export default Resume
