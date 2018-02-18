import Facet from './Facet'

export default ({ data }) => (
  <div className={'domain-wrapper'}>
    <h1>{data.title}</h1>
    <p>{data.text}</p>
    {data && data.facets
    ? data.facets.map(facet => <Facet data={facet} />)
    : null}
    <style jsx>
      {`
        .domain-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
        }
      `}
    </style>
  </div>
)
