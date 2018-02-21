import Facet from './Facet'
import Summary from './Summary'

export default ({ data }) => (
  <div className={'domain-wrapper'}>
    <h1>{data.title}</h1>
    <p>Value: {data.score}/120 - {data.scoreText}</p>
    <p>{data.text}</p>
    {data && data.facets
    ? <Summary data={data.facets} yDomainRange={[4, 20]} />
    : null}
    {data && data.facets
    ? data.facets.map(facet => <Facet data={facet} />)
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
