import Facet from './Facet'

export default ({ data }) => (
  <div>
    <h1>{data.title}</h1>
    <p>{data.text}</p>
    {data && data.facets
    ? data.facets.map(facet => <Facet data={facet} />)
    : null}
  </div>
)
