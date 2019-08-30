import Facet from './Facet'
import Summary from './Summary'

export default ({ data, chartWidth }) => (
  <div className='domain-wrapper'>
    <h1>{data.title}</h1>
    <p><em>{data.shortDescription}</em></p>
    <p>Score: {data.score}/120 - {data.scoreText}</p>
    <p><strong>{data.text}</strong></p>
    <p>{data.description}</p>
    {data && data.facets
      ? <Summary data={data.facets} yDomainRange={[0, 20]} chartWidth={chartWidth} />
      : null}
    {data && data.facets
      ? data.facets.map((facet, index) => <Facet data={facet} key={index} />)
      : null}
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
