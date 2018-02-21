import { BarChart } from 'react-easy-chart'

const margin = {top: 20, right: 20, bottom: 30, left: 40}

function prepareData (data) {
  let output = []

  data.forEach((item, index) => {
    output.push({
      'x': item.title,
      'y': item.score
    })
  })
  return output
}

export default ({ data, width, yDomainRange }) => (
  <div className={'summary-wrapper'}>
    {data
    ? <BarChart data={prepareData(data)} colorBars axes yDomainRange={yDomainRange} height={400} width={width} margin={margin} />
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
