import { BarChart } from 'react-easy-chart'

const margin = { top: 20, right: 40, bottom: 40, left: 40 }

function prepareData (data) {
  const output = data.map(item => Object.assign({ x: item.title, y: item.score }))
  return output
}

export default ({ title, data, yDomainRange, chartWidth }) => (
  <div className='summary-wrapper'>
    {title ? <h1>{title}</h1> : null}
    {data
      ? <BarChart data={prepareData(data)} colorBars axes grid height={400} width={chartWidth} yDomainRange={yDomainRange} margin={margin} />
      : null}
  </div>
)
