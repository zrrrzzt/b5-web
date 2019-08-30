import Summary from './Summary'

const DomainScores = ({ data, chartWidth }) => {
  return (
    <div>
      <Summary title={data.title} data={data.scores} yDomainRange={[0, 120]} chartWidth={chartWidth} />
      <p>{data.description}</p>
      <Facets facets={data.facets} chartWidth={chartWidth} />
    </div>
  )
}

const FacetScores = ({ data, chartWidth }) => {
  return (
    <div>
      <Summary title={data.title} data={data.scores} yDomainRange={[0, 20]} chartWidth={chartWidth} />
      <p>{data.description}</p>
    </div>
  )
}

const Facets = ({ facets, chartWidth }) => {
  return facets.map((facet, index) => <FacetScores data={facet} chartWidth={chartWidth} key={index} />)
}

export default ({ data, chartWidth }) => (
  <div className='domain-wrapper'>
    {data.map((domain, index) => <DomainScores data={domain} chartWidth={chartWidth} key={index} />)}
    <style jsx>
      {`
        span {
          margin-right: 10px;
        }
        .domain-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
          text-align: left;
        }
      `}
    </style>
  </div>
)
