const SummaryItem = ({ item }) => (
  <div>
    <h2>{item.title} - {item.scoreText}</h2>
    {item.facets.map(facet => <span><strong>{facet.title}</strong> - {facet.scoreText}</span>)}
    <style jsx>
      {`
        span {
          margin-right: 10px;
        }
      `}
    </style>
  </div>
)

export default ({ data }) => (
  <div className={'summary-wrapper'} >
    {data
    ? data.map(item => <SummaryItem item={item} />)
    : null}
    <style jsx>
      {`
        span {
          margin-right: 10px;
        }
        .summary-wrapper {
          border-radius: 0;
          background-color: #FFF;
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.16), 0 0 2px 0 rgba(0,0,0,.12);
          color: black;
          margin-top: 10px;
          padding: 10px;
          text-align: left;
        }
        @media screen and (max-width: 1000px) {
          .summary-wrapper {
            flex-direction: column;
          }
      `}
    </style>
  </div>
)
